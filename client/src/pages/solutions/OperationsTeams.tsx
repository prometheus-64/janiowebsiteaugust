import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Settings, ArrowRight, CheckCircle, TrendingUp, Shield, Clock, Target } from 'lucide-react';
const OperationsTeams = () => {
  const benefits = [{
    icon: <Target className="w-6 h-6" />,
    title: "Focus on Core Business",
    description: "Free your team to drive strategic growth instead of managing daily logistics chaos"
  }, {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Scalability on Demand",
    description: "Instantly scale operations for peak seasons without infrastructure investment"
  }, {
    icon: <Shield className="w-6 h-6" />,
    title: "Expert Technology & Processes",
    description: "Access enterprise-grade WMS and proven fulfillment processes"
  }, {
    icon: <Clock className="w-6 h-6" />,
    title: "Faster Market Expansion",
    description: "Launch in new markets quickly with established logistics networks"
  }];
  const challenges = ["Logistics complexity outpacing team capabilities", "Peak season capacity nightmares", "Team burnout from firefighting mode", "Scaling roadblocks limiting growth", "Unexpected cost surprises"];
  return <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary via-primary/90 to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="flex justify-center mb-6">
              
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold font-display mb-6 animate-fade-in">
              Focus on growth, not logistics firefighting
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed animate-slide-up">
              Scale your e-commerce operations with expert-managed warehousing, fulfillment, 
              and multi-modal transportation. Free your team to drive strategic growth instead 
              of managing daily logistics chaos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button variant="cta" size="xl" asChild>
                <Link to="/contact">
                  Book Your Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="hero" size="xl" asChild>
                <Link to="/services/logistics-as-a-service">
                  Explore LaaS Solution
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold font-display text-foreground mb-4">
                Sound familiar? You're not alone.
              </h2>
              <p className="text-xl text-muted-foreground">
                Growing e-commerce operations teams face these common challenges
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                {challenges.map((challenge, index) => <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-muted/50 animate-slide-up" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                    <div className="w-2 h-2 rounded-full bg-destructive mt-3 flex-shrink-0" />
                    <p className="text-foreground font-medium">{challenge}</p>
                  </div>)}
              </div>
              <div className="animate-fade-in">
                <Card className="p-6 bg-muted/30 border-l-4 border-l-destructive">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-display text-foreground">
                      The Hidden Cost of DIY Logistics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Operations teams spend <strong>60-70%</strong> of their time on logistics 
                      firefighting instead of strategic growth initiatives.
                    </p>
                    <p className="text-muted-foreground">
                      Meanwhile, your competitors are scaling faster with professional 4PL partners.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-foreground mb-4">
              Logistics as a Service: Your Operations Game-Changer
            </h2>
            <p className="text-xl text-muted-foreground">
              Transform from logistics burden to strategic advantage with our comprehensive LaaS platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => <Card key={benefit.title} className="p-6 hover:shadow-medium transition-all duration-300 animate-scale-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 rounded-lg bg-accent/10 text-accent">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl font-display text-foreground">
                      {benefit.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold font-display text-foreground mb-4">
                Operations Teams Love Working with Janio
              </h2>
            </div>
            
            <Card className="p-8 bg-muted/30 border-l-4 border-l-accent">
              <CardContent>
                <blockquote className="text-xl italic text-foreground mb-6 leading-relaxed">
                  "Partnering with Janio transformed our operations. We went from spending 80% of our time 
                  on logistics issues to focusing entirely on growth. Our team morale improved dramatically, 
                  and we scaled 3x faster than ever before."
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-semibold">SB</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Sarah Bradley</p>
                    <p className="text-muted-foreground">VP Operations, GrowthCo</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-primary-foreground mb-6">
              Ready to Focus on Growth?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Book a free consultation and see how LaaS can transform your operations team's effectiveness
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" asChild>
                <Link to="/contact">
                  Book Your Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="hero" size="xl" asChild>
                <Link to="/case-studies">
                  See Success Stories
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default OperationsTeams;