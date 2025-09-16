import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import PageSEO from '@/components/PageSEO';
import { ArrowRight, Smartphone, Database, BarChart3, Cog, CheckCircle, Clock, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Digitization = () => {
  const challenges = [
    {
      icon: Database,
      title: "Manual Processes",
      description: "Time-consuming paper-based workflows and data entry"
    },
    {
      icon: BarChart3,
      title: "Limited Visibility",
      description: "No real-time insights into supply chain performance"
    },
    {
      icon: Cog,
      title: "System Fragmentation",
      description: "Disconnected tools creating data silos"
    },
    {
      icon: Smartphone,
      title: "Legacy Technology",
      description: "Outdated systems unable to scale with business growth"
    }
  ];

  const solutions = [
    {
      title: "End-to-End Automation",
      description: "Digitize every step from order to delivery with intelligent workflows",
      benefit: "Reduce manual work by 80%"
    },
    {
      title: "Real-Time Analytics",
      description: "Comprehensive dashboards with actionable supply chain insights",
      benefit: "Improve decision-making speed by 60%"
    },
    {
      title: "API Integration Hub",
      description: "Connect all your systems through our unified platform",
      benefit: "Eliminate data silos completely"
    },
    {
      title: "AI-Powered Optimization",
      description: "Machine learning algorithms continuously improve operations",
      benefit: "Increase efficiency by 40%"
    }
  ];

  const metrics = [
    { metric: "80%", label: "Reduction in manual processes" },
    { metric: "60%", label: "Faster decision making" },
    { metric: "40%", label: "Efficiency improvement" },
    { metric: "99.9%", label: "System uptime guarantee" }
  ];

  const technologies = [
    {
      category: "Data & Analytics",
      tools: ["Real-time Dashboards", "Predictive Analytics", "Performance KPIs", "Custom Reports"]
    },
    {
      category: "Integration & APIs",
      tools: ["ERP Connectors", "WMS Integration", "Carrier APIs", "Custom Webhooks"]
    },
    {
      category: "Automation",
      tools: ["Workflow Automation", "Smart Routing", "Auto-notifications", "Exception Handling"]
    },
    {
      category: "Mobile & Cloud",
      tools: ["Mobile Apps", "Cloud Infrastructure", "Real-time Sync", "Offline Capabilities"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageSEO page="useCaseDigitization" />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/95" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 text-base px-4 py-2">
              Supply Chain Digitization
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
              Transform Manual Processes with Technology
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Modernize your supply chain with intelligent automation and real-time visibility
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="bg-accent text-white hover:bg-accent/90 text-lg px-10 py-4 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl">
                  Start Digital Transformation
                </button>
              </Link>
              <Link to="/contact">
                <button className="bg-white/20 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-primary text-lg px-10 py-4 rounded-full font-medium transition-all duration-200">
                  Book Digital Consultation
                </button>
              </Link>
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
                Digital Transformation Challenges
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Legacy processes and systems limit your ability to compete in today's fast-paced market
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
                Our Digitization Platform
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive technology suite to modernize every aspect of your supply chain
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

      {/* Technology Stack */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Complete Technology Stack
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to digitize and optimize your supply chain operations
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 text-primary">{tech.category}</h3>
                    <ul className="space-y-2">
                      {tech.tools.map((tool, toolIndex) => (
                        <li key={toolIndex} className="flex items-center text-sm">
                          <Zap className="h-4 w-4 mr-2 text-secondary" />
                          {tool}
                        </li>
                      ))}
                    </ul>
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
                Digital Transformation Results
              </h2>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                Measurable improvements from day one of implementation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((result, index) => (
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

      {/* Implementation Roadmap */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Digital Transformation Roadmap
              </h2>
              <p className="text-xl text-muted-foreground">
                Structured approach to modernizing your supply chain technology
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  phase: "Discovery",
                  title: "Current State Analysis",
                  description: "Analyze existing processes, systems, and pain points",
                  duration: "2-3 weeks"
                },
                {
                  phase: "Design",
                  title: "Solution Architecture",
                  description: "Design the optimal technology stack and integration approach",
                  duration: "3-4 weeks"
                },
                {
                  phase: "Develop",
                  title: "System Integration & Configuration",
                  description: "Connect systems, configure workflows, and build custom integrations",
                  duration: "6-8 weeks"
                },
                {
                  phase: "Deploy",
                  title: "Go-Live & Optimization",
                  description: "Launch the new digital platform and continuously optimize",
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
              Ready to Digitize Your Supply Chain?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start your digital transformation journey with a comprehensive technology consultation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link to="/contact">
                  Start Digital Transformation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <Link to="/contact">Book Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Digitization;
