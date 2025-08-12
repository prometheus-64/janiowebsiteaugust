import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, TrendingDown, Clock, Users, Shield, Zap, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export default function EcommerceBrands() {
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
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-4">For Ecommerce Brands</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-display font-bold mb-8 animate-fade-in leading-tight tracking-tight">
            Compare Existing Rates Against
            <span className="block text-white">Market Benchmarks</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/80 mb-12 leading-loose max-w-4xl mx-auto animate-slide-up font-light">
            Easily compare rates, onboard new vendors seamlessly, eliminate switching costs, and get accurate billing reconciliation managed completely. Build customized supply chains that manage delays and exceptions automatically.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-scale-in">
            <Link to="/contact">
              <button className="bg-white text-primary hover:bg-gray-100 text-lg px-12 py-4 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Get Your Free Logistics Cost Analysis <ArrowRight className="ml-2 w-5 h-5 inline" />
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
                <span className="text-white/80 font-medium text-sm">Global Entertainment Leader</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-white/80 font-medium text-sm">Fashion Marketplace Pioneer</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-white/80 font-medium text-sm">International Luxury Brand</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-white/80 font-medium text-sm">SOC2 & ISO27001 Certified</span>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Hidden Cost of Managing Logistics In-House</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                If you're managing multiple 3PLs across Asia Pacific, you're likely overspending by 20-30% without even realizing it. But the real cost isn't just money—it's the opportunity cost of your team's time and focus.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-destructive/20 hover:border-destructive/40 transition-colors">
                <CardHeader>
                  <TrendingDown className="h-12 w-12 text-destructive mb-4" />
                  <CardTitle className="text-destructive">You're Bleeding Money in Places You Can't See</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                      <span>Poor rate negotiations because you lack volume leverage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                      <span>Hidden integration and payment processing costs that add up fast</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                      <span>Overhead expenses for managing multiple vendor relationships</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                      <span>Long-term contracts that don't flex with seasonal demand</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-orange-500/20 hover:border-orange-500/40 transition-colors">
                <CardHeader>
                  <Clock className="h-12 w-12 text-orange-500 mb-4" />
                  <CardTitle className="text-orange-500">Your Team is Stuck in Logistics Operations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Weeks spent negotiating contracts with each new 3PL</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Constant firefighting when shipments go wrong across different providers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Manual coordination between multiple systems and platforms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Resources diverted from product development and customer acquisition</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-yellow-500/20 hover:border-yellow-500/40 transition-colors">
                <CardHeader>
                  <Globe className="h-12 w-12 text-yellow-600 mb-4" />
                  <CardTitle className="text-yellow-600">Every New Market Takes Forever to Launch</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0" />
                      <span>3-6 months to onboard a single 3PL in a new geography</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0" />
                      <span>Separate integrations, testing, and go-live processes for each provider</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0" />
                      <span>Risk assessment and due diligence for every new logistics partner</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0" />
                      <span>Delayed expansion while competitors capture market share</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Card className="bg-muted/50 border-primary/20 max-w-3xl mx-auto">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">The Real Cost</h3>
                  <p className="text-lg">
                    While you're spending months negotiating with 3PLs and managing logistics complexity, your competitors are already selling in new markets and focusing on what actually grows their business.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Leading Brands Choose 4PL Over Multiple 3PLs</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Here's the difference most companies don't understand:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="border-destructive/20">
                <CardHeader>
                  <CardTitle className="text-destructive">Traditional 3PL Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    You manage 5-8 different 3PLs across regions. Each requires separate contracts, integrations, negotiations, and daily oversight. Your team becomes a logistics management company instead of focusing on your core business.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">4PL Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    One strategic partner orchestrates your entire logistics network through 500+ vetted providers. You get better rates, faster deployment, and complete visibility—while your team focuses on growth.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <TrendingDown className="h-12 w-12 text-primary mb-4 rotate-180" />
                  <CardTitle className="text-primary">Financial Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Direct Savings:</strong> 20-50% cost reduction through optimized negotiations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Indirect Savings:</strong> Eliminate internal overhead costs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Flexible Pricing:</strong> No long-term commitments</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <Zap className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-primary">Operational Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Speed:</strong> New services live in 24 hours vs. 2-3 months</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Scalability:</strong> Instant access to additional capacity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Reliability:</strong> Redundancy across 500+ providers</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-primary">Strategic Advantage</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Market Entry:</strong> Launch in new countries in weeks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Resource Allocation:</strong> Redirect logistics overhead to growth</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Competitive Edge:</strong> Better service at lower costs</span>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted by Leading Brands Across Asia Pacific</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="text-center border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">Disney</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm italic">
                    "Global entertainment brand leveraging Janio for seamless Asia Pacific expansion and localized fulfillment strategies."
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">GOAT</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm italic">
                    "Fashion marketplace achieving operational efficiency and cost optimization at scale across multiple Asian markets."
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">Swarovski</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm italic">
                    "Luxury brand maintaining premium service quality while reducing logistics complexity and overhead costs."
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">Beyond The Vines</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm italic">
                    "Growing eCommerce brand scaling rapidly across new geographies with flexible, cost-effective logistics solutions."
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">20-50%</div>
                <div className="text-sm text-muted-foreground">Average Cost Savings</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">2 weeks</div>
                <div className="text-sm text-muted-foreground">vs. 3-6 months traditional</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">99%+</div>
                <div className="text-sm text-muted-foreground">On-time delivery</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">Zero</div>
                <div className="text-sm text-muted-foreground">Internal logistics management</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary relative">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Focus on Growing Your Business Instead of Managing Logistics?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Stop overspending on logistics complexity. Join Disney, GOAT, Swarovski, and other leading brands who've already made the switch to 4PL.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
              <h3 className="text-xl font-semibold mb-4">Get immediate access to:</h3>
              <ul className="grid md:grid-cols-2 gap-4 text-left">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>500+ vetted 3PLs across Asia Pacific</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>20-50% cost savings with zero overhead</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>2-week deployment vs. months</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Enterprise-grade security and compliance</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4" asChild>
                <Link to="/contact">
                  Get Your Free Logistics Cost Analysis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <div>
                <Button variant="outline" size="lg" className="border-white hover:bg-white/10 text-[#142d70]" asChild>
                  <Link to="/use-cases">
                    See How We Work
                  </Link>
                </Button>
              </div>
            </div>

            <div className="mt-12 space-y-2 text-sm opacity-80">
              <p><strong>Email:</strong> hello@janio.asia | <strong>Phone:</strong> +65 XXXX XXXX</p>
              <p><strong>Office:</strong> Singapore • Hong Kong • Bangkok • Jakarta</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}