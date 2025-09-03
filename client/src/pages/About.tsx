import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Users, Award, Target, Truck, Plane, Ship, Building } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary">
        {/* Enhanced Background with Subtle Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/95" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/50 rounded-full blur-2xl"></div>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-6 text-center text-white">
          <div className="mb-4 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-4">About Janio Logistics</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-display font-bold mb-8 animate-fade-in leading-tight tracking-tight">
            Making logistics
            <span className="block text-white bg-gradient-to-r from-white to-blue-100 bg-clip-text">simple</span>
            for growing businesses
          </h1>
          <p className="text-lg lg:text-xl text-white/80 mb-12 leading-loose max-w-4xl mx-auto animate-slide-up font-light">
            Janio is a Fourth-Party Logistics (4PL) provider specializing in comprehensive supply chain 
            management across Land, Air, Ocean transportation, and advanced warehousing services.
          </p>
          
          <div className="flex justify-center animate-scale-in">
            <Link to="/contact">
              <button className="bg-white text-primary hover:bg-gray-100 text-lg px-12 py-4 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Get In Touch
              </button>
            </Link>
          </div>
          
        </div>
      </section>

      {/* Company Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-display text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Transform Janio from a logistics service provider into a strategic enabler of growth and efficiency for e-commerce and retail clients.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Strategic Partnership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We don't just move your goods – we become your strategic logistics partner, enabling growth and competitive advantage.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Operational Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Delivering consistent, reliable performance across all transportation modes with industry-leading service levels.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Customer Success</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Your success is our success. We measure our performance by your business outcomes and growth achievements.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-display text-foreground mb-4">
                4PL Specialization & Experience
              </h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive logistics expertise across all transportation modes and supply chain functions
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Truck className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Land Transportation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• LTL & FTL optimization</li>
                    <li>• Regional carrier networks</li>
                    <li>• Last-mile delivery</li>
                    <li>• Cross-docking solutions</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Plane className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Air Freight</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Express & standard air</li>
                    <li>• International cargo</li>
                    <li>• Charter solutions</li>
                    <li>• Time-critical delivery</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Ship className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Ocean Freight</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• FCL & LCL services</li>
                    <li>• Port-to-port delivery</li>
                    <li>• Intermodal solutions</li>
                    <li>• Container management</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Warehousing</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Advanced WMS technology</li>
                    <li>• Pick, pack, ship operations</li>
                    <li>• Inventory management</li>
                    <li>• Value-added services</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Global Capabilities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-display text-foreground mb-4">
                Global Capabilities
              </h2>
              <p className="text-xl text-muted-foreground">
                Serving businesses across key markets with local expertise and global reach
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Globe className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Asia-Pacific Hub</h3>
                    <p className="text-muted-foreground">Strong presence across Southeast Asia with deep regional expertise and carrier relationships.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">North American Network</h3>
                    <p className="text-muted-foreground">Expanding operations across US and Canada with local partnerships and technology integration.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">European Expansion</h3>
                    <p className="text-muted-foreground">Strategic partnerships enabling comprehensive European coverage for global customers.</p>
                  </div>
                </div>
              </div>
              <div className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-4">Global Network Stats:</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Countries Served</span>
                    <span className="font-semibold text-primary">25+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Carrier Partnerships</span>
                    <span className="font-semibold text-primary">500+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Warehouse Facilities</span>
                    <span className="font-semibold text-primary">50+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Daily Shipments</span>
                    <span className="font-semibold text-primary">100,000+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-display text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">Reliability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Consistent, dependable service you can count on for your critical logistics operations.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Continuously evolving our technology and processes to stay ahead of industry challenges.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">Transparency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Open communication and clear visibility into all aspects of your supply chain operations.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">Partnership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Building long-term relationships based on mutual success and shared objectives.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold font-display text-white mb-6">
              Ready to simplify your logistics?
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how Janio can become your strategic logistics partner and help your business grow
            </p>
            
            {/* Trust Markers */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-12 text-white/80">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="text-lg font-medium">Trusted by 500+ companies</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                <span className="text-lg font-medium">Managing 100,000+ shipments daily</span>
              </div>
            </div>
            
            {/* Primary CTA */}
            <div className="flex justify-center">
              <Link to="/contact">
                <button className="bg-white text-primary hover:bg-gray-50 text-xl font-semibold px-16 py-6 rounded-full transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105 border-4 border-white/20">
                  Get In Touch
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;