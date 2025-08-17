import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Network, Eye, Zap, Shield, TrendingUp, CheckCircle } from 'lucide-react';

const SupplyChainLeaders = () => {
  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-display text-foreground mb-6">
              Turn supply chain <span className="text-primary">complexity</span> into competitive advantage
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Achieve true end-to-end visibility and proactive control across your global supply chain with our Control Tower platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" asChild>
                <Link to="/services/control-tower">See Control Tower</Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/contact">Book Your Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-display text-center text-foreground mb-12">
              Managing complexity that grows faster than solutions
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <Eye className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Limited Visibility</h3>
                      <p className="text-muted-foreground">Fragmented systems create blind spots across the global supply chain.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Zap className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Reactive Operations</h3>
                      <p className="text-muted-foreground">Always fighting fires instead of preventing them with predictive insights.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Network className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Disconnected Partners</h3>
                      <p className="text-muted-foreground">Suppliers, carriers, and 3PLs operate in silos without unified coordination.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Performance Gaps</h3>
                      <p className="text-muted-foreground">Unable to identify and address performance issues across the network.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-4">Supply Chain Complexity Impact:</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Shipment Visibility</span>
                    <span className="font-semibold text-destructive">40-60%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Exception Response Time</span>
                    <span className="font-semibold text-destructive">24-48 hrs</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Manual Coordination</span>
                    <span className="font-semibold text-destructive">60-80%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Disruption Cost</span>
                    <span className="font-semibold text-destructive">2-5% of revenue</span>
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
                Supply Chain Control Tower: Your Command Center
              </h2>
              <p className="text-xl text-muted-foreground">
                AI-powered visibility platform with 24/7 expert operations team
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Real-Time Visibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Complete shipment tracking across all modes and partners</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Predictive Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">AI-powered insights that predict and prevent disruptions</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Network className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Unified Operations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Single platform connecting all supply chain partners</p>
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
              Transform Complexity Into Competitive Advantage
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">End-to-End Visibility</h3>
                    <p className="text-muted-foreground">Real-time tracking from supplier to customer across all modes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Proactive Exception Management</h3>
                    <p className="text-muted-foreground">Predict and resolve issues before they impact customers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Performance Optimization</h3>
                    <p className="text-muted-foreground">Continuous improvement based on data-driven insights</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">24/7 Operations Support</h3>
                    <p className="text-muted-foreground">Expert team monitoring and managing your supply chain</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Strategic Intelligence</h3>
                    <p className="text-muted-foreground">Executive dashboards and strategic recommendations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Scalable Platform</h3>
                    <p className="text-muted-foreground">Grows with your business and global expansion</p>
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
              Measurable Impact on Your Supply Chain
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <p className="text-muted-foreground">Shipment Visibility</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">60%</div>
                <p className="text-muted-foreground">Faster Exception Response</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">25%</div>
                <p className="text-muted-foreground">Reduced Disruption Costs</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">99.2%</div>
                <p className="text-muted-foreground">On-Time Performance</p>
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
              Ready to transform your supply chain?
            </h2>
            <p className="text-xl text-secondary-foreground/80 mb-8">
              See how Control Tower can give you the visibility and control you need
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/services/control-tower">See Control Tower Demo</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white/20 text-white hover:bg-white/10" asChild>
                <Link to="/contact">Book Your Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupplyChainLeaders;