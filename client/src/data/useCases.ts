import { TrendingUp, Globe, Package, Zap, CheckCircle, Database, BarChart3, Cog, Smartphone, Truck, Shield, Users, AlertTriangle, Clock, Target } from 'lucide-react';

export interface UseCaseMetric {
  label: string;
  value: string;
}

export interface UseCaseChallenge {
  icon?: string;
  title: string;
  description: string;
}

export interface UseCaseSolution {
  title: string;
  description: string;
  benefit?: string;
}

export interface DetailedMetric {
  metric: string;
  label: string;
}

export interface UseCase {
  id: string;
  title: string;
  category: string;
  industry: string;
  challenge: string;
  result: string;
  tags: string[];
  href: string;
  metrics: UseCaseMetric[];
  heroSubtitle?: string;
  heroDescription?: string;
  challengeDescription?: string;
  challenges?: UseCaseChallenge[];
  solutions?: UseCaseSolution[];
  detailedMetrics?: DetailedMetric[];
  additionalContent?: any;
  slug: string;
  showDetailedPage?: boolean;
  createdAt: string;
  updatedAt: string;
}

export const iconMap: Record<string, any> = {
  TrendingUp,
  Globe,
  Package,
  Zap,
  CheckCircle,
  Database,
  BarChart3,
  Cog,
  Smartphone,
  Truck,
  Shield,
  Users,
  AlertTriangle,
  Clock,
  Target
};

