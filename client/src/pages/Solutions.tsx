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
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/95" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
              End-to-End Logistics, Engineered for Your Industry
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-8">
              Your business isn't generic, and your logistics partner shouldn't be either. Discover how Janio's industry-specific 4PL solutions are built to solve your biggest challenges and unlock new opportunities for growth.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-background">
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

      {/* Trust Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-foreground mb-4">
              The Partner of Choice for Industry Leaders
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're proud to power the supply chains for a diverse range of businesses across the globe.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 items-center justify-center">
            {[
              { name: "Disney", industry: "Entertainment" },
              { name: "GOAT", industry: "Fashion" },
              { name: "Swarovski", industry: "Luxury" },
              { name: "Beyond The Vines", industry: "Ecommerce" },
              { name: "Shopee", industry: "Marketplace" },
              { name: "Lazada", industry: "Marketplace" },
              { name: "Shein", industry: "Fashion" },
              { name: "500+ More", industry: "Various" }
            ].map((client, index) => (
              <Card key={client.name} className="text-center p-6 hover:shadow-medium transition-shadow duration-300">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg text-primary mb-2">{client.name}</h3>
                  <p className="text-sm text-muted-foreground">{client.industry}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/use-cases">
                View Our Use Cases
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;