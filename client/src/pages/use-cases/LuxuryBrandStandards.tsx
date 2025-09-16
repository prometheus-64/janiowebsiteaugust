import React from 'react';
import { Link } from 'react-router-dom';
import PageSEO from '@/components/PageSEO';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, TrendingUp, Globe, Package, Zap, BarChart3, Database, Cog, Smartphone, Truck, Shield, Users, AlertTriangle, Clock, Target } from 'lucide-react';
import { getUseCaseBySlug, iconMap } from '@/data/useCases';

const LuxuryBrandStandards = () => {
  const useCase = getUseCaseBySlug('luxury-brand-standards');

  if (!useCase) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <PageSEO page="useCaseLuxuryBrandStandards" />
        <div className="text-center">
          <div className="text-lg text-red-500">Case study not found</div>
          <Button asChild className="mt-4">
            <Link to="/use-cases">Back to Use Cases</Link>
          </Button>
        </div>
      </div>
    );
  }

  const challenges = useCase.challenges || [];
  const solutions = useCase.solutions || [];
  const detailedMetrics = useCase.detailedMetrics || useCase.metrics;

  return (
    <div className="min-h-screen bg-background">
      <PageSEO page="useCaseLuxuryBrandStandards" />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/95" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Button variant="ghost" size="sm" asChild className="text-white hover:bg-white/10">
                <Link to="/use-cases" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Use Cases
                </Link>
              </Button>
            </div>
            
            <Badge variant="secondary" className="mb-6 text-base px-4 py-2">
              {useCase.category} • {useCase.industry}
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 text-white">
              {useCase.heroSubtitle || useCase.title}
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {useCase.heroDescription || useCase.result}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {useCase.tags.map((tag, idx) => (
                <Badge key={idx} variant="outline" className="text-white border-white/30">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Key Results</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {detailedMetrics.map((metric: any, idx: number) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {metric.metric || metric.value}
                  </div>
                  <div className="text-muted-foreground">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      {challenges.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">The Challenge</h2>
              {useCase.challengeDescription && (
                <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
                  {useCase.challengeDescription}
                </p>
              )}
              <div className="grid md:grid-cols-2 gap-8">
                {challenges.map((challenge: any, idx: number) => {
                  const IconComponent = challenge.icon && iconMap[challenge.icon as keyof typeof iconMap] 
                    ? iconMap[challenge.icon as keyof typeof iconMap] 
                    : TrendingUp;
                  
                  return (
                    <div key={idx} className="flex items-start space-x-3">
                      <IconComponent className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{challenge.title}</h3>
                        <p className="text-muted-foreground">{challenge.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Solution Section */}
      {solutions.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">The Solution</h2>
                <p className="text-xl text-muted-foreground">
                  Comprehensive logistics transformation with measurable impact
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {solutions.map((solution: any, idx: number) => (
                  <Card key={idx} className="text-center">
                    <CardHeader>
                      <CardTitle className="text-lg">{solution.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{solution.description}</p>
                      {solution.benefit && (
                        <div className="text-sm font-semibold text-primary">
                          {solution.benefit}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Original Challenge & Result */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="w-5 h-5 text-primary" />
                    The Challenge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{useCase.challenge}</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    The Result
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{useCase.result}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Logistics?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            See how Janio can deliver similar results for your business with our 4PL solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LuxuryBrandStandards;
