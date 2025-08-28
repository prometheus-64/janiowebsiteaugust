import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowRight, 
  CheckCircle, 
  Truck, 
  Warehouse, 
  Ship, 
  Plane,
  BarChart3,
  Shield,
  ChevronDown,
  ChevronUp,
  Users,
  Clock,
  TrendingUp,
  Award
} from 'lucide-react';

const LogisticsAsAService = () => {
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = (window.scrollY / document.documentElement.scrollHeight) * 100;
      setShowStickyCTA(scrolled > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const capabilities = [
    {
      icon: <Warehouse className="w-5 h-5" />,
      title: "Warehousing & Fulfilment",
      description: "SLA-based pick/pack/ship, returns."
    },
    {
      icon: <Truck className="w-5 h-5" />,
      title: "Land Transportation",
      description: "Optimized lanes with tracked delivery."
    },
    {
      icon: <Plane className="w-5 h-5" />,
      title: "Air Freight",
      description: "Priority uplift with rate intelligence."
    },
    {
      icon: <Ship className="w-5 h-5" />,
      title: "Ocean Freight",
      description: "Cost-effective FCL/LCL with schedule reliability."
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Real-Time Analytics",
      description: "Single dashboard, predictive alerts."
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Service Level Guarantees",
      description: "99.5% on-time inside agreed scope."
    }
  ];

  const phases = [
    {
      title: "Phase 1: Assessment (Week 1–2)",
      description: "Baseline KPIs, cost/leakage analysis, lane & partner review. Output: savings plan + transition blueprint."
    },
    {
      title: "Phase 2: Design (Week 3–6)",
      description: "Network design, SOPs & SLAs, and tech integration plan. Output: playbooks and go-live checklist."
    },
    {
      title: "Phase 3: Implementation (Week 7–12)",
      description: "Parallel run, vendor onboarding, training, and stabilization. Output: production rollout with performance guardrails."
    },
    {
      title: "Phase 4: Optimization (Ongoing)",
      description: "Quarterly rate reviews, carrier scorecards, invoice audits, and continuous improvement. Output: sustained savings & reliability."
    }
  ];

  const faqs = [
    {
      question: "Do you replace our 3PLs?",
      answer: "No. We orchestrate and improve them; we can add or switch partners when needed."
    },
    {
      question: "How fast can we launch?",
      answer: "Assessment in 1–2 weeks; initial go-live in 30–60 days."
    },
    {
      question: "How is pricing structured?",
      answer: "Retainer or performance-based—aligned to verified outcomes."
    },
    {
      question: "Do you handle invoicing and audits?",
      answer: "Yes. Contract-accurate invoice validation with reconciliation."
    }
  ];

  const clientLogos = [
    "Disney", "GOAT", "Swarovski", "Beyond The Vines", "Marketplace Pro", "Brand Elite", "Commerce Plus", "Global Retail"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/95" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/50 rounded-full blur-2xl"></div>
        </div>
        
        <div className="relative w-full max-w-[1200px] mx-auto px-6 text-center text-white">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium">
              Complete Logistics Outsourcing
            </span>
          </div>
          
          <div className="max-w-[720px] mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
              Your Entire Logistics Department, Managed by Experts.
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Get a world-class, scalable logistics solution without the overhead. Janio's 4PL intelligence and network of partners in Asia ensure your supply chain is a competitive advantage, not a bottleneck.
            </p>
            
            <div className="mb-8">
              <Link to="/contact#form">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 text-lg px-12 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                  aria-label="Discover Effortless Logistics — opens contact form"
                  data-cta="laas-primary"
                >
                  Discover Effortless Logistics
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            
            {/* Micro-trust row */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" aria-hidden="true" />
                <span>SOC 2 & ISO 27001 Compliant</span>
              </div>
              <div className="hidden sm:block text-white/60">•</div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" aria-hidden="true" />
                <span>10,000+ Vetted Partners</span>
              </div>
              <div className="hidden sm:block text-white/60">•</div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" aria-hidden="true" />
                <span>Asia–Pacific Coverage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Social Proof */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Trusted by Leading Brands
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-6">
            {clientLogos.map((logo, index) => (
              <div 
                key={index}
                className="flex items-center justify-center p-4 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-sm transition-shadow"
              >
                <span className="text-sm font-medium text-gray-600">{logo}</span>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Companies use Janio's LaaS to expand faster, cut costs, and improve on-time delivery.
          </p>
        </div>
      </section>

      {/* What Is LaaS */}
      <section className="py-20 bg-background">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 max-w-[760px] mx-auto">
            What Is Logistics as a Service (LaaS)?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Instead of juggling multiple vendors, LaaS gives you a single 4PL command center. We handle procurement, onboarding, daily operations, and invoicing across modes—while you focus on growth.
              </p>
            </div>
            
            <Card className="rounded-2xl border-neutral-200 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">LaaS at a Glance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Multi-mode orchestration: warehousing, land, air, ocean, last-mile</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Single dashboard with SLA performance guarantees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Built-in invoice audit & reconciliation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          {/* Pill row */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {["E-commerce Brands", "Retail/Omni", "Marketplaces", "Subscription/DTC"].map((pill) => (
              <span 
                key={pill}
                className="px-4 py-2 bg-primary/10 text-primary text-sm rounded-full"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 max-w-[760px] mx-auto">
            How LaaS Works: 4-Phase Implementation
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {phases.map((phase, index) => (
              <Card key={index} className="rounded-2xl border-neutral-200 shadow-sm p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{phase.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{phase.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Results bar */}
          <div className="text-center mt-12">
            <div className="inline-flex flex-wrap items-center gap-6 text-sm text-muted-foreground bg-white/60 px-6 py-3 rounded-full">
              <span className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                12–20% cost reduction
              </span>
              <div className="hidden sm:block text-muted-foreground/50">•</div>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                98% on-time service
              </span>
              <div className="hidden sm:block text-muted-foreground/50">•</div>
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4 text-primary" />
                8× ROI in Year 1
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-background">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 max-w-[760px] mx-auto">
            What Janio Manages for You
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <Card key={index} className="rounded-2xl border-neutral-200 shadow-sm p-6 h-full">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    {capability.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{capability.title}</h3>
                    <p className="text-muted-foreground text-sm">{capability.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 max-w-[760px] mx-auto">
            Proven Business Impact
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">12–20%</div>
              <div className="text-sm text-muted-foreground">Average Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">30–60 Days</div>
              <div className="text-sm text-muted-foreground">Time to Go Live</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Service-Level Maintenance</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">8×</div>
              <div className="text-sm text-muted-foreground">Average ROI</div>
            </div>
          </div>
          
          {/* Optional case study card */}
          <div className="mt-12 text-center">
            <Card className="rounded-2xl border-neutral-200 shadow-sm p-6 max-w-md mx-auto">
              <div className="text-sm text-muted-foreground mb-3">Case Study</div>
              <p className="font-medium mb-4">
                E-commerce brand reduced logistics costs by 18% and improved delivery times by 25% within 45 days.
              </p>
              <Link 
                to="/contact#form" 
                className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
              >
                See a tailored plan →
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Risk Reducers */}
      <section className="py-20 bg-background">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 max-w-[760px] mx-auto">
            Low-Risk, High-Impact Engagement
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Start with a free logistics assessment</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Keep your current 3PLs—LaaS orchestrates them</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Clear exit and data portability terms</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 max-w-[760px] mx-auto">
            Common Questions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="rounded-2xl border-neutral-200 shadow-sm">
                <button
                  className="w-full text-left p-6 flex items-center justify-between"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <div className="max-w-[720px] mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Outsource Logistics with 4PL Intelligence?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Get a tailored plan and timeline for your LaaS rollout.
            </p>
            <Link to="/contact#form">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-lg px-12 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                aria-label="Discover Effortless Logistics — opens contact form"
                data-cta="laas-primary"
              >
                Discover Effortless Logistics
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      {showStickyCTA && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50 md:hidden">
          <Link to="/contact#form" className="block">
            <Button 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              aria-label="Discover Effortless Logistics — opens contact form"
              data-cta="laas-sticky"
            >
              Discover Effortless Logistics
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default LogisticsAsAService;