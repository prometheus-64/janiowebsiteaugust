import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Mail, Clock, ArrowRight, Loader2, CheckCircle, Star, DollarSign, Zap } from 'lucide-react';

import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [referrerPage, setReferrerPage] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceInterest: '',
    companySize: '',
    message: '',
    phone: ''
  });

  useEffect(() => {
    // Try to get referrer from sessionStorage (set by navigation)
    const storedReferrer = sessionStorage.getItem('lastVisitedPage');
    if (storedReferrer && storedReferrer !== '/contact') {
      setReferrerPage(storedReferrer);
    } else {
      // Fallback to current page if no previous page tracked
      setReferrerPage(window.location.pathname);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone || undefined,
          serviceInterest: formData.serviceInterest || undefined,
          companySize: formData.companySize || undefined,
          message: formData.message || undefined,
          referrerPage: referrerPage || '/direct',
          referrerUrl: window.location.href
        })
      });

      const result = await response.json();
      
      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to submit form');
      }

      // Success - reset form and show success message
      setFormData({
        name: '',
        email: '',
        company: '',
        serviceInterest: '',
        companySize: '',
        message: '',
        phone: ''
      });

      toast({
        title: "Thank you for your inquiry!",
        description: "We'll get back to you within 1-2 business days. Our logistics experts will review your requirements and contact you with tailored solutions.",
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or call us directly. We're here to help!",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const offices = [
    {
      city: "Singapore Office (HQ)",
      address: "30 Prinsep St, #06-01",
      postal: "Singapore 188647", 
      email: "contact@janio.asia"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section with Prominent CTA */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary">
        {/* Enhanced Background with Subtle Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/95" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/50 rounded-full blur-2xl"></div>
        </div>
        
        <div className="relative w-full max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Value Proposition */}
            <div className="text-white">
              <div className="mb-6 animate-fade-in">
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-4">
                  Logistics Consultation
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6 animate-fade-in leading-tight">
                Book Your Free
                <span className="block text-white">$50,000+ Savings</span>
                Consultation
              </h1>
              
              <p className="text-lg lg:text-xl text-white/80 mb-8 leading-relaxed animate-slide-up">
                Our logistics experts will analyze your current setup and identify opportunities to reduce costs by 20-35% while improving efficiency. No commitment required.
              </p>

              {/* Value Props */}
              <div className="space-y-4 mb-8 animate-fade-in">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Personalized Cost Analysis</h3>
                    <p className="text-white/70 text-sm">Detailed breakdown of potential savings across your logistics operations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                    <DollarSign className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">ROI-Focused Recommendations</h3>
                    <p className="text-white/70 text-sm">Actionable insights that deliver measurable business impact</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">24-Hour Response Time</h3>
                    <p className="text-white/70 text-sm">Fast turnaround with expert analysis and custom recommendations</p>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-white/70 animate-fade-in">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-accent fill-current" />
                  <span>Trusted by 500+ companies</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Average 32% cost reduction</span>
                </div>
              </div>
            </div>

            {/* Right Column - Assessment Form */}
            <div className="animate-slide-up">
              <Card className="bg-white/95 backdrop-blur-sm p-6 shadow-2xl border-0 rounded-2xl">
                <CardHeader className="pb-6 text-center">
                  <CardTitle className="text-2xl font-display text-foreground mb-2">
                    Book Your Free Consultation
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Takes 2 minutes. Results within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your full name"
                          required
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="you@company.com"
                          required
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name *</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="Your company"
                          required
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+1 (555) 123-4567"
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="service">Primary Interest</Label>
                        <Select onValueChange={(value) => handleInputChange('serviceInterest', value)}>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cost-reduction">Cost Reduction</SelectItem>
                            <SelectItem value="laas">Full Logistics Outsourcing</SelectItem>
                            <SelectItem value="procurement">Rate Optimization</SelectItem>
                            <SelectItem value="control-tower">Supply Chain Visibility</SelectItem>
                            <SelectItem value="audit">Invoice Audit</SelectItem>
                            <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company-size">Monthly Logistics Spend</Label>
                        <Select onValueChange={(value) => handleInputChange('companySize', value)}>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-10k">Under $10K</SelectItem>
                            <SelectItem value="10k-50k">$10K - $50K</SelectItem>
                            <SelectItem value="50k-200k">$50K - $200K</SelectItem>
                            <SelectItem value="200k-500k">$200K - $500K</SelectItem>
                            <SelectItem value="over-500k">Over $500K</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Biggest logistics challenge (optional)</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="e.g., high shipping costs, poor delivery performance, complex multi-vendor management..."
                        className="min-h-[80px] resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary/90 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 h-14" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                          Analyzing...
                        </>
                      ) : (
                        <>
                          Book My Consultation
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center mt-4">
                      No spam, ever. We'll only contact you with your consultation results.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Contact Options */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            

            {/* Global Offices */}
            <div className="animate-fade-in">
              <Card className="bg-white p-8 shadow-lg border-0 rounded-2xl">
                <CardHeader className="pb-6 text-center">
                  <CardTitle className="text-2xl font-display text-foreground flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary mr-3" />
                    Our Headquarters
                  </CardTitle>
                  <p className="text-muted-foreground mt-2">
                    Visit us at our Singapore headquarters for in-person consultations
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center">
                    {offices.map((office, index) => (
                      <div key={office.city} className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors max-w-md w-full">
                        <h5 className="text-xl font-semibold text-foreground mb-3">{office.city}</h5>
                        <div className="space-y-2 text-muted-foreground mb-4">
                          <p>{office.address}</p>
                          <p>{office.postal}</p>
                        </div>
                        <div className="flex items-center justify-center">
                          <div className="flex items-center gap-3">
                            <Mail className="w-4 h-4 text-primary" />
                            <a href={`mailto:${office.email}`} className="text-foreground hover:text-primary transition-colors">
                              {office.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;