import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Search, FileText, DollarSign, Calculator, TrendingUp, CheckCircle, AlertTriangle, Target } from 'lucide-react';

const InvoiceAudit = () => {
  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/95" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">
              Freight Invoice Audit: <span className="text-accent">Recover Hidden Money</span> in Your Logistics Spend
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Systematic audit process identifies billing errors and recovers overcharges across all transportation modes. Stop overpaying on freight invoices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/assessment">
                <button className="bg-accent text-white hover:bg-accent/90 text-lg px-10 py-4 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl">
                  Get Free Sample Audit
                </button>
              </Link>
              <Link to="/calculator/invoice-audit-roi">
                <button className="bg-white/20 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-primary text-lg px-10 py-4 rounded-full font-medium transition-all duration-200">
                  Calculate Recovery Potential
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hidden Cost Crisis */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-display text-foreground mb-4">
                The Hidden Cost Crisis: Industry Billing Error Statistics
              </h2>
              <p className="text-xl text-muted-foreground">
                The freight industry has a billing accuracy problem that's costing shippers millions
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="text-center border-l-4 border-l-destructive">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                    <AlertTriangle className="h-6 w-6 text-destructive" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-destructive">15-20%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">of freight invoices contain billing errors</p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-l-4 border-l-destructive">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                    <DollarSign className="h-6 w-6 text-destructive" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-destructive">3-8%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">annual recovery opportunity</p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-l-4 border-l-destructive">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                    <Calculator className="h-6 w-6 text-destructive" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-destructive">$500K</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">average annual overcharges for $10M freight spend</p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-l-4 border-l-primary">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary">95%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">of overcharges go undetected and unrecovered</p>
                </CardContent>
              </Card>
            </div>
            
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-center">Common Billing Error Types</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Rate & Pricing Errors</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Incorrect base rates applied</li>
                      <li>• Wrong fuel surcharge calculations</li>
                      <li>• Unauthorized rate increases</li>
                      <li>• Misapplied discount structures</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Service & Accessorial Errors</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Duplicate accessorial charges</li>
                      <li>• Unearned detention fees</li>
                      <li>• Incorrect dimensional weight charges</li>
                      <li>• Invalid service level charges</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Audit Methodology */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-display text-foreground mb-4">
                Systematic Audit Methodology
              </h2>
              <p className="text-xl text-muted-foreground">
                Technology-powered analysis with specialized transportation expertise
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Step 1: Data Collection</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Secure collection and processing of freight invoices and contracts
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 text-left">
                    <li>• Invoice data extraction</li>
                    <li>• Contract rate verification</li>
                    <li>• Shipment detail validation</li>
                    <li>• Historical data analysis</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Search className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Step 2: AI-Powered Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Machine learning algorithms identify anomalies and potential errors
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 text-left">
                    <li>• Rate variance detection</li>
                    <li>• Duplicate charge identification</li>
                    <li>• Accessorial validation</li>
                    <li>• Pattern recognition analysis</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Step 3: Expert Validation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Transportation specialists validate findings and prepare claims
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 text-left">
                    <li>• Manual error verification</li>
                    <li>• Contract compliance check</li>
                    <li>• Documentation preparation</li>
                    <li>• Recovery prioritization</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <DollarSign className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Step 4: Recovery Management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Professional claims management from filing to collection
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 text-left">
                    <li>• Formal claim submission</li>
                    <li>• Carrier negotiation</li>
                    <li>• Follow-up management</li>
                    <li>• Payment collection</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What We Audit */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-display text-center text-foreground mb-12">
              Comprehensive Audit Coverage
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <span>Invoice Accuracy</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Base rate verification against contracts</li>
                    <li>• Fuel surcharge calculation accuracy</li>
                    <li>• Discount and incentive application</li>
                    <li>• Currency conversion validation</li>
                    <li>• Tax and regulatory fee verification</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calculator className="h-5 w-5 text-primary" />
                    <span>Accessorial Charges</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Detention and demurrage fees</li>
                    <li>• Dimensional weight charges</li>
                    <li>• Special handling fees</li>
                    <li>• Residential delivery charges</li>
                    <li>• Weekend and holiday surcharges</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span>Service Compliance</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Service level guarantee violations</li>
                    <li>• Transit time performance issues</li>
                    <li>• Damage and loss claim validation</li>
                    <li>• Insurance coverage verification</li>
                    <li>• Contract term compliance</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Recovery Process */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-display text-center text-foreground mb-12">
              Professional Recovery Process
            </h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0 mt-1">1</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Claim Documentation</h3>
                  <p className="text-muted-foreground">Professional documentation of errors with supporting evidence and contract references.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0 mt-1">2</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Carrier Submission</h3>
                  <p className="text-muted-foreground">Formal claim submission through proper carrier channels with complete audit trail.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0 mt-1">3</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Negotiation & Follow-up</h3>
                  <p className="text-muted-foreground">Professional negotiation and persistent follow-up to maximize recovery amounts.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0 mt-1">4</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Payment Collection</h3>
                  <p className="text-muted-foreground">Complete payment processing and reconciliation with detailed recovery reporting.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Models */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-display text-center text-foreground mb-12">
              Flexible Service Models
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Contingency-Based Audit</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Pay only when we recover money - completely aligned incentives for maximum results
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Includes:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Complete audit of 24-month invoice history</li>
                      <li>• Professional claims management</li>
                      <li>• Recovery guarantee</li>
                      <li>• Process improvement recommendations</li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Fee Structure:</span>
                      <span className="font-bold text-primary">25-30% of recovery</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Ongoing Audit Service</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Monthly audit service with preventive controls and continuous monitoring
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Includes:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Monthly invoice audit and validation</li>
                      <li>• Real-time error detection and alerts</li>
                      <li>• Carrier performance monitoring</li>
                      <li>• Monthly recovery and reporting</li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Fee Structure:</span>
                      <span className="font-bold text-primary">Monthly retainer + % recovery</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
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
                <Link to="/assessment">Get Free Sample Audit</Link>
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

export default InvoiceAudit;