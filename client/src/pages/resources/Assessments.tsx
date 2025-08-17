import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

import { ArrowRight, CheckCircle, Clock, BarChart3, Target, Users, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const Consultations = () => {
  const [selectedConsultation, setSelectedConsultation] = useState(null);

  const consultations = [
    {
      id: 'logistics-maturity',
      title: "Logistics Maturity Consultation",
      description: "Evaluate your logistics operations across 8 key dimensions",
      duration: "15-20 minutes",
      questions: 45,
      icon: Package,
      categories: ["Visibility", "Automation", "Cost Management", "Performance", "Technology", "Processes", "Partnerships", "Scalability"],
      benefits: [
        "Comprehensive maturity scoring (1-5 scale)",
        "Benchmark against industry standards",
        "Prioritized improvement roadmap",
        "Custom recommendations report"
      ]
    },
    {
      id: 'cost-optimization',
      title: "Cost Optimization Potential",
      description: "Identify immediate savings opportunities in your supply chain",
      duration: "10-15 minutes",
      questions: 35,
      icon: BarChart3,
      categories: ["Transportation", "Warehousing", "Inventory", "Technology", "Processes", "Vendor Management"],
      benefits: [
        "Potential savings calculation",
        "Quick win identification",
        "ROI projections by initiative",
        "Implementation timeline"
      ]
    },
    {
      id: 'growth-readiness',
      title: "Growth Readiness Scorecard",
      description: "Assess your logistics infrastructure's ability to scale",
      duration: "12-18 minutes",
      questions: 40,
      icon: Target,
      categories: ["Capacity", "Flexibility", "Technology", "Team", "Processes", "Financial", "Risk Management"],
      benefits: [
        "Growth readiness score",
        "Scaling bottleneck identification",
        "Capacity planning insights",
        "Investment prioritization"
      ]
    },
    {
      id: 'digital-readiness',
      title: "Digital Transformation Readiness",
      description: "Evaluate your organization's readiness for supply chain digitization",
      duration: "15-20 minutes",
      questions: 50,
      icon: Users,
      categories: ["Current Technology", "Data Quality", "Team Skills", "Change Management", "Integration Needs", "Budget"],
      benefits: [
        "Digital maturity consultation",
        "Technology gap analysis",
        "Implementation roadmap",
        "Change management plan"
      ]
    }
  ];

  const sampleQuestions = {
    'logistics-maturity': [
      "How do you currently track shipments in real-time?",
      "What percentage of your logistics processes are automated?",
      "How often do you review and optimize transportation costs?",
      "What level of visibility do you have into your supply chain performance?"
    ],
    'cost-optimization': [
      "What is your current monthly logistics spend?",
      "How often do you negotiate carrier rates?",
      "Do you have visibility into all logistics-related costs?",
      "What percentage of shipments are delivered on time?"
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 text-base px-4 py-2">
              Interactive Consultations
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
              Evaluate Your Logistics Maturity
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Get data-driven insights into your supply chain performance and improvement opportunities
            </p>
            <Button size="xl" variant="secondary" asChild>
              <Link to="#consultations">Start Your Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                How Our Consultations Work
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Professional-grade evaluation tools used by logistics leaders worldwide
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Answer Questions</h3>
                  <p className="text-muted-foreground">
                    Complete a comprehensive questionnaire about your current logistics operations and challenges
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Get Scored</h3>
                  <p className="text-muted-foreground">
                    Receive detailed scoring across multiple dimensions with industry benchmarking
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Take Action</h3>
                  <p className="text-muted-foreground">
                    Get a prioritized action plan with specific recommendations and next steps
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Consultations Grid */}
      <section id="consultations" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Choose Your Consultation
              </h2>
              <p className="text-xl text-muted-foreground">
                Select the consultation that best matches your current priorities
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {consultations.map((consultation, index) => (
                <Card key={consultation.id} className="hover:shadow-medium transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <consultation.icon className="h-8 w-8 text-primary" />
                        <div>
                          <CardTitle className="text-xl">{consultation.title}</CardTitle>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {consultation.duration}
                            </div>
                            <div>{consultation.questions} questions</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{consultation.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Consultation Categories:</h4>
                      <div className="flex flex-wrap gap-2">
                        {consultation.categories.map((category, catIndex) => (
                          <Badge key={catIndex} variant="outline" className="text-xs">
                            {category}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">What You'll Get:</h4>
                      <ul className="space-y-2">
                        {consultation.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-primary mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className="w-full" size="lg" asChild>
                      <Link to="/contact">
                        Start Consultation
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sample Questions Preview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Sample Consultation Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Get a preview of the types of questions you'll encounter
              </p>
            </div>
            
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Package className="h-6 w-6 text-primary" />
                    Logistics Maturity Consultation - Sample Questions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {sampleQuestions['logistics-maturity']?.map((question, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg">
                        <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                          {index + 1}
                        </div>
                        <p className="text-sm flex-1">{question}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-accent/20 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> Each question includes multiple choice answers, rating scales, or specific metrics to ensure accurate consultation of your logistics maturity.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Results Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Your Consultation Results
              </h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive insights and actionable recommendations
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Maturity Scoring Example</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { category: "Visibility & Tracking", score: 85 },
                      { category: "Cost Management", score: 72 },
                      { category: "Automation Level", score: 58 },
                      { category: "Performance Analytics", score: 91 },
                      { category: "Technology Integration", score: 67 }
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-2">
                          <span>{item.category}</span>
                          <span className="font-semibold">{item.score}%</span>
                        </div>
                        <Progress value={item.score} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Prioritized Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { priority: "High", action: "Implement real-time tracking system", impact: "15% cost reduction" },
                      { priority: "Medium", action: "Automate order processing workflows", impact: "25% efficiency gain" },
                      { priority: "Medium", action: "Establish carrier scorecards", impact: "10% performance improvement" },
                      { priority: "Low", action: "Upgrade reporting dashboard", impact: "Enhanced visibility" }
                    ].map((rec, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                        <Badge variant={rec.priority === 'High' ? 'destructive' : rec.priority === 'Medium' ? 'secondary' : 'outline'}>
                          {rec.priority}
                        </Badge>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{rec.action}</p>
                          <p className="text-xs text-muted-foreground">{rec.impact}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Ready to Assess Your Logistics?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Take the first step toward optimizing your supply chain operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link to="/contact">
                  Start Consultation
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

export default Consultations;