import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PersonaCard from '@/components/PersonaCard';
import HowItWorksStep from '@/components/HowItWorksStep';
import heroImage from '@/assets/hero-elegant-premium.jpg';
import dashboardImage from '@/assets/dashboard-analytics.jpg';
import { Settings, DollarSign, Network, BarChart3, Search, Lightbulb, Play, CheckCircle, ArrowRight, Users, Globe, Clock, Shield, MapPin, Package, TrendingDown } from 'lucide-react';
const Index = () => {
  const icpSolutions = [{
    title: "For Ecommerce Brands",
    headline: "Compare rates, eliminate switching costs",
    subtext: "Easily compare existing rates against market benchmarks, onboard new vendors seamlessly, and get accurate billing reconciliation. Example: Fashion brands reduce shipping costs by 15% during peak season.",
    href: "/solutions/ecommerce-brands",
    icon: <Settings className="w-6 h-6" />
  }, {
    title: "For Marketplaces",
    headline: "Work with any partner combination",
    subtext: "Procure specific capabilities and aggressive rates for your well-oiled machine. Work with any combination of partners without technical limitations.",
    href: "/solutions/marketplaces",
    icon: <DollarSign className="w-6 h-6" />
  }, {
    title: "For Logistics Service Providers",
    headline: "Expand capabilities without cannibalization",
    subtext: "Forwarders expand into customs/courier services, warehousing providers offer end-to-end ecommerce services, and upgrade technical stacks without complexity.",
    href: "/solutions/logistics-partners",
    icon: <Network className="w-6 h-6" />
  }];
  const steps = [{
    stepNumber: 1,
    title: "Assess",
    description: "We analyze your current logistics setup",
    icon: <Search className="w-6 h-6" />
  }, {
    stepNumber: 2,
    title: "Design",
    description: "Custom 4PL solution across all modes",
    icon: <Lightbulb className="w-6 h-6" />
  }, {
    stepNumber: 3,
    title: "Execute",
    description: "Expert team manages day-to-day operations",
    icon: <Play className="w-6 h-6" />
  }, {
    stepNumber: 4,
    title: "Optimize",
    description: "Continuous improvement and scaling",
    icon: <CheckCircle className="w-6 h-6" />
  }];
  const metrics = [{
    value: "5M+",
    label: "Shipments delivered per month",
    icon: <Package className="w-5 h-5" />
  }, {
    value: "99%",
    label: "On-time delivery",
    icon: <Clock className="w-5 h-5" />
  }, {
    value: "15+",
    label: "Countries delivered",
    icon: <Globe className="w-5 h-5" />
  }, {
    value: "$10M+",
    label: "Cost saved per year",
    icon: <TrendingDown className="w-5 h-5" />
  }];
  return (
    <div className="min-h-screen bg-background">
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
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-4">Your Gateway to Seamless Cross-Border Logistics</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-bold mb-8 animate-fade-in leading-tight tracking-tight">
              We Simplify
              <span className="block text-white bg-gradient-to-r from-white to-blue-100 bg-clip-text">Logistics in Southeast Asia</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/80 mb-12 leading-loose max-w-4xl mx-auto animate-slide-up font-light">
              Compare rates against market benchmarks, eliminate switching costs, and build customized supply chains. 
              We handle procurement, operations, and billing reconciliation completely.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-scale-in">
              <Link to="/contact">
                <button className="bg-white text-primary hover:bg-gray-100 text-lg px-12 py-4 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Book a Consultation <ArrowRight className="ml-2 w-5 h-5 inline" />
                </button>
              </Link>
              <Link to="/solutions">
                <button className="bg-transparent border-2 border-white/70 text-white hover:bg-white/10 hover:border-white text-lg px-12 py-4 rounded-full font-medium transition-all duration-200">
                  Explore Solutions
                </button>
              </Link>
            </div>
            
            
            {/* Partner Trust Badges */}
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
                  <span className="text-white/80 font-medium text-sm">500+ More Clients</span>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ICP Segmentation Section */}
        <section id="icp-selection" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold font-display text-foreground mb-4">
                Logistics Solutions, Engineered for Your Business
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We understand that one size doesn't fit all. Select your business type to see how Janio provides tailored solutions to solve your unique challenges.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {icpSolutions.map((solution, index) => <div key={solution.href} className="animate-slide-up" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <PersonaCard {...solution} />
                </div>)}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-6">
                Simple Process
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                From Complexity to Competitive
                <span className="block text-primary">Advantage in 3 Steps</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our unified platform and expert services transform your supply chain from a cost center into a growth engine.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {steps.slice(0, 3).map((step, index) => (
                <div key={step.stepNumber} className="animate-scale-in" style={{
                  animationDelay: `${index * 0.2}s`
                }}>
                  <HowItWorksStep {...step} isLast={index === 2} />
                </div>
              ))}
            </div>
            
            <div className="text-center mt-16">
              <Button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300" size="lg" asChild>
                <Link to="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Quantified Proof Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold font-display text-foreground mb-4">
                The Janio Advantage, by the Numbers
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our results speak for themselves. We deliver measurable improvements that impact your bottom line.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => <Card key={metric.label} className="text-center p-6 animate-slide-up hover:shadow-medium transition-all duration-300" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-accent/10 text-accent">
                        {metric.icon}
                      </div>
                    </div>
                    <div className="text-3xl font-bold font-display text-primary mb-2">
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {metric.label}
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Case Study Spotlight */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold font-display text-foreground mb-4">
                See How We Deliver
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden shadow-professional">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="text-3xl font-bold text-primary mb-4">Global Entertainment Leader</div>
                      <blockquote className="text-lg italic text-muted-foreground mb-6">
                        "Janio transformed our Asia Pacific logistics, reducing costs by 35% while enabling us to launch in 5 new markets in record time."
                      </blockquote>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span>35% Reduction in logistics costs</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span>5 new markets launched in 6 weeks</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span>99.2% delivery accuracy maintained</span>
                        </li>
                      </ul>
                    </div>
                    <div className="text-center">
                      <img 
                        src={dashboardImage} 
                        alt="Global Entertainment Leader success story visualization" 
                        className="w-full h-auto rounded-lg shadow-medium"
                      />
                    </div>
                  </div>
                  
                  <div className="text-center mt-8">
                    <Button variant="outline" size="lg" asChild>
                      <Link to="/use-cases">
                        Read the Full Story
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative container-narrow text-center">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Ready to Transform Your Supply Chain?
              </h2>
              <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
                Schedule a free, no-obligation strategy session with a Janio logistics expert and discover your optimization potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact">
                  <button className="btn-cta">
                    Book My Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5 inline" />
                  </button>
                </Link>
                <Link to="/solutions">
                  <button className="btn-ghost-dark">
                    Explore Solutions
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SEA Coverage Map Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                Complete Southeast Asia Coverage
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From Singapore to Sydney, Bangkok to Hong Kong, and everywhere in between - we've got your logistics covered across 15+ countries
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Key Markets Section */}
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Key Markets</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    // Southeast Asia
                    { country: "Singapore", flag: "🇸🇬" },
                    { country: "Malaysia", flag: "🇲🇾" },
                    { country: "Thailand", flag: "🇹🇭" },
                    { country: "Indonesia", flag: "🇮🇩" },
                    { country: "Philippines", flag: "🇵🇭" },
                    // East Asia
                    { country: "Hong Kong", flag: "🇭🇰" },
                    { country: "Taiwan", flag: "🇹🇼" },
                    { country: "South Korea", flag: "🇰🇷" },
                    { country: "Japan", flag: "🇯🇵" },
                    // Oceania
                    { country: "Australia", flag: "🇦🇺" }
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center gap-3 p-4 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow h-24">
                      <span className="text-2xl">{item.flag}</span>
                      <span className="font-medium text-gray-800 text-center text-xs">{item.country}</span>
                      <MapPin className="w-3 h-3 text-primary" />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Coverage Capabilities Section */}
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Coverage Capabilities</h3>
                <div className="bg-white p-6 rounded-xl shadow-lg flex-1 flex items-center justify-center">
                  <div className="space-y-3 w-full">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Last-mile delivery in 500+ cities</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Cross-border customs clearance</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Local warehousing & fulfillment</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Regional freight consolidation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Multi-currency billing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    );
};

export default Index;