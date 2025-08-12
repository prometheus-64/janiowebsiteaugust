import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Building, Users, TrendingUp, Shield, Zap, Globe, DollarSign, Target } from "lucide-react";
import { Link } from "react-router-dom";

export default function LogisticsPartners() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
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
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-4">For Logistics Service Providers</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-display font-bold mb-8 animate-fade-in leading-tight tracking-tight">
            Expand Capabilities
            <span className="block text-white">Without Cannibalization</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/80 mb-12 leading-loose max-w-4xl mx-auto animate-slide-up font-light">
            Forwarders expand into customs/courier services, warehousing providers offer end-to-end ecommerce services, and expand into new markets without complexity. Partnerships and cross-company collaboration that list your core capabilities as sales channels.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-scale-in">
            <Link to="/contact">
              <button className="bg-white text-primary hover:bg-gray-100 text-lg px-12 py-4 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Explore Partnership Opportunities <ArrowRight className="ml-2 w-5 h-5 inline" />
              </button>
            </Link>
            <Link to="/services">
              <button className="bg-transparent border-2 border-white/70 text-white hover:bg-white/10 hover:border-white text-lg px-12 py-4 rounded-full font-medium transition-all duration-200">
                View Platform
              </button>
            </Link>
          </div>

          {/* Trust Bar */}
          <div className="text-center animate-fade-in">
            <p className="text-white/60 text-sm mb-4">Trusted by logistics providers</p>
            <div className="flex flex-wrap justify-center items-center gap-6 opacity-70">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-white/80 font-medium text-sm">White-Label Platform</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-white/80 font-medium text-sm">500+ Provider Network</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-white/80 font-medium text-sm">Revenue from Day One</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-white/80 font-medium text-sm">SOC2 Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Problem Awareness Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Limited by Your Current Asset Base?</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Every time a client asks for services you can't provide, you face a choice: massive capital investment or lost revenue. Meanwhile, competitors with broader capabilities are capturing your clients and market share.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-destructive/20 hover:border-destructive/40 transition-colors">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-destructive mb-4" />
                  <CardTitle className="text-destructive text-lg">Clients Outgrowing Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Fulfillment requests in markets you don't serve</li>
                    <li>• Transportation modes you don't operate</li>
                    <li>• Specialized services requiring major investments</li>
                    <li>• Requirements exceeding current capacity</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-orange-500/20 hover:border-orange-500/40 transition-colors">
                <CardHeader>
                  <DollarSign className="h-12 w-12 text-orange-500 mb-4" />
                  <CardTitle className="text-orange-500 text-lg">High Capital Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Warehouse leases and setup costs</li>
                    <li>• Transportation assets and equipment</li>
                    <li>• Technology infrastructure investment</li>
                    <li>• Staff hiring and training costs</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-yellow-500/20 hover:border-yellow-500/40 transition-colors">
                <CardHeader>
                  <Target className="h-12 w-12 text-yellow-600 mb-4" />
                  <CardTitle className="text-yellow-600 text-lg">Revenue Walking Away</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• "No" responses damaging relationships</li>
                    <li>• Referrals to competitors</li>
                    <li>• Lost wallet share as clients diversify</li>
                    <li>• Stagnant growth from limited offerings</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-500/20 hover:border-red-500/40 transition-colors">
                <CardHeader>
                  <Users className="h-12 w-12 text-red-500 mb-4" />
                  <CardTitle className="text-red-500 text-lg">Competitive Pressure</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Larger players with end-to-end solutions</li>
                    <li>• New entrants with VC backing</li>
                    <li>• Technology platforms disrupting models</li>
                    <li>• Margin compression from commoditization</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Card className="bg-muted/50 border-primary/20 max-w-3xl mx-auto">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">The Real Cost</h3>
                  <p className="text-lg">
                    Every client request you can't fulfill is potential revenue walking to a competitor. Worse, it's a crack in the relationship that eventually leads to complete client loss.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Solution Awareness Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">White-Label 4PL: The Asset-Light Expansion Strategy</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Instead of building new capabilities, become the orchestrator of existing ones. Our white-label platform lets you offer comprehensive logistics solutions under your brand without any asset investment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="border-destructive/20">
                <CardHeader>
                  <CardTitle className="text-destructive">Traditional Expansion Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Invest millions in warehouses, vehicles, and technology. Hire teams. Take 12-18 months to launch. Risk capital in uncertain markets.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">White-Label 4PL Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Instant access to our entire 500+ provider network under your brand. Launch new services in days, not months. Generate revenue from day one with zero capital investment.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <Building className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-primary">Your Brand, Our Infrastructure</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Complete white-label platform with your branding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Access to 500+ provider network</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Operations support under your name</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <DollarSign className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-primary">Revenue Model</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Expand service catalog immediately</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Capture more wallet share from existing clients</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Generate recurring revenue from network</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-primary">Risk Mitigation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>No capital investment required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Performance guarantees backed by multiple providers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Exit flexibility if priorities change</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Partnership Models Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Flexible Partnership Options</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <CardTitle className="text-primary">White-Label Reseller</CardTitle>
                  <CardDescription>Best for fulfillment providers and regional logistics companies</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Use Janio platform under your brand</li>
                    <li>• Maintain client relationships and billing</li>
                    <li>• Access to full provider network</li>
                    <li>• Revenue sharing on network services</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <CardTitle className="text-primary">Technology Integration</CardTitle>
                  <CardDescription>Best for freight forwarders and consolidators</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Integrate Janio capabilities into your platform</li>
                    <li>• Offer expanded services through API</li>
                    <li>• Maintain your technology stack</li>
                    <li>• Per-transaction or subscription pricing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <CardTitle className="text-primary">Geographic Expansion</CardTitle>
                  <CardDescription>Best for logistics companies expanding regionally</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Leverage Janio network in new markets</li>
                    <li>• Maintain operations in existing markets</li>
                    <li>• Gradual expansion with proven partners</li>
                    <li>• Market-specific revenue sharing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <CardTitle className="text-primary">Custom Partnership</CardTitle>
                  <CardDescription>Best for unique business models and requirements</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Tailored solutions for specific needs</li>
                    <li>• Custom branding and functionality</li>
                    <li>• Specialized service development</li>
                    <li>• Negotiated commercial terms</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Success Stories Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How LSPs Are Growing with Janio</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">Regional Fulfillment Provider</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-orange-600">Challenge:</h4>
                      <p className="text-sm">Clients requesting services in Southeast Asian markets beyond home base</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600">Solution:</h4>
                      <p className="text-sm">White-label access to Janio's fulfillment network</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600">Result:</h4>
                      <p className="text-sm">40% revenue increase within 6 months, zero client defection</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">Freight Consolidator</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-orange-600">Challenge:</h4>
                      <p className="text-sm">Limited last-mile delivery capabilities hurting competitiveness</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600">Solution:</h4>
                      <p className="text-sm">Integrated Janio's delivery network through API partnership</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600">Result:</h4>
                      <p className="text-sm">25% increase in average deal size</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">Technology Platform</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-orange-600">Challenge:</h4>
                      <p className="text-sm">Clients needed physical logistics to complement digital services</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600">Solution:</h4>
                      <p className="text-sm">White-label logistics capabilities through Janio partnership</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600">Result:</h4>
                      <p className="text-sm">Transformed to comprehensive logistics partner</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">35%</div>
                <div className="text-sm text-muted-foreground">Average Revenue Growth</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">95%+</div>
                <div className="text-sm text-muted-foreground">Partner Client Retention</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">30 days</div>
                <div className="text-sm text-muted-foreground">Time to Launch</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">90 days</div>
                <div className="text-sm text-muted-foreground">Positive ROI Timeline</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Expand Without the Investment?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Stop saying "no" to profitable opportunities. Join successful LSPs who've expanded their capabilities and grown revenue through our white-label 4PL platform.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Get immediate access to:</h3>
              <ul className="grid md:grid-cols-2 gap-4 text-left">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span className="text-white">500+ vetted providers across Asia Pacific</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span className="text-white">White-label technology platform</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span className="text-white">Operations support and expert management</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span className="text-white">Revenue generation from day one</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4" asChild>
                <Link to="/contact">
                  Explore Partnership Opportunities
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <div>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
                  <Link to="/use-cases">
                    See the Platform in Action
                  </Link>
                </Button>
              </div>
            </div>

            <div className="mt-12 space-y-2 text-sm opacity-80">
              <p><strong>Partner Development Team</strong></p>
              <p><strong>Email:</strong> partners@janio.asia | <strong>Phone:</strong> +65 XXXX XXXX</p>
              <p><strong>Office:</strong> Singapore • Hong Kong • Bangkok • Jakarta</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}