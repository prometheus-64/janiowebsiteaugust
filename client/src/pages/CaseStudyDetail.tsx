import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, TrendingUp, Target, CheckCircle, Quote, ArrowRight } from 'lucide-react';

// Extended case study data with detailed content
const caseStudiesData = [
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
    featured: true,
    // Extended content
    overview: "FastGrow E-commerce experienced explosive growth, scaling from a small startup to a major online retailer in just 18 months. However, their rapid expansion created significant operational challenges that threatened to derail their success story.",
    detailedChallenge: "As FastGrow's customer base grew from thousands to hundreds of thousands, their in-house fulfillment operations became a critical bottleneck. The company was struggling with manual order processing systems that couldn't keep pace with demand, resulting in delayed shipments, inventory discrepancies, and mounting customer complaints. Peak season volumes were particularly challenging, with order accuracy dropping to 94% during high-demand periods and fulfillment costs spiraling out of control.",
    implementationStory: "The implementation began with a comprehensive audit of FastGrow's existing operations. Janio's team identified key pain points and designed a phased approach to minimize disruption while maximizing impact. The first phase focused on automating order processing and implementing real-time inventory management. Phase two introduced advanced forecasting algorithms and expanded the fulfillment network to handle peak demands. The final phase integrated customer service tools and advanced analytics for continuous optimization.",
    keyFeatures: [
      "Automated order processing with 99.9% accuracy",
      "Real-time inventory synchronization across all channels",
      "Advanced demand forecasting and planning",
      "Scalable fulfillment network with peak capacity handling",
      "Integrated customer service and returns management",
      "Comprehensive analytics and reporting dashboard"
    ],
    timeline: [
      { phase: "Phase 1: Assessment & Setup", duration: "Month 1-2", description: "System integration and process optimization" },
      { phase: "Phase 2: Automation Implementation", duration: "Month 3-4", description: "Automated workflows and inventory management" },
      { phase: "Phase 3: Network Expansion", duration: "Month 5-6", description: "Fulfillment network scaling and optimization" }
    ],
    longTermImpact: "Six months post-implementation, FastGrow has not only resolved their operational challenges but has gained a significant competitive advantage. The company can now handle seasonal spikes with confidence, expand into new markets rapidly, and maintain industry-leading customer satisfaction scores. The scalable infrastructure has enabled them to pursue aggressive growth plans without operational concerns."
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
    duration: "8 months implementation",
    overview: "Global Manufacturing Corp operates across 25 countries with complex international supply chains. Despite their scale, they lacked visibility and control over their $12M annual transportation spend, leading to inefficiencies and missed opportunities for optimization.",
    detailedChallenge: "The company's decentralized approach to transportation management resulted in fragmented carrier relationships, inconsistent service levels, and limited visibility into shipment status. Each regional office managed their own carriers, leading to duplicated efforts and missed volume discounts. Emergency shipments were frequent and costly, and the lack of real-time tracking caused customer service issues and internal planning difficulties.",
    implementationStory: "Janio implemented a global control tower approach, centralizing transportation management while maintaining regional flexibility. The solution included carrier rationalization, rate optimization, and real-time tracking across all modes of transport. Advanced analytics identified patterns and opportunities for continuous improvement, while automated workflows reduced manual intervention and errors.",
    keyFeatures: [
      "Global transportation control tower with 24/7 monitoring",
      "Carrier optimization and rate management",
      "Real-time shipment tracking and visibility",
      "Predictive analytics for proactive issue resolution",
      "Automated exception management and alerts",
      "Comprehensive reporting and KPI dashboards"
    ],
    timeline: [
      { phase: "Phase 1: Assessment & Strategy", duration: "Month 1-2", description: "Current state analysis and future state design" },
      { phase: "Phase 2: System Implementation", duration: "Month 3-5", description: "Control tower setup and carrier integration" },
      { phase: "Phase 3: Optimization & Training", duration: "Month 6-8", description: "Process refinement and team enablement" }
    ],
    longTermImpact: "The transformation has positioned Global Manufacturing Corp as an industry leader in supply chain efficiency. The company has reinvested the $2.2M annual savings into growth initiatives and continues to identify new optimization opportunities through advanced analytics."
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
    duration: "4 months implementation",
    overview: "Premium Retail Chain struggled with seasonal demand fluctuations that overwhelmed their fixed fulfillment infrastructure. Peak seasons resulted in stockouts, delayed deliveries, and frustrated customers, while off-peak periods left expensive capacity underutilized.",
    detailedChallenge: "The retailer's traditional approach to inventory management and fulfillment couldn't adapt to seasonal variations. During peak periods, warehouse capacity was insufficient, leading to overflow storage costs and processing delays. Inventory allocation was static, causing stockouts in high-demand locations while slow-moving inventory accumulated elsewhere. Customer expectations for fast delivery conflicted with operational limitations.",
    implementationStory: "Janio designed a flexible fulfillment network that scales dynamically with demand. The solution included distributed inventory placement, surge capacity partnerships, and intelligent allocation algorithms. Real-time demand sensing and predictive analytics enable proactive capacity planning and inventory positioning.",
    keyFeatures: [
      "Dynamic fulfillment network with surge capacity",
      "Intelligent inventory allocation and positioning",
      "Real-time demand sensing and forecasting",
      "Automated capacity scaling for peak periods",
      "Omnichannel inventory optimization",
      "Advanced analytics for continuous improvement"
    ],
    timeline: [
      { phase: "Phase 1: Network Design", duration: "Month 1", description: "Fulfillment network optimization and partner selection" },
      { phase: "Phase 2: System Integration", duration: "Month 2-3", description: "Technology integration and process automation" },
      { phase: "Phase 3: Peak Season Preparation", duration: "Month 4", description: "Capacity testing and team training" }
    ],
    longTermImpact: "Premium Retail Chain now views peak seasons as growth opportunities rather than operational challenges. The flexible network has enabled expansion into new markets and product categories while maintaining exceptional customer service levels year-round."
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
    duration: "5 months implementation",
    overview: "MedTech Innovations develops cutting-edge medical devices requiring strict compliance with healthcare regulations and temperature-controlled distribution. Their existing logistics provider lacked the specialized expertise needed for healthcare products.",
    detailedChallenge: "The company faced mounting compliance challenges with FDA regulations, temperature excursions during transport, and failed audits that threatened their market access. Each compliance violation risked regulatory action and damaged their reputation with healthcare providers. The specialized nature of their products required temperature monitoring, chain-of-custody documentation, and rapid response capabilities that their general logistics provider couldn't deliver.",
    implementationStory: "Janio's healthcare logistics specialists conducted a comprehensive compliance assessment and designed a solution that exceeded regulatory requirements. The implementation included specialized temperature-controlled facilities, validated processes, and comprehensive documentation systems. Staff training and certification ensured consistent execution of critical procedures.",
    keyFeatures: [
      "FDA-compliant warehouse and transportation",
      "Continuous temperature monitoring and alerting",
      "Validated processes and documentation systems",
      "Specialized handling for medical devices",
      "Emergency response and contingency planning",
      "Comprehensive audit trail and reporting"
    ],
    timeline: [
      { phase: "Phase 1: Compliance Assessment", duration: "Month 1", description: "Regulatory review and gap analysis" },
      { phase: "Phase 2: Facility Validation", duration: "Month 2-3", description: "Facility setup and process validation" },
      { phase: "Phase 3: Training & Certification", duration: "Month 4-5", description: "Staff training and system certification" }
    ],
    longTermImpact: "MedTech Innovations has achieved perfect compliance records and can now focus on product innovation rather than logistics concerns. The partnership has enabled them to enter new markets and launch products faster while maintaining the highest quality standards."
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
    duration: "3 months implementation",
    overview: "TechStart Innovations, a hardware startup, needed to scale from prototype to mass production without building internal logistics capabilities. Limited resources and expertise made traditional logistics solutions impractical for their rapid growth plans.",
    detailedChallenge: "As a startup, TechStart couldn't justify the investment in logistics infrastructure and expertise needed for their hardware products. Manual processes were error-prone and time-consuming, while their small team struggled to manage inventory, shipping, and customer service. Scaling production meant logistics would consume disproportionate resources unless outsourced effectively.",
    implementationStory: "Janio provided a complete logistics solution that allowed TechStart to focus on product development and market expansion. The implementation included warehousing, order management, shipping, and customer service integration. Technology APIs enabled seamless integration with TechStart's systems while providing real-time visibility and control.",
    keyFeatures: [
      "Complete logistics outsourcing solution",
      "Integrated technology platform and APIs",
      "Professional packaging and branded experience",
      "Customer service and returns management",
      "Inventory management and demand planning",
      "Real-time analytics and reporting"
    ],
    timeline: [
      { phase: "Phase 1: System Integration", duration: "Month 1", description: "API integration and process setup" },
      { phase: "Phase 2: Operations Launch", duration: "Month 2", description: "Go-live and process optimization" },
      { phase: "Phase 3: Scaling & Enhancement", duration: "Month 3", description: "Volume scaling and feature enhancement" }
    ],
    longTermImpact: "TechStart Innovations has successfully scaled from startup to growth stage without logistics constraints. The partnership has enabled them to enter international markets and launch new products rapidly while maintaining exceptional customer experience."
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
    duration: "6 months implementation",
    overview: "Fashion Forward Brands operates across multiple channels including retail stores, e-commerce, and wholesale. Their disconnected systems created inventory inefficiencies and poor customer experiences across channels.",
    detailedChallenge: "The fashion retailer struggled with inventory silos that prevented effective omnichannel fulfillment. Customers couldn't access inventory from other channels, leading to lost sales and poor satisfaction. Seasonal fashion items required rapid inventory turnover, but poor visibility led to markdowns and write-offs. Each channel operated independently, creating inefficiencies and missed opportunities.",
    implementationStory: "Janio implemented a unified inventory management system that treats all channels as a single pool of demand and supply. Intelligent allocation algorithms optimize inventory placement while real-time synchronization ensures accurate availability across all touchpoints. The solution enables advanced fulfillment options like ship-from-store and buy-online-pickup-in-store.",
    keyFeatures: [
      "Unified inventory across all channels",
      "Intelligent demand-driven allocation",
      "Advanced omnichannel fulfillment options",
      "Real-time inventory synchronization",
      "Seasonal planning and optimization",
      "Customer experience integration"
    ],
    timeline: [
      { phase: "Phase 1: System Unification", duration: "Month 1-2", description: "Inventory system integration and data harmonization" },
      { phase: "Phase 2: Process Optimization", duration: "Month 3-4", description: "Fulfillment process redesign and automation" },
      { phase: "Phase 3: Advanced Features", duration: "Month 5-6", description: "Omnichannel capabilities and optimization" }
    ],
    longTermImpact: "Fashion Forward Brands has transformed from a multi-channel to a true omnichannel retailer. The unified approach has improved customer satisfaction, reduced markdowns, and enabled expansion into new markets with confidence."
  }
];

