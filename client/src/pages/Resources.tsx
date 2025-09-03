import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, FileText, BookOpen, TrendingUp, Download, Clock, Mail, CheckCircle, Star, Users, Target, BarChart3, Zap, Award } from 'lucide-react';

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 text-base px-4 py-2">
              Free Resources & Tools
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
              Transform Your Logistics with Expert <span className="text-secondary">Resources</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Get instant access to professional-grade consultations, ROI calculators, and strategic guides used by 500+ logistics leaders
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button variant="secondary" size="xl" asChild>
                <Link to="#lead-magnet">Book a Consultation!</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white/20 text-white hover:bg-white/10" asChild>
                <Link to="#calculators">Calculate Savings</Link>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Instant Download</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>No Sales Calls</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Expert Insights</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section id="lead-magnet" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Book Your Free Logistics Consultation
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Book our comprehensive 15-minute consultation used by Fortune 500 companies to identify $2M+ in annual savings opportunities
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Card className="border-primary/20 shadow-lg">
                  <CardHeader className="bg-primary/5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">Logistics Maturity Consultation</CardTitle>
                        <p className="text-sm text-muted-foreground">Professional-grade evaluation tool</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-sm">Evaluate 8 key logistics dimensions</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-sm">Benchmark against industry leaders</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-sm">Get prioritized improvement roadmap</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-sm">Identify 15-25% cost reduction opportunities</span>
                      </div>
                    </div>
                    
                    <div className="bg-accent/20 p-4 rounded-lg mb-6">
                      <div className="flex items-center gap-2 text-sm font-medium text-primary mb-2">
                        <Star className="h-4 w-4" />
                        <span>What's Included:</span>
                      </div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• 45-question comprehensive consultation</li>
                        <li>• Detailed scoring across 8 dimensions</li>
                        <li>• Custom improvement recommendations</li>
                        <li>• Industry benchmarking report</li>
                        <li>• Implementation priority matrix</li>
                      </ul>
                    </div>
                    
                    <Button className="w-full" size="lg" asChild>
                      <Link to="/contact">
                        <Download className="mr-2 h-4 w-4" />
                        Book a Consultation!
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold font-display mb-4">Why 500+ Companies Book This Consultation</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">$2.1M</div>
                      <div className="text-sm text-muted-foreground">Average annual savings identified</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">87%</div>
                      <div className="text-sm text-muted-foreground">Implement recommended changes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">6 Mo</div>
                      <div className="text-sm text-muted-foreground">Average implementation time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">4.8/5</div>
                      <div className="text-sm text-muted-foreground">User satisfaction rating</div>
                    </div>
                  </div>
                </div>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <div className="font-semibold mb-2">Sarah Chen, VP Supply Chain at TechFlow</div>
                        <p className="text-sm text-muted-foreground italic">
                          "This consultation revealed $3.2M in savings opportunities we never knew existed. Within 8 months, we'd implemented 80% of the recommendations and cut logistics costs by 22%."
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Assessments */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-display text-foreground mb-4">
                Specialized Consultation Tools
              </h2>
              <p className="text-xl text-muted-foreground">
                Industry-specific evaluations for targeted optimization strategies
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center hover:shadow-medium transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-lg">Growth Readiness Scorecard</CardTitle>
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>12 minutes</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Assess your logistics infrastructure's ability to handle 2-5x growth
                  </p>
                  <div className="text-sm font-medium text-secondary">Perfect for scaling businesses</div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/contact">Book Consultation</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-medium transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">Digital Transformation Readiness</CardTitle>
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>18 minutes</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Evaluate readiness for supply chain digitization and automation
                  </p>
                  <div className="text-sm font-medium text-accent">Ideal for modernization planning</div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/contact">Start Evaluation</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-medium transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Cost Optimization Audit</CardTitle>
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>15 minutes</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Identify immediate savings opportunities across all logistics functions
                  </p>
                  <div className="text-sm font-medium text-primary">Quick wins identification</div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/contact">Find Savings</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculators */}
      <section id="calculators" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-display text-foreground mb-4">
                Professional ROI Calculators
              </h2>
              <p className="text-xl text-muted-foreground">
                Quantify the financial impact of logistics optimization with enterprise-grade tools
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-medium transition-shadow group">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Calculator className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <CardTitle className="text-lg">4PL ROI Calculator</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Complete ROI analysis for outsourcing to a 4PL provider
                  </p>
                  <div className="text-sm font-medium text-primary">Typical ROI: 300-500%</div>
                  <div className="text-xs text-muted-foreground">15-25% cost reduction</div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/resources/calculators">
                      <Zap className="mr-2 h-4 w-4" />
                      Calculate ROI
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-medium transition-shadow group">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                    <TrendingUp className="h-6 w-6 text-secondary group-hover:text-white" />
                  </div>
                  <CardTitle className="text-lg">Freight Savings Calculator</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Estimate savings from transportation procurement optimization
                  </p>
                  <div className="text-sm font-medium text-secondary">Typical Savings: 10-20%</div>
                  <div className="text-xs text-muted-foreground">Plus efficiency gains</div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/resources/calculators">
                      <TrendingUp className="mr-2 h-4 w-4" />
                      Calculate Savings
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-medium transition-shadow group">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                    <BarChart3 className="h-6 w-6 text-accent group-hover:text-white" />
                  </div>
                  <CardTitle className="text-lg">Automation Value Calculator</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Quantify value from automating manual logistics processes
                  </p>
                  <div className="text-sm font-medium text-accent">60-80% time savings</div>
                  <div className="text-xs text-muted-foreground">90% fewer errors</div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/resources/calculators">
                      <BarChart3 className="mr-2 h-4 w-4" />
                      Calculate Value
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-medium transition-shadow group">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <FileText className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <CardTitle className="text-lg">Invoice Audit Recovery</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Calculate potential recovery from freight invoice auditing
                  </p>
                  <div className="text-sm font-medium text-primary">Typical Recovery: 3-8%</div>
                  <div className="text-xs text-muted-foreground">Plus compliance gains</div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/resources/calculators">
                      <FileText className="mr-2 h-4 w-4" />
                      Calculate Recovery
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-12 text-center">
              <Card className="inline-block">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold">Want a Custom ROI Analysis?</h4>
                      <p className="text-sm text-muted-foreground">Get a personalized consultation of your specific logistics optimization potential</p>
                    </div>
                    <Button asChild>
                      <Link to="/contact">Request Analysis</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Guides - Premium Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-display text-foreground mb-4">
                Premium Strategic Guides
              </h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive playbooks used by Fortune 500 logistics leaders
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="relative overflow-hidden group hover:shadow-medium transition-shadow">
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-primary text-white">Most Popular</Badge>
                </div>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Digital Transformation Playbook</CardTitle>
                  <p className="text-sm text-muted-foreground">50 pages • Templates included</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Complete guide to modernizing your supply chain with digital technologies
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="h-3 w-3 text-primary" />
                      <span>Evaluation frameworks & maturity models</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="h-3 w-3 text-primary" />
                      <span>Technology selection criteria</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="h-3 w-3 text-primary" />
                      <span>Implementation roadmap templates</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/resources/guides">
                      <Download className="mr-2 h-4 w-4" />
                      Download Guide
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-medium transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-lg">Cost Optimization Masterclass</CardTitle>
                  <p className="text-sm text-muted-foreground">35 pages • Calculator tools</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Proven methods to identify and capture 15-25% logistics cost reductions
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="h-3 w-3 text-secondary" />
                      <span>Cost analysis frameworks</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="h-3 w-3 text-secondary" />
                      <span>Negotiation tactics & scripts</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="h-3 w-3 text-secondary" />
                      <span>Quick wins identification guide</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/resources/guides">
                      <Download className="mr-2 h-4 w-4" />
                      Download Guide
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-medium transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">Peak Season Preparation</CardTitle>
                  <p className="text-sm text-muted-foreground">28 pages • Checklist templates</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    90-day countdown checklist for handling seasonal demand spikes
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="h-3 w-3 text-accent" />
                      <span>Demand forecasting methods</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="h-3 w-3 text-accent" />
                      <span>Capacity scaling strategies</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="h-3 w-3 text-accent" />
                      <span>Risk mitigation frameworks</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/resources/guides">
                      <Download className="mr-2 h-4 w-4" />
                      Download Guide
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-lg text-sm text-muted-foreground">
                <Award className="h-4 w-4" />
                <span>All guides include implementation templates, checklists, and email support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog & Case Studies */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold font-display text-foreground mb-6">
                  Latest from Our Blog
                </h2>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground mb-2">
                        5 Signs Your E-commerce Logistics Needs a 4PL Partner
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Identify the key indicators that signal it's time to outsource your logistics operations...
                      </p>
                      <Button variant="ghost" size="sm" asChild>
                        <Link to="/resources/blogs">Read More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground mb-2">
                        Peak Season Preparation: A 90-Day Countdown Checklist
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Comprehensive preparation guide for handling holiday demand surges...
                      </p>
                      <Button variant="ghost" size="sm" asChild>
                        <Link to="/resources/blogs">Read More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-6">
                  <Button variant="outline" asChild>
                    <Link to="/resources/blogs">View All Articles</Link>
                  </Button>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold font-display text-foreground mb-6">
                  Customer Success Stories
                </h2>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground mb-2">
                        Fashion Brand Scales 500% with Zero Logistics Headaches
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        How LaaS enabled rapid growth without operational complexity...
                      </p>
                      <Button variant="ghost" size="sm" asChild>
                        <Link to="/resources/case-studies">Read Case Study</Link>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground mb-2">
                        Manufacturer Cuts Freight Costs 20% in 6 Months
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Strategic procurement delivers immediate and sustainable savings...
                      </p>
                      <Button variant="ghost" size="sm" asChild>
                        <Link to="/resources/case-studies">Read Case Study</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-6">
                  <Button variant="outline" asChild>
                    <Link to="/resources/case-studies">View All Case Studies</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup - Additional Lead Magnet */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-display mb-6">
              Get Weekly Logistics Optimization Tips
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join 5,000+ supply chain leaders getting actionable insights and exclusive resources delivered weekly
            </p>
            
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">5,000+</div>
                      <div className="text-xs text-muted-foreground">Subscribers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">4.9/5</div>
                      <div className="text-xs text-muted-foreground">Rating</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">Weekly</div>
                      <div className="text-xs text-muted-foreground">Insights</div>
                    </div>
                  </div>
                  
                  <div className="text-left">
                    <h4 className="font-semibold mb-3">What you'll get:</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Weekly optimization tips</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Industry benchmarks</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Exclusive case studies</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Early access to tools</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full" size="lg" asChild>
                    <Link to="/contact">
                      <Mail className="mr-2 h-4 w-4" />
                      Subscribe Now
                    </Link>
                  </Button>
                  
                  <p className="text-xs text-muted-foreground">
                    No spam. Unsubscribe anytime. Used by teams at Fortune 500 companies and 500+ growing businesses worldwide.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-display text-foreground mb-6">
              Ready to Transform Your Logistics?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start with our free consultation and discover your optimization potential
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link to="/contact">Book Free Consultation</Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/contact">Get Expert Consultation</Link>
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Free forever</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>No credit card</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Instant results</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;