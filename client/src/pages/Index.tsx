import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PersonaCard from '@/components/PersonaCard';
import HowItWorksStep from '@/components/HowItWorksStep';
import LiveChat from '@/components/LiveChat';
import heroImage from '@/assets/hero-elegant-premium.jpg';
import dashboardImage from '@/assets/dashboard-analytics.jpg';
import { Settings, DollarSign, Network, BarChart3, Search, Lightbulb, Play, CheckCircle, ArrowRight, Users, Globe, Clock, Shield, MapPin } from 'lucide-react';
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
    value: "10M+",
    label: "Shipments processed",
    icon: <DollarSign className="w-5 h-5" />
  }, {
    value: "99.5%",
    label: "On-time delivery rate",
    icon: <Clock className="w-5 h-5" />
  }, {
    value: "15+",
    label: "Countries covered",
    icon: <Globe className="w-5 h-5" />
  }, {
    value: "$50M+",
    label: "In cost savings recovered",
    icon: <Shield className="w-5 h-5" />
  }];
  return (
    <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/95" />
          <div className="relative w-full max-w-6xl mx-auto px-6 text-center text-white">
            <h1 className="text-6xl lg:text-8xl font-display font-bold mb-10 animate-fade-in leading-tight tracking-tight">
              We Simplify
              <span className="block text-white bg-gradient-to-r from-white to-blue-100 bg-clip-text">Logistics in Southeast Asia</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/95 mb-16 leading-relaxed max-w-4xl mx-auto animate-slide-up font-light">
              Compare rates against market benchmarks, eliminate switching costs, and build customized supply chains. 
              We handle procurement, operations, and billing reconciliation completely.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-scale-in">
              <Link to="/contact">
                <button className="btn-accent text-lg px-10 py-4 rounded-full">
                  Start Your Assessment <ArrowRight className="ml-2 w-5 h-5 inline" />
                </button>
              </Link>
              <Link to="/solutions">
                <button className="bg-white/20 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-primary text-lg px-10 py-4 rounded-full font-medium transition-all duration-200">
                  Explore Solutions
                </button>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 animate-fade-in max-w-5xl mx-auto">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="flex justify-center mb-3 text-white">
                    {metric.icon}
                  </div>
                  <div className="text-3xl font-bold font-display text-white mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-white/90">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Bar Section */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center">
              <p className="text-lg text-gray-600 font-semibold mb-12 tracking-wide">Trusted by Global Leaders and High-Growth Brands</p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 lg:gap-12 items-center">
                <div className="flex flex-col items-center group hover:scale-105 transition-transform duration-200">
                  <span className="text-xl font-bold text-gray-800 mb-1 group-hover:text-primary transition-colors">Disney</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Entertainment</span>
                </div>
                <div className="flex flex-col items-center group hover:scale-105 transition-transform duration-200">
                  <span className="text-xl font-bold text-gray-800 mb-1 group-hover:text-primary transition-colors">GOAT</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Marketplace</span>
                </div>
                <div className="flex flex-col items-center group hover:scale-105 transition-transform duration-200">
                  <span className="text-xl font-bold text-gray-800 mb-1 group-hover:text-primary transition-colors">Swarovski</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Luxury</span>
                </div>
                <div className="flex flex-col items-center group hover:scale-105 transition-transform duration-200">
                  <span className="text-lg font-bold text-gray-800 mb-1 group-hover:text-primary transition-colors text-center leading-tight">Beyond The Vines</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Retail</span>
                </div>
                <div className="flex flex-col items-center group hover:scale-105 transition-transform duration-200">
                  <span className="text-xl font-bold text-gray-800 mb-1 group-hover:text-primary transition-colors">Shopee</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">E-commerce</span>
                </div>
                <div className="flex flex-col items-center group hover:scale-105 transition-transform duration-200">
                  <span className="text-xl font-bold text-gray-800 mb-1 group-hover:text-primary transition-colors">Lazada</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Marketplace</span>
                </div>
                <div className="flex flex-col items-center group hover:scale-105 transition-transform duration-200">
                  <span className="text-xl font-bold text-gray-800 mb-1 group-hover:text-primary transition-colors">Shein</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Fashion</span>
                </div>
                <div className="flex flex-col items-center group hover:scale-105 transition-transform duration-200">
                  <span className="text-xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">500+</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">More Brands</span>
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
                      <div className="text-3xl font-bold text-primary mb-4">Disney</div>
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
                        alt="Disney success story visualization" 
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
        <section className="py-24 bg-gradient-to-r from-primary to-primary/90 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
          <div className="relative container-narrow text-center">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-8 leading-tight">
                Ready to Transform Your 
                <span className="block text-accent">Supply Chain?</span>
              </h2>
              <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
                Schedule a free, no-obligation strategy session with a Janio logistics expert and discover your optimization potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact">
                  <button className="btn-accent text-lg px-10 py-4 rounded-full shadow-large">
                    Book My Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5 inline" />
                  </button>
                </Link>
                <Link to="/solutions">
                  <button className="btn-secondary text-lg px-10 py-4 rounded-full border-white/30 hover:bg-white/20 text-[#04216c]">
                    Explore Solutions
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SEA Coverage Map Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                Complete Southeast Asia Coverage
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From Singapore to Jakarta, Bangkok to Manila - we've got your logistics covered across 15+ countries
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Markets</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { country: "Singapore", flag: "🇸🇬" },
                    { country: "Malaysia", flag: "🇲🇾" },
                    { country: "Thailand", flag: "🇹🇭" },
                    { country: "Indonesia", flag: "🇮🇩" },
                    { country: "Philippines", flag: "🇵🇭" },
                    { country: "Vietnam", flag: "🇻🇳" },
                    { country: "Cambodia", flag: "🇰🇭" },
                    { country: "Myanmar", flag: "🇲🇲" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                      <span className="text-2xl">{item.flag}</span>
                      <span className="font-medium text-gray-800">{item.country}</span>
                      <MapPin className="w-4 h-4 text-primary ml-auto" />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Coverage Capabilities</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Last-mile delivery in 500+ cities</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Cross-border customs clearance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Local warehousing & fulfillment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Regional freight consolidation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Multi-currency billing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEA Coverage Map Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                Complete Southeast Asia Coverage
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From Singapore to Jakarta, Bangkok to Manila - we've got your logistics covered across 15+ countries
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Markets</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { country: "Singapore", flag: "🇸🇬" },
                    { country: "Malaysia", flag: "🇲🇾" },
                    { country: "Thailand", flag: "🇹🇭" },
                    { country: "Indonesia", flag: "🇮🇩" },
                    { country: "Philippines", flag: "🇵🇭" },
                    { country: "Vietnam", flag: "🇻🇳" },
                    { country: "Cambodia", flag: "🇰🇭" },
                    { country: "Myanmar", flag: "🇲🇲" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                      <span className="text-2xl">{item.flag}</span>
                      <span className="font-medium text-gray-800">{item.country}</span>
                      <MapPin className="w-4 h-4 text-primary ml-auto" />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Coverage Capabilities</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Last-mile delivery in 500+ cities</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Cross-border customs clearance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Local warehousing & fulfillment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Regional freight consolidation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Multi-currency billing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Chat Widget */}
        <LiveChat />
      </div>
    );
};

export default Index;