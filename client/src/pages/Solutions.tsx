import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Store, Truck, ArrowRight, CheckCircle } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      title: "For Ecommerce Brands",
      headline: "Scale faster, ship smarter.",
      description: "Optimize shipping costs, improve delivery times, and expand globally with a logistics partner built for ecommerce.",
      icon: <ShoppingCart className="w-12 h-12" />,
      href: "/solutions/ecommerce-brands",
      features: [
        "Reduce shipping costs by 20-50%",
        "Access 500+ vetted 3PLs instantly",
        "Launch in new markets in weeks",
        "One platform, one relationship"
      ],
      bgClass: "bg-gradient-to-br from-blue-50 to-indigo-100"
    },
    {
      title: "For Marketplaces",
      headline: "Unify your seller logistics.",
      description: "Standardize fulfillment, simplify seller onboarding, and ensure platform-wide visibility and control.",
      icon: <Store className="w-12 h-12" />,
      href: "/solutions/marketplaces",
      features: [
        "Complete cross-border orchestration",
        "Single point of accountability",
        "99%+ first-time clearance",
        "Real-time visibility dashboard"
      ],
      bgClass: "bg-gradient-to-br from-emerald-50 to-teal-100"
    },
    {
      title: "For Logistics Service Providers",
      headline: "Expand your service portfolio.",
      description: "Add comprehensive, white-label 4PL capabilities to your offerings without the heavy infrastructure investment.",
      icon: <Truck className="w-12 h-12" />,
      href: "/solutions/logistics-partners",
      features: [
        "White-label 4PL platform",
        "Expand service portfolio instantly",
        "No infrastructure investment",
        "Revenue sharing opportunities"
      ],
      bgClass: "bg-gradient-to-br from-purple-50 to-violet-100"
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
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-4">Industry-Specific Solutions</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-display font-bold mb-8 animate-fade-in leading-tight tracking-tight">
            End-to-End Logistics,
            <span className="block text-white">Engineered for Your Industry</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/80 mb-12 leading-loose max-w-4xl mx-auto animate-slide-up font-light">
            Your business isn't generic, and your logistics partner shouldn't be either. Discover how Janio's industry-specific 4PL solutions are built to solve your biggest challenges and unlock new opportunities for growth.
          </p>
          
          <div className="flex justify-center items-center mb-16 animate-scale-in">
            <button 
              onClick={() => document.getElementById('solutions-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary hover:bg-gray-100 text-lg px-12 py-4 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Find Your Solution <ArrowRight className="ml-2 w-5 h-5 inline" />
            </button>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="solutions-section" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-foreground mb-4">
              Find Your Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you're scaling an ecommerce brand, managing a complex marketplace, or expanding your logistics services, we have a proven framework for your success. Choose your path below.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {solutions.map((solution, index) => (
              <Card 
                key={solution.href} 
                className={`group relative overflow-hidden border-none shadow-medium hover:shadow-strong transition-all duration-300 animate-slide-up ${solution.bgClass}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white/80 backdrop-blur-sm mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <div className="text-primary">
                      {solution.icon}
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-center mb-2">
                    {solution.title}
                  </CardTitle>
                  <CardDescription className="text-lg font-medium text-center text-primary">
                    {solution.headline}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6 text-center leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="default" 
                    size="lg" 
                    asChild 
                    className="w-full group-hover:bg-primary-hover transition-colors duration-300"
                  >
                    <Link to={solution.href} className="flex items-center justify-center">
                      Explore {solution.title.split(' ')[1]} Solutions
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Solutions;