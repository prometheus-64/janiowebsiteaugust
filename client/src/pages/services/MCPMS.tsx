import PageSEO from '@/components/PageSEO';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, BarChart3, Settings, TrendingUp, DollarSign, Shield, Zap, Globe, Monitor, AlertTriangle, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { MEDIA_CONFIG, getMediaUrl, getStandardImageProps } from "@/config/media";
import { MediaModal } from "@/components/ui/MediaModal";
import { useState } from "react";

export default function MCPMS() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    src: string;
    alt: string;
    type: 'image' | 'video';
  }>({
    isOpen: false,
    src: '',
    alt: '',
    type: 'image'
  });

  const openModal = (src: string, alt: string, type: 'image' | 'video') => {
    setModalState({ isOpen: true, src, alt, type });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, src: '', alt: '', type: 'image' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <PageSEO page="mcpms" />
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
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-4">
              Multi-Carrier Platform Management System
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6 animate-fade-in leading-tight tracking-tight">
            Complete Logistics Command Center with AI-Powered Intelligence
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold mb-8 text-white/90 animate-fade-in">
            Real-Time Operations Dashboard • Advanced Analytics • Automated Exception Management
          </h2>
          <p className="text-lg lg:text-xl text-white/80 mb-12 leading-loose max-w-4xl mx-auto animate-slide-up font-light">
            Transform your multi-carrier logistics operations with our comprehensive platform that provides real-time visibility, predictive analytics, automated workflows, and complete financial control across your entire shipping network.
          </p>
          
          <div className="flex justify-center items-center mb-16 animate-scale-in">
            <Link to="/contact">
              <button className="bg-white text-primary hover:bg-gray-100 text-lg px-12 py-4 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Get Free Platform Demo <ArrowRight className="ml-2 w-5 h-5 inline" />
              </button>
            </Link>
          </div>

          {/* Trust Bar */}
          <div className="text-center animate-fade-in">
            <p className="text-white/60 text-sm mb-4">Trusted platform capabilities</p>
            <div className="flex flex-wrap justify-center items-center gap-6 opacity-70">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-white/80 font-medium text-sm">Real-Time Dashboard</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-white/80 font-medium text-sm">AI-Powered Analytics</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-white/80 font-medium text-sm">Multi-Carrier Integration</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-white/80 font-medium text-sm">Automated Workflows</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Logistics at a Glance Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-6 lg:pr-8">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 leading-tight">
                    Your Logistics at a Glance
                  </h2>
                  <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
                    From costs to performance, track every KPI in real time across your entire network.
                  </p>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  The Operations Dashboard gives you instant visibility into active lanes, top partners by spend, and exception trends. Identify issues early, optimize costs, and hold carriers accountable with actionable insights—all in one unified view.
                </p>
                
                <div className="pt-4">
                  <Link to="/contact">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200">
                      Explore the Dashboard
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Right Dashboard Image */}
              <div className="order-first lg:order-last">
                <div 
                  className="rounded-xl shadow-lg overflow-hidden bg-white cursor-pointer hover:shadow-xl transition-all duration-300 group relative"
                  onClick={() => openModal(
                    getMediaUrl(MEDIA_CONFIG.MCPMS.DASHBOARD_OPERATIONS, true),
                    "MCPMS Operations Dashboard showing network-wide performance metrics including 5 active lanes, $23.34 average cost per shipment, 85.1% on-time rate, and real-time exception tracking with top partners by spend",
                    'image'
                  )}
                >
                  <img 
                    src={getMediaUrl(MEDIA_CONFIG.MCPMS.DASHBOARD_OPERATIONS, true)} 
                    alt="MCPMS Operations Dashboard showing network-wide performance metrics including 5 active lanes, $23.34 average cost per shipment, 85.1% on-time rate, and real-time exception tracking with top partners by spend"
                    {...getStandardImageProps(1920, 968)}
                    className="w-full h-auto max-w-none group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-[1px]">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-primary font-semibold text-sm">
                      Click to expand
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Awareness Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Hidden Complexity of Multi-Carrier Operations</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Managing multiple carriers across different platforms creates operational blind spots, escalates costs, and prevents teams from achieving optimal performance. The real challenge isn't just shipping—it's the lack of unified visibility and control.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-destructive/20 hover:border-destructive/40 transition-colors">
                <CardHeader>
                  <Monitor className="h-12 w-12 text-destructive mb-4" />
                  <CardTitle className="text-destructive">Operational Blind Spots</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                      <span>Fragmented dashboards across multiple carrier platforms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                      <span>No unified view of network-wide performance metrics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                      <span>Manual exception tracking across different systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                      <span>Reactive instead of predictive operational management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-orange-500/20 hover:border-orange-500/40 transition-colors">
                <CardHeader>
                  <AlertTriangle className="h-12 w-12 text-orange-500 mb-4" />
                  <CardTitle className="text-orange-500">Financial & Administrative Burden</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Complex invoice reconciliation across multiple carriers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Manual rate card management and optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Time-intensive dispute management processes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Lack of automated allocation and workflow rules</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-yellow-500/20 hover:border-yellow-500/40 transition-colors">
                <CardHeader>
                  <Target className="h-12 w-12 text-yellow-600 mb-4" />
                  <CardTitle className="text-yellow-600">Strategic Performance Gaps</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0" />
                      <span>No lane-level optimization and forecasting capabilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0" />
                      <span>Limited carrier performance benchmarking and analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0" />
                      <span>Inability to identify cost optimization opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0" />
                      <span>Missing integration with business systems and e-commerce platforms</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 text-center">
              <div className="relative bg-gradient-to-r from-destructive/10 via-orange-500/10 to-yellow-600/10 border-2 border-destructive/20 rounded-2xl max-w-4xl mx-auto p-12 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent"></div>
                <div className="absolute top-4 right-4 w-32 h-32 bg-destructive/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 bg-orange-500/10 rounded-full blur-xl"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 bg-destructive rounded-full animate-pulse"></div>
                    <h3 className="text-2xl font-bold text-destructive">The Multi-Carrier Management Crisis</h3>
                    <div className="w-3 h-3 bg-destructive rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-destructive/10">
                    <p className="text-xl font-medium text-gray-800 leading-relaxed">
                      While you're <span className="font-bold text-destructive">managing carriers across fragmented platforms</span> and losing visibility into performance, 
                      your competitors are <span className="font-bold text-primary">leveraging unified command centers</span> with AI-powered insights to optimize costs and accelerate operations.
                    </p>
                  </div>
                  
                  <div className="mt-6 flex justify-center items-center gap-8 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Monitor className="w-4 h-4 text-destructive" />
                      <span>Fragmented Operations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-orange-500" />
                      <span>Administrative Burden</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-yellow-600" />
                      <span>Performance Gaps</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Awareness Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Fragmented Multi-Carrier Management vs. Unified MCPMS Platform</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Here's the difference between managing carriers across separate platforms and leveraging our comprehensive Multi-Carrier Platform Management System:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="border-2 border-destructive/30 bg-destructive/5 hover:bg-destructive/10 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-destructive"></div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-destructive/20 rounded-full flex items-center justify-center">
                  <span className="text-destructive font-bold text-sm">✗</span>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-destructive text-xl font-bold flex items-center gap-2">
                    <Monitor className="w-5 h-5" />
                    Fragmented Multi-Carrier Management
                  </CardTitle>
                  <Badge variant="destructive" className="w-fit">Complex & Inefficient</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Manage <strong>separate dashboards</strong> for each carrier</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Manual exception tracking and <strong>reactive problem solving</strong></span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Time-intensive invoice reconciliation and <strong>financial management</strong></span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/40 bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/15 transition-all duration-300 relative overflow-hidden shadow-lg">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-primary text-xl font-bold flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Unified MCPMS Platform
                  </CardTitle>
                  <Badge className="w-fit bg-primary/20 text-primary hover:bg-primary/30">Intelligent & Unified</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Single command center</strong> with real-time multi-carrier visibility</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-gray-700">AI-powered analytics with <strong>predictive insights</strong> and automation</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Automated workflows with <strong>intelligent financial management</strong></span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <BarChart3 className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-primary">Operational Intelligence</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Real-Time Dashboard:</strong> Unified KPI tracking across all carriers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Lane Analytics:</strong> Deep dive performance analysis and forecasting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>AI Insights:</strong> Proactive anomaly detection and recommendations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <Settings className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-primary">Automation & Configuration</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Exception Management:</strong> Automated workflows and escalation rules</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Allocation Engine:</strong> Smart carrier assignment with custom rules</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Integration Hub:</strong> Seamless e-commerce and WMS connections</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <DollarSign className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-primary">Financial Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Billing Hub:</strong> Automated invoice reconciliation and dispute management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Rate Management:</strong> Centralized rate cards with competitiveness analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Cost Analytics:</strong> Real-time P&L tracking and variance analysis</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Modules Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Platform Modules</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Six integrated modules that transform your multi-carrier logistics operations from reactive management to proactive optimization.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <Monitor className="h-10 w-10 text-primary mb-4" />
                  <CardTitle className="text-lg">Operations Dashboard</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Real-time command center with KPI tracking, AI insights, and performance analytics across your entire shipping network.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>Live KPI monitoring & alerts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>Partner performance rankings</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>Exception management dashboard</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <BarChart3 className="h-10 w-10 text-primary mb-4" />
                  <CardTitle className="text-lg">Lane Analysis & Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Deep-dive analytics, optimization strategies, and 90-day forecasting for specific shipping lanes and routes.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>Strategy comparison & modeling</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>Exception hotspot analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>Predictive performance forecasting</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <Settings className="h-10 w-10 text-primary mb-4" />
                  <CardTitle className="text-lg">Configuration Engine</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Customize workflows, allocation rules, and automation settings to match your specific operational requirements.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>Automated allocation rules</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>SLA & escalation management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>Multi-currency support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <Globe className="h-10 w-10 text-primary mb-4" />
                  <CardTitle className="text-lg">Integration Hub</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Connect with carriers, e-commerce platforms, WMS systems, and business tools for seamless data flow.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>Multi-carrier API connections</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>E-commerce platform sync</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>ERP & accounting integration</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <DollarSign className="h-10 w-10 text-primary mb-4" />
                  <CardTitle className="text-lg">Finance Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Complete financial control with automated reconciliation, dispute management, and rate optimization.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>Automated invoice reconciliation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>Dispute tracking & analytics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>Rate competitiveness analysis</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <Shield className="h-10 w-10 text-primary mb-4" />
                  <CardTitle className="text-lg">Order & Exception Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Unified interface for managing orders and resolving exceptions with AI-powered recommendations and workflow automation.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>360° order tracking & analytics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>AI-powered exception resolution</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>Root cause analysis & prevention</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Showcase Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Intelligent Automation & Configuration</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Configure smart allocation rules, automated workflows, and exception handling that adapts to your business requirements with zero manual intervention.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-center">Automated Allocation Rules</h3>
                <div 
                  className="relative rounded-xl shadow-lg border overflow-hidden bg-white cursor-pointer hover:shadow-xl transition-all duration-300 group"
                  onClick={() => openModal(
                    getMediaUrl(MEDIA_CONFIG.MCPMS.ALLOCATION_RULES, true),
                    "Allocation rules configuration showing multi-source rules for MY/ID Express with destination-based routing and cheapest allocation strategy across DHL Express, FedEx, and MyDHL accounts",
                    'video'
                  )}
                >
                  <video 
                    src={getMediaUrl(MEDIA_CONFIG.MCPMS.ALLOCATION_RULES, true)}
                    {...getStandardImageProps(1200, 800)}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto max-w-none group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-[1px]">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-primary font-semibold text-sm">
                      Click to expand
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-3 text-center">
                  Smart carrier assignment based on destination, service type, and cost optimization
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-center">Exception Management Overview</h3>
                <div 
                  className="relative rounded-xl shadow-lg border overflow-hidden bg-white cursor-pointer hover:shadow-xl transition-all duration-300 group"
                  onClick={() => openModal(
                    getMediaUrl(MEDIA_CONFIG.MCPMS.EXCEPTIONS_OVERVIEW, true),
                    "Quick overview of MCPMS exception management system showing real-time exception detection and automated resolution workflows",
                    'video'
                  )}
                >
                  <video 
                    src={getMediaUrl(MEDIA_CONFIG.MCPMS.EXCEPTIONS_OVERVIEW, true)}
                    {...getStandardImageProps(1200, 800)}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto max-w-none group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-[1px]">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-primary font-semibold text-sm">
                      Click to expand
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-3 text-center">
                  Real-time exception detection with automated resolution workflows (3-5 second overview)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* See It In Action Section */}
      <section className="py-20 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">See Advanced Analytics In Action</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Get deep insights into lane performance, cost optimization opportunities, and predictive analytics that transform decision-making from reactive to strategic.
              </p>
            </div>
            
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
              <strong>Lane Analysis & Preview:</strong> Compare carrier strategies, identify exception hotspots, and leverage 90-day performance forecasting to make data-driven logistics decisions that optimize costs and improve service levels.
            </p>
          </div>
        </div>
      </section>
      
      {/* Social Proof Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Platform Performance Metrics</h2>
              <p className="text-xl text-muted-foreground">
                Real results from companies using our Multi-Carrier Platform Management System
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Exception Resolution Automation</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">60%</div>
                <div className="text-sm text-muted-foreground">Reduction in Manual Tasks</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">Real-Time</div>
                <div className="text-sm text-muted-foreground">Multi-Carrier Visibility</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">Single</div>
                <div className="text-sm text-muted-foreground">Unified Command Center</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/95" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Multi-Carrier Operations?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Stop managing carriers across fragmented platforms. Join leading companies who've unified their logistics operations with our comprehensive MCPMS platform and achieved unprecedented visibility and control.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/20">
              <h3 className="text-xl font-semibold mb-4 text-white">Get immediate access to:</h3>
              <ul className="grid md:grid-cols-2 gap-4 text-left">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span className="text-white/90">Real-time multi-carrier dashboard with AI insights</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span className="text-white/90">Automated exception management and workflows</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span className="text-white/90">Comprehensive financial control and reconciliation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span className="text-white/90">Complete integration with business systems</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 shadow-lg" asChild>
                <Link to="/contact">
                  Get Free Platform Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Media Modal */}
      <MediaModal 
        isOpen={modalState.isOpen}
        onClose={closeModal}
        src={modalState.src}
        alt={modalState.alt}
        type={modalState.type}
      />
    </div>
  );
}
