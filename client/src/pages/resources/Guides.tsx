import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, BookOpen, Clock, Users, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Guides = () => {
  const guides = [
    {
      id: 'supply-chain-transformation',
      title: "The Complete Guide to Supply Chain Digital Transformation",
      description: "A comprehensive 50-page guide covering everything from assessment to implementation of modern supply chain technologies.",
      category: "Digital Transformation",
      readTime: "45-60 minutes",
      pages: 50,
      audience: "Supply Chain Leaders",
      level: "Advanced",
      topics: [
        "Digital maturity assessment framework",
        "Technology selection criteria",
        "Implementation roadmap and timeline",
        "Change management strategies",
        "ROI measurement and KPIs",
        "Common pitfalls and how to avoid them"
      ],
      keyTakeaways: [
        "Structured approach to digital transformation",
        "Proven implementation methodologies",
        "Real-world case studies and lessons learned",
        "Template documents and checklists"
      ]
    },
    {
      id: 'cost-optimization-playbook',
      title: "Logistics Cost Optimization Playbook",
      description: "Strategic guide to identifying and capturing logistics cost savings across transportation, warehousing, and operations.",
      category: "Cost Management",
      readTime: "30-40 minutes",
      pages: 35,
      audience: "Procurement & Finance Teams",
      level: "Intermediate",
      topics: [
        "Cost analysis frameworks and tools",
        "Transportation procurement strategies",
        "Warehouse optimization techniques",
        "Vendor management best practices",
        "Contract negotiation tactics",
        "Quick win identification methods"
      ],
      keyTakeaways: [
        "15-25% cost reduction methodologies",
        "Negotiation templates and scripts",
        "Benchmarking tools and metrics",
        "Implementation action plans"
      ]
    },
    {
      id: 'peak-season-preparation',
      title: "Peak Season Logistics Preparation Guide",
      description: "Essential strategies for handling demand spikes, seasonal variations, and promotional events without service disruption.",
      category: "Operations",
      readTime: "25-35 minutes",
      pages: 28,
      audience: "Operations Teams",
      level: "Intermediate",
      topics: [
        "Demand forecasting and planning",
        "Capacity scaling strategies",
        "Inventory management for peaks",
        "Workforce planning and training",
        "Technology requirements",
        "Risk mitigation approaches"
      ],
      keyTakeaways: [
        "Peak season planning timeline",
        "Capacity requirement calculators",
        "Contingency planning templates",
        "Performance monitoring frameworks"
      ]
    },
    {
      id: 'international-expansion',
      title: "International Logistics Expansion Handbook",
      description: "Complete guide to expanding logistics operations globally, covering compliance, partnerships, and risk management.",
      category: "Global Operations",
      readTime: "40-50 minutes",
      pages: 42,
      audience: "Supply Chain Leaders",
      level: "Advanced",
      topics: [
        "Market entry strategies and assessment",
        "Regulatory compliance requirements",
        "International carrier selection",
        "Customs and documentation",
        "Risk assessment and mitigation",
        "Technology integration across borders"
      ],
      keyTakeaways: [
        "Country-specific compliance checklists",
        "Carrier evaluation frameworks",
        "Risk assessment templates",
        "Implementation timelines by region"
      ]
    },
    {
      id: 'vendor-management',
      title: "Strategic Vendor Management for Logistics",
      description: "Best practices for selecting, managing, and optimizing relationships with logistics service providers and carriers.",
      category: "Vendor Management",
      readTime: "20-30 minutes",
      pages: 25,
      audience: "Procurement Teams",
      level: "Beginner to Intermediate",
      topics: [
        "Vendor selection criteria and RFP process",
        "Performance measurement and scorecards",
        "Contract management and negotiations",
        "Relationship management strategies",
        "Continuous improvement programs",
        "Risk management and contingency planning"
      ],
      keyTakeaways: [
        "Vendor evaluation scorecards",
        "Contract templates and terms",
        "Performance monitoring dashboards",
        "Relationship management frameworks"
      ]
    },
    {
      id: 'automation-implementation',
      title: "Logistics Automation Implementation Guide",
      description: "Step-by-step approach to implementing automation technologies in warehousing, transportation, and order management.",
      category: "Automation",
      readTime: "35-45 minutes",
      pages: 38,
      audience: "Operations & IT Teams",
      level: "Advanced",
      topics: [
        "Automation readiness assessment",
        "Technology selection and evaluation",
        "Implementation planning and phases",
        "Change management for automation",
        "Training and skill development",
        "Performance measurement and optimization"
      ],
      keyTakeaways: [
        "Automation roadmap templates",
        "Technology comparison matrices",
        "Training program outlines",
        "ROI calculation frameworks"
      ]
    }
  ];

  const categories = ["All", "Digital Transformation", "Cost Management", "Operations", "Global Operations", "Vendor Management", "Automation"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredGuides = selectedCategory === "All" 
    ? guides 
    : guides.filter(guide => guide.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 text-base px-4 py-2">
              Strategic Guides
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
              Comprehensive Logistics Playbooks
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              In-depth guides and frameworks to optimize every aspect of your supply chain operations
            </p>
            <Button size="xl" variant="secondary" asChild>
              <Link to="#guides">Browse Guides</Link>
            </Button>
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

      {/* Guides Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredGuides.map((guide, index) => (
                <Card key={guide.id} className="hover:shadow-medium transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant="outline">{guide.category}</Badge>
                      <Badge variant="secondary">{guide.level}</Badge>
                    </div>
                    <CardTitle className="text-xl mb-3">{guide.title}</CardTitle>
                    <p className="text-muted-foreground">{guide.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                      <div>
                        <div className="text-lg font-semibold text-primary">{guide.pages}</div>
                        <div className="text-xs text-muted-foreground">Pages</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-primary">
                          <Clock className="h-4 w-4 inline mr-1" />
                          {guide.readTime.split('-')[0]}
                        </div>
                        <div className="text-xs text-muted-foreground">Min Read</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-primary">
                          <Users className="h-4 w-4 inline mr-1" />
                        </div>
                        <div className="text-xs text-muted-foreground">{guide.audience}</div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">What You'll Learn:</h4>
                      <ul className="space-y-2">
                        {guide.topics.slice(0, 3).map((topic, topicIndex) => (
                          <li key={topicIndex} className="text-sm text-muted-foreground flex items-start">
                            <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                            {topic}
                          </li>
                        ))}
                        {guide.topics.length > 3 && (
                          <li className="text-sm text-muted-foreground italic">
                            +{guide.topics.length - 3} more topics...
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Takeaways:</h4>
                      <div className="flex flex-wrap gap-2">
                        {guide.keyTakeaways.slice(0, 2).map((takeaway, takeawayIndex) => (
                          <Badge key={takeawayIndex} variant="outline" className="text-xs">
                            {takeaway}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="w-full" size="lg" asChild>
                      <Link to="/contact">
                        <Download className="mr-2 h-4 w-4" />
                        Download Guide
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
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
    </div>
  );
};

export default Guides;