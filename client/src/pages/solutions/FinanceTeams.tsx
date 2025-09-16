import React from 'react';
import { Link } from 'react-router-dom';
import PageSEO from '@/components/PageSEO';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { DollarSign, Calculator, FileText, Search, TrendingUp, CheckCircle } from 'lucide-react';

const FinanceTeams = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO page="financeTeams" />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-display text-foreground mb-6">
              Recover <span className="text-primary">3-8%</span> of your logistics spend immediately
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Stop overpaying on freight invoices. Our specialized audit service identifies billing errors and recovers overcharges across all transportation modes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services/invoice-audit">
                <button className="bg-primary text-white hover:bg-primary/90 text-lg px-10 py-4 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl">
                  Get Free Analysis
                </button>
              </Link>
              <Link to="/calculator/invoice-audit-roi">
                <button className="bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white text-lg px-10 py-4 rounded-full font-medium transition-all duration-200">
                  Calculate Recovery Potential
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-display text-center text-foreground mb-12">
              The freight billing reality CFOs need to know
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <FileText className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Billing Error Epidemic</h3>
                      <p className="text-muted-foreground">Industry studies show 15-20% of freight invoices contain errors or overcharges.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Search className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Manual Review Gaps</h3>
                      <p className="text-muted-foreground">High-volume invoicing makes systematic review nearly impossible.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calculator className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Complex Rate Structures</h3>
                      <p className="text-muted-foreground">Multi-modal, accessorial, and fuel surcharges create audit complexity.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <DollarSign className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Lost Recovery Opportunities</h3>
                      <p className="text-muted-foreground">Without specialized expertise, overcharges go undetected and unrecovered.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-4">Hidden Costs in Your Freight Spend:</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Invoice Error Rate</span>
                    <span className="font-semibold text-destructive">15-20%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Duplicate Charges</span>
                    <span className="font-semibold text-destructive">2-5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Incorrect Accessorials</span>
                    <span className="font-semibold text-destructive">8-12%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Annual Recovery Opportunity</span>
                    <span className="font-semibold text-primary">3-8% of spend</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-display text-foreground mb-4">
                Freight Invoice Audit: Systematic Recovery Process
              </h2>
              <p className="text-xl text-muted-foreground">
                Technology-powered audit with specialized expertise across all transportation modes
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Systematic Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">AI-powered invoice analysis identifies errors across all modes</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Expert Validation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Transportation specialists validate findings and prepare claims</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Recovery Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Full claims management process from filing to collection</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-display text-center text-foreground mb-12">
              Immediate Financial Impact for Finance Teams
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Immediate Cash Recovery</h3>
                    <p className="text-muted-foreground">Typically recover 3-8% of annual freight spend within 90 days</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Zero Internal Resources</h3>
                    <p className="text-muted-foreground">Complete service requires no internal team allocation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Contingency-Based Pricing</h3>
                    <p className="text-muted-foreground">Only pay when we recover money - aligned incentives</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Process Improvement</h3>
                    <p className="text-muted-foreground">Identify systemic issues to prevent future overcharges</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Financial Controls</h3>
                    <p className="text-muted-foreground">Enhanced invoice approval and monitoring processes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Carrier Relationships</h3>
                    <p className="text-muted-foreground">Professional claims process maintains vendor partnerships</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-display text-foreground mb-8">
              Typical Recovery Results
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">$250K</div>
                <p className="text-muted-foreground">Average Annual Recovery</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5.2%</div>
                <p className="text-muted-foreground">Average % of Freight Spend</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">90</div>
                <p className="text-muted-foreground">Days to First Recovery</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">12x</div>
                <p className="text-muted-foreground">Average ROI</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-display text-secondary-foreground mb-6">
              Ready to recover hidden money in your freight spend?
            </h2>
            <p className="text-xl text-secondary-foreground/80 mb-8">
              Get a free sample audit of your recent freight invoices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/services/invoice-audit">Get Free Sample Audit</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white/20 text-white hover:bg-white/10" asChild>
                <Link to="/calculator/invoice-audit-roi">Calculate Recovery Potential</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinanceTeams;
