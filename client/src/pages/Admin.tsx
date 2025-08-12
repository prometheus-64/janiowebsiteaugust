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

interface UseCase {
  id: string;
  title: string;
  category: string;
  industry: string;
  challenge: string;
  result: string;
  tags: string[];
  href: string;
  metrics: Array<{ label: string; value: string }>;
  createdAt: string;
  updatedAt: string;
}

interface UseCaseFormData {
  title: string;
  category: string;
  industry: string;
  challenge: string;
  result: string;
  tags: string[];
  href: string;
  metrics: Array<{ label: string; value: string }>;
  
  // Detailed content fields
  heroSubtitle?: string;
  heroDescription?: string;
  challengeDescription?: string;
  challenges?: Array<{ icon?: string; title: string; description: string }>;
  solutions?: Array<{ title: string; description: string; benefit?: string }>;
  detailedMetrics?: Array<{ metric: string; label: string }>;
  slug?: string;
  showDetailedPage?: boolean;
}

const Admin = () => {
  const [selectedUseCase, setSelectedUseCase] = useState<UseCase | null>(null);
  const [isUseCaseDialogOpen, setIsUseCaseDialogOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState<ContactSubmission | null>(null);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [useCaseFormData, setUseCaseFormData] = useState<UseCaseFormData>({
    title: '',
    category: '',
    industry: '',
    challenge: '',
    result: '',
    tags: [],
    href: '',
    metrics: [{ label: '', value: '' }],
    
    // Detailed content defaults
    heroSubtitle: '',
    heroDescription: '',
    challengeDescription: '',
    challenges: [{ icon: 'Package', title: '', description: '' }],
    solutions: [{ title: '', description: '', benefit: '' }],
    detailedMetrics: [{ metric: '', label: '' }],
    slug: '',
    showDetailedPage: false
  });
  
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

  const { data: useCases, isLoading: useCasesLoading, error: useCasesError } = useQuery<{ success: boolean; data: UseCase[] }>({
    queryKey: ['/api/use-cases'],
    queryFn: async () => {
      const response = await fetch('/api/use-cases');
      if (!response.ok) {
        throw new Error('Failed to fetch use cases');
      }
      return response.json();
    }
  });

  const createUseCaseMutation = useMutation({
    mutationFn: async (data: UseCaseFormData) => {
      const response = await fetch('/api/use-cases', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error('Failed to create use case');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/use-cases'] });
      setIsUseCaseDialogOpen(false);
      resetForm();
      toast({ title: "Success", description: "Use case created successfully" });
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to create use case", variant: "destructive" });
    }
  });

  const updateUseCaseMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: UseCaseFormData }) => {
      const response = await fetch(`/api/use-cases/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error('Failed to update use case');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/use-cases'] });
      setIsUseCaseDialogOpen(false);
      resetForm();
      toast({ title: "Success", description: "Use case updated successfully" });
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to update use case", variant: "destructive" });
    }
  });

  const deleteUseCaseMutation = useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(`/api/use-cases/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) throw new Error('Failed to delete use case');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/use-cases'] });
      toast({ title: "Success", description: "Use case deleted successfully" });
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to delete use case", variant: "destructive" });
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

  const resetForm = () => {
    setUseCaseFormData({
      title: '',
      category: '',
      industry: '',
      challenge: '',
      result: '',
      tags: [],
      href: '',
      metrics: [{ label: '', value: '' }],
      
      // Reset detailed content defaults
      heroSubtitle: '',
      heroDescription: '',
      challengeDescription: '',
      challenges: [{ icon: 'Package', title: '', description: '' }],
      solutions: [{ title: '', description: '', benefit: '' }],
      detailedMetrics: [{ metric: '', label: '' }],
      slug: '',
      showDetailedPage: false
    });
    setSelectedUseCase(null);
  };

  const openEditDialog = (useCase: UseCase) => {
    setSelectedUseCase(useCase);
    
    // Parse JSON fields safely
    const parseJsonField = (field: any, fallback: any) => {
      if (!field) return fallback;
      if (typeof field === 'string') {
        try {
          return JSON.parse(field);
        } catch {
          return fallback;
        }
      }
      return field;
    };
    
    setUseCaseFormData({
      title: useCase.title,
      category: useCase.category,
      industry: useCase.industry,
      challenge: useCase.challenge,
      result: useCase.result,
      tags: useCase.tags,
      href: useCase.href,
      metrics: useCase.metrics,
      
      // Detailed content fields
      heroSubtitle: (useCase as any).heroSubtitle || '',
      heroDescription: (useCase as any).heroDescription || '',
      challengeDescription: (useCase as any).challengeDescription || '',
      challenges: parseJsonField((useCase as any).challenges, [{ icon: 'Package', title: '', description: '' }]),
      solutions: parseJsonField((useCase as any).solutions, [{ title: '', description: '', benefit: '' }]),
      detailedMetrics: parseJsonField((useCase as any).detailedMetrics, [{ metric: '', label: '' }]),
      slug: (useCase as any).slug || '',
      showDetailedPage: (useCase as any).showDetailedPage || false
    });
    setIsUseCaseDialogOpen(true);
  };

  const handleSubmit = () => {
    if (selectedUseCase) {
      updateUseCaseMutation.mutate({ id: selectedUseCase.id, data: useCaseFormData });
    } else {
      createUseCaseMutation.mutate(useCaseFormData);
    }
  };

  const addMetric = () => {
    setUseCaseFormData(prev => ({
      ...prev,
      metrics: [...prev.metrics, { label: '', value: '' }]
    }));
  };

  const removeMetric = (index: number) => {
    setUseCaseFormData(prev => ({
      ...prev,
      metrics: prev.metrics.filter((_, i) => i !== index)
    }));
  };

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

  const updateMetric = (index: number, field: 'label' | 'value', value: string) => {
    setUseCaseFormData(prev => ({
      ...prev,
      metrics: prev.metrics.map((metric, i) => 
        i === index ? { ...metric, [field]: value } : metric
      )
    }));
  };

  const contactSubmissions = submissions?.data || [];
  const useCasesList = useCases?.data || [];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Manage contact submissions and use case content
          </p>
        </div>

        <Tabs defaultValue="contacts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="contacts">Contact Submissions ({contactSubmissions.length})</TabsTrigger>
            <TabsTrigger value="use-cases">Use Cases ({useCasesList.length})</TabsTrigger>
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

          <TabsContent value="use-cases" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Use Cases Management</h2>
                <p className="text-muted-foreground">Add, edit, and manage use case content</p>
              </div>
              <Dialog open={isUseCaseDialogOpen} onOpenChange={setIsUseCaseDialogOpen}>
                <DialogTrigger asChild>
                  <Button onClick={resetForm}>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Use Case
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{selectedUseCase ? 'Edit Use Case' : 'Create New Use Case'}</DialogTitle>
                    <DialogDescription>
                      {selectedUseCase ? 'Update the use case details below.' : 'Fill in the details to create a comprehensive use case with both summary and detailed page content.'}
                    </DialogDescription>
                  </DialogHeader>
                  
                  <Tabs defaultValue="basic" className="py-4">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="basic">Basic Information</TabsTrigger>
                      <TabsTrigger value="detailed">Detailed Content</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="basic" className="space-y-4 mt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="title">Title</Label>
                        <Input
                          id="title"
                          value={useCaseFormData.title}
                          onChange={(e) => setUseCaseFormData(prev => ({ ...prev, title: e.target.value }))}
                          placeholder="Enter use case title"
                        />
                      </div>
                      <div>
                        <Label htmlFor="href">URL Path</Label>
                        <Input
                          id="href"
                          value={useCaseFormData.href}
                          onChange={(e) => setUseCaseFormData(prev => ({ ...prev, href: e.target.value }))}
                          placeholder="/use-cases/example-case"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="category">Category</Label>
                        <Select value={useCaseFormData.category} onValueChange={(value) => setUseCaseFormData(prev => ({ ...prev, category: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Cost Optimization">Cost Optimization</SelectItem>
                            <SelectItem value="Scaling">Scaling</SelectItem>
                            <SelectItem value="International">International</SelectItem>
                            <SelectItem value="Ecommerce">Ecommerce</SelectItem>
                            <SelectItem value="Marketplace">Marketplace</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="industry">Industry</Label>
                        <Input
                          id="industry"
                          value={useCaseFormData.industry}
                          onChange={(e) => setUseCaseFormData(prev => ({ ...prev, industry: e.target.value }))}
                          placeholder="e.g., Entertainment, Fashion, Luxury"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="challenge">Challenge</Label>
                      <Textarea
                        id="challenge"
                        value={useCaseFormData.challenge}
                        onChange={(e) => setUseCaseFormData(prev => ({ ...prev, challenge: e.target.value }))}
                        placeholder="Describe the main challenge faced"
                        rows={3}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="result">Result</Label>
                      <Textarea
                        id="result"
                        value={useCaseFormData.result}
                        onChange={(e) => setUseCaseFormData(prev => ({ ...prev, result: e.target.value }))}
                        placeholder="Describe the outcome achieved"
                        rows={3}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="tags">Tags (comma-separated)</Label>
                      <Input
                        id="tags"
                        value={useCaseFormData.tags.join(', ')}
                        onChange={(e) => setUseCaseFormData(prev => ({ 
                          ...prev, 
                          tags: e.target.value.split(',').map(tag => tag.trim()).filter(Boolean)
                        }))}
                        placeholder="Cost Reduction, Asia Expansion, Enterprise"
                      />
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Label>Metrics</Label>
                        <Button type="button" variant="outline" size="sm" onClick={addMetric}>
                          <Plus className="w-4 h-4 mr-1" />
                          Add Metric
                        </Button>
                      </div>
                      {useCaseFormData.metrics.map((metric, index) => (
                        <div key={index} className="flex gap-2 mb-2">
                          <Input
                            placeholder="Label (e.g., Cost Savings)"
                            value={metric.label}
                            onChange={(e) => updateMetric(index, 'label', e.target.value)}
                            className="flex-1"
                          />
                          <Input
                            placeholder="Value (e.g., 35%)"
                            value={metric.value}
                            onChange={(e) => updateMetric(index, 'value', e.target.value)}
                            className="flex-1"
                          />
                          {useCaseFormData.metrics.length > 1 && (
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => removeMetric(index)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                    </TabsContent>
                    
                    <TabsContent value="detailed" className="space-y-4 mt-4">
                      <div className="grid gap-4">
                        <div>
                          <Label htmlFor="slug">URL Slug</Label>
                          <Input
                            id="slug"
                            value={useCaseFormData.slug || ''}
                            onChange={(e) => setUseCaseFormData(prev => ({ ...prev, slug: e.target.value }))}
                            placeholder="ecommerce-scaling"
                          />
                          <p className="text-xs text-muted-foreground mt-1">Used for detailed page URL: /use-cases/{useCaseFormData.slug || 'your-slug'}</p>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Switch
                            id="showDetailedPage"
                            checked={useCaseFormData.showDetailedPage || false}
                            onCheckedChange={(checked) => setUseCaseFormData(prev => ({ ...prev, showDetailedPage: checked }))}
                          />
                          <Label htmlFor="showDetailedPage">Show "Read Full Case Study" button</Label>
                          <p className="text-xs text-muted-foreground">Enable to show detailed page link on use cases listing</p>
                        </div>
                        
                        <div>
                          <Label htmlFor="heroSubtitle">Hero Subtitle</Label>
                          <Input
                            id="heroSubtitle"
                            value={useCaseFormData.heroSubtitle || ''}
                            onChange={(e) => setUseCaseFormData(prev => ({ ...prev, heroSubtitle: e.target.value }))}
                            placeholder="Scale operations without logistics complexity"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="heroDescription">Hero Description</Label>
                          <Textarea
                            id="heroDescription"
                            value={useCaseFormData.heroDescription || ''}
                            onChange={(e) => setUseCaseFormData(prev => ({ ...prev, heroDescription: e.target.value }))}
                            placeholder="Detailed description for the hero section of the case study page"
                            rows={3}
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="challengeDescription">Challenge Context</Label>
                          <Textarea
                            id="challengeDescription"
                            value={useCaseFormData.challengeDescription || ''}
                            onChange={(e) => setUseCaseFormData(prev => ({ ...prev, challengeDescription: e.target.value }))}
                            placeholder="Provide broader context about the challenge category"
                            rows={2}
                          />
                        </div>
                        
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <Label>Challenge Details</Label>
                            <Button type="button" variant="outline" size="sm" onClick={() => {
                              setUseCaseFormData(prev => ({
                                ...prev,
                                challenges: [...(prev.challenges || []), { icon: 'Package', title: '', description: '' }]
                              }));
                            }}>
                              <Plus className="w-4 h-4 mr-1" />
                              Add Challenge
                            </Button>
                          </div>
                          {(useCaseFormData.challenges || []).map((challenge, index) => (
                            <div key={index} className="border rounded-lg p-3 mb-2 space-y-2">
                              <div className="grid grid-cols-3 gap-2">
                                <Input
                                  placeholder="Icon name (Package, Globe, etc.)"
                                  value={challenge.icon || ''}
                                  onChange={(e) => {
                                    const newChallenges = [...(useCaseFormData.challenges || [])];
                                    newChallenges[index] = { ...newChallenges[index], icon: e.target.value };
                                    setUseCaseFormData(prev => ({ ...prev, challenges: newChallenges }));
                                  }}
                                />
                                <Input
                                  placeholder="Challenge Title"
                                  value={challenge.title}
                                  onChange={(e) => {
                                    const newChallenges = [...(useCaseFormData.challenges || [])];
                                    newChallenges[index] = { ...newChallenges[index], title: e.target.value };
                                    setUseCaseFormData(prev => ({ ...prev, challenges: newChallenges }));
                                  }}
                                />
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="sm"
                                  onClick={() => {
                                    const newChallenges = (useCaseFormData.challenges || []).filter((_, i) => i !== index);
                                    setUseCaseFormData(prev => ({ ...prev, challenges: newChallenges }));
                                  }}
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                              <Textarea
                                placeholder="Challenge Description"
                                value={challenge.description}
                                onChange={(e) => {
                                  const newChallenges = [...(useCaseFormData.challenges || [])];
                                  newChallenges[index] = { ...newChallenges[index], description: e.target.value };
                                  setUseCaseFormData(prev => ({ ...prev, challenges: newChallenges }));
                                }}
                                rows={2}
                              />
                            </div>
                          ))}
                        </div>
                        
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <Label>Solution Details</Label>
                            <Button type="button" variant="outline" size="sm" onClick={() => {
                              setUseCaseFormData(prev => ({
                                ...prev,
                                solutions: [...(prev.solutions || []), { title: '', description: '', benefit: '' }]
                              }));
                            }}>
                              <Plus className="w-4 h-4 mr-1" />
                              Add Solution
                            </Button>
                          </div>
                          {(useCaseFormData.solutions || []).map((solution, index) => (
                            <div key={index} className="border rounded-lg p-3 mb-2 space-y-2">
                              <div className="grid grid-cols-2 gap-2">
                                <Input
                                  placeholder="Solution Title"
                                  value={solution.title}
                                  onChange={(e) => {
                                    const newSolutions = [...(useCaseFormData.solutions || [])];
                                    newSolutions[index] = { ...newSolutions[index], title: e.target.value };
                                    setUseCaseFormData(prev => ({ ...prev, solutions: newSolutions }));
                                  }}
                                />
                                <div className="flex gap-2">
                                  <Input
                                    placeholder="Benefit (e.g., 85% reduction)"
                                    value={solution.benefit || ''}
                                    onChange={(e) => {
                                      const newSolutions = [...(useCaseFormData.solutions || [])];
                                      newSolutions[index] = { ...newSolutions[index], benefit: e.target.value };
                                      setUseCaseFormData(prev => ({ ...prev, solutions: newSolutions }));
                                    }}
                                  />
                                  <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={() => {
                                      const newSolutions = (useCaseFormData.solutions || []).filter((_, i) => i !== index);
                                      setUseCaseFormData(prev => ({ ...prev, solutions: newSolutions }));
                                    }}
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </Button>
                                </div>
                              </div>
                              <Textarea
                                placeholder="Solution Description"
                                value={solution.description}
                                onChange={(e) => {
                                  const newSolutions = [...(useCaseFormData.solutions || [])];
                                  newSolutions[index] = { ...newSolutions[index], description: e.target.value };
                                  setUseCaseFormData(prev => ({ ...prev, solutions: newSolutions }));
                                }}
                                rows={2}
                              />
                            </div>
                          ))}
                        </div>
                        
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <Label>Detailed Metrics</Label>
                            <Button type="button" variant="outline" size="sm" onClick={() => {
                              setUseCaseFormData(prev => ({
                                ...prev,
                                detailedMetrics: [...(prev.detailedMetrics || []), { metric: '', label: '' }]
                              }));
                            }}>
                              <Plus className="w-4 h-4 mr-1" />
                              Add Metric
                            </Button>
                          </div>
                          {(useCaseFormData.detailedMetrics || []).map((metric, index) => (
                            <div key={index} className="flex gap-2 mb-2">
                              <Input
                                placeholder="Metric Value (e.g., 95%)"
                                value={metric.metric}
                                onChange={(e) => {
                                  const newMetrics = [...(useCaseFormData.detailedMetrics || [])];
                                  newMetrics[index] = { ...newMetrics[index], metric: e.target.value };
                                  setUseCaseFormData(prev => ({ ...prev, detailedMetrics: newMetrics }));
                                }}
                                className="flex-1"
                              />
                              <Input
                                placeholder="Description (e.g., On-time delivery)"
                                value={metric.label}
                                onChange={(e) => {
                                  const newMetrics = [...(useCaseFormData.detailedMetrics || [])];
                                  newMetrics[index] = { ...newMetrics[index], label: e.target.value };
                                  setUseCaseFormData(prev => ({ ...prev, detailedMetrics: newMetrics }));
                                }}
                                className="flex-1"
                              />
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                  const newMetrics = (useCaseFormData.detailedMetrics || []).filter((_, i) => i !== index);
                                  setUseCaseFormData(prev => ({ ...prev, detailedMetrics: newMetrics }));
                                }}
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                  
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsUseCaseDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button 
                      onClick={handleSubmit}
                      disabled={createUseCaseMutation.isPending || updateUseCaseMutation.isPending}
                    >
                      {selectedUseCase ? 'Update' : 'Create'} Use Case
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            {useCasesLoading ? (
              <div className="text-center">Loading use cases...</div>
            ) : useCasesError ? (
              <div className="text-center text-red-500">Error loading use cases</div>
            ) : useCasesList.length === 0 ? (
              <Card className="p-8 text-center">
                <CardContent>
                  <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">No use cases yet.</p>
                  <Button onClick={() => { resetForm(); setIsUseCaseDialogOpen(true); }}>
                    <Plus className="w-4 h-4 mr-2" />
                    Create Your First Use Case
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-6">
                {useCasesList.map((useCase) => (
                  <Card key={useCase.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{useCase.title}</CardTitle>
                          <div className="flex gap-2 mb-2">
                            <Badge variant="secondary">{useCase.category}</Badge>
                            <Badge variant="outline">{useCase.industry}</Badge>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {useCase.tags.map((tag, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                <Tag className="w-3 h-3 mr-1" />
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" onClick={() => openEditDialog(useCase)}>
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => deleteUseCaseMutation.mutate(useCase.id)}
                            disabled={deleteUseCaseMutation.isPending}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-1">Challenge:</h4>
                        <p className="text-sm text-muted-foreground">{useCase.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-1">Result:</h4>
                        <p className="text-sm text-muted-foreground">{useCase.result}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Metrics:</h4>
                        <div className="grid grid-cols-3 gap-4">
                          {useCase.metrics.map((metric, index) => (
                            <div key={index} className="text-center p-2 bg-muted rounded">
                              <div className="font-bold text-primary">{metric.value}</div>
                              <div className="text-xs text-muted-foreground">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>URL: {useCase.href}</span>
                        <span>Created: {format(new Date(useCase.createdAt), 'MMM d, yyyy')}</span>
                        <span>Updated: {format(new Date(useCase.updatedAt), 'MMM d, yyyy')}</span>
                      </div>
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