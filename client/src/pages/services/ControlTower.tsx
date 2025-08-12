import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Eye, Zap, Network, Brain, Shield, CheckCircle, Clock, BarChart3 } from 'lucide-react';

const ControlTower = () => {
  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/95" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">
              Gain Immediate Access to <span className="text-accent">Comprehensive Vendor Portfolio</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              View and evaluate supply chain decisions on how they directly impact your P&L and customer experience. Identify inefficiencies quickly, recover money lost, eliminate switching costs and operational downtime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo">
                <button className="bg-accent text-white hover:bg-accent/90 text-lg px-10 py-4 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl">
                  Schedule Live Demo
                </button>
              </Link>
              <Link to="/calculator/control-tower-roi">
                <button className="bg-white/20 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-primary text-lg px-10 py-4 rounded-full font-medium transition-all duration-200">
                  Calculate ROI
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Control Tower Concept */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-display text-foreground mb-4">
                What is a Supply Chain Control Tower?
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                A unified command center that provides real-time visibility, predictive analytics, and proactive control across your entire supply chain network
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Eye className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">360° Visibility</h3>
                    <p className="text-muted-foreground">Real-time tracking of shipments, inventory, and performance across all partners</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Brain className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">AI-Powered Intelligence</h3>
                    <p className="text-muted-foreground">Machine learning algorithms predict disruptions and recommend optimal responses</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Proactive Control</h3>
                    <p className="text-muted-foreground">Automated workflows and expert intervention prevent issues before they impact customers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Network className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Unified Operations</h3>
                    <p className="text-muted-foreground">Single platform integrating all supply chain partners and systems</p>
                  </div>
                </div>
              </div>
              <div className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-4">Control Tower Benefits:</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Shipment Visibility</span>
                    <span className="font-semibold text-primary">95%+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Exception Response Time</span>
                    <span className="font-semibold text-primary">&lt; 2 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">On-Time Performance</span>
                    <span className="font-semibold text-primary">99.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Disruption Cost Reduction</span>
                    <span className="font-semibold text-primary">25-40%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-display text-foreground mb-4">
                How Control Tower Works
              </h2>
              <p className="text-xl text-muted-foreground">
                3-phase implementation delivering immediate visibility and long-term optimization
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Network className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Phase 1: Integration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Connect all supply chain systems and partners to unified platform
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2 text-left">
                    <li>• ERP and WMS system integration</li>
                    <li>• Carrier and 3PL API connections</li>
                    <li>• IoT device and sensor integration</li>
                    <li>• Data cleansing and standardization</li>
                  </ul>
                  <div className="pt-2">
                    <span className="text-sm font-medium text-primary">Timeline: 30-45 days</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Eye className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Phase 2: Visibility</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Establish real-time visibility and monitoring across network
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2 text-left">
                    <li>• Real-time shipment tracking</li>
                    <li>• Performance dashboard deployment</li>
                    <li>• Exception monitoring setup</li>
                    <li>• Alert and notification configuration</li>
                  </ul>
                  <div className="pt-2">
                    <span className="text-sm font-medium text-primary">Timeline: 45-60 days</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Brain className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Phase 3: Intelligence</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Deploy AI-powered analytics and predictive optimization
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2 text-left">
                    <li>• Predictive analytics deployment</li>
                    <li>• Automated workflow configuration</li>
                    <li>• Machine learning model training</li>
                    <li>• Continuous optimization enabling</li>
                  </ul>
                  <div className="pt-2">
                    <span className="text-sm font-medium text-primary">Timeline: 90-120 days</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Platform */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-display text-center text-foreground mb-12">
              Advanced Technology Platform
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>AI/ML Capabilities</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Predictive delay modeling and disruption forecasting</li>
                      <li>• Dynamic route optimization and carrier selection</li>
                      <li>• Demand forecasting and inventory optimization</li>
                      <li>• Anomaly detection and performance monitoring</li>
                      <li>• Automated decision making and workflow triggers</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Network className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Integration Capabilities</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• 500+ pre-built API connectors and integrations</li>
                      <li>• Real-time EDI and document processing</li>
                      <li>• IoT sensor and tracking device connectivity</li>
                      <li>• Cloud-native, scalable architecture</li>
                      <li>• Enterprise security and compliance standards</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Operations Support */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-display text-center text-foreground mb-12">
              24/7 Expert Operations Center
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Round-the-Clock Monitoring</h3>
                    <p className="text-muted-foreground">Expert analysts monitoring your supply chain 24/7/365</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Proactive Exception Management</h3>
                    <p className="text-muted-foreground">Immediate response to disruptions and performance issues</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Escalation Management</h3>
                    <p className="text-muted-foreground">Tiered response protocols for all exception types</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <BarChart3 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Performance Analytics</h3>
                    <p className="text-muted-foreground">Continuous performance analysis and improvement recommendations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Network className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Carrier Coordination</h3>
                    <p className="text-muted-foreground">Direct carrier communication and issue resolution</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Customer Communication</h3>
                    <p className="text-muted-foreground">Proactive customer updates and issue notifications</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI & Value */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-display text-foreground mb-8">
              Measurable ROI and Business Value
            </h2>
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <p className="text-muted-foreground">Shipment Visibility</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">60%</div>
                <p className="text-muted-foreground">Faster Exception Resolution</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">25%</div>
                <p className="text-muted-foreground">Reduced Disruption Costs</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">12x</div>
                <p className="text-muted-foreground">ROI in Year 1</p>
              </div>
            </div>
            
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Value Realization Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Basic Visibility</span>
                    <span className="font-semibold">Day 30</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Full Monitoring</span>
                    <span className="font-semibold">Day 60</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Predictive Analytics</span>
                    <span className="font-semibold">Day 90</span>
                  </div>
                  <div className="flex justify-between items-center border-t pt-4">
                    <span className="font-semibold text-foreground">Full ROI Realization</span>
                    <span className="font-bold text-primary">6-12 months</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-display text-center text-foreground mb-12">
              120-Day Implementation Roadmap
            </h2>
            
            <div className="relative">
              <div className="grid md:grid-cols-4 gap-6">
                <Card>
                  <CardHeader>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mx-auto mb-2">1</div>
                      <CardTitle className="text-lg">Days 1-30</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="text-center space-y-3">
                    <h4 className="font-semibold text-foreground">Discovery & Design</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• System architecture design</li>
                      <li>• Integration planning</li>
                      <li>• Data mapping</li>
                      <li>• Security setup</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mx-auto mb-2">2</div>
                      <CardTitle className="text-lg">Days 31-60</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="text-center space-y-3">
                    <h4 className="font-semibold text-foreground">Integration & Testing</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• System integrations</li>
                      <li>• Data validation</li>
                      <li>• User acceptance testing</li>
                      <li>• Training delivery</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mx-auto mb-2">3</div>
                      <CardTitle className="text-lg">Days 61-90</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="text-center space-y-3">
                    <h4 className="font-semibold text-foreground">Go-Live & Stabilization</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Production deployment</li>
                      <li>• Monitoring activation</li>
                      <li>• Performance tuning</li>
                      <li>• Support transition</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mx-auto mb-2">4</div>
                      <CardTitle className="text-lg">Days 91-120</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="text-center space-y-3">
                    <h4 className="font-semibold text-foreground">Optimization & Scaling</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• AI model activation</li>
                      <li>• Advanced analytics</li>
                      <li>• Workflow automation</li>
                      <li>• Continuous improvement</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-display text-secondary-foreground mb-6">
              Ready to command your supply chain?
            </h2>
            <p className="text-xl text-secondary-foreground/80 mb-8">
              See Control Tower in action with a personalized demo of your supply chain
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/demo">Schedule Live Demo</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white/20 text-white hover:bg-white/10" asChild>
                <Link to="/calculator/control-tower-roi">Calculate Your ROI</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ControlTower;