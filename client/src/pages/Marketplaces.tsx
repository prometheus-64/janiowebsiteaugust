import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Ship, Globe, Zap, Shield, Clock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function Marketplaces() {
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
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-4">For Marketplaces</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-display font-bold mb-8 animate-fade-in leading-tight tracking-tight">
            Work with Any
            <span className="block text-white">Partner Combination</span>
            <span className="block text-white">Without Technical Limitations</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/80 mb-12 leading-loose max-w-4xl mx-auto animate-slide-up font-light">
            Procure specific capabilities and aggressive rates for your well-oiled machine. Work with any combination of partners without technical constraints while maintaining platform-wide visibility and control.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-scale-in">
            <Link to="/contact">
              <button className="bg-white text-primary hover:bg-gray-100 text-lg px-12 py-4 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Map Your Cross-Border Routes <ArrowRight className="ml-2 w-5 h-5 inline" />
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
            <p className="text-white/60 text-sm mb-4">Trusted by industry leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-6 opacity-70">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-white/80 font-medium text-sm">Leading SEA Marketplace</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-white/80 font-medium text-sm">Regional E-commerce Platform</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-white/80 font-medium text-sm">Global Fashion Brand</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-white/80 font-medium text-sm">6,000+ Tonnes Monthly</span>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Cross-Border Logistics Complexity is Limiting Your Marketplace Growth</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Every new route requires a new freight forwarder. Every new country means new clearance procedures. Every shipment involves multiple handoffs and potential failure points. Your marketplace growth is constrained by logistics complexity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-destructive/20 hover:border-destructive/40 transition-colors">
                <CardHeader>
                  <Ship className="h-12 w-12 text-destructive mb-4" />
                  <CardTitle className="text-destructive text-lg">Managing a Web of Providers</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Different freight forwarders for each country pair</li>
                    <li>• Inconsistent service quality across regions</li>
                    <li>• Multiple contracts and payment terms</li>
                    <li>• No single source of truth for visibility</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-orange-500/20 hover:border-orange-500/40 transition-colors">
                <CardHeader>
                  <Clock className="h-12 w-12 text-orange-500 mb-4" />
                  <CardTitle className="text-orange-500 text-lg">Operations Eating Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Export clearance procedures vary by origin</li>
                    <li>• Import requirements change frequently</li>
                    <li>• Manual coordination between teams</li>
                    <li>• Constant firefighting with customs</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-yellow-500/20 hover:border-yellow-500/40 transition-colors">
                <CardHeader>
                  <Globe className="h-12 w-12 text-yellow-600 mb-4" />
                  <CardTitle className="text-yellow-600 text-lg">Slow Route Establishment</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Months to vet freight forwarders</li>
                    <li>• Complex due diligence for clearance</li>
                    <li>• Testing per service provider</li>
                    <li>• Risk assessment per country</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-500/20 hover:border-red-500/40 transition-colors">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-red-500 mb-4" />
                  <CardTitle className="text-red-500 text-lg">Scaling Feels Impossible</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Can't predict peak season capacity</li>
                    <li>• Limited shipment visibility</li>
                    <li>• Inconsistent service levels</li>
                    <li>• Growing operational overhead</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Card className="bg-muted/50 border-primary/20 max-w-3xl mx-auto">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">The Real Cost</h3>
                  <p className="text-lg">
                    While you're coordinating between freight forwarders and dealing with clearance issues, your competitors are launching new routes and capturing market share across Asia Pacific.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Complete Cross-Border Logistics Orchestration</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Instead of managing relationships with dozens of regional freight forwarders, get complete warehouse-to-warehouse logistics through one strategic partnership.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="border-destructive/20">
                <CardHeader>
                  <CardTitle className="text-destructive">Traditional Cross-Border</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    You coordinate between separate providers for pickup, export clearance, air freight, import clearance, and final delivery. Each handoff creates risk and delays.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">Janio's 4PL Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    We orchestrate your entire cross-border supply chain through our network of 500+ vetted providers, giving you seamless operations with single-point accountability.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <Ship className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-primary">Complete Service Coverage</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Warehouse pickup coordination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Export clearance management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Optimized air freight</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Import clearance expertise</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <Zap className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-primary">Key Advantages</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Single point of accountability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Regulatory expertise across all markets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Scalable capacity guaranteed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Real-time visibility</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <Globe className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-primary">Network Coverage</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>8+ countries with local expertise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Multi-modal transportation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>API integration platform</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Marketplace-focused features</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Social Proof Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted by Leading Marketplaces Across Asia</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">Leading SEA Marketplace</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm italic">
                    "Streamlined cross-border operations across multiple Asian markets with consistent service levels and reduced complexity."
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">Regional E-commerce Platform</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm italic">
                    "Achieved operational efficiency and cost optimization while maintaining rapid expansion across Southeast Asia."
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">Shein</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm italic">
                    "Scaled cross-border logistics operations to support explosive growth across Asian markets with reliable service quality."
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">20-30%</div>
                <div className="text-sm text-muted-foreground">Faster Transit Times</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">99%+</div>
                <div className="text-sm text-muted-foreground">First-time Clearance</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">6,000+</div>
                <div className="text-sm text-muted-foreground">Tonnes Monthly</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Vetted Providers</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Technical Integration Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for Marketplace Operations</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">API Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>RESTful APIs for seamless platform connection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Real-time data flow with webhook support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Bulk operations for high-volume processing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">Marketplace Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Multi-vendor support across platforms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Automated HS code classification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Performance analytics and optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Simplify Your Cross-Border Operations?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Stop coordinating between multiple freight forwarders. Join leading SEA marketplaces, regional e-commerce platforms, and other successful marketplaces who've streamlined their cross-border logistics through Janio's 4PL platform.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Get immediate access to:</h3>
              <ul className="grid md:grid-cols-2 gap-4 text-left">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span className="text-white">Complete warehouse-to-warehouse logistics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span className="text-white">20-30% faster transit times</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span className="text-white">Single integration vs. multiple APIs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span className="text-white">Expert regulatory compliance</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4" asChild>
                <Link to="/contact">
                  Map Your Cross-Border Routes
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <div>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
                  <Link to="/use-cases">
                    See Our Network in Action
                  </Link>
                </Button>
              </div>
            </div>

            <div className="mt-12 space-y-2 text-sm opacity-80">
              <p><strong>Email:</strong> marketplace@janio.asia | <strong>Phone:</strong> +65 XXXX XXXX</p>
              <p><strong>Office:</strong> Singapore • Hong Kong • Bangkok • Jakarta</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}