export const useCases: UseCase[] = [
  {
    id: "entertainment-leader-35-cost-reduction",
    title: "How a Global Entertainment Leader Cut Logistics Costs by 35% While Expanding Across Asia",
    category: "Cost Optimization",
    industry: "Entertainment",
    challenge: "High operational costs with fragmented logistics providers across multiple markets",
    result: "35% cost reduction, 50% faster market entry",
    tags: ["Cost Reduction", "Asia Expansion", "Enterprise"],
    href: "/use-cases/entertainment-leader-cost-reduction",
    slug: "entertainment-leader-cost-reduction",
    metrics: [
      { label: "Cost Savings", value: "35%" },
      { label: "Markets Added", value: "5" },
      { label: "Time to Market", value: "50% faster" }
    ],
    heroSubtitle: "Entertainment Industry Transformation",
    heroDescription: "A global entertainment company achieved unprecedented cost savings while accelerating their Asian market expansion through unified logistics management.",
    challengeDescription: "The entertainment giant was struggling with escalating logistics costs across multiple Asian markets, using different providers for each region with no unified strategy or rate optimization.",
    challenges: [
      {
        icon: "AlertTriangle",
        title: "Fragmented Provider Network",
        description: "Using 12+ different logistics providers across 8 markets with no unified strategy"
      },
      {
        icon: "TrendingUp",
        title: "Rising Operational Costs",
        description: "Logistics costs increasing 15% annually due to lack of rate benchmarking"
      },
      {
        icon: "Clock",
        title: "Slow Market Entry",
        description: "6-month lead time to establish operations in new markets"
      }
    ],
    solutions: [
      {
        title: "Unified 4PL Platform",
        description: "Consolidated all logistics operations under single platform with real-time visibility",
        benefit: "Reduced operational complexity by 60%"
      },
      {
        title: "Rate Optimization Engine",
        description: "Implemented dynamic rate comparison across providers for best-in-market pricing",
        benefit: "Achieved 35% cost reduction"
      },
      {
        title: "Rapid Market Entry Framework",
        description: "Pre-established network enabling 2-week market entry vs 6-month traditional approach",
        benefit: "50% faster time-to-market"
      }
    ],
    detailedMetrics: [
      { metric: "35%", label: "Total Cost Reduction" },
      { metric: "5", label: "New Markets Added" },
      { metric: "2 weeks", label: "Market Entry Time" }
    ],
    showDetailedPage: true,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  },
  {
    id: "fashion-marketplace-2-week-expansion",
    title: "Fashion Marketplace Pioneer's 2-Week Expansion into Southeast Asia",
    category: "Scaling",
    industry: "Fashion",
    challenge: "Needed rapid expansion into new markets with complex customs requirements",
    result: "Live in 3 countries within 2 weeks vs. traditional 6-month timeline",
    tags: ["Rapid Scaling", "Southeast Asia", "Fashion"],
    href: "/use-cases/fashion-marketplace-expansion",
    slug: "fashion-marketplace-expansion",
    metrics: [
      { label: "Launch Speed", value: "2 weeks" },
      { label: "Markets", value: "3" },
      { label: "Clearance Rate", value: "99.2%" }
    ],
    heroSubtitle: "Record-Breaking Market Expansion",
    heroDescription: "A pioneering fashion marketplace achieved the fastest Southeast Asian expansion in industry history, launching in 3 countries within 2 weeks.",
    challengeDescription: "The fashion platform needed to rapidly expand into Southeast Asia to capitalize on market opportunities, but faced complex customs regulations and tight timelines.",
    challenges: [
      {
        icon: "Clock",
        title: "Urgent Market Window",
        description: "Limited time to capitalize on seasonal fashion trends across multiple markets"
      },
      {
        icon: "Shield",
        title: "Complex Customs Requirements",
        description: "Different regulations and documentation requirements across 3 target countries"
      },
      {
        icon: "Target",
        title: "High Clearance Standards",
        description: "Fashion items require 99%+ clearance rates to maintain brand reputation"
      }
    ],
    solutions: [
      {
        title: "Pre-Cleared Network Access",
        description: "Instant access to established customs-cleared networks across all target markets",
        benefit: "Eliminated 6-month setup time"
      },
      {
        title: "Fashion-Specialized Handling",
        description: "Dedicated fashion logistics with expertise in garment classification and customs",
        benefit: "99.2% first-time clearance rate"
      },
      {
        title: "Rapid Deployment Framework",
        description: "Turn-key solution allowing immediate market entry without infrastructure investment",
        benefit: "2-week go-live timeline"
      }
    ],
    detailedMetrics: [
      { metric: "2 weeks", label: "Total Launch Time" },
      { metric: "3", label: "Countries Launched" },
      { metric: "99.2%", label: "Customs Clearance Rate" }
    ],
    showDetailedPage: true,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  },
  {
    id: "luxury-brand-premium-standards",
    title: "International Luxury Brand's Premium Service Standards Across Borders",
    category: "International",
    industry: "Luxury",
    challenge: "Maintaining luxury brand standards while managing cross-border logistics complexity",
    result: "99.8% on-time delivery with white-glove service across 8 countries",
    tags: ["Luxury", "Service Quality", "Cross-border"],
    href: "/use-cases/luxury-brand-standards",
    slug: "luxury-brand-standards",
    metrics: [
      { label: "On-time Delivery", value: "99.8%" },
      { label: "Countries", value: "8" },
      { label: "Service Rating", value: "4.9/5" }
    ],
    heroSubtitle: "Luxury Service Excellence",
    heroDescription: "A prestigious luxury brand maintained their exacting service standards while expanding across 8 international markets through specialized white-glove logistics.",
    challengeDescription: "The luxury brand required logistics services that matched their premium positioning, with zero tolerance for delays or service failures that could damage brand reputation.",
    challenges: [
      {
        icon: "Shield",
        title: "Brand Reputation Risk",
        description: "Any service failure could significantly impact luxury brand perception"
      },
      {
        icon: "Users",
        title: "VIP Customer Expectations",
        description: "High-net-worth customers expect flawless, personalized service experiences"
      },
      {
        icon: "Globe",
        title: "Cross-Border Complexity",
        description: "Maintaining service consistency across 8 different regulatory environments"
      }
    ],
    solutions: [
      {
        title: "White-Glove Service Network",
        description: "Premium handling and delivery services designed specifically for luxury goods",
        benefit: "4.9/5 customer satisfaction rating"
      },
      {
        title: "Dedicated Account Management",
        description: "Personal service teams with luxury brand expertise and VIP customer handling",
        benefit: "99.8% on-time delivery performance"
      },
      {
        title: "Brand-Aligned Operations",
        description: "Customized logistics processes that reflect and protect luxury brand values",
        benefit: "Zero brand reputation incidents"
      }
    ],
    detailedMetrics: [
      { metric: "99.8%", label: "On-Time Delivery Rate" },
      { metric: "8", label: "Countries Covered" },
      { metric: "4.9/5", label: "Customer Service Rating" }
    ],
    showDetailedPage: true,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  },
  {
    id: "retail-brand-startup-growth",
    title: "Growing Retail Brand: From Startup to Regional Leader",
    category: "Ecommerce",
    industry: "Wine & Spirits",
    challenge: "Small wine brand needed scalable logistics to compete with established players",
    result: "300% growth enabled with flexible, cost-effective logistics",
    tags: ["Startup", "Growth", "Ecommerce"],
    href: "/use-cases/retail-brand-growth",
    slug: "retail-brand-growth",
    metrics: [
      { label: "Revenue Growth", value: "300%" },
      { label: "Cost per Shipment", value: "-40%" },
      { label: "Customer Satisfaction", value: "98%" }
    ],
    heroSubtitle: "Startup Success Story",
    heroDescription: "A boutique wine brand transformed from local startup to regional leader by leveraging scalable logistics that grew with their business.",
    challengeDescription: "The wine startup needed logistics infrastructure that could scale with rapid growth while maintaining cost efficiency and service quality.",
    challenges: [
      {
        icon: "TrendingUp",
        title: "Rapid Growth Scaling",
        description: "Volume increasing 50% monthly but logistics costs growing even faster"
      },
      {
        icon: "Package",
        title: "Specialized Wine Handling",
        description: "Temperature-controlled shipping and compliance requirements for alcohol"
      },
      {
        icon: "Target",
        title: "Competing with Giants",
        description: "Needed enterprise-level logistics capabilities with startup budget constraints"
      }
    ],
    solutions: [
      {
        title: "Flexible Volume Scaling",
        description: "Pay-as-you-grow model that scales costs proportionally with business growth",
        benefit: "40% lower cost per shipment"
      },
      {
        title: "Wine-Specialized Network",
        description: "Temperature-controlled facilities and alcohol shipping expertise",
        benefit: "98% customer satisfaction"
      },
      {
        title: "Enterprise-Grade Platform",
        description: "Access to sophisticated logistics technology without upfront investment",
        benefit: "Enabled 300% revenue growth"
      }
    ],
    detailedMetrics: [
      { metric: "300%", label: "Revenue Growth" },
      { metric: "40%", label: "Cost Reduction per Shipment" },
      { metric: "98%", label: "Customer Satisfaction" }
    ],
    showDetailedPage: true,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  },
  {
    id: "marketplace-unified-operations",
    title: "Leading SEA Marketplace's Unified Cross-Border Operations",
    category: "Marketplace",
    industry: "E-commerce Platform",
    challenge: "Standardizing logistics across sellers and multiple countries",
    result: "Single platform managing 6,000+ tonnes monthly with 99%+ reliability",
    tags: ["Marketplace", "Cross-border", "Scale"],
    href: "/use-cases/marketplace-unification",
    slug: "marketplace-unification",
    metrics: [
      { label: "Monthly Volume", value: "6,000+ tonnes" },
      { label: "Reliability", value: "99.1%" },
      { label: "Seller Satisfaction", value: "4.8/5" }
    ],
    heroSubtitle: "Marketplace Logistics Unification",
    heroDescription: "Southeast Asia's leading marketplace unified their multi-country logistics operations, enabling thousands of sellers to access consistent, reliable cross-border shipping.",
    challengeDescription: "The marketplace needed to standardize logistics quality and pricing across thousands of sellers while managing complex cross-border operations at massive scale.",
    challenges: [
      {
        icon: "Users",
        title: "Seller Management Complexity",
        description: "Thousands of sellers with varying logistics capabilities and requirements"
      },
      {
        icon: "Globe",
        title: "Multi-Country Coordination",
        description: "Consistent service standards across 6 Southeast Asian markets"
      },
      {
        icon: "Database",
        title: "Massive Scale Operations",
        description: "Managing 6,000+ tonnes monthly while maintaining service quality"
      }
    ],
    solutions: [
      {
        title: "Unified Seller Platform",
        description: "Single interface for all sellers to access consistent logistics services",
        benefit: "4.8/5 seller satisfaction"
      },
      {
        title: "Cross-Border Standardization",
        description: "Consistent processes and pricing across all marketplace countries",
        benefit: "99.1% reliability rate"
      },
      {
        title: "Enterprise Scale Management",
        description: "Industrial-grade logistics platform handling massive daily volumes",
        benefit: "6,000+ tonnes monthly capacity"
      }
    ],
    detailedMetrics: [
      { metric: "6,000+", label: "Tonnes Handled Monthly" },
      { metric: "99.1%", label: "Service Reliability" },
      { metric: "4.8/5", label: "Seller Satisfaction Rating" }
    ],
    showDetailedPage: true,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  },
  {
    id: "platform-peak-season-success",
    title: "Regional E-commerce Platform's Peak Season Success Story",
    category: "Scaling",
    industry: "E-commerce Platform",
    challenge: "Managing 5x volume spike during peak shopping season",
    result: "Seamless peak season handling with 100% capacity availability",
    tags: ["Peak Season", "Marketplace", "Capacity"],
    href: "/use-cases/platform-peak-season",
    slug: "platform-peak-season",
    metrics: [
      { label: "Volume Increase", value: "5x" },
      { label: "Capacity Availability", value: "100%" },
      { label: "Peak Performance", value: "99.3%" }
    ],
    heroSubtitle: "Peak Season Mastery",
    heroDescription: "A regional e-commerce platform flawlessly handled their biggest shopping season ever, managing 5x normal volume without any capacity constraints or service degradation.",
    challengeDescription: "The platform needed to prepare for their largest peak season, with projected volumes 5x higher than normal operations, requiring comprehensive capacity planning.",
    challenges: [
      {
        icon: "TrendingUp",
        title: "Extreme Volume Spike",
        description: "Expected 5x normal volume during 2-month peak season period"
      },
      {
        icon: "Clock",
        title: "Delivery Time Pressure",
        description: "Maintaining fast delivery promises despite massive volume increases"
      },
      {
        icon: "Target",
        title: "Zero Failure Tolerance",
        description: "Peak season failures could result in permanent customer loss"
      }
    ],
    solutions: [
      {
        title: "Dynamic Capacity Scaling",
        description: "Pre-planned capacity expansion with flexible resource allocation",
        benefit: "100% capacity availability"
      },
      {
        title: "Peak Season Optimization",
        description: "Specialized peak season logistics processes and priority handling",
        benefit: "99.3% performance maintenance"
      },
      {
        title: "Proactive Monitoring",
        description: "Real-time volume tracking and predictive capacity management",
        benefit: "Zero capacity-related failures"
      }
    ],
    detailedMetrics: [
      { metric: "5x", label: "Volume Increase Handled" },
      { metric: "100%", label: "Capacity Availability" },
      { metric: "99.3%", label: "Peak Season Performance" }
    ],
    showDetailedPage: true,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  }
];

export const getUseCaseBySlug = (slug: string): UseCase | undefined => {
  return useCases.find(useCase => useCase.slug === slug);
};

export const getUseCasesByCategory = (category: string): UseCase[] => {
  if (category === 'All') return useCases;
  return useCases.filter(useCase => 
    useCase.category === category || 
    useCase.tags.some(tag => tag.includes(category))
  );
};