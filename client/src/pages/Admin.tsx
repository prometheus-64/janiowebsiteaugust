import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Switch } from "@/components/ui/switch";
import { Mail, Phone, Building, Users, Calendar, MessageSquare, Plus, Edit, Trash2, FileText, Tag, Globe } from 'lucide-react';
import { format } from 'date-fns';

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  company: string;
  phone?: string;
  serviceInterest?: string;
  companySize?: string;
  message?: string;
  status: string;
  referrerPage?: string;
  referrerUrl?: string;
  submittedAt: string;
}


const Admin = () => {
  const [selectedContact, setSelectedContact] = useState<ContactSubmission | null>(null);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const { data: submissions, isLoading: submissionsLoading, error: submissionsError } = useQuery<{ success: boolean; data: ContactSubmission[] }>({
    queryKey: ['/api/contact-submissions'],
    queryFn: async () => {
      const response = await fetch('/api/contact-submissions');
      if (!response.ok) {
        throw new Error('Failed to fetch submissions');
      }
      return response.json();
    }
  });



  // Contact submission mutations
  const updateContactMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: Partial<ContactSubmission> }) => {
      const response = await fetch(`/api/contact-submissions/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error('Failed to update contact submission');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/contact-submissions'] });
      setIsContactDialogOpen(false);
      setSelectedContact(null);
      toast({ title: "Success", description: "Contact submission updated successfully" });
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to update contact submission", variant: "destructive" });
    }
  });

  const deleteContactMutation = useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(`/api/contact-submissions/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete contact submission');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/contact-submissions'] });
      toast({ title: "Success", description: "Contact submission deleted successfully" });
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to delete contact submission", variant: "destructive" });
    }
  });


  const openContactEditDialog = (contact: ContactSubmission) => {
    setSelectedContact(contact);
    setIsContactDialogOpen(true);
  };

  const handleContactStatusUpdate = (status: string) => {
    if (selectedContact) {
      updateContactMutation.mutate({
        id: selectedContact.id,
        data: { ...selectedContact, status }
      });
    }
  };


  const contactSubmissions = submissions?.data || [];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Manage contact submissions
          </p>
        </div>

        <Tabs defaultValue="contacts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-1">
            <TabsTrigger value="contacts">Contact Submissions ({contactSubmissions.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="contacts" className="space-y-6">
            {submissionsLoading ? (
              <div className="text-center">Loading submissions...</div>
            ) : submissionsError ? (
              <div className="text-center text-red-500">Error loading submissions</div>
            ) : contactSubmissions.length === 0 ? (
              <Card className="p-8 text-center">
                <CardContent>
                  <p className="text-muted-foreground">No contact submissions yet.</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-6">
                {contactSubmissions.map((submission) => (
                  <Card key={submission.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">{submission.name}</CardTitle>
                          <p className="text-muted-foreground">{submission.company}</p>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant={submission.status === 'new' ? 'default' : 'secondary'}>
                            {submission.status}
                          </Badge>
                          <Badge variant="outline">
                            {format(new Date(submission.submittedAt), 'MMM d, yyyy')}
                          </Badge>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => openContactEditDialog(submission)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => deleteContactMutation.mutate(submission.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">{submission.email}</span>
                        </div>
                        
                        {submission.phone && (
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm">{submission.phone}</span>
                          </div>
                        )}
                        
                        {submission.serviceInterest && (
                          <div className="flex items-center gap-2">
                            <Building className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm">Interest: {submission.serviceInterest}</span>
                          </div>
                        )}
                        
                        {submission.companySize && (
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm">Size: {submission.companySize}</span>
                          </div>
                        )}
                        
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">
                            {format(new Date(submission.submittedAt), 'MMM d, yyyy h:mm a')}
                          </span>
                        </div>
                        
                        {submission.referrerPage && (
                          <div className="flex items-center gap-2">
                            <Globe className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm">Came from: {submission.referrerPage}</span>
                          </div>
                        )}
                      </div>
                      
                      {submission.message && (
                        <>
                          <Separator />
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <MessageSquare className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm font-medium">Message:</span>
                            </div>
                            <p className="text-sm text-muted-foreground bg-muted p-3 rounded-lg">
                              {submission.message}
                            </p>
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

        </Tabs>

        {/* Contact Editing Dialog */}
        <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Edit Contact Submission</DialogTitle>
              <DialogDescription>
                Update the status or view details for this contact submission.
              </DialogDescription>
            </DialogHeader>
            
            {selectedContact && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Contact Information</Label>
                  <div className="p-3 bg-muted rounded-lg space-y-1">
                    <p className="font-medium">{selectedContact.name}</p>
                    <p className="text-sm text-muted-foreground">{selectedContact.email}</p>
                    <p className="text-sm text-muted-foreground">{selectedContact.company}</p>
                    {selectedContact.referrerPage && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Globe className="w-3 h-3" />
                        <span>Came from: {selectedContact.referrerPage}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Status</Label>
                  <Select value={selectedContact.status} onValueChange={handleContactStatusUpdate}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="contacted">Contacted</SelectItem>
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="closed">Closed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Admin;