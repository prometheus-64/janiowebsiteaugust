import React from 'react';
import { Link } from 'react-router-dom';
import PageSEO from '@/components/PageSEO';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { DollarSign, TrendingDown, BarChart3, Shield, Clock, CheckCircle } from 'lucide-react';

const ProcurementTeams = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO page="procurementTeams" />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-display text-foreground mb-6">
              Cut freight costs by up to <span className="text-primary">15%</span> with expert procurement
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Leverage our market intelligence and buying power to secure optimal rates across Land, Air, and Ocean freight.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" asChild>
                <Link to="/contact">Analyze Your Freight Spend</Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/calculator/transportation-procurement-roi">Calculate Savings</Link>
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
              The hidden costs of DIY freight procurement
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <TrendingDown className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Market Rate Volatility</h3>
                      <p className="text-muted-foreground">Without real-time market intelligence, you're paying yesterday's rates in today's market.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <DollarSign className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Limited Buying Power</h3>
                      <p className="text-muted-foreground">Individual shippers lack the volume leverage needed for optimal rates.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Time-Intensive Process</h3>
                      <p className="text-muted-foreground">RFQ management consumes valuable procurement team bandwidth.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <BarChart3 className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Lack of Benchmarking</h3>
                      <p className="text-muted-foreground">No visibility into market rates leads to overpaying across modes.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-4">Typical Procurement Challenges:</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Rate Increases YoY</span>
                    <span className="font-semibold text-destructive">8-15%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Time on RFQ Process</span>
                    <span className="font-semibold text-destructive">40+ hrs/month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Market Rate Accuracy</span>
                    <span className="font-semibold text-destructive">60-70%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Savings vs. Market</span>
                    <span className="font-semibold text-destructive">-5% to -12%</span>
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
                Transportation Procurement as a Service
              </h2>
              <p className="text-xl text-muted-foreground">
                Expert procurement that delivers measurable cost savings and process efficiency
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Market Intelligence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Real-time rate benchmarking across all transportation modes</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Expert Negotiation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Specialized team with deep carrier relationships and negotiation expertise</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Buying Power</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Aggregate volume leverage for optimal rates across our network</p>
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
              Why Procurement Teams Choose Janio
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Immediate Cost Reduction</h3>
                    <p className="text-muted-foreground">Average 15% freight cost reduction in first 90 days</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Market-Leading Rates</h3>
                    <p className="text-muted-foreground">Access to preferential pricing across Land, Air, and Ocean</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Process Automation</h3>
                    <p className="text-muted-foreground">Eliminate manual RFQ management and rate comparison</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Strategic Focus</h3>
                    <p className="text-muted-foreground">Free up team to focus on strategic supplier relationships</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Performance Guarantees</h3>
                    <p className="text-muted-foreground">SLA-backed service levels and cost commitments</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Continuous Optimization</h3>
                    <p className="text-muted-foreground">Ongoing rate monitoring and contract optimization</p>
                  </div>
                </div>
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
              Ready to reduce your freight costs?
            </h2>
            <p className="text-xl text-secondary-foreground/80 mb-8">
              Get a free freight spend analysis and see your potential savings
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">Book Free Consultation</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white/20 text-white hover:bg-white/10" asChild>
                <Link to="/contact">Contact Procurement Expert</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcurementTeams;
