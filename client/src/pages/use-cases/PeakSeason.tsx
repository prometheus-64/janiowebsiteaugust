import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { ArrowRight, TrendingUp, Package, Users, AlertTriangle, CheckCircle, Clock, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const PeakSeason = () => {
  const challenges = [
    {
      icon: TrendingUp,
      title: "Demand Volatility",
      description: "Unpredictable spikes that overwhelm existing capacity"
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Balancing stock levels without overcommitting capital"
    },
    {
      icon: Users,
      title: "Capacity Constraints",
      description: "Limited warehouse space and transportation availability"
    },
    {
      icon: AlertTriangle,
      title: "Service Level Risk",
      description: "Maintaining delivery promises during high volume periods"
    }
  ];

  const solutions = [
    {
      title: "Dynamic Capacity Scaling",
      description: "Instantly access additional warehouse and fulfillment capacity",
      benefit: "Handle 300% volume increases seamlessly"
    },
    {
      title: "Predictive Planning",
      description: "AI-powered demand forecasting and inventory optimization",
      benefit: "Reduce stockouts by 85%"
    },
    {
      title: "Flexible Transportation",
      description: "Multi-carrier network with surge capacity options",
      benefit: "Maintain 99% on-time delivery rates"
    },
    {
      title: "Real-Time Orchestration",
      description: "Automated routing and fulfillment optimization",
      benefit: "Reduce operational costs by 20%"
    }
  ];

  const metrics = [
    { metric: "300%", label: "Peak volume handling capability" },
    { metric: "99%", label: "On-time delivery during peaks" },
    { metric: "48hrs", label: "Capacity scaling response time" },
    { metric: "85%", label: "Reduction in stockouts" }
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/95" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 text-base px-4 py-2">
              Peak Season Management
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
              Handle Demand Spikes with Confidence
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Scale your logistics operations seamlessly during peak seasons and promotional events
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="secondary" asChild>
                <Link to="/contact">Prepare for Peak Season</Link>
              </Button>
              <Button size="xl" variant="hero" asChild>
                <Link to="/contact">Book Capacity Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Peak Season Challenges
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                High-volume periods test the limits of your logistics capabilities
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {challenges.map((challenge, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <challenge.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-3">{challenge.title}</h3>
                    <p className="text-muted-foreground">{challenge.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Our Peak Season Solution
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Elastic logistics infrastructure that scales with your demand
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="hover:shadow-medium transition-shadow">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
                    <p className="text-muted-foreground mb-4">{solution.description}</p>
                    <div className="flex items-center text-primary font-semibold">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      {solution.benefit}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Peak Season Calendar */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Year-Round Peak Season Support
              </h2>
              <p className="text-xl text-muted-foreground">
                We're prepared for every major shopping event and seasonal spike
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { season: "Q1", events: ["New Year Sales", "Valentine's Day", "Spring Launch"], color: "bg-accent" },
                { season: "Q2", events: ["Easter", "Mother's Day", "Summer Prep"], color: "bg-secondary" },
                { season: "Q3", events: ["Back to School", "Labor Day", "Halloween"], color: "bg-primary" },
                { season: "Q4", events: ["Black Friday", "Cyber Monday", "Holiday Season"], color: "bg-destructive" }
              ].map((quarter, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className={`${quarter.color} text-white p-4`}>
                    <h3 className="text-lg font-semibold">{quarter.season}</h3>
                  </div>
                  <CardContent className="p-4">
                    <ul className="space-y-2">
                      {quarter.events.map((event, eventIndex) => (
                        <li key={eventIndex} className="flex items-center text-sm">
                          <Target className="h-4 w-4 mr-2 text-muted-foreground" />
                          {event}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Peak Season Performance
              </h2>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                Proven results helping brands excel during their busiest periods
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((result, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold font-display mb-2 text-secondary">
                    {result.metric}
                  </div>
                  <div className="text-primary-foreground/90">{result.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Peak Season Preparation Timeline
              </h2>
              <p className="text-xl text-muted-foreground">
                Get ready for peak season with our structured preparation approach
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  timeframe: "8-12 weeks before",
                  title: "Demand Forecasting & Capacity Planning",
                  description: "Analyze historical data and market trends to predict peak volumes",
                  duration: "2 weeks"
                },
                {
                  timeframe: "6-8 weeks before",
                  title: "Infrastructure Scaling & Testing",
                  description: "Secure additional capacity and test systems under load",
                  duration: "2 weeks"
                },
                {
                  timeframe: "4-6 weeks before",
                  title: "Staff Training & Process Optimization",
                  description: "Prepare teams and refine procedures for high-volume operations",
                  duration: "2 weeks"
                },
                {
                  timeframe: "2-4 weeks before",
                  title: "Final Testing & Go-Live Preparation",
                  description: "Run final tests and activate peak season configurations",
                  duration: "2 weeks"
                }
              ].map((step, index) => (
                <Card key={index} className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <Badge variant="outline">{step.timeframe}</Badge>
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          {step.duration}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Ready for Your Next Peak Season?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start planning now to ensure seamless operations during your busiest periods
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link to="/contact">
                  Start Peak Planning
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <Link to="/contact">Book Capacity Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PeakSeason;