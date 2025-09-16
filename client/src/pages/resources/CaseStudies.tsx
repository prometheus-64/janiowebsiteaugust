import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PageSEO from '@/components/PageSEO';
import { ArrowRight, Download, TrendingUp, Clock, Users, Target, Building, DollarSign, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import LeadCaptureForm from "@/components/LeadCaptureForm";

const CaseStudies = () => {
  const [showLeadCapture, setShowLeadCapture] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<any>(null);
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  const caseStudies = [
    {
      id: 'fashion-brand-scaling',
      title: "Fashion Brand Scales 500% with Zero Logistics Headaches",
      company: "Premium Fashion Retailer",
      industry: "Fashion & Retail",
      challenge: "Rapid growth from $2M to $10M ARR with existing 3PL unable to scale",
      solution: "Logistics as a Service (LaaS) implementation with automated order management",
      results: {
        costSavings: "22%",
        timeToMarket: "40% faster",
        errorReduction: "85%",
        scalability: "500% growth handled seamlessly"
      },
      metrics: [
        { label: "Cost Reduction", value: "22%", description: "Lower fulfillment costs per order" },
        { label: "Faster Processing", value: "40%", description: "Reduced time from order to ship" },
        { label: "Error Reduction", value: "85%", description: "Fewer shipping and inventory errors" },
        { label: "Growth Capacity", value: "5x", description: "Ability to handle volume increases" }
      ],
      timeline: "6 months",
      excerpt: "How a premium fashion brand eliminated logistics constraints during hypergrowth phase."
    },
    {
      id: 'manufacturer-cost-reduction',
      title: "Manufacturer Cuts Freight Costs 20% in 6 Months",
      company: "Industrial Equipment Manufacturer",
      industry: "Manufacturing",
      challenge: "Rising transportation costs eating into margins with limited visibility",
      solution: "Strategic transportation procurement with AI-powered route optimization",
      results: {
        costSavings: "20%",
        visibility: "Real-time tracking",
        compliance: "100% on-time delivery",
        efficiency: "30% better capacity utilization"
      },
      metrics: [
        { label: "Cost Savings", value: "$2.1M", description: "Annual transportation savings" },
        { label: "Route Efficiency", value: "30%", description: "Better capacity utilization" },
        { label: "On-Time Delivery", value: "99.2%", description: "Improved delivery performance" },
        { label: "Visibility", value: "100%", description: "Real-time shipment tracking" }
      ],
      timeline: "6 months",
      excerpt: "Strategic procurement transformation delivers immediate and sustainable cost reductions."
    },
    {
      id: 'ecommerce-international-expansion',
      title: "E-commerce Brand Expands to 8 SEA Countries in 18 Months",
      company: "Health & Wellness E-commerce",
      industry: "E-commerce",
      challenge: "Complex international expansion with regulatory compliance requirements",
      solution: "End-to-end international logistics with local compliance management",
      results: {
        expansion: "8 countries",
        revenue: "300% increase",
        compliance: "100% regulatory adherence",
        timeToMarket: "60% faster market entry"
      },
      metrics: [
        { label: "Market Expansion", value: "8", description: "New countries launched" },
        { label: "Revenue Growth", value: "300%", description: "International revenue increase" },
        { label: "Compliance Rate", value: "100%", description: "Perfect regulatory adherence" },
        { label: "Launch Speed", value: "60%", description: "Faster time to market" }
      ],
      timeline: "18 months",
      excerpt: "Complete SEA expansion strategy with seamless logistics and compliance management."
    },
    {
      id: 'marketplace-consolidation',
      title: "Marketplace Platform Consolidates 15 Logistics Partners",
      company: "Multi-Vendor Marketplace",
      industry: "Marketplace",
      challenge: "Managing 15 different logistics providers with inconsistent service levels",
      solution: "Unified logistics platform with single API integration",
      results: {
        consolidation: "15 to 1 platform",
        efficiency: "45% operational efficiency gain",
        satisfaction: "Net Promoter Score +40 points",
        integration: "Single API for all logistics"
      },
      metrics: [
        { label: "Platform Consolidation", value: "15:1", description: "From 15 providers to 1 platform" },
        { label: "Efficiency Gain", value: "45%", description: "Operational efficiency improvement" },
        { label: "NPS Improvement", value: "+40", description: "Customer satisfaction increase" },
        { label: "Integration Time", value: "2 weeks", description: "Full platform integration" }
      ],
      timeline: "4 months",
      excerpt: "Platform unification eliminates complexity while improving service quality."
    },
    {
      id: 'tech-startup-scaling',
      title: "Tech Startup Handles Black Friday 10x Volume Spike",
      company: "Consumer Electronics Startup",
      industry: "Technology",
      challenge: "Unpredictable demand spikes with limited logistics infrastructure",
      solution: "Flexible capacity management with peak season preparation",
      results: {
        volumeHandling: "10x normal volume",
        uptime: "99.9% system availability",
        satisfaction: "95% customer satisfaction",
        growth: "Zero infrastructure investment"
      },
      metrics: [
        { label: "Volume Capacity", value: "10x", description: "Peak volume handling capability" },
        { label: "System Uptime", value: "99.9%", description: "Platform availability during peak" },
        { label: "Customer Satisfaction", value: "95%", description: "Maintained service quality" },
        { label: "Infrastructure Cost", value: "$0", description: "No additional infrastructure needed" }
      ],
      timeline: "3 months preparation",
      excerpt: "Scalable logistics infrastructure handles extreme demand fluctuations seamlessly."
    },
    {
      id: 'luxury-brand-standards',
      title: "Luxury Brand Maintains Premium Standards Across 12 Markets",
      company: "Luxury Goods Retailer",
      industry: "Luxury Retail",
      challenge: "Maintaining white-glove service standards while expanding internationally",
      solution: "Premium logistics network with specialized handling and compliance",
      results: {
        standardsCompliance: "100% brand standard adherence",
        customerExperience: "Premium unboxing maintained",
        marketExpansion: "12 international markets",
        qualityScore: "99.5% perfect delivery rate"
      },
      metrics: [
        { label: "Brand Standards", value: "100%", description: "Perfect adherence to luxury standards" },
        { label: "Perfect Deliveries", value: "99.5%", description: "Damage-free delivery rate" },
        { label: "Market Coverage", value: "12", description: "Premium markets served" },
        { label: "Customer NPS", value: "85", description: "Premium customer experience score" }
      ],
      timeline: "12 months",
      excerpt: "Specialized luxury logistics maintains premium brand experience globally."
    }
  ];

  const industries = ["All", "Fashion & Retail", "Manufacturing", "E-commerce", "Marketplace", "Technology", "Luxury Retail"];

  const filteredCaseStudies = selectedIndustry === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry);

  const handleDownloadClick = (caseStudy: any) => {
    setSelectedCaseStudy(caseStudy);
    setShowLeadCapture(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <PageSEO page="resourcesCaseStudies" />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 text-base px-4 py-2">
              Success Stories
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
              Real Results from Real <span className="text-secondary">Companies</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Discover how 500+ companies achieved breakthrough results with our logistics optimization strategies
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {industries.slice(0, 4).map((industry) => (
                <Button
                  key={industry}
                  variant={industry === selectedIndustry ? "secondary" : "outline"}
                  className={industry === selectedIndustry ? "" : "border-white/20 text-white hover:bg-white/10"}
                  onClick={() => setSelectedIndustry(industry)}
                >
                  {industry}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-display mb-4">Proven Results Across Industries</h2>
              <p className="text-xl text-muted-foreground">
                Aggregate impact from our logistics optimization implementations
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">$2.1M</div>
                  <div className="text-sm text-muted-foreground">Average Annual Savings</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">18%</div>
                  <div className="text-sm text-muted-foreground">Average Cost Reduction</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">6 Mo</div>
                  <div className="text-sm text-muted-foreground">Average Implementation</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">94%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
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

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8">
              {filteredCaseStudies.map((study, index) => (
                <Card key={study.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="grid md:grid-cols-3 gap-0">
                    <div className="md:col-span-2">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <Badge variant="outline">{study.industry}</Badge>
                            <Badge variant="secondary">
                              <Building className="h-3 w-3 mr-1" />
                              {study.timeline}
                            </Badge>
                          </div>
                        </div>
                        <CardTitle className="text-xl mb-3">{study.title}</CardTitle>
                        <p className="text-muted-foreground mb-4">{study.excerpt}</p>
                        
                        <div className="space-y-3">
                          <div>
                            <h4 className="text-sm font-semibold text-primary mb-1">Challenge:</h4>
                            <p className="text-sm text-muted-foreground">{study.challenge}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-primary mb-1">Solution:</h4>
                            <p className="text-sm text-muted-foreground">{study.solution}</p>
                          </div>
                        </div>
                      </CardHeader>
                    </div>
                    
                    <div className="bg-muted/30">
                      <CardContent className="p-6 h-full flex flex-col">
                        <h4 className="font-semibold mb-4 text-center">Key Results</h4>
                        <div className="grid grid-cols-2 gap-4 flex-1">
                          {study.metrics.map((metric, metricIndex) => (
                            <div key={metricIndex} className="text-center">
                              <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                              <div className="text-xs text-muted-foreground leading-tight">{metric.description}</div>
                            </div>
                          ))}
                        </div>
                        <Button 
                          className="w-full mt-6" 
                          size="sm"
                          onClick={() => handleDownloadClick(study)}
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Get Full Case Study
                        </Button>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Insights */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-display mb-4">Industry-Specific Insights</h2>
              <p className="text-xl text-muted-foreground">
                Tailored strategies for your industry's unique logistics challenges
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Truck className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">E-commerce & Retail</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Scale fulfillment operations while maintaining customer experience during growth phases
                  </p>
                  <div className="text-2xl font-bold text-primary mb-1">25%</div>
                  <div className="text-xs text-muted-foreground">Average fulfillment cost reduction</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Building className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Manufacturing</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Optimize transportation networks and reduce freight costs through strategic procurement
                  </p>
                  <div className="text-2xl font-bold text-secondary mb-1">15%</div>
                  <div className="text-xs text-muted-foreground">Average transportation savings</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Marketplaces</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Unify multiple logistics providers under single platform for better seller experience
                  </p>
                  <div className="text-2xl font-bold text-accent mb-1">40%</div>
                  <div className="text-xs text-muted-foreground">Operational efficiency improvement</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-display mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join 500+ companies that have transformed their logistics operations with proven strategies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link to="/contact">
                  Start Your Transformation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <Link to="/resources">View All Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Modal */}
      <Dialog open={showLeadCapture} onOpenChange={setShowLeadCapture}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="sr-only">Download Case Study</DialogTitle>
          </DialogHeader>
          {selectedCaseStudy && (
            <LeadCaptureForm
              title={`Case Study: ${selectedCaseStudy.title}`}
              description={`Get the complete ${selectedCaseStudy.timeline} implementation case study with detailed metrics, strategies, and actionable insights.`}
              resourceType="case-study"
              downloadText="Download Case Study"
              onSubmit={(data) => {
                console.log('Lead captured:', data);
                setShowLeadCapture(false);
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CaseStudies;
