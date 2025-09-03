import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, ShoppingCart, Eye, FileText, ArrowRight, CheckCircle, Monitor } from 'lucide-react';

const Services = () => {
  const servicesRef = React.useRef<HTMLDivElement>(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: "Multi-Carrier Platform (MCPMS)",
      headline: "Complete logistics command center with AI-powered intelligence.",
      description: "Transform your multi-carrier logistics operations with real-time visibility, predictive analytics, and automated workflows.",
      icon: <Monitor className="w-12 h-12" />,
      href: "/services/mcpms",
      benefits: [
        "Real-time operations dashboard",
        "AI-powered exception management", 
        "Automated allocation rules",
        "Unified financial control"
      ],
      bgClass: "bg-gradient-to-br from-cyan-50 to-blue-100"
    },
    {
      title: "Logistics as a Service (LaaS)",
      headline: "Your complete logistics department, outsourced.",
      description: "We manage everything from procurement to delivery, giving you complete 4PL coverage without the overhead.",
      icon: <Package className="w-12 h-12" />,
      href: "/services/logistics-as-a-service",
      benefits: [
        "Complete end-to-end management",
        "Access to 500+ vetted providers",
        "Reduce operational costs by 20-50%",
        "Focus on core business activities"
      ],
      bgClass: "bg-gradient-to-br from-blue-50 to-indigo-100"
    },
    {
      title: "Strategic Procurement",
      headline: "Leverage our network and AI-powered platform.",
      description: "Reduce procurement costs by up to 25% through our extensive carrier network and optimization algorithms.",
      icon: <ShoppingCart className="w-12 h-12" />,
      href: "/services/transportation-procurement",
      benefits: [
        "AI-powered rate optimization",
        "Access to exclusive carrier rates",
        "Automated procurement workflows",
        "25% average cost reduction"
      ],
      bgClass: "bg-gradient-to-br from-emerald-50 to-teal-100"
    },
    {
      title: "Supply Chain Control Tower",
      headline: "Gain complete, real-time visibility.",
      description: "Get predictive analytics across your entire supply chain with proactive exception management.",
      icon: <Eye className="w-12 h-12" />,
      href: "/services/control-tower",
      benefits: [
        "Real-time shipment tracking",
        "Predictive delay notifications",
        "Performance analytics dashboard",
        "Proactive issue resolution"
      ],
      bgClass: "bg-gradient-to-br from-purple-50 to-violet-100"
    },
    {
      title: "Automated Invoice Audit",
      headline: "Eliminate errors and recover overcharges.",
      description: "Recover 8-12% of your logistics spend with automated invoice auditing and error detection.",
      icon: <FileText className="w-12 h-12" />,
      href: "/services/invoice-audit",
      benefits: [
        "Automated error detection",
        "8-12% average recovery rate",
        "Detailed audit reporting",
        "Carrier accountability tracking"
      ],
      bgClass: "bg-gradient-to-br from-amber-50 to-orange-100"
    }
  ];

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
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-4">Comprehensive Service Portfolio</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-display font-bold mb-8 animate-fade-in leading-tight tracking-tight">
            The Building Blocks of a
            <span className="block text-white bg-gradient-to-r from-white to-blue-100 bg-clip-text">Smarter Supply Chain</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/80 mb-12 leading-loose max-w-4xl mx-auto animate-slide-up font-light">
            Janio's suite of services provides the technology, expertise, and network to optimize every aspect of your logistics. Explore our capabilities and build the solution that fits your business.
          </p>
          
          <div className="flex justify-center items-center mb-16 animate-scale-in">
            <button onClick={scrollToServices} className="bg-white text-primary hover:bg-gray-100 text-lg px-12 py-4 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Explore our Services <ArrowRight className="ml-2 w-5 h-5 inline" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From complete outsourcing to targeted optimization tools, our services are designed to deliver efficiency and control.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={service.href} 
                className={`group relative overflow-hidden border-none shadow-medium hover:shadow-strong transition-all duration-300 animate-slide-up ${service.bgClass}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white/80 backdrop-blur-sm mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <div className="text-primary">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-center mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-lg font-medium text-center text-primary">
                    {service.headline}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6 text-center leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="default" 
                    size="lg" 
                    asChild 
                    className="w-full group-hover:bg-primary-hover transition-colors duration-300"
                  >
                    <Link to={service.href} className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Integration Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-foreground mb-6">
              One Platform, Total Control
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              All our services are powered by a single, integrated technology platform, giving you a unified view and seamless data flow across your entire logistics operation.
            </p>
            <div className="bg-white rounded-2xl shadow-professional p-8 mb-8">
              <img 
                src="/lovable-uploads/8c68f958-3573-4ff2-9966-82fbfd805748.png" 
                alt="Janio Platform Dashboard" 
                className="w-full h-auto max-h-96 object-contain rounded-lg"
              />
            </div>
            <Button variant="outline" size="xl" asChild>
              <Link to="/contact">
                Request a Platform Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-8 leading-tight">
              Ready to Build Your 
              <span className="block text-white">Perfect Logistics Solution?</span>
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
              Let's discuss how our services can be configured to meet your specific business needs and growth objectives.
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
                <button className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-4 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;