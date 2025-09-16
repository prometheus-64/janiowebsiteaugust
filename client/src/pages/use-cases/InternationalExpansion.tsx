import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import PageSEO from '@/components/PageSEO';
import { ArrowRight, Globe, Truck, Shield, BarChart3, CheckCircle, Clock, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const InternationalExpansion = () => {
  const challenges = [
    {
      icon: Globe,
      title: "Multi-Country Compliance",
      description: "Navigate complex regulatory requirements across different markets"
    },
    {
      icon: Truck,
      title: "Cross-Border Logistics",
      description: "Manage multi-modal transportation and customs clearance"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Mitigate risks from currency fluctuations and geopolitical factors"
    },
    {
      icon: BarChart3,
      title: "Cost Visibility",
      description: "Lack of transparency in international shipping costs and timelines"
    }
  ];

  const solutions = [
    {
      title: "Global Network Access",
      description: "Leverage our established partnerships across 50+ countries",
      benefit: "Instant market entry without infrastructure investment"
    },
    {
      title: "Regulatory Expertise",
      description: "Navigate customs, duties, and compliance requirements seamlessly",
      benefit: "Reduce compliance risks by 90%"
    },
    {
      title: "Multi-Modal Optimization",
      description: "Optimize routes across air, sea, and ground transportation",
      benefit: "Cut international shipping costs by 25%"
    },
    {
      title: "Real-Time Tracking",
      description: "Full visibility across international supply chains",
      benefit: "Improve customer satisfaction by 40%"
    }
  ];

  const results = [
    { metric: "95%", label: "On-time international deliveries" },
    { metric: "30%", label: "Reduction in customs delays" },
    { metric: "50+", label: "Countries served" },
    { metric: "25%", label: "Cost savings on international shipping" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageSEO page="useCaseInternationalExpansion" />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/95" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 text-base px-4 py-2">
              International Expansion Use Case
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
              Scale Globally Without Logistics Complexity
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Expand into new markets with confidence using our global 4PL network and expertise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="secondary" asChild>
                <Link to="/contact">Start Global Expansion</Link>
              </Button>
              <Button size="xl" variant="hero" asChild>
                <Link to="/contact">Book Expansion Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                International Expansion Challenges
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Growing globally requires navigating complex logistics, regulations, and market dynamics
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {challenges.map((challenge, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <challenge.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-3">{challenge.title}</h3>
                    <p className="text-muted-foreground">{challenge.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Our Global Expansion Solution
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                End-to-end international logistics management from a single platform
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="hover:shadow-medium transition-shadow">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
                    <p className="text-muted-foreground mb-4">{solution.description}</p>
                    <div className="flex items-center text-primary font-semibold">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      {solution.benefit}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Global Expansion Results
              </h2>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                Proven success helping companies scale internationally
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {results.map((result, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold font-display mb-2 text-secondary">
                    {result.metric}
                  </div>
                  <div className="text-primary-foreground/90">{result.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Your Path to Global Success
              </h2>
              <p className="text-xl text-muted-foreground">
                Our proven 4-phase approach to international expansion
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  phase: "Phase 1",
                  title: "Market Assessment & Planning",
                  description: "Analyze target markets, regulatory requirements, and logistics infrastructure",
                  duration: "2-3 weeks"
                },
                {
                  phase: "Phase 2", 
                  title: "Network Setup & Partnerships",
                  description: "Establish carrier relationships and customs clearance capabilities",
                  duration: "3-4 weeks"
                },
                {
                  phase: "Phase 3",
                  title: "System Integration & Testing",
                  description: "Connect your systems to our global platform and run pilot shipments",
                  duration: "2-3 weeks"
                },
                {
                  phase: "Phase 4",
                  title: "Full Launch & Optimization",
                  description: "Go live with full international capabilities and continuous optimization",
                  duration: "Ongoing"
                }
              ].map((step, index) => (
                <Card key={index} className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <Badge variant="outline">{step.phase}</Badge>
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          {step.duration}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Ready to Expand Globally?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss your international expansion goals and create a custom solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link to="/contact">
                  Start Your Expansion
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <Link to="/contact">Book a Consultation!</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternationalExpansion;
