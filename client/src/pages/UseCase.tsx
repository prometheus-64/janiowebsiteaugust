import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Filter, TrendingUp, Globe, Clock, Zap } from 'lucide-react';
import { useCases, getUseCasesByCategory, type UseCase } from '@/data/useCases';

const UseCasePage = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  
  const filters = ['All', 'Ecommerce', 'Marketplace', 'Cost Optimization', 'Scaling', 'International'];
  
  const filteredCases = getUseCasesByCategory(selectedFilter);

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/95" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
              Real Problems. Real Results.
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-8">
              Explore how businesses like yours leverage Janio to turn logistics into a competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center items-center">
            <Filter className="w-5 h-5 text-muted-foreground mr-2" />
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(filter)}
                className="transition-all duration-200"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {filteredCases.map((useCase, index) => (
              <Card 
                key={useCase.id} 
                className="group hover:shadow-strong transition-all duration-300 animate-slide-up border-none shadow-medium"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="secondary" className="text-xs">
                      {useCase.industry}
                    </Badge>
                    <div className="flex gap-1">
                      {useCase.tags.slice(0, 2).map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-200 line-clamp-2">
                    {useCase.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    <strong>Challenge:</strong> {useCase.challenge}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground mb-4">
                      <strong className="text-primary">Result:</strong> {useCase.result}
                    </p>
                  </div>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted/50 rounded-lg">
                    {useCase.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold text-primary">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  {useCase.showDetailedPage && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200"
                    >
                      <Link to={useCase.href} className="flex items-center justify-center">
                        Read Full Case Study
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-foreground mb-4">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our clients consistently achieve measurable improvements in cost, speed, and reliability.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6 hover:shadow-medium transition-shadow duration-300">
              <CardContent className="pt-6">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">20-50%</div>
                <div className="text-sm text-muted-foreground">Average Cost Reduction</div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-medium transition-shadow duration-300">
              <CardContent className="pt-6">
                <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">2 weeks</div>
                <div className="text-sm text-muted-foreground">vs. 3-6 months traditional</div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-medium transition-shadow duration-300">
              <CardContent className="pt-6">
                <Zap className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">99%+</div>
                <div className="text-sm text-muted-foreground">Service Reliability</div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-medium transition-shadow duration-300">
              <CardContent className="pt-6">
                <Globe className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">8+</div>
                <div className="text-sm text-muted-foreground">Countries Covered</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-primary-foreground mb-6">
              Let's Write Your Success Story
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Ready to see results like these? Let's discuss how Janio can transform your logistics operations.
            </p>
            <Button variant="cta" size="xl" asChild>
              <Link to="/contact">
                Schedule My Strategy Session
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UseCasePage;