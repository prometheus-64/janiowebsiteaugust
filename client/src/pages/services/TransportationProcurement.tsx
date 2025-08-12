import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Truck, Plane, Ship, BarChart3, DollarSign, Clock, Shield, CheckCircle } from 'lucide-react';

const TransportationProcurement = () => {
  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/95" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">
              Strategic Procurement: <span className="text-accent">Add Courier & Customs</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Gain immediate access to a comprehensive vendor portfolio without technical work. Save time onboarding vendors in streamlined fashion, eliminate switching costs, and make core operational decisions without technical constraints.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/assessment">
                <button className="bg-accent text-white hover:bg-accent/90 text-lg px-10 py-4 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl">
                  Analyze Your Freight Spend
                </button>
              </Link>
              <Link to="/calculator/transportation-procurement-roi">
                <button className="bg-white/20 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-primary text-lg px-10 py-4 rounded-full font-medium transition-all duration-200">
                  Calculate Savings
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Procurement Methodology */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-display text-foreground mb-4">
                3-Phase Procurement Methodology
              </h2>
              <p className="text-xl text-muted-foreground">
                Systematic approach that consistently delivers 10-20% cost reductions
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <BarChart3 className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Phase 1: Market Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Comprehensive spend analysis and market intelligence gathering
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2 text-left">
                    <li>• Freight spend categorization by mode</li>
                    <li>• Lane analysis and optimization opportunities</li>
                    <li>• Current rate benchmarking</li>
                    <li>• Service level assessment</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Phase 2: Strategic Sourcing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    RFQ management and expert negotiation across carrier network
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2 text-left">
                    <li>• Carrier pre-qualification process</li>
                    <li>• Structured RFQ development</li>
                    <li>• Multi-round negotiation strategy</li>
                    <li>• Service level guarantee inclusion</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Phase 3: Implementation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Contract execution and ongoing performance management
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2 text-left">
                    <li>• Contract finalization and execution</li>
                    <li>• Carrier onboarding and integration</li>
                    <li>• Performance monitoring setup</li>
                    <li>• Continuous optimization planning</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings by Mode */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-display text-center text-foreground mb-12">
              Specialized Procurement by Transportation Mode
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Truck className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Land Transportation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Services Include:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• LTL & FTL optimization</li>
                      <li>• Regional carrier network development</li>
                      <li>• Last-mile delivery solutions</li>
                      <li>• Dedicated fleet alternatives</li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Typical Savings:</span>
                      <span className="font-bold text-primary">12-18%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Plane className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Air Freight</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Services Include:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Express & standard air services</li>
                      <li>• International air cargo optimization</li>
                      <li>• Charter and expedited solutions</li>
                      <li>• Fuel surcharge management</li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Typical Savings:</span>
                      <span className="font-bold text-primary">8-15%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Ship className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Ocean Freight</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Services Include:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• FCL & LCL optimization</li>
                      <li>• Port-to-port and door-to-door</li>
                      <li>• Contract logistics integration</li>
                      <li>• Intermodal solutions</li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Typical Savings:</span>
                      <span className="font-bold text-primary">15-25%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Market Advantages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-display text-center text-foreground mb-12">
              Our Market Advantages
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <BarChart3 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Market Intelligence</h3>
                    <p className="text-muted-foreground">Real-time rate data and market trends across 10,000+ carrier relationships</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <DollarSign className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Buying Power</h3>
                    <p className="text-muted-foreground">$500M+ annual freight spend provides preferential pricing access</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Speed to Market</h3>
                    <p className="text-muted-foreground">90-day procurement cycles vs. 6-12 months for traditional RFPs</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Risk Mitigation</h3>
                    <p className="text-muted-foreground">Comprehensive carrier vetting and performance guarantees</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Proven Methodology</h3>
                    <p className="text-muted-foreground">Consistent 10-20% savings across 200+ procurement engagements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BarChart3 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Ongoing Optimization</h3>
                    <p className="text-muted-foreground">Continuous rate monitoring and contract renegotiation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & ROI */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-display text-foreground mb-8">
              Proven Results Across Transportation Modes
            </h2>
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15%</div>
                <p className="text-muted-foreground">Average Cost Reduction</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">90</div>
                <p className="text-muted-foreground">Days to Implementation</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <p className="text-muted-foreground">Service Level Maintenance</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">8x</div>
                <p className="text-muted-foreground">Average ROI</p>
              </div>
            </div>
            
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Typical Engagement Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Analysis & Strategy</span>
                    <span className="font-semibold">Days 1-30</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">RFQ & Negotiation</span>
                    <span className="font-semibold">Days 31-60</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Implementation</span>
                    <span className="font-semibold">Days 61-90</span>
                  </div>
                  <div className="flex justify-between items-center border-t pt-4">
                    <span className="font-semibold text-foreground">First Savings Realized</span>
                    <span className="font-bold text-primary">Day 91</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-display text-center text-foreground mb-12">
              Flexible Engagement Models
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Performance-Based Model</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Pay only when we deliver savings - aligned incentives for maximum results
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Includes:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Complete procurement process management</li>
                      <li>• 12-month savings guarantee</li>
                      <li>• Ongoing rate monitoring</li>
                      <li>• Quarterly optimization reviews</li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Fee Structure:</span>
                      <span className="font-bold text-primary">% of savings achieved</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Retainer Model</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Fixed-fee engagement for ongoing procurement and optimization support
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Includes:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Annual procurement strategy development</li>
                      <li>• Continuous market intelligence</li>
                      <li>• Emergency procurement support</li>
                      <li>• Strategic advisory services</li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Fee Structure:</span>
                      <span className="font-bold text-primary">Monthly retainer</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-display text-secondary-foreground mb-6">
              Ready to optimize your freight spend?
            </h2>
            <p className="text-xl text-secondary-foreground/80 mb-8">
              Get a free freight spend analysis and see your savings potential
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/assessment">Get Free Analysis</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white/20 text-white hover:bg-white/10" asChild>
                <Link to="/contact">Speak with Procurement Expert</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransportationProcurement;