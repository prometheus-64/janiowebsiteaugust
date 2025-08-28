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
          <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6 animate-fade-in leading-tight tracking-tight">
            Cut Cross-Border Freight Costs by 15% While Improving Delivery Speed
          </h1>
          <p className="text-lg lg:text-xl text-white/80 mb-12 leading-loose max-w-4xl mx-auto animate-slide-up font-light">
            Stop overpaying for fragmented logistics. Our warehouse-to-warehouse service delivers faster clearance, guaranteed capacity, and complete visibility—saving marketplace operators millions annually.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-scale-in">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-12 py-4 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Get Free Freight Audit
              </Button>
            </Link>
          </div>

          {/* Trust Bar */}
          <div className="text-center animate-fade-in">
            <p className="text-white/60 text-sm mb-4">Trusted by industry leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-6 opacity-70">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-white/80 font-medium text-sm">All leading SEA marketplaces</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-white/80 font-medium text-sm">6000+ tonnes shipped monthly</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-white/80 font-medium text-sm">Single platform</span>
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
                    <li>• Risk evaluation per country</li>
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

            <div className="mt-16 text-center">
              <div className="relative bg-gradient-to-r from-destructive/10 via-orange-500/10 to-yellow-600/10 border-2 border-destructive/20 rounded-2xl max-w-4xl mx-auto p-12 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent"></div>
                <div className="absolute top-4 right-4 w-32 h-32 bg-destructive/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 bg-orange-500/10 rounded-full blur-xl"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 bg-destructive rounded-full animate-pulse"></div>
                    <h3 className="text-2xl font-bold text-destructive">The Real Cost of Complex Logistics</h3>
                    <div className="w-3 h-3 bg-destructive rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-destructive/10">
                    <p className="text-xl font-medium text-gray-800 leading-relaxed">
                      While you're <span className="font-bold text-destructive">coordinating between freight forwarders</span> and dealing with clearance issues, 
                      your competitors are <span className="font-bold text-primary">launching new routes</span> and capturing market share across Asia Pacific.
                    </p>
                  </div>
                  
                  <div className="mt-6 flex justify-center items-center gap-8 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Ship className="w-4 h-4 text-orange-500" />
                      <span>Route Setup: 3-6 months</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-destructive" />
                      <span>Market Share Lost</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-yellow-600" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Complete Cross-Border Logistics Orchestration</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Instead of managing relationships with dozens of regional freight forwarders, get complete warehouse-to-warehouse logistics through one strategic partnership.
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
                    <Ship className="w-5 h-5" />
                    Traditional Cross-Border Approach
                  </CardTitle>
                  <Badge variant="destructive" className="w-fit">Fragmented & Risky</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Coordinate <strong>separate providers</strong> for each step</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Each handoff creates <strong>risk and delays</strong></span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Multiple relationships to <strong>manage and optimize</strong></span>
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
                    Janio's 4PL Approach
                  </CardTitle>
                  <Badge className="w-fit bg-primary/20 text-primary hover:bg-primary/30">Unified & Orchestrated</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-gray-700"><strong>One strategic partner</strong> orchestrates everything</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Seamless operations with <strong>single-point accountability</strong></span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Network of <strong>500+ vetted providers</strong></span>
                    </div>
                  </div>
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
                      <span><strong>Rate Benchmarking:</strong> Compare marketplace rates against market standards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Vendor Integration:</strong> Onboard logistics partners seamlessly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Export Clearance:</strong> Managed across all origin countries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Import Expertise:</strong> Local compliance in all destinations</span>
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
                      <span><strong>Billing Management:</strong> Accurate invoicing and reconciliation managed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Exception Handling:</strong> Managing delays and issues automatically</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Scalable Capacity:</strong> Guaranteed across all routes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Real-time Visibility:</strong> Complete supply chain transparency</span>
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
                      <span><strong>Custom Supply Chains:</strong> Build routes customized to marketplace needs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>15+ Countries:</strong> Complete SEA coverage with local expertise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>API Integration:</strong> Single platform for all logistics operations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Marketplace Features:</strong> Built specifically for platform operations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
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
                  Get Free Freight Audit
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}