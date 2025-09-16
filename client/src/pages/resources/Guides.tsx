import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, BookOpen, Clock, Users, Target, TrendingUp, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import PageSEO from '@/components/PageSEO';

const Guides = () => {
  const guides = [
    {
      id: 1,
      title: "Freight Spend Leaks: 10 Negotiation Tactics that Don't Hurt SLAs",
      description: "Comprehensive guide to strategic freight negotiation that maintains service quality while reducing costs. Includes proven tactics, templates, and implementation frameworks from successful cost reduction initiatives.",
      category: "Cost Management",
      level: "Advanced",
      pages: 35,
      readTime: "45-60 min",
      slug: "freight-spend-negotiation-tactics",
      featured: true
    }
  ];

  const categories = ["All", "Digital Transformation", "Cost Management", "Operations", "Global Operations", "Vendor Management", "Automation"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showLeadCapture, setShowLeadCapture] = useState(false);
  const [selectedGuide, setSelectedGuide] = useState<any>(null);

  const filteredGuides = selectedCategory === "All" 
    ? guides 
    : guides.filter(guide => guide.category === selectedCategory);

  const handleGuideClick = (guide: any) => {
    // Navigate to guide detail page where lead capture will be handled
    window.location.href = `/resources/guides/${guide.slug}`;
  };
  return (
    <div className="min-h-screen bg-background">
      <PageSEO page="resourcesGuides" />
      
      {/* Hero Section - Matching Home Page Format */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary">
        {/* Enhanced Background with Subtle Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/95" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/50 rounded-full blur-2xl"></div>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-6 text-center text-white">
          <div className="mb-4 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-4">
              Strategic Implementation Guides
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-display font-bold mb-8 animate-fade-in leading-tight tracking-tight">
            Comprehensive Logistics
            <span className="block text-white bg-gradient-to-r from-white to-blue-100 bg-clip-text">Playbooks</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/80 mb-12 leading-loose max-w-4xl mx-auto animate-slide-up font-light">
            In-depth guides and frameworks to optimize every aspect of your supply chain operations. Professional-grade resources with implementation templates and proven methodologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-scale-in">
            <Link to="#featured">
              <button className="bg-white text-primary hover:bg-gray-100 text-lg px-12 py-4 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Browse Strategic Guides <ArrowRight className="ml-2 w-5 h-5 inline" />
              </button>
            </Link>
            <Link to="/contact">
              <button className="bg-transparent border-2 border-white/70 text-white hover:bg-white/10 hover:border-white text-lg px-12 py-4 rounded-full font-medium transition-all duration-200">
                Request Custom Guide
              </button>
            </Link>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up">
            {categories.slice(0, 5).map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "secondary" : "outline"}
                className={selectedCategory === category ? "" : "border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Expert Knowledge, Practical Implementation
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our guides combine deep industry expertise with actionable frameworks you can implement immediately
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-8">
                  <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Comprehensive Coverage</h3>
                  <p className="text-muted-foreground">
                    25-50 page guides covering every aspect of the topic with real-world examples and case studies
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-8">
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Actionable Frameworks</h3>
                  <p className="text-muted-foreground">
                    Ready-to-use templates, checklists, and implementation roadmaps you can apply immediately
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-8">
                  <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Proven Results</h3>
                  <p className="text-muted-foreground">
                    Based on successful implementations with 100+ companies across various industries
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section id="guides" className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section id="featured" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-display mb-4">Featured Strategic Guides</h2>
              <p className="text-xl text-muted-foreground">
                Professional-grade resources for supply chain optimization
              </p>
            </div>
            
            {filteredGuides.length === 0 ? (
              <div className="text-center py-16">
                <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Strategic Guides Coming Soon</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  We're developing comprehensive strategic guides to help you optimize your logistics operations. 
                  These professional-grade resources will include implementation templates, best practices, and proven methodologies.
                </p>
                <div className="space-y-4">
                  <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4" />
                      <span>Implementation frameworks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      <span>ROI optimization strategies</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>Team training materials</span>
                    </div>
                  </div>
                  <Button asChild>
                    <Link to="/contact">Get Notified When Available</Link>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGuides.map((guide) => (
                  <Card key={guide.id} className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer" onClick={() => handleGuideClick(guide)}>
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary">{guide.category}</Badge>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{guide.readTime}</span>
                        </div>
                      </div>
                      <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">
                        {guide.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm line-clamp-3">{guide.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>{guide.pages} pages</span>
                          <span>•</span>
                          <span>{guide.level}</span>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="group-hover:text-primary h-8 px-2 text-xs"
                          onClick={() => handleGuideClick(guide)}
                        >
                          View <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* All Guides */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {filteredGuides.length > 0 && (
              <>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold font-display mb-4">
                    {selectedCategory === "All" ? "All Strategic Guides" : `${selectedCategory} Guides`}
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    {selectedCategory === "All" 
                      ? "Complete library of implementation guides" 
                      : `Specialized guides for ${selectedCategory.toLowerCase()}`
                    }
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredGuides.map((guide) => (
                    <Card key={guide.id} className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer" onClick={() => handleGuideClick(guide)}>
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between mb-3">
                          <Badge variant="outline">{guide.category}</Badge>
                          <Badge variant="secondary">{guide.level}</Badge>
                        </div>
                        <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                          {guide.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground text-sm">{guide.description}</p>
                        <div className="grid grid-cols-3 gap-2 text-center text-xs">
                          <div>
                            <div className="font-semibold text-primary">{guide.pages}</div>
                            <div className="text-muted-foreground">Pages</div>
                          </div>
                          <div>
                            <div className="font-semibold text-primary">{guide.readTime.split('-')[0]}</div>
                            <div className="text-muted-foreground">Min</div>
                          </div>
                          <div>
                            <div className="font-semibold text-primary">
                              <Download className="h-3 w-3 inline" />
                            </div>
                            <div className="text-muted-foreground">Ready</div>
                          </div>
                        </div>
                        <Button 
                          className="w-full" 
                          size="sm"
                          onClick={() => handleGuideClick(guide)}
                        >
                          <ArrowRight className="mr-2 h-3 w-3" />
                          View Guide
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Sample Content Preview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Sample Guide Content
              </h2>
              <p className="text-xl text-muted-foreground">
                Preview the quality and depth of our strategic guides
              </p>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>From "Logistics Cost Optimization Playbook" - Chapter 3</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <h4 className="text-lg font-semibold mb-4">Transportation Cost Analysis Framework</h4>
                
                <p className="text-muted-foreground mb-4">
                  A systematic approach to identifying transportation cost reduction opportunities requires a comprehensive analysis across five key dimensions:
                </p>
                
                <div className="bg-background p-4 rounded-lg mb-4">
                  <h5 className="font-semibold mb-3">1. Route Optimization Analysis</h5>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Current vs. optimal routing efficiency (target: 85%+ efficiency)</li>
                    <li>• Multi-stop consolidation opportunities</li>
                    <li>• Backhaul utilization assessment</li>
                    <li>• Modal selection optimization (air vs. ground vs. LTL)</li>
                  </ul>
                </div>
                
                <div className="bg-background p-4 rounded-lg mb-4">
                  <h5 className="font-semibold mb-3">2. Carrier Performance & Cost Benchmarking</h5>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Rate benchmarking against market standards</li>
                    <li>• Service level vs. cost trade-off analysis</li>
                    <li>• Carrier diversification impact on costs</li>
                    <li>• Volume commitment optimization</li>
                  </ul>
                </div>
                
                <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                  "Companies implementing this framework typically see 12-18% reduction in transportation costs within 6 months, with additional 5-8% savings in year two through continuous optimization."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Get Your Complete Guide Collection
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Download all our strategic guides and get access to exclusive templates and tools
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link to="/contact">
                  Download All Guides
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
            <DialogTitle className="sr-only">Download Guide</DialogTitle>
          </DialogHeader>
          {selectedGuide && (
            <LeadCaptureForm
              title={`Download: ${selectedGuide.title}`}
              description={`Get instant access to this ${selectedGuide.pages}-page strategic guide with templates and implementation frameworks.`}
              resourceType="guide"
              downloadText="Download Guide Now"
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

export default Guides;
