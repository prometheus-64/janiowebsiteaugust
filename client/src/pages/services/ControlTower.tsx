import React from 'react';
import { Link } from 'react-router-dom';
import PageSEO from '@/components/PageSEO';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Eye, Zap, Network, Brain, Shield, CheckCircle, Clock, BarChart3, ArrowRight } from 'lucide-react';

const ControlTower = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO page="controlTower" />
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
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-4">Supply Chain Visibility & Control</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6 animate-fade-in leading-tight tracking-tight">
            Supply Chain Control Tower with Real-Time Intelligence
          </h1>
          <p className="text-lg lg:text-xl text-white/80 mb-12 leading-loose max-w-4xl mx-auto animate-slide-up font-light">
            One command center for real-time visibility, predictive analytics, and proactive control across your end-to-end supply chain. Cut disruptions, accelerate on-time performance, and lower total logistics cost.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-scale-in">
            <Link to="/contact#form">
              <button className="bg-white text-primary hover:bg-gray-100 text-lg px-12 py-4 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Schedule Live Demo
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Control Tower Concept */}
      <section className="py-20 md:py-14 sm:py-10">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-3 leading-tight tracking-tight sm:text-2xl md:text-3xl">
                What Is a Supply Chain Control Tower?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-[720px] mx-auto">
                A unified command center for real-time visibility, predictive analytics, and proactive exception management.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <ul role="list" className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Eye className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">360° Visibility</h3>
                      <p className="text-muted-foreground leading-relaxed">Live status across orders, inventory, and carriers</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Brain className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Predictive Analytics</h3>
                      <p className="text-muted-foreground leading-relaxed">ML-driven delay detection and performance forecasts</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Zap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Proactive Control</h3>
                      <p className="text-muted-foreground leading-relaxed">Automated workflows and exception playbooks</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Network className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Unified Operations</h3>
                      <p className="text-muted-foreground leading-relaxed">Single platform integrating all partners and systems</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-4">Control Tower Benefits:</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Shipment Visibility</span>
                    <span className="font-semibold text-primary">95%+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Exception Response Time</span>
                    <span className="font-semibold text-primary">2 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">On-Time Performance</span>
                    <span className="font-semibold text-primary">98%+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Disruption Cost Reduction</span>
                    <span className="font-semibold text-primary">15–30%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-14 sm:py-10 bg-muted/30">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-3 leading-tight tracking-tight sm:text-2xl md:text-3xl">
                How Control Tower Works
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-[720px] mx-auto">
                Three phases that deliver immediate visibility and long-term optimization.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="flex flex-col h-full rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-4 hover:shadow-md hover:-translate-y-0.5 transition">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <Network className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold leading-tight">Phase 1: Integration</h3>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <ul role="list" className="space-y-2 text-sm text-muted-foreground">
                    <li>Connect all supply partners and systems</li>
                    <li>Normalize data and create a single view</li>
                    <li>Define KPIs, SLAs, and alert thresholds</li>
                  </ul>
                  <div className="border-t border-neutral-200 mt-auto pt-3">
                    <span className="text-sm font-medium text-primary">Timeline: 2–6 weeks</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="flex flex-col h-full rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-4 hover:shadow-md hover:-translate-y-0.5 transition">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <Eye className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold leading-tight">Phase 2: Visibility</h3>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <ul role="list" className="space-y-2 text-sm text-muted-foreground">
                    <li>Live milestone tracking and health dashboards</li>
                    <li>Exception detection and auto-routing</li>
                    <li>Cross-partner collaboration workflows</li>
                  </ul>
                  <div className="border-t border-neutral-200 mt-auto pt-3">
                    <span className="text-sm font-medium text-primary">Timeline: 4–6 weeks</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="flex flex-col h-full rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-4 hover:shadow-md hover:-translate-y-0.5 transition">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <Brain className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold leading-tight">Phase 3: Intelligence</h3>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <ul role="list" className="space-y-2 text-sm text-muted-foreground">
                    <li>Predictive ETAs, demand/capacity signals</li>
                    <li>Root-cause insights and playbooks</li>
                    <li>Continuous improvement & savings</li>
                  </ul>
                  <div className="border-t border-neutral-200 mt-auto pt-3">
                    <span className="text-sm font-medium text-primary">Timeline: 90+ days</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Platform */}
      <section className="py-20 md:py-14 sm:py-10">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-center text-foreground mb-12 sm:text-2xl md:text-3xl">
              Advanced Technology Platform
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="flex flex-col h-full rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-4">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <Brain className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold leading-tight">AI/ML Capabilities</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul role="list" className="space-y-2 text-sm text-muted-foreground">
                    <li>Predictive delay modeling, anomaly detection</li>
                    <li>Root-cause explainability and performance forecasts</li>
                    <li>Automated recommendations and what-if analysis</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="flex flex-col h-full rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-4">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <Network className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold leading-tight">Integration Capabilities</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul role="list" className="space-y-2 text-sm text-muted-foreground">
                    <li>API + EDI with ERPs, WMS, TMS, carriers, marketplaces</li>
                    <li>Real-time partner onboarding with data validation</li>
                    <li>Role-based access and granular controls</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Operations Support */}
      <section className="py-20 md:py-14 sm:py-10 bg-muted/30">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-center text-foreground mb-3 leading-tight tracking-tight sm:text-2xl md:text-3xl">
              24/7 Expert Operations Center
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground text-center max-w-[720px] mx-auto mb-10">
              Always-on supply chain control, powered by expert analysts.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold leading-tight mb-1">Round-the-Clock Monitoring</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Eyes on your supply chain 24/7/365</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold leading-tight mb-1">Proactive Exception Management</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Detect, resolve, and prevent recurrences</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold leading-tight mb-1">Escalation Management</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Clear rules and SLAs for every incident</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold leading-tight mb-1">Performance Analytics</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Continuous analysis and improvement plans</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <Network className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold leading-tight mb-1">Carrier Coordination</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Direct comms and issue resolution</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold leading-tight mb-1">Customer Communication</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Proactive shipment updates and notifications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI & Value */}
      <section className="py-20 md:py-14 sm:py-10">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-3 leading-tight tracking-tight sm:text-2xl md:text-3xl">
              Measurable ROI and Business Value
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="flex flex-col items-center gap-1.5">
                <div className="text-4xl md:text-3xl sm:text-2xl font-bold text-primary">95%+</div>
                <p className="text-sm md:text-base text-neutral-600 font-medium">Shipment Visibility</p>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="text-4xl md:text-3xl sm:text-2xl font-bold text-primary">60%</div>
                <p className="text-sm md:text-base text-neutral-600 font-medium">Faster Exception Resolution</p>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="text-4xl md:text-3xl sm:text-2xl font-bold text-primary">25%</div>
                <p className="text-sm md:text-base text-neutral-600 font-medium">Reduced Disruption Costs</p>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="text-4xl md:text-3xl sm:text-2xl font-bold text-primary">12x</div>
                <p className="text-sm md:text-base text-neutral-600 font-medium">Year-1 ROI</p>
              </div>
            </div>
            
            <Card className="mx-auto max-w-[720px] rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-4">
              <CardHeader>
                <h3 className="text-xl font-bold text-center mb-3">Value Realization Timeline</h3>
              </CardHeader>
              <CardContent>
                <ul role="list" className="space-y-3">
                  <li className="flex justify-between items-center border-b border-neutral-200 py-3"><span>Basic Visibility</span><span className="font-semibold">Day 30</span></li>
                  <li className="flex justify-between items-center border-b border-neutral-200 py-3"><span>Full Monitoring</span><span className="font-semibold">Day 60</span></li>
                  <li className="flex justify-between items-center border-b border-neutral-200 py-3"><span>Predictive Analytics</span><span className="font-semibold">Day 90</span></li>
                  <li className="flex justify-between items-center py-3"><span>Full ROI Realization</span><span className="font-semibold">6–12 months</span></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 md:py-14 sm:py-10 bg-muted/30">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-center text-foreground mb-12 sm:text-2xl md:text-3xl">
              120-Day Implementation Roadmap
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="flex flex-col h-full rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-4">
                <CardHeader>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mx-auto mb-2">1</div>
                    <h3 className="text-lg font-semibold leading-tight">Days 1–30 — Discovery & Design</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul role="list" className="space-y-2 text-sm text-muted-foreground">
                    <li>Stakeholder workshops, KPI baselining</li>
                    <li>Data schema & integration plan</li>
                    <li>Security & access setup</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="flex flex-col h-full rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-4">
                <CardHeader>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mx-auto mb-2">2</div>
                    <h3 className="text-lg font-semibold leading-tight">Days 31–60 — Integration & Testing</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul role="list" className="space-y-2 text-sm text-muted-foreground">
                    <li>API/EDI connectors, mapping, validations</li>
                    <li>Alert thresholds, dashboard builds</li>
                    <li>Training early users</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="flex flex-col h-full rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-4">
                <CardHeader>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mx-auto mb-2">3</div>
                    <h3 className="text-lg font-semibold leading-tight">Days 61–90 — Go-Live & Stabilization</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul role="list" className="space-y-2 text-sm text-muted-foreground">
                    <li>Exception playbooks, escalation flows</li>
                    <li>Performance review and tuning</li>
                    <li>Rollout to core lanes/regions</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="flex flex-col h-full rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-4">
                <CardHeader>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mx-auto mb-2">4</div>
                    <h3 className="text-lg font-semibold leading-tight">Days 91–120 — Optimization & Scale</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul role="list" className="space-y-2 text-sm text-muted-foreground">
                    <li>Predictive models and recommendations</li>
                    <li>Coverage expansion and automation</li>
                    <li>Continuous improvement cadences</li>
                  </ul>
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
              Ready to Command Your Supply Chain?
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
              See the Control Tower in action with a personalized demo of your network.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact#form" aria-label='Schedule Live Demo — opens contact form'>
                <button className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-4 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center">
                  Schedule Live Demo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ControlTower;
