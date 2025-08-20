import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Building, Users, TrendingUp, Shield, Zap, Globe, DollarSign, Target, Ship, Clock, Package } from "lucide-react";
import { Link } from "react-router-dom";

export default function B2CImportGrowth() {
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
          <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6 animate-fade-in leading-tight tracking-tight">
            Seamless Import Clearance & Warehouse Delivery
            <span className="block text-white">for E-commerce Growth</span>
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold mb-8 text-white/90 animate-fade-in">
            Beyond Traditional Freight Forwarding - Complete B2C Import Solutions
          </h2>
          <p className="text-lg lg:text-xl text-white/80 mb-12 leading-loose max-w-4xl mx-auto animate-slide-up font-light">
            Go beyond freight forwarding. With Janio, upstream logistics providers can offer end-to-end B2C import solutions in the Philippines, Singapore, and Malaysia—customs clearance, duties & taxes, and warehouse delivery handled under one 4PL network.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-scale-in">
            <Link to="/contact">
              <button className="bg-white text-primary hover:bg-gray-100 text-lg px-12 py-4 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Map Your Import Routes <ArrowRight className="ml-2 w-5 h-5 inline" />
              </button>
            </Link>
            <Link to="/services">
              <button className="bg-transparent border-2 border-white/70 text-white hover:bg-white/10 hover:border-white text-lg px-12 py-4 rounded-full font-medium transition-all duration-200">
                Explore Services
              </button>
            </Link>
          </div>

          {/* Trust Bar */}
          <div className="text-center animate-fade-in">
            <p className="text-white/60 text-sm mb-4">Trusted by logistics providers</p>
            <div className="flex flex-wrap justify-center items-center gap-6 opacity-70">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-white/80 font-medium text-sm">Import-to-Warehouse Solutions</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-white/80 font-medium text-sm">500+ Provider Network</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-white/80 font-medium text-sm">99%+ Clearance Accuracy</span>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Freight Alone Limits Your E-commerce Offering</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Every e-commerce import requires clearance procedures, D&T compliance, and local delivery into warehouses. Without these, large freight flows stall at the port, leaving your clients to piece together fragmented solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-destructive/20 hover:border-destructive/40 transition-colors">
                <CardHeader>
                  <Ship className="h-12 w-12 text-destructive mb-4" />
                  <CardTitle className="text-destructive text-lg">Complex Clearance Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Import permits and documentation</li>
                    <li>• Duty and tax calculations</li>
                    <li>• Regulatory compliance across markets</li>
                    <li>• Exception handling and disputes</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-orange-500/20 hover:border-orange-500/40 transition-colors">
                <CardHeader>
                  <Package className="h-12 w-12 text-orange-500 mb-4" />
                  <CardTitle className="text-orange-500 text-lg">Last-Mile Coordination</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Warehouse delivery arrangements</li>
                    <li>• Multiple trucking contracts</li>
                    <li>• Local partner relationships</li>
                    <li>• Delivery timing coordination</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-yellow-500/20 hover:border-yellow-500/40 transition-colors">
                <CardHeader>
                  <Clock className="h-12 w-12 text-yellow-600 mb-4" />
                  <CardTitle className="text-yellow-600 text-lg">Client Frustration</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Fragmented service experiences</li>
                    <li>• Delays from disconnected providers</li>
                    <li>• Additional coordination overhead</li>
                    <li>• Inconsistent service quality</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-500/20 hover:border-red-500/40 transition-colors">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-red-500 mb-4" />
                  <CardTitle className="text-red-500 text-lg">Lost Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Competitors offering end-to-end solutions</li>
                    <li>• Client defection to integrated providers</li>
                    <li>• Missed wallet share opportunities</li>
                    <li>• Revenue limited to freight only</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 text-center">
              <div className="relative bg-gradient-to-r from-destructive/10 via-orange-500/10 to-yellow-600/10 border-2 border-destructive/20 rounded-2xl max-w-4xl mx-auto p-12 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent"></div>
                <div className="absolute top-4 right-4 w-32 h-32 bg-destructive/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 bg-orange-500/10 rounded-full blur-xl"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 bg-destructive rounded-full animate-pulse"></div>
                    <h3 className="text-2xl font-bold text-destructive">The Real Cost of Stopping at Freight</h3>
                    <div className="w-3 h-3 bg-destructive rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-destructive/10">
                    <p className="text-xl font-medium text-gray-800 leading-relaxed">
                      While you're coordinating brokers, trucking, and warehouse handovers, your competitors 
                      are offering <span className="font-bold text-destructive">turnkey import-to-door solutions</span>—capturing e-commerce clients who demand 
                      <span className="font-bold text-primary">speed, compliance, and certainty</span>.
                    </p>
                  </div>
                  
                  <div className="mt-6 flex justify-center items-center gap-8 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-orange-500" />
                      <span>Route Setup: 3–6 months</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-destructive" />
                      <span>Market Share Lost</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-yellow-600" />
                      <span>Operational Overhead</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Awareness Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Complete Import-to-Warehouse Orchestration With Janio</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Instead of fragmented partners for clearance and delivery, Janio offers a single orchestrated solution across the Philippines, Singapore, and Malaysia.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="border-2 border-destructive/30 bg-destructive/5 hover:bg-destructive/10 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-destructive"></div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-destructive/20 rounded-full flex items-center justify-center">
                  <span className="text-destructive font-bold text-sm">✗</span>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-destructive text-xl font-bold flex items-center gap-2">
                    <Building className="w-5 h-5" />
                    Traditional Approach (Fragmented & Risky)
                  </CardTitle>
                  <Badge variant="destructive" className="w-fit">Disconnected Partners</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Separate <strong>customs brokers</strong> for each country</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Multiple <strong>trucking contracts</strong> to warehouses</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">High risk of <strong>delays and disputes</strong></span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/40 bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/15 transition-all duration-300 relative overflow-hidden shadow-lg">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-primary text-xl font-bold flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Janio's 4PL Approach (Unified & Seamless)
                  </CardTitle>
                  <Badge className="w-fit bg-primary/20 text-primary hover:bg-primary/30">Integrated Solution</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-gray-700">One partner for <strong>clearance + warehouse delivery</strong></span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Standardized <strong>SLAs across markets</strong></span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Proven reliability with <strong>500+ vetted partners</strong></span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <Ship className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-primary">End-to-End Import Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Import Clearance:</strong> All permits, duties & taxes handled</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Direct Delivery:</strong> Into fulfillment warehouses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Exception Management:</strong> Delays and issues handled</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <Globe className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-primary">Multi-Market Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Philippines:</strong> Proven compliance and delivery network</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Singapore:</strong> Hub operations with regional reach</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Malaysia:</strong> Local expertise and fulfillment</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <Target className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-primary">Revenue Growth Partnership</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Wallet Share:</strong> Capture additional services revenue</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Client Retention:</strong> Offer complete solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Faster Go-Live:</strong> For your e-commerce clients</span>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Flexible Partnership Options for Import Solutions</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <CardTitle className="text-primary">Freight + Clearance</CardTitle>
                  <CardDescription>Best for freight forwarders expanding services</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Add customs clearance to freight services</li>
                    <li>• Maintain client relationships</li>
                    <li>• Access to compliance expertise</li>
                    <li>• Revenue share on clearance services</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <CardTitle className="text-primary">End-to-End Integration</CardTitle>
                  <CardDescription>Best for logistics providers seeking full solutions</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Complete import-to-warehouse offering</li>
                    <li>• Unified SLAs across all services</li>
                    <li>• Your brand on all touchpoints</li>
                    <li>• Comprehensive revenue opportunities</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <CardTitle className="text-primary">Market Expansion</CardTitle>
                  <CardDescription>Best for expanding into new Southeast Asian markets</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Leverage Janio networks in new countries</li>
                    <li>• Maintain operations in existing markets</li>
                    <li>• Gradual expansion with proven partners</li>
                    <li>• Market-specific revenue sharing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <CardTitle className="text-primary">White-Label Platform</CardTitle>
                  <CardDescription>Best for technology-focused logistics companies</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Full platform access under your brand</li>
                    <li>• API integration with existing systems</li>
                    <li>• Custom functionality development</li>
                    <li>• Scalable pricing models</li>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How Logistics Providers Are Growing E-commerce with Janio</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">Global Freight Forwarder</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-orange-600">Challenge:</h4>
                      <p className="text-sm">Clients needing complete import solutions beyond freight</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600">Solution:</h4>
                      <p className="text-sm">Integrated clearance and delivery through Janio partnership</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600">Result:</h4>
                      <p className="text-sm">Enabled clients to expand into Southeast Asia e-commerce</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">Regional Logistics Provider</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-orange-600">Challenge:</h4>
                      <p className="text-sm">Complex import requirements across multiple markets</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600">Solution:</h4>
                      <p className="text-sm">Streamlined operations through Janio's unified platform</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600">Result:</h4>
                      <p className="text-sm">Faster turnaround and fewer exceptions across PH, SG, MY</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">Leading Marketplace Partner</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-orange-600">Challenge:</h4>
                      <p className="text-sm">Scaling cross-border flows with compliance requirements</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600">Solution:</h4>
                      <p className="text-sm">Combined freight with Janio's import expertise</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600">Result:</h4>
                      <p className="text-sm">Scaled cross-border flows with on-ground B2C import support</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">99%+</div>
                <div className="text-sm text-muted-foreground">First-time Clearance Accuracy</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">20–30%</div>
                <div className="text-sm text-muted-foreground">Faster Import-to-Warehouse Delivery</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Vetted Last-mile & Fulfillment Partners</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">6,000+</div>
                <div className="text-sm text-muted-foreground">Tonnes Handled Monthly</div>
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
              Ready to Add Import Clearance & Delivery to Your Freight Offering?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Stop leaving value at the port. Partner with Janio to deliver full import-to-warehouse solutions for your e-commerce clients in the Philippines, Singapore, and Malaysia.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Get immediate access to:</h3>
              <ul className="grid md:grid-cols-2 gap-4 text-left">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span className="text-white">Import permits, duties & taxes handled</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span className="text-white">Direct delivery into fulfillment warehouses</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span className="text-white">Unified SLAs & visibility across markets</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span className="text-white">Faster go-live for your clients</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4" asChild>
                <Link to="/contact">
                  Partner With Janio Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <div>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
                  <Link to="/use-cases">
                    See Partnership Success Stories
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