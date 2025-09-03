import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Truck, Plane, Ship, BarChart3, DollarSign, Clock, Shield, CheckCircle, ArrowRight } from 'lucide-react';

const TransportationProcurement = () => {
  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary">
        {/* Enhanced Background with Subtle Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/95" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/50 rounded-full blur-2xl"></div>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-6 text-center text-white">
          <div className="mb-4 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-4">Procurement-as-a-Service</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6 animate-fade-in leading-tight tracking-tight">
            Let Janio Run Your RFQ — From Requirements to Contracts
          </h1>
          <p className="text-lg lg:text-xl text-white/80 mb-12 leading-loose max-w-4xl mx-auto animate-slide-up font-light">
            We manage your logistics procurement end-to-end, cutting cycle times by up to 60% and delivering 12–20% cost savings across all transport modes. Your team stays focused on growth — we handle the RFQs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-scale-in">
            <Link to="/contact">
              <button className="bg-white text-primary hover:bg-gray-100 text-lg px-12 py-4 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Get My RFQ Managed
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Procurement Methodology */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-display text-foreground mb-4">
                Our Proven 3-Phase Procurement Methodology
              </h2>
              <p className="text-xl text-muted-foreground">
                From defining requirements to onboarding carriers, Janio delivers structured, time-saving procurement at scale.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <BarChart3 className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Phase 1: Define & Design</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We work closely with you to capture requirements, analyze spend, and draft tailored RFPs. Our precision ensures clarity from the outset.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Phase 2: Engage & Evaluate</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Janio canvasses qualified 3PLs, clarifies requirements, and runs multi-stage screening. We present you with the best-fit vendors and competitive solutions.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Phase 3: Finalize & Onboard</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We negotiate final contracts, secure the best terms, and oversee onboarding of your chosen 3PL. Smooth transition, guaranteed compliance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings by Mode */}
      <section className="py-20 md:py-14 sm:py-10 bg-muted/30">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-center text-foreground mb-3 leading-tight tracking-tight sm:text-2xl md:text-3xl">
              Procurement Across Every Transportation Mode
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground text-center max-w-[720px] mx-auto mb-6">
              From first mile to last mile, Janio optimizes cost, service, and reliability.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="flex flex-col justify-start min-h-[220px] rounded-2xl border shadow-sm p-6 sm:p-4 hover:shadow-md hover:-translate-y-0.5 transition">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Truck className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold leading-tight">Road Freight & Warehousing</h3>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    Optimize domestic trucking, warehousing, and distribution with data-driven procurement.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="flex flex-col justify-start min-h-[220px] rounded-2xl border shadow-sm p-6 sm:p-4 hover:shadow-md hover:-translate-y-0.5 transition">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Plane className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold leading-tight">International Freight</h3>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    Secure competitive rates and reliable services for global air and ocean cargo.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="flex flex-col justify-start min-h-[220px] rounded-2xl border shadow-sm p-6 sm:p-4 hover:shadow-md hover:-translate-y-0.5 transition">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Ship className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold leading-tight">E-commerce & Express</h3>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    Enhance customer experience with cost-efficient, high-speed last-mile delivery.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Market Advantages */}
      <section className="py-20 md:py-14 sm:py-10">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-center text-foreground mb-3 leading-tight tracking-tight sm:text-2xl md:text-3xl">
              Why Enterprises Choose Janio
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground text-center max-w-[760px] mx-auto mb-10">
              Unlock efficiency, savings, and transparency with Procurement-as-a-Service.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold leading-tight mb-2">Cut Procurement Cycle Time by 60%</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Go live in 30–60 days vs. 6–12 months with traditional RFPs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold leading-tight mb-2">Access to 10,000+ Vetted 3PLs</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Tap into Janio’s pre-qualified network of reliable logistics providers.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <DollarSign className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold leading-tight mb-2">Secure Better Rates & Terms</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Our negotiation expertise ensures optimal pricing and contract conditions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold leading-tight mb-2">Transparent Process</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Scorecards, audit trails, and clear feedback at every stage.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Results & ROI */}
      <section className="py-20 md:py-14 sm:py-10 bg-muted/30">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-3 leading-tight tracking-tight sm:text-2xl md:text-3xl">
              Proven Procurement Outcomes
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-[720px] mx-auto mb-8">
              Our clients consistently realize measurable results with Janio.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="flex flex-col items-center gap-1.5">
                <div className="text-4xl md:text-3xl sm:text-2xl font-bold text-primary">12–20%</div>
                <p className="text-sm md:text-base text-neutral-600 font-medium">Average Cost Savings</p>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="text-4xl md:text-3xl sm:text-2xl font-bold text-primary">30–60</div>
                <p className="text-sm md:text-base text-neutral-600 font-medium">Days to Award</p>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="text-4xl md:text-3xl sm:text-2xl font-bold text-primary">98%</div>
                <p className="text-sm md:text-base text-neutral-600 font-medium">Service-Level Maintenance</p>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="text-4xl md:text-3xl sm:text-2xl font-bold text-primary">200+</div>
                <p className="text-sm md:text-base text-neutral-600 font-medium">3PLs Onboarded Annually</p>
              </div>
            </div>
            
            <Card className="mx-auto max-w-[720px] rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-4">
              <CardHeader>
                <h3 className="text-xl font-bold text-center mb-3">Typical Engagement Timeline</h3>
              </CardHeader>
              <CardContent>
                <ul role="list" className="space-y-3">
                  <li className="flex justify-between items-center border-b border-neutral-200 py-3"><span>Days 1–30: Requirements & RFP Drafting</span></li>
                  <li className="flex justify-between items-center border-b border-neutral-200 py-3"><span>Days 31–60: RFQ & Vendor Evaluation</span></li>
                  <li className="flex justify-between items-center py-3"><span>Days 61–90: Contracting & Onboarding</span></li>
                </ul>
                <div className="mt-4 pt-4 border-t border-neutral-200">
                  <p className="font-semibold text-foreground">First Savings Realized: From Day 60</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 md:py-14 sm:py-10">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-center text-foreground mb-3 leading-tight tracking-tight sm:text-2xl md:text-3xl">
              Flexible Engagement Models
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground text-center max-w-[720px] mx-auto mb-10">
              Choose the partnership structure that fits your strategy.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="flex flex-col h-full rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-4 hover:shadow-md hover:-translate-y-0.5 transition">
                <CardHeader>
                  <h3 className="text-lg font-semibold leading-tight">End-to-End Procurement</h3>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    Full outsourcing of your RFQ lifecycle, from requirements to contracts.
                  </p>
                  <div className="border-t border-neutral-200 mt-auto pt-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Fee Structure:</span>
                      <span className="font-bold text-primary">% of verified savings</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="flex flex-col h-full rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-4 hover:shadow-md hover:-translate-y-0.5 transition">
                <CardHeader>
                  <h3 className="text-lg font-semibold leading-tight">Co-Pilot Model</h3>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    We complement your team in specific procurement stages with our expertise.
                  </p>
                  <div className="border-t border-neutral-200 mt-auto pt-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Fee Structure:</span>
                      <span className="font-bold text-primary">Shared savings or retainer</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-4 hover:shadow-md hover:-translate-y-0.5 transition">
                <CardHeader>
                  <h3 className="text-lg font-semibold leading-tight">Event-Based RFQ</h3>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    Engage Janio for one-off or urgent procurement projects.
                  </p>
                  <div className="border-t border-neutral-200 mt-auto pt-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Fee Structure:</span>
                      <span className="font-bold text-primary">Project-based pricing</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
              Ready to Optimize Your Freight Procurement?
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
              Request your free RFQ plan and see how much time and cost you can save with Janio.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <button className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-4 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center">
                  Request My Free RFQ Plan
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransportationProcurement;