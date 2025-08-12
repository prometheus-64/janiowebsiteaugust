import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { 
  ArrowRight, 
  CheckCircle, 
  Truck, 
  Warehouse, 
  Ship, 
  Plane,
  BarChart3,
  Shield,
  Clock,
  Globe
} from 'lucide-react';

const LogisticsAsAService = () => {
  const features = [
    {
      icon: <Warehouse className="w-6 h-6" />,
      title: "Warehousing & Fulfillment",
      description: "Enterprise-grade WMS with same-day and next-day fulfillment capabilities"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Land Transportation",
      description: "Optimized ground shipping networks with real-time tracking and delivery"
    },
    {
      icon: <Plane className="w-6 h-6" />,
      title: "Air Freight",
      description: "Express and economy air services for time-sensitive shipments"
    },
    {
      icon: <Ship className="w-6 h-6" />,
      title: "Ocean Freight",
      description: "Cost-effective ocean shipping for large volume international moves"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-Time Analytics",
      description: "Dashboard visibility into performance metrics and operational data"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Service Level Guarantees",
      description: "99.5% on-time delivery SLA with performance penalties for non-compliance"
    }
  ];

  const phases = [
    {
      phase: "Phase 1: Assessment (Week 1-2)",
      description: "Complete analysis of current logistics operations, pain points, and optimization opportunities",
      deliverables: ["Current state assessment", "Gap analysis", "Optimization roadmap"]
    },
    {
      phase: "Phase 2: Design (Week 3-6)",
      description: "Custom LaaS solution design with technology integration and process optimization",
      deliverables: ["Solution architecture", "Integration plan", "Implementation timeline"]
    },
    {
      phase: "Phase 3: Implementation (Week 7-12)",
      description: "Gradual migration with parallel operations to ensure zero disruption",
      deliverables: ["System integration", "Staff training", "Process transition"]
    },
    {
      phase: "Phase 4: Optimization (Ongoing)",
      description: "Continuous monitoring, optimization, and scaling of logistics operations",
      deliverables: ["Performance monitoring", "Regular reviews", "Scaling support"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary via-primary/90 to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/95" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold font-display mb-6 animate-fade-in">
              Your Complete Logistics Department, Outsourced
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed animate-slide-up">
              Free up resources to move your business forward with your own in-house operations, technical, and finance team. Add courier services and customs clearance with procurement, partner onboarding, and finance reconciliation completely managed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Link to="/assessment">
                <button className="bg-accent text-white hover:bg-accent/90 text-lg px-10 py-4 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl">
                  Get LaaS Assessment
                  <ArrowRight className="ml-2 w-5 h-5 inline" />
                </button>
              </Link>
              <Link to="/resources/calculators">
                <button className="bg-white/20 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-primary text-lg px-10 py-4 rounded-full font-medium transition-all duration-200">
                  Calculate ROI
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is LaaS Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold font-display text-foreground mb-4">
                What is Logistics as a Service?
              </h2>
              <p className="text-xl text-muted-foreground">
                A comprehensive 4PL solution that manages your entire logistics ecosystem
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="space-y-6 animate-fade-in">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Logistics as a Service (LaaS) is our flagship offering that transforms how growing 
                  e-commerce companies manage their supply chain. Instead of juggling multiple vendors 
                  and systems, you get a single integrated platform managed by logistics experts.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We become your logistics department, handling everything from warehousing and 
                  fulfillment to multi-modal transportation, while you focus on growing your business.
                </p>
                <div className="flex items-center space-x-4 p-4 bg-accent/10 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <p className="text-foreground font-medium">
                    Complete logistics outsourcing with guaranteed performance levels
                  </p>
                </div>
              </div>
              <div className="animate-slide-up">
                <Card className="p-6 bg-muted/30 border-l-4 border-l-primary">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-display text-foreground">
                      LaaS at a Glance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Globe className="w-4 h-4 text-accent" />
                        <span className="text-sm text-muted-foreground">Multi-modal transportation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Warehouse className="w-4 h-4 text-accent" />
                        <span className="text-sm text-muted-foreground">Warehousing & fulfillment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <BarChart3 className="w-4 h-4 text-accent" />
                        <span className="text-sm text-muted-foreground">Real-time visibility</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Shield className="w-4 h-4 text-accent" />
                        <span className="text-sm text-muted-foreground">Performance guarantees</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How LaaS Works */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold font-display text-foreground mb-4">
                How LaaS Works: 4-Phase Implementation
              </h2>
              <p className="text-xl text-muted-foreground">
                Our proven methodology ensures smooth transition and rapid value realization
              </p>
            </div>
            
            <div className="space-y-8">
              {phases.map((phase, index) => (
                <Card key={phase.phase} className="p-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                        {index + 1}
                      </div>
                      <CardTitle className="text-xl font-display text-foreground">
                        {phase.phase}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {phase.description}
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-foreground">Key Deliverables:</p>
                      <div className="flex flex-wrap gap-2">
                        {phase.deliverables.map((deliverable, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full"
                          >
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Platform */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold font-display text-foreground mb-4">
                Enterprise-Grade Technology Platform
              </h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive capabilities across all logistics functions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={feature.title} className="p-6 hover:shadow-medium transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 rounded-lg bg-accent/10 text-accent">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-lg font-display text-foreground">
                        {feature.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-primary-foreground mb-6">
              Ready to Experience LaaS?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Get a free assessment and see how our Logistics as a Service platform 
              can transform your operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" asChild>
                <Link to="/assessment">
                  Get Your LaaS Assessment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Talk to an Expert
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogisticsAsAService;