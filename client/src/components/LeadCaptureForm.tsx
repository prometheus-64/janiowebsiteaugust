import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Lock, Download, Users, Star, Zap } from 'lucide-react';

interface LeadCaptureFormProps {
  title: string;
  description: string;
  resourceType: 'guide' | 'case-study' | 'calculator';
  downloadText: string;
  onSubmit?: (data: any) => void;
}

const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({
  title,
  description,
  resourceType,
  downloadText,
  onSubmit
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    companySize: '',
    currentChallenges: '',
    referrer: `resources-${resourceType}`
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    setIsSubmitted(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto">
        <Card className="border-primary/20 shadow-lg">
          <CardContent className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
              <p className="text-muted-foreground">
                Your download link has been sent to your email. Check your inbox (and spam folder) for immediate access.
              </p>
            </div>
            <div className="space-y-3">
              <Button className="w-full" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download Now
              </Button>
              <p className="text-xs text-muted-foreground">
                Can't find the email? <a href="/contact" className="text-primary hover:underline">Contact support</a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto">
      <Card className="border-primary/20 shadow-lg">
        <CardHeader className="bg-primary/5 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge variant="secondary" className="text-xs">
              {resourceType === 'guide' && 'Premium Guide'}
              {resourceType === 'case-study' && 'Success Story'}
              {resourceType === 'calculator' && 'ROI Calculator'}
            </Badge>
            <Badge variant="outline" className="text-xs">
              <Lock className="h-3 w-3 mr-1" />
              Instant Access
            </Badge>
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardHeader>
        
        <CardContent className="p-6">
          <div className="mb-6">
            <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                <span>2,500+ downloads</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3" />
                <span>4.9/5 rating</span>
              </div>
              <div className="flex items-center gap-1">
                <Zap className="h-3 w-3" />
                <span>Instant download</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  placeholder="John"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  placeholder="Smith"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="email">Work Email *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="john.smith@company.com"
              />
            </div>
            
            <div>
              <Label htmlFor="company">Company *</Label>
              <Input
                id="company"
                type="text"
                required
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                placeholder="Your Company Name"
              />
            </div>
            
            <div>
              <Label htmlFor="jobTitle">Job Title *</Label>
              <Input
                id="jobTitle"
                type="text"
                required
                value={formData.jobTitle}
                onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                placeholder="VP Supply Chain"
              />
            </div>
            
            <div>
              <Label htmlFor="companySize">Company Size</Label>
              <Select onValueChange={(value) => handleInputChange('companySize', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select company size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="startup">Startup (1-50 employees)</SelectItem>
                  <SelectItem value="small">Small (51-200 employees)</SelectItem>
                  <SelectItem value="medium">Medium (201-1000 employees)</SelectItem>
                  <SelectItem value="large">Large (1000+ employees)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="challenges">Current Logistics Challenges (Optional)</Label>
              <Textarea
                id="challenges"
                value={formData.currentChallenges}
                onChange={(e) => handleInputChange('currentChallenges', e.target.value)}
                placeholder="e.g., High shipping costs, Poor visibility, Manual processes..."
                rows={3}
              />
            </div>
            
            <Button type="submit" className="w-full" size="lg">
              <Download className="mr-2 h-4 w-4" />
              {downloadText}
            </Button>
            
            <p className="text-xs text-center text-muted-foreground">
              By downloading, you agree to receive logistics insights via email. 
              <br />No spam, unsubscribe anytime. See our <a href="/privacy" className="text-primary hover:underline">privacy policy</a>.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LeadCaptureForm;