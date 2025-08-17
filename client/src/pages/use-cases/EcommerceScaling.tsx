import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { TrendingUp, Package, Zap, Globe, CheckCircle, ArrowRight } from 'lucide-react';

const EcommerceScaling = () => {
  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-display text-foreground mb-6">
              <span className="text-primary">Scale</span> operations without logistics complexity
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transform your e-commerce logistics from a growth bottleneck into a competitive advantage with scalable 4PL solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" asChild>
                <Link to="/services/logistics-as-a-service">See LaaS Solution</Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/contact">Book Scaling Consultation</Link>
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
              The E-commerce Scaling Challenge
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Exponential Growth Complexity</h3>
                    <p className="text-muted-foreground">Order volumes increase exponentially while logistics capabilities lag behind</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Package className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Inventory Management Nightmares</h3>
                    <p className="text-muted-foreground">Multi-channel inventory becomes impossible to manage accurately</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Peak Season Disasters</h3>
                    <p className="text-muted-foreground">Holiday rushes expose every weakness in your logistics operation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Geographic Expansion Barriers</h3>
                    <p className="text-muted-foreground">New markets require new logistics infrastructure and expertise</p>
                  </div>
                </div>
              </div>
              <div className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-4">Scaling Pain Points:</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Order Processing Time</span>
                    <span className="font-semibold text-destructive">+300% during growth</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Customer Complaints</span>
                    <span className="font-semibold text-destructive">+150% peak season</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Team Burnout Rate</span>
                    <span className="font-semibold text-destructive">60% during scaling</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">IT System Downtime</span>
                    <span className="font-semibold text-destructive">2-5% revenue loss</span>
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
                Scalable E-commerce Logistics Solution
              </h2>
              <p className="text-xl text-muted-foreground">
                Purpose-built 4PL platform designed for rapid e-commerce growth
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Elastic Fulfillment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Scale warehouse capacity up or down based on demand without fixed costs</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Smart Automation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">AI-powered inventory management and automated order processing</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Global Reach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Instant access to worldwide fulfillment network and transportation</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-display text-center text-foreground mb-12">
              Scale with Confidence
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">10x Order Capacity</h3>
                    <p className="text-muted-foreground">Handle 10x order volume increases without breaking operations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Same-Day Deployment</h3>
                    <p className="text-muted-foreground">Launch in new markets within days, not months</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Peak Season Ready</h3>
                    <p className="text-muted-foreground">Automatic capacity scaling for holiday and promotional peaks</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Cost Optimization</h3>
                    <p className="text-muted-foreground">30% lower fulfillment costs through network optimization</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Customer Experience</h3>
                    <p className="text-muted-foreground">Faster delivery times and improved order accuracy</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Team Freedom</h3>
                    <p className="text-muted-foreground">Focus on growth strategy instead of logistics firefighting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold font-display text-foreground mb-4">
                Scaling Success Story
              </h2>
            </div>
            
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Fashion E-commerce Brand: 500% Growth in 18 Months
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      "Janio's LaaS platform allowed us to scale from 1,000 to 50,000 orders per month without hiring additional logistics staff. Our customer satisfaction actually improved during our rapid growth phase."
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">500%</div>
                        <div className="text-sm text-muted-foreground">Order Growth</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">99.5%</div>
                        <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">40%</div>
                        <div className="text-sm text-muted-foreground">Cost Reduction</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <Button variant="outline" asChild>
                      <Link to="/case-studies">
                        Read Full Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-display text-secondary-foreground mb-6">
              Ready to scale without limits?
            </h2>
            <p className="text-xl text-secondary-foreground/80 mb-8">
              Get a custom scaling plan for your e-commerce logistics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">Book Scaling Consultation</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white/20 text-white hover:bg-white/10" asChild>
                <Link to="/services/logistics-as-a-service">See LaaS Solution</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcommerceScaling;