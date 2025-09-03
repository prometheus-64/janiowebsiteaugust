import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { ArrowRight, TrendingUp, Package, Clock, Users, DollarSign, BarChart3, Truck, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  const industries = ['All', 'E-commerce', 'Manufacturing', 'Retail', 'Healthcare', 'Technology'];

  const caseStudies = [
    {
      id: 1,
      company: "FastGrow E-commerce",
      industry: "E-commerce",
      size: "Mid-market",
      challenge: "Scaling fulfillment operations during 300% growth while maintaining 99% accuracy",
      solution: "Comprehensive 4PL solution with automated order processing and multi-channel fulfillment",
      results: {
        costSavings: "25%",
        timeReduction: "60%",
        accuracyImprovement: "99.8%",
        scalabilityIncrease: "500%"
      },
      metrics: [
        { label: "Monthly Orders", before: "10,000", after: "50,000", improvement: "400%" },
        { label: "Fulfillment Cost per Order", before: "$8.50", after: "$6.35", improvement: "25%" },
        { label: "Order Accuracy", before: "97.2%", after: "99.8%", improvement: "2.6%" },
        { label: "Processing Time", before: "24 hours", after: "4 hours", improvement: "83%" }
      ],
      testimonial: "Janio's 4PL solution transformed our operations. We went from struggling with fulfillment bottlenecks to confidently scaling our business 5x in 18 months.",
      clientName: "Sarah Mitchell",
      clientTitle: "VP of Operations",
      duration: "6 months implementation",
      featured: true
    },
    {
      id: 2,
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      size: "Enterprise",
      challenge: "High transportation costs and poor visibility across international supply chain",
      solution: "Transportation procurement optimization with real-time global control tower",
      results: {
        costSavings: "18%",
        timeReduction: "40%",
        visibilityImprovement: "100%",
        carrierOptimization: "30%"
      },
      metrics: [
        { label: "Annual Transportation Spend", before: "$12M", after: "$9.8M", improvement: "18%" },
        { label: "On-time Deliveries", before: "78%", after: "95%", improvement: "17%" },
        { label: "Shipment Visibility", before: "45%", after: "100%", improvement: "55%" },
        { label: "Carrier Base", before: "150", after: "45", improvement: "70%" }
      ],
      testimonial: "The visibility and cost savings we achieved exceeded our expectations. Our global supply chain is now a competitive advantage.",
      clientName: "David Chen",
      clientTitle: "Supply Chain Director",
      duration: "8 months implementation"
    },
    {
      id: 3,
      company: "Premium Retail Chain",
      industry: "Retail",
      size: "Enterprise",
      challenge: "Peak season capacity constraints and inventory distribution inefficiencies",
      solution: "Flexible fulfillment network with dynamic inventory allocation and peak season scaling",
      results: {
        costSavings: "22%",
        inventoryReduction: "35%",
        customerSatisfaction: "94%",
        peakCapacity: "200%"
      },
      metrics: [
        { label: "Peak Season Capacity", before: "100%", after: "300%", improvement: "200%" },
        { label: "Inventory Carrying Cost", before: "$2.1M", after: "$1.4M", improvement: "33%" },
        { label: "Stockout Rate", before: "12%", after: "2%", improvement: "83%" },
        { label: "Customer Satisfaction", before: "81%", after: "94%", improvement: "16%" }
      ],
      testimonial: "Our peak seasons went from being stressful nightmares to smooth operations that drive record sales.",
      clientName: "Jennifer Rodriguez",
      clientTitle: "Head of Logistics",
      duration: "4 months implementation"
    },
    {
      id: 4,
      company: "MedTech Innovations",
      industry: "Healthcare",
      size: "Mid-market",
      challenge: "Compliance requirements and temperature-controlled distribution for medical devices",
      solution: "Specialized healthcare logistics with compliance management and cold chain capabilities",
      results: {
        complianceRate: "100%",
        temperatureControl: "99.9%",
        costOptimization: "15%",
        auditSuccess: "100%"
      },
      metrics: [
        { label: "Compliance Violations", before: "8 per year", after: "0", improvement: "100%" },
        { label: "Temperature Excursions", before: "0.8%", after: "0.1%", improvement: "87%" },
        { label: "Audit Pass Rate", before: "85%", after: "100%", improvement: "18%" },
        { label: "Logistics Cost", before: "$180K/month", after: "$153K/month", improvement: "15%" }
      ],
      testimonial: "Janio's expertise in healthcare logistics gave us peace of mind and significant cost savings.",
      clientName: "Dr. Michael Park",
      clientTitle: "VP of Supply Chain",
      duration: "5 months implementation"
    },
    {
      id: 5,
      company: "TechStart Innovations",
      industry: "Technology",
      size: "Small",
      challenge: "Limited logistics expertise and resources for scaling hardware product distribution",
      solution: "End-to-end logistics outsourcing with technology integration and customer experience focus",
      results: {
        timeToMarket: "50%",
        operationalCost: "40%",
        customerSatisfaction: "96%",
        scalability: "1000%"
      },
      metrics: [
        { label: "Time to Market", before: "12 weeks", after: "6 weeks", improvement: "50%" },
        { label: "Logistics Team Size", before: "8 FTE", after: "2 FTE", improvement: "75%" },
        { label: "Shipping Accuracy", before: "94%", after: "99.5%", improvement: "6%" },
        { label: "Customer NPS", before: "45", after: "78", improvement: "73%" }
      ],
      testimonial: "As a startup, we couldn't afford logistics mistakes. Janio became our trusted logistics partner from day one.",
      clientName: "Alex Thompson",
      clientTitle: "Co-founder & COO",
      duration: "3 months implementation"
    },
    {
      id: 6,
      company: "Fashion Forward Brands",
      industry: "Retail",
      size: "Mid-market",
      challenge: "Seasonal inventory management and omnichannel fulfillment complexity",
      solution: "Intelligent inventory allocation with unified omnichannel fulfillment platform",
      results: {
        inventoryTurnover: "45%",
        fulfillmentSpeed: "65%",
        channelIntegration: "100%",
        margins: "12%"
      },
      metrics: [
        { label: "Inventory Turnover", before: "4.2x", after: "6.1x", improvement: "45%" },
        { label: "Order-to-Ship Time", before: "3.2 days", after: "1.1 days", improvement: "66%" },
        { label: "Channel Efficiency", before: "65%", after: "98%", improvement: "51%" },
        { label: "Markdown Rate", before: "28%", after: "18%", improvement: "36%" }
      ],
      testimonial: "Our omnichannel strategy finally works seamlessly. Customers get what they want, when they want it.",
      clientName: "Maria Gonzalez",
      clientTitle: "Operations Director",
      duration: "6 months implementation"
    }
  ];

  const filteredCaseStudies = selectedIndustry === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry);

  const featuredStudy = caseStudies.find(study => study.featured);

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 text-base px-4 py-2">
              Customer Success Stories
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
              Real Results from Real Companies
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Discover how leading companies transformed their supply chains with Janio's 4PL solutions
            </p>
            <Button size="xl" variant="secondary" asChild>
              <Link to="#case-studies">Explore Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Proven Results Across Industries
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our 4PL solutions deliver measurable value across diverse business requirements
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardContent className="p-8">
                  <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">15-25%</div>
                  <p className="text-muted-foreground">Average Cost Savings</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-8">
                  <Clock className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-secondary mb-2">50-70%</div>
                  <p className="text-muted-foreground">Time Reduction</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-8">
                  <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
                  <div className="text-3xl font-bold text-accent mb-2">99%+</div>
                  <p className="text-muted-foreground">Accuracy Rate</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-8">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">95%+</div>
                  <p className="text-muted-foreground">Customer Satisfaction</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2">
              {industries.map((industry) => (
                <Button
                  key={industry}
                  variant={selectedIndustry === industry ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedIndustry(industry)}
                >
                  {industry}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      {featuredStudy && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold font-display mb-2">Featured Success Story</h2>
              </div>
              
              <Card className="overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <Badge variant="secondary">{featuredStudy.industry}</Badge>
                      <Badge>{featuredStudy.size}</Badge>
                      <Badge variant="outline">{featuredStudy.duration}</Badge>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4">{featuredStudy.company}</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Challenge</h4>
                        <p className="text-muted-foreground">{featuredStudy.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Solution</h4>
                        <p className="text-muted-foreground">{featuredStudy.solution}</p>
                      </div>
                      
                      <div className="bg-muted p-4 rounded-lg">
                        <blockquote className="text-muted-foreground italic mb-3">
                          "{featuredStudy.testimonial}"
                        </blockquote>
                        <div className="text-sm">
                          <div className="font-semibold">{featuredStudy.clientName}</div>
                          <div className="text-muted-foreground">{featuredStudy.clientTitle}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary mb-6">Key Results</h4>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="text-center p-4 bg-muted rounded-lg">
                        <div className="text-2xl font-bold text-primary">{featuredStudy.results.costSavings}</div>
                        <div className="text-sm text-muted-foreground">Cost Savings</div>
                      </div>
                      <div className="text-center p-4 bg-muted rounded-lg">
                        <div className="text-2xl font-bold text-secondary">{featuredStudy.results.timeReduction}</div>
                        <div className="text-sm text-muted-foreground">Time Reduction</div>
                      </div>
                      <div className="text-center p-4 bg-muted rounded-lg">
                        <div className="text-2xl font-bold text-accent">{featuredStudy.results.accuracyImprovement}</div>
                        <div className="text-sm text-muted-foreground">Accuracy</div>
                      </div>
                      <div className="text-center p-4 bg-muted rounded-lg">
                        <div className="text-2xl font-bold text-primary">{featuredStudy.results.scalabilityIncrease}</div>
                        <div className="text-sm text-muted-foreground">Scalability</div>
                      </div>
                    </div>
                    
                    <h5 className="font-semibold mb-4">Detailed Metrics</h5>
                    <div className="space-y-3">
                      {featuredStudy.metrics.map((metric, index) => (
                        <div key={index} className="flex justify-between items-center text-sm">
                          <span className="text-muted-foreground">{metric.label}</span>
                          <div className="text-right">
                            <span className="text-destructive">{metric.before}</span>
                            <span className="mx-2">→</span>
                            <span className="text-primary font-semibold">{metric.after}</span>
                            <Badge variant="outline" className="ml-2 text-xs">
                              {metric.improvement} improvement
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Case Studies Grid */}
      <section id="case-studies" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                More Success Stories
              </h2>
              <p className="text-xl text-muted-foreground">
                Explore how companies across industries achieved transformational results
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredCaseStudies.filter(study => !study.featured).map((study) => (
                <Card key={study.id} className="hover:shadow-medium transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{study.industry}</Badge>
                        <Badge variant="secondary">{study.size}</Badge>
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        {study.duration}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{study.company}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-primary text-sm mb-1">Challenge</h4>
                        <p className="text-muted-foreground text-sm">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-primary text-sm mb-1">Solution</h4>
                        <p className="text-muted-foreground text-sm">{study.solution}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {Object.entries(study.results).slice(0, 4).map(([key, value], index) => (
                        <div key={index} className="text-center p-3 bg-muted rounded-lg">
                          <div className="text-lg font-bold text-primary">{value}</div>
                          <div className="text-xs text-muted-foreground">
                            {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-accent/10 p-3 rounded-lg mb-4">
                      <blockquote className="text-sm text-muted-foreground italic mb-2">
                        "{study.testimonial}"
                      </blockquote>
                      <div className="text-xs">
                        <div className="font-semibold">{study.clientName}</div>
                        <div className="text-muted-foreground">{study.clientTitle}</div>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full" asChild>
                      <Link to={`/case-studies/${study.id}`}>
                        View Full Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredCaseStudies.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No case studies found</h3>
                <p className="text-muted-foreground">Try selecting a different industry filter.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Industry Insights */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Success by Industry
              </h2>
              <p className="text-xl text-muted-foreground">
                Tailored solutions delivering industry-specific value
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Package, industry: "E-commerce", companies: "25+", avgSavings: "22%", keyBenefit: "Scalable fulfillment" },
                { icon: Building, industry: "Manufacturing", companies: "15+", avgSavings: "18%", keyBenefit: "Global visibility" },
                { icon: Truck, industry: "Retail", companies: "30+", avgSavings: "20%", keyBenefit: "Omnichannel excellence" },
                { icon: BarChart3, industry: "Healthcare", companies: "12+", avgSavings: "15%", keyBenefit: "Compliance assurance" },
                { icon: Users, industry: "Technology", companies: "18+", avgSavings: "25%", keyBenefit: "Rapid scaling" },
                { icon: TrendingUp, industry: "Consumer Goods", companies: "22+", avgSavings: "19%", keyBenefit: "Market agility" }
              ].map((item, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{item.industry}</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div>{item.companies} companies served</div>
                      <div className="text-primary font-semibold">{item.avgSavings} average savings</div>
                      <div>{item.keyBenefit}</div>
                    </div>
                  </CardContent>
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
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join leading companies who have transformed their supply chains with Janio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link to="/contact">
                  Start Your Transformation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <Link to="/contact">Book Your Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;