const CaseStudyDetail = () => {
  const { id } = useParams();
  const caseStudy = caseStudiesData.find(study => study.id === parseInt(id || ''));

  if (!caseStudy) {
    return <Navigate to="/case-studies" replace />;
  }

  const nextCaseStudy = caseStudiesData.find(study => study.id === (caseStudy.id % caseStudiesData.length) + 1);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="sticky top-0 bg-background/95 backdrop-blur border-b z-10">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/case-studies">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Case Studies
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/95" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Badge variant="secondary">{caseStudy.industry}</Badge>
              <Badge>{caseStudy.size}</Badge>
              <Badge variant="outline" className="border-primary-foreground/20 text-primary-foreground">
                <Clock className="h-3 w-3 mr-1" />
                {caseStudy.duration}
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
              {caseStudy.company}
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              {caseStudy.overview}
            </p>

            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-primary-foreground/10 rounded-lg">
                <div className="text-2xl font-bold text-primary-foreground">{caseStudy.results.costSavings}</div>
                <div className="text-sm text-primary-foreground/80">Cost Savings</div>
              </div>
              <div className="text-center p-4 bg-primary-foreground/10 rounded-lg">
                <div className="text-2xl font-bold text-primary-foreground">{caseStudy.results.timeReduction}</div>
                <div className="text-sm text-primary-foreground/80">Time Reduction</div>
              </div>
              <div className="text-center p-4 bg-primary-foreground/10 rounded-lg">
                <div className="text-2xl font-bold text-primary-foreground">
                  {caseStudy.results.accuracyImprovement || caseStudy.results.inventoryReduction || caseStudy.results.complianceRate || caseStudy.results.customerSatisfaction}
                </div>
                <div className="text-sm text-primary-foreground/80">
                  {caseStudy.results.accuracyImprovement ? 'Accuracy' : 
                   caseStudy.results.inventoryReduction ? 'Inventory Reduction' :
                   caseStudy.results.complianceRate ? 'Compliance Rate' : 'Customer Satisfaction'}
                </div>
              </div>
              <div className="text-center p-4 bg-primary-foreground/10 rounded-lg">
                <div className="text-2xl font-bold text-primary-foreground">
                  {caseStudy.results.scalabilityIncrease || caseStudy.results.peakCapacity || caseStudy.results.auditSuccess || caseStudy.results.scalability}
                </div>
                <div className="text-sm text-primary-foreground/80">
                  {caseStudy.results.scalabilityIncrease ? 'Scalability' :
                   caseStudy.results.peakCapacity ? 'Peak Capacity' :
                   caseStudy.results.auditSuccess ? 'Audit Success' : 'Growth'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-destructive" />
                    The Challenge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{caseStudy.challenge}</p>
                  <p className="text-muted-foreground">{caseStudy.detailedChallenge}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    The Solution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{caseStudy.solution}</p>
                  <p className="text-muted-foreground">{caseStudy.implementationStory}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-display text-center mb-12">Implementation Timeline</h2>
            
            <div className="space-y-8">
              {caseStudy.timeline.map((phase, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <h3 className="font-semibold">{phase.phase}</h3>
                          <Badge variant="outline">{phase.duration}</Badge>
                        </div>
                        <p className="text-muted-foreground">{phase.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-display text-center mb-12">Key Solution Features</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudy.keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Metrics */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-display text-center mb-12">Detailed Results</h2>
            
            <div className="space-y-4">
              {caseStudy.metrics.map((metric, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{metric.label}</span>
                      <div className="flex items-center gap-4">
                        <span className="text-destructive font-medium">{metric.before}</span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        <span className="text-primary font-bold">{metric.after}</span>
                        <Badge variant="outline" className="bg-primary/10">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          {metric.improvement}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <Quote className="h-12 w-12 text-primary mx-auto mb-6" />
                <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-6 italic">
                  "{caseStudy.testimonial}"
                </blockquote>
                <div>
                  <div className="font-semibold text-lg">{caseStudy.clientName}</div>
                  <div className="text-muted-foreground">{caseStudy.clientTitle}</div>
                  <div className="text-muted-foreground">{caseStudy.company}</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Long-term Impact */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-display text-center mb-12">Long-term Impact</h2>
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {caseStudy.longTermImpact}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Next Case Study */}
      {nextCaseStudy && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold font-display mb-8">Read Next Success Story</h2>
              <Card className="hover:shadow-medium transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Badge variant="outline">{nextCaseStudy.industry}</Badge>
                    <Badge variant="secondary">{nextCaseStudy.size}</Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{nextCaseStudy.company}</h3>
                  <p className="text-muted-foreground mb-6">{nextCaseStudy.overview}</p>
                  <Button asChild>
                    <Link to={`/case-studies/${nextCaseStudy.id}`}>
                      Read Case Study
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Ready to Transform Your Supply Chain?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Discover how Janio can help you achieve similar results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="secondary" asChild>
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button size="xl" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/case-studies">View All Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;