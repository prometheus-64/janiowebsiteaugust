import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Search, FileText, DollarSign, Calculator, TrendingUp, CheckCircle, AlertTriangle, Target, ArrowRight, Shield, Network, Clock, Brain, Eye, Zap } from 'lucide-react';

const InvoiceAudit = () => {
  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/95" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/50 rounded-full blur-2xl"></div>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-6 text-center text-white">
          <div className="mb-4 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-4">Freight Invoice Audit & Reconciliation</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6 animate-fade-in leading-tight tracking-tight">
            Intelligent Invoice Audit — Contract-Accurate, Automatically Reconciled
          </h1>
          <p className="text-lg lg:text-xl text-white/80 mb-12 leading-loose max-w-4xl mx-auto animate-slide-up font-light">
            Janio validates 100% of carrier invoices against your contracted rates and rules, flags every discrepancy, and manages reconciliation end-to-end. Recover overcharges, stop leakage, and turn billing accuracy into guaranteed savings.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-scale-in">
            <Link to="/contact#form">
              <button className="bg-white text-primary hover:bg-gray-100 text-lg px-12 py-4 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Request Free Invoice Audit
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problem / Insight Strip */}
      <section className="py-20 md:py-14 sm:py-10">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-3 leading-tight tracking-tight sm:text-2xl md:text-3xl">
              The Hidden Cost of Billing Errors
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-[760px] mx-auto">
              Billing errors occur more often than you think—duplicate charges, misapplied surcharges, DIM mistakes, and wrong contract tables can silently drain freight spend.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center gap-1.5">
              <div className="text-4xl md:text-3xl sm:text-2xl font-bold text-primary">15–20%</div>
              <p className="text-sm md:text-base text-neutral-600 font-medium">of freight invoices contain errors</p>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <div className="text-4xl md:text-3xl sm:text-2xl font-bold text-primary">3–8%</div>
              <p className="text-sm md:text-base text-neutral-600 font-medium">typical annual recovery opportunity</p>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <div className="text-4xl md:text-3xl sm:text-2xl font-bold text-primary">$500K+</div>
              <p className="text-sm md:text-base text-neutral-600 font-medium">average annual overcharges for large shippers</p>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <div className="text-4xl md:text-3xl sm:text-2xl font-bold text-primary">95%+</div>
              <p className="text-sm md:text-base text-neutral-600 font-medium">of overcharges go unclaimed without audit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Error Types */}
      <section className="py-20 md:py-14 sm:py-10 bg-muted/30">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-3 leading-tight tracking-tight sm:text-2xl md:text-3xl">
              Common Billing Error Types We Catch
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="flex flex-col h-full rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-4">
              <CardHeader>
                <h3 className="text-lg font-semibold leading-tight">Rate & Pricing Errors</h3>
              </CardHeader>
              <CardContent>
                <ul role="list" className="space-y-2 text-sm text-muted-foreground">
                  <li>Incorrect base rate/zone table</li>
                  <li>Wrong minimums or breakpoints</li>
                  <li>DIM/volumetric miscalculation</li>
                  <li>Currency/tax application errors</li>
                  <li>Misapplied discount structures</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="flex flex-col h-full rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-4">
              <CardHeader>
                <h3 className="text-lg font-semibold leading-tight">Surcharges & Accessorials</h3>
              </CardHeader>
              <CardContent>
                <ul role="list" className="space-y-2 text-sm text-muted-foreground">
                  <li>Duplicate or non-contract charges</li>
                  <li>Incorrect fuel matrix index</li>
                  <li>Residential/remote misflags</li>
                  <li>Return/oversize/overweight fees</li>
                  <li>Re-rate services vs. contracted services</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Methodology (4 Steps) */}
      <section className="py-20 md:py-14 sm:py-10">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-3 leading-tight tracking-tight sm:text-2xl md:text-3xl">
              Systematic Audit Methodology
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-[760px] mx-auto">
              Technology-powered analysis with transportation domain expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="flex flex-col h-full rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-4">
              <CardHeader>
                <h3 className="text-lg font-semibold leading-tight">Step 1: Data Collection</h3>
              </CardHeader>
              <CardContent>
                <ul role="list" className="space-y-2 text-sm text-muted-foreground">
                  <li>API/EDI/CSV ingestion of invoices, manifests, contracts, tariffs</li>
                  <li>Normalization & contract mapping</li>
                  <li>Historical baselining</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="flex flex-col h-full rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-4">
              <CardHeader>
                <h3 className="text-lg font-semibold leading-tight">Step 2: AI-Powered Analysis</h3>
              </CardHeader>
              <CardContent>
                <ul role="list" className="space-y-2 text-sm text-muted-foreground">
                  <li>Machine learning detects anomalies</li>
                  <li>Line-level validation vs. contracted rules</li>
                  <li>Root-cause tagging by error type</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="flex flex-col h-full rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-4">
              <CardHeader>
                <h3 className="text-lg font-semibold leading-tight">Step 3: Expert Validation</h3>
              </CardHeader>
              <CardContent>
                <ul role="list" className="space-y-2 text-sm text-muted-foreground">
                  <li>Analyst review for false positives</li>
                  <li>Evidence pack creation (contract cites, examples)</li>
                  <li>Dispute strategy & prioritization</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="flex flex-col h-full rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-4">
              <CardHeader>
                <h3 className="text-lg font-semibold leading-tight">Step 4: Recovery Management</h3>
              </CardHeader>
              <CardContent>
                <ul role="list" className="space-y-2 text-sm text-muted-foreground">
                  <li>Carrier dispute filing & follow-through</li>
                  <li>Credit memo / refund tracking</li>
                  <li>Adjustments posted & reconciled in your ledger</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-20 md:py-14 sm:py-10 bg-muted/30">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-3 leading-tight tracking-tight sm:text-2xl md:text-3xl">
              Comprehensive Audit Coverage
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="flex flex-col h-full rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-4">
              <CardHeader>
                <h3 className="text-lg font-semibold leading-tight">Invoice Accuracy</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Rates, surcharges, fuel, DIM, minimums, currency, taxes, SLAs.</p>
              </CardContent>
            </Card>
            <Card className="flex flex-col h-full rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-4">
              <CardHeader>
                <h3 className="text-lg font-semibold leading-tight">Accessorial Charges</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Detention, re-delivery, remote, declared value, handling, returns.</p>
              </CardContent>
            </Card>
            <Card className="flex flex-col h-full rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-4">
              <CardHeader>
                <h3 className="text-lg font-semibold leading-tight">Service Compliance</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">On-time performance, guaranteed services, contract adherence.</p>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">Modes covered: parcel/courier, LTL/FTL, air, ocean, and warehouse/3PL invoices.</p>
        </div>
      </section>

      {/* Dispute & Recovery Workflow */}
      <section className="py-20 md:py-14 sm:py-10">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-3 leading-tight tracking-tight sm:text-2xl md:text-3xl">
              Professional Dispute & Recovery Workflow
            </h2>
          </div>
          <ol role="list" className="space-y-4">
            <li className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0 mt-1">1</div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Claim Documentation</h3>
                <p className="text-muted-foreground">Contract references, tariff extracts, and shipment evidence.</p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0 mt-1">2</div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Carrier Submission</h3>
                <p className="text-muted-foreground">Formal claims through carrier channels with audit trail.</p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0 mt-1">3</div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Negotiation & Follow-up</h3>
                <p className="text-muted-foreground">Escalation paths and compliance references.</p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0 mt-1">4</div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Credit Posting</h3>
                <p className="text-muted-foreground">Credit memo/refund verification and GL reconciliation.</p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0 mt-1">5</div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Reporting</h3>
                <p className="text-muted-foreground">Savings attribution, error class trends, and corrective actions.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Value / Proof */}
      <section className="py-20 md:py-14 sm:py-10 bg-muted/30">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-3 leading-tight tracking-tight sm:text-2xl md:text-3xl">
              Typical Recovery Results
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="flex flex-col items-center gap-1.5">
              <div className="text-4xl md:text-3xl sm:text-2xl font-bold text-primary">12×</div>
              <p className="text-sm md:text-base text-neutral-600 font-medium">Average ROI</p>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <div className="text-4xl md:text-3xl sm:text-2xl font-bold text-primary">5.2%</div>
              <p className="text-sm md:text-base text-neutral-600 font-medium">Average of Freight Spend Recovered</p>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <div className="text-4xl md:text-3xl sm:text-2xl font-bold text-primary">$250K</div>
              <p className="text-sm md:text-base text-neutral-600 font-medium">Average Annual Recovery</p>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <div className="text-4xl md:text-3xl sm:text-2xl font-bold text-primary">90</div>
              <p className="text-sm md:text-base text-neutral-600 font-medium">Days to First Recovery</p>
            </div>
          </div>
          <Card className="mx-auto max-w-[720px] rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-4">
            <CardHeader>
              <h3 className="text-xl font-bold text-center mb-3">Savings Realization Timeline</h3>
            </CardHeader>
            <CardContent>
              <ul role="list" className="space-y-3">
                <li className="flex justify-between items-center border-b border-neutral-200 py-3"><span>Week 1–2 — Data & Contract Onboarding</span></li>
                <li className="flex justify-between items-center border-b border-neutral-200 py-3"><span>Week 3–6 — Automated Line-Level Audit Live</span></li>
                <li className="flex justify-between items-center py-3"><span>Week 7–12 — First Credits & Process Fixes</span></li>
              </ul>
              <div className="mt-4 pt-4 border-t border-neutral-200">
                <p className="font-semibold text-foreground">Ongoing — Continuous audit and leakage prevention</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 md:py-14 sm:py-10">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-3 leading-tight tracking-tight sm:text-2xl md:text-3xl">
              Flexible Service Models
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="flex flex-col h-full rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-4">
              <CardHeader>
                <h3 className="text-lg font-semibold leading-tight">Contingency-Based Audit</h3>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-muted-foreground leading-relaxed line-clamp-3">
                  Pay only from verified credits/recoveries. Ideal for quick starts and legacy spend validation.
                </p>
                <div className="border-t border-neutral-200 mt-auto pt-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Fee Structure:</span>
                    <span className="font-bold text-primary">% of recovered amounts</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="flex flex-col h-full rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-4">
              <CardHeader>
                <h3 className="text-lg font-semibold leading-tight">Ongoing Audit Service</h3>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-muted-foreground leading-relaxed line-clamp-3">
                  Monthly subscription for continuous line-level auditing, dispute management, and savings reporting.
                </p>
                <div className="border-t border-neutral-200 mt-auto pt-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Fee Structure:</span>
                    <span className="font-bold text-primary">Monthly retainer</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security & Integrations */}
      <section className="py-20 md:py-14 sm:py-10 bg-muted/30">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-3 leading-tight tracking-tight sm:text-2xl md:text-3xl">
              Secure & Seamless by Design
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">SOC 2 & ISO 27001 Compliant data handling</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <Network className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">API/EDI connectors with major carriers, ERPs, WMS/TMS</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <CheckCircle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Read-only access and least-privilege controls</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-8 leading-tight">
              Ready to Recover Hidden Money in Your Freight Spend?
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
              Request a free invoice audit of your recent statements and see how much you can save.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact#form">
                <button className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-4 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center">
                  Request Free Invoice Audit
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvoiceAudit;