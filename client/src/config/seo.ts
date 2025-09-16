import { SEOProps } from '@/components/SEO';
import {
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateWebPageSchema
} from '@/utils/seo';

const siteUrl = 'https://janio.com';
const defaultImage = '/og-image.jpg';

type PageSeoConfig = SEOProps;

export type PageSeoKey =
  | 'about'
  | 'contact'
  | 'servicesOverview'
  | 'solutionsOverview'
  | 'useCasesOverview'
  | 'resourcesOverview'
  | 'blog'
  | 'caseStudiesOverview'
  | 'privacy'
  | 'terms'
  | 'ecommerceBrands'
  | 'marketplaces'
  | 'logisticsPartners'
  | 'b2cImportGrowth'
  | 'transportationProcurement'
  | 'logisticsAsAService'
  | 'controlTower'
  | 'invoiceAudit'
  | 'mcpms'
  | 'operationsTeams'
  | 'procurementTeams'
  | 'supplyChainLeaders'
  | 'financeTeams'
  | 'resourcesGuides'
  | 'resourcesBlogs'
  | 'resourcesCalculators'
  | 'resourcesAssessments'
  | 'resourcesCaseStudies'
  | 'useCaseEcommerceScaling'
  | 'useCaseInternationalExpansion'
  | 'useCasePeakSeason'
  | 'useCaseDigitization'
  | 'useCaseEntertainmentLeaderCostReduction'
  | 'useCaseFashionMarketplaceExpansion'
  | 'useCaseLuxuryBrandStandards'
  | 'useCaseRetailBrandGrowth'
  | 'useCaseMarketplaceUnification'
  | 'useCasePlatformPeakSeason'
  | 'notFound';

const createStructuredData = (
  title: string,
  description: string,
  path: string,
  extras: object[] = []
) => [
  generateOrganizationSchema(),
  ...extras,
  generateWebPageSchema({
    title,
    description,
    url: `${siteUrl}${path}`
  })
];

const pageSeoFactories: Record<PageSeoKey, () => PageSeoConfig> = {
  about: () => ({
    title: 'About Janio Logistics',
    description:
      'Learn about Janio, Southeast Asia\'s 4PL logistics partner delivering strategic supply chain operations, transportation, and warehousing expertise.',
    keywords:
      'about Janio, 4PL logistics team, Southeast Asia logistics experts, supply chain specialists, Janio company profile',
    url: `${siteUrl}/about`,
    image: defaultImage,
    structuredData: createStructuredData(
      'About Janio Logistics',
      'Meet the 4PL logistics specialists delivering scalable supply chain solutions across Southeast Asia.',
      '/about'
    )
  }),
  resourcesBlogs: () => ({
    title: 'Logistics Blog & Industry Insights',
    description:
      'Stay ahead with Janio\'s logistics articles covering 4PL strategy, operations optimization, technology, and cost management trends.',
    keywords:
      'logistics industry insights, 4PL articles, supply chain blog, logistics best practices, transportation procurement insights',
    url: `${siteUrl}/resources/blogs`,
    image: defaultImage,
    structuredData: createStructuredData(
      'Logistics Blog & Industry Insights',
      'Logistics industry insights and best practices from Janio\'s experts.',
      '/resources/blogs'
    )
  }),
  contact: () => ({
    title: 'Contact Janio Logistics',
    description:
      'Reach the Janio team to plan your 4PL logistics strategy. Schedule a consultation to optimize transportation, compliance, and cross-border fulfilment.',
    keywords:
      'contact Janio, logistics consultation, 4PL contact Southeast Asia, supply chain support, logistics consultation request',
    url: `${siteUrl}/contact`,
    image: defaultImage,
    structuredData: createStructuredData(
      'Contact Janio Logistics',
      'Connect with Janio\'s logistics experts for transportation procurement, operations management, and cross-border support.',
      '/contact',
      [generateLocalBusinessSchema()]
    )
  }),
  servicesOverview: () => ({
    title: 'Logistics Services & 4PL Operations',
    description:
      'Explore Janio\'s managed logistics services spanning procurement, control tower operations, invoice audit, and cross-border execution across Southeast Asia.',
    keywords:
      '4PL services Southeast Asia, logistics control tower, transportation procurement services, invoice audit logistics, managed supply chain services',
    url: `${siteUrl}/services`,
    image: defaultImage,
    structuredData: createStructuredData(
      'Logistics Services & 4PL Operations',
      'Discover Janio\'s managed logistics services covering procurement, control tower execution, and invoice audit programs.',
      '/services'
    )
  }),
  solutionsOverview: () => ({
    title: 'Logistics Solutions for Growth Teams',
    description:
      'See how Janio powers ecommerce brands, marketplaces, and logistics providers with 4PL solutions that balance cost, speed, and experience.',
    keywords:
      'logistics solutions, ecommerce logistics partner, marketplace 4PL, logistics providers Southeast Asia, supply chain solutions',
    url: `${siteUrl}/solutions`,
    image: defaultImage,
    structuredData: createStructuredData(
      'Logistics Solutions for Growth Teams',
      '4PL logistics solutions tailored for ecommerce brands, marketplaces, and logistics partners expanding in Southeast Asia.',
      '/solutions'
    )
  }),
  useCasesOverview: () => ({
    title: 'Supply Chain Use Cases & Playbooks',
    description:
      'Browse proven logistics playbooks for ecommerce scaling, cross-border expansion, peak season readiness, and digital transformation.',
    keywords:
      'logistics use cases, supply chain playbooks, ecommerce logistics case studies, cross-border logistics strategies, peak season logistics',
    url: `${siteUrl}/use-cases`,
    image: defaultImage,
    structuredData: createStructuredData(
      'Supply Chain Use Cases & Playbooks',
      'Use Janio\'s logistics playbooks for ecommerce scaling, international expansion, and digital supply chain upgrades.',
      '/use-cases'
    )
  }),
  resourcesOverview: () => ({
    title: 'Logistics Resources & Insights',
    description:
      'Access Janio\'s calculators, guides, assessments, and case studies to plan a responsive 4PL logistics program across Southeast Asia.',
    keywords:
      'logistics resources, 4PL guides, supply chain calculators, logistics assessments, case studies logistics',
    url: `${siteUrl}/resources`,
    image: defaultImage,
    structuredData: createStructuredData(
      'Logistics Resources & Insights',
      'Explore logistics calculators, assessments, and strategic guides from Janio\'s 4PL experts.',
      '/resources'
    )
  }),
  blog: () => ({
    title: 'Logistics Blog & Supply Chain Insights',
    description:
      'Read expert commentary on logistics trends, procurement strategies, technology, and operations from Janio\'s 4PL specialists.',
    keywords:
      'logistics blog, 4PL insights, supply chain trends, transportation procurement blog, logistics thought leadership',
    url: `${siteUrl}/blog`,
    image: defaultImage,
    structuredData: createStructuredData(
      'Logistics Blog & Supply Chain Insights',
      'Discover logistics thought leadership, procurement best practices, and operations guidance from Janio.',
      '/blog'
    )
  }),
  caseStudiesOverview: () => ({
    title: 'Logistics Case Studies & Success Stories',
    description:
      'See how brands across Southeast Asia scale with Janio\'s 4PL logistics solutions to reduce costs and improve delivery performance.',
    keywords:
      'logistics case studies, 4PL success stories, supply chain case study, Janio customer stories, logistics ROI',
    url: `${siteUrl}/case-studies`,
    image: defaultImage,
    structuredData: createStructuredData(
      'Logistics Case Studies & Success Stories',
      'Review Janio\'s logistics success stories with ecommerce, retail, and marketplace leaders.',
      '/case-studies'
    )
  }),
  privacy: () => ({
    title: 'Privacy Policy',
    description:
      'Understand how Janio collects, uses, and protects personal data across our logistics solutions and digital platforms.',
    keywords:
      'Janio privacy policy, data protection logistics, privacy notice Janio, logistics data usage',
    url: `${siteUrl}/privacy`,
    image: defaultImage,
    structuredData: createStructuredData(
      'Privacy Policy',
      'Review Janio\'s privacy practices for customer, partner, and marketing data.',
      '/privacy'
    )
  }),
  terms: () => ({
    title: 'Terms of Service',
    description:
      'Review Janio\'s website terms of service governing access, acceptable use, and liability for our logistics solutions.',
    keywords:
      'Janio terms of service, logistics website terms, Janio legal terms, supply chain platform terms',
    url: `${siteUrl}/terms`,
    image: defaultImage,
    structuredData: createStructuredData(
      'Terms of Service',
      'Review the legal terms for using Janio\'s logistics website and digital tools.',
      '/terms'
    )
  }),
  ecommerceBrands: () => ({
    title: 'Logistics Solutions for Ecommerce Brands',
    description:
      'Optimize ecommerce fulfilment with Janio\'s 4PL solutions for rate benchmarking, partner orchestration, and Southeast Asia delivery.',
    keywords:
      'ecommerce logistics Southeast Asia, 4PL for ecommerce brands, ecommerce shipping optimization, ecommerce supply chain partner',
    url: `${siteUrl}/solutions/ecommerce-brands`,
    image: defaultImage,
    structuredData: createStructuredData(
      'Logistics Solutions for Ecommerce Brands',
      'Janio simplifies ecommerce logistics from procurement to delivery across Southeast Asia.',
      '/solutions/ecommerce-brands'
    )
  }),
  marketplaces: () => ({
    title: 'Marketplace Logistics & Partner Management',
    description:
      'Coordinate multi-vendor logistics with Janio\'s 4PL platform for marketplaces balancing speed, cost, and transparency.',
    keywords:
      'marketplace logistics, multi-vendor fulfilment, marketplace shipping Southeast Asia, 4PL marketplace solutions',
    url: `${siteUrl}/solutions/marketplaces`,
    image: defaultImage,
    structuredData: createStructuredData(
      'Marketplace Logistics & Partner Management',
      'Janio orchestrates marketplace logistics partners to deliver consistent, fast fulfilment.',
      '/solutions/marketplaces'
    )
  }),
  logisticsPartners: () => ({
    title: 'Logistics Partner Enablement',
    description:
      'Expand service offerings without cannibalization using Janio\'s 4PL technology, compliance, and operations support for logistics providers.',
    keywords:
      'logistics partner enablement, 4PL for 3PLs, logistics service expansion, partner operations support',
    url: `${siteUrl}/solutions/logistics-partners`,
    image: defaultImage,
    structuredData: createStructuredData(
      'Logistics Partner Enablement',
      'Logistics providers use Janio to expand services and automate customer onboarding.',
      '/solutions/logistics-partners'
    )
  }),
  b2cImportGrowth: () => ({
    title: 'B2C Import Growth Logistics',
    description:
      'Launch and scale B2C import programs with Janio\'s compliance, transportation, and customer experience playbooks.',
    keywords:
      'B2C import logistics, cross-border B2C shipping, 4PL import strategy, ecommerce import to Southeast Asia',
    url: `${siteUrl}/b2c-import-growth`,
    image: defaultImage,
    structuredData: createStructuredData(
      'B2C Import Growth Logistics',
      'Use Janio\'s cross-border logistics expertise to scale B2C import expansion into Southeast Asia.',
      '/b2c-import-growth'
    )
  }),
  transportationProcurement: () => ({
    title: 'Transportation Procurement Services',
    description:
      'Outsource RFQs and carrier sourcing to Janio\'s procurement specialists for faster cycles, lower rates, and resilient capacity.',
    keywords:
      'transportation procurement services, logistics RFQ outsourcing, carrier sourcing Southeast Asia, logistics procurement partner',
    url: `${siteUrl}/services/transportation-procurement`,
    image: defaultImage,
    structuredData: createStructuredData(
      'Transportation Procurement Services',
      'Janio manages transportation procurement programs to reduce costs and secure reliable logistics partners.',
      '/services/transportation-procurement'
    )
  }),
  logisticsAsAService: () => ({
    title: 'Logistics-as-a-Service 4PL',
    description:
      'Deploy Janio\'s turnkey logistics-as-a-service model covering technology, partners, and operations orchestration for omnichannel brands.',
    keywords:
      'logistics as a service, 4PL logistics platform, managed logistics operations, omnichannel logistics Southeast Asia',
    url: `${siteUrl}/services/logistics-as-a-service`,
    image: defaultImage,
    structuredData: createStructuredData(
      'Logistics-as-a-Service 4PL',
      'Janio delivers logistics-as-a-service with integrated technology, partners, and operational control.',
      '/services/logistics-as-a-service'
    )
  }),
  controlTower: () => ({
    title: 'Control Tower Logistics Operations',
    description:
      'Gain always-on supply chain visibility, exception management, and partner coordination with Janio\'s control tower services.',
    keywords:
      'logistics control tower, supply chain visibility Southeast Asia, exception management logistics, control tower services',
    url: `${siteUrl}/services/control-tower`,
    image: defaultImage,
    structuredData: createStructuredData(
      'Control Tower Logistics Operations',
      'Janio operates a logistics control tower for proactive exception management and partner alignment.',
      '/services/control-tower'
    )
  }),
  invoiceAudit: () => ({
    title: 'Logistics Invoice Audit & Recovery',
    description:
      'Eliminate billing errors and reclaim spend with Janio\'s logistics invoice audit managed service and dispute resolution playbooks.',
    keywords:
      'logistics invoice audit, freight bill audit, logistics cost recovery, invoice reconciliation logistics',
    url: `${siteUrl}/services/invoice-audit`,
    image: defaultImage,
    structuredData: createStructuredData(
      'Logistics Invoice Audit & Recovery',
      'Janio\'s invoice audit service reconciles freight bills and protects transportation budgets.',
      '/services/invoice-audit'
    )
  }),
  mcpms: () => ({
    title: 'Multi-Country Partner Management Suite',
    description:
      'Use Janio\'s multi-country partner management suite to orchestrate customs, couriers, and fulfilment partners with a single 4PL contract.',
    keywords:
      'multi-country logistics management, partner management suite, 4PL partner orchestration, regional logistics integration',
    url: `${siteUrl}/services/mcpms`,
    image: defaultImage,
    structuredData: createStructuredData(
      'Multi-Country Partner Management Suite',
      'Janio unifies multi-country logistics partners under a cohesive 4PL program.',
      '/services/mcpms'
    )
  }),
  operationsTeams: () => ({
    title: 'Solutions for Operations Teams',
    description:
      'Operations leaders partner with Janio to automate logistics, improve SLA performance, and scale regional fulfilment.',
    keywords:
      'operations logistics solutions, 4PL for operations teams, logistics automation Southeast Asia, SLA management logistics',
    url: `${siteUrl}/solutions/operations-teams`,
    image: defaultImage,
    structuredData: createStructuredData(
      'Solutions for Operations Teams',
      'Janio provides operations teams with technology and execution to maintain logistics SLAs.',
      '/solutions/operations-teams'
    )
  }),
  procurementTeams: () => ({
    title: 'Solutions for Procurement Teams',
    description:
      'Procurement teams rely on Janio for aggregated logistics spend, benchmarked rates, and vendor governance across Southeast Asia.',
    keywords:
      'procurement logistics solution, logistics vendor management, 4PL procurement support, logistics rate benchmarking',
    url: `${siteUrl}/solutions/procurement-teams`,
    image: defaultImage,
    structuredData: createStructuredData(
      'Solutions for Procurement Teams',
      'Janio centralizes logistics procurement and vendor governance for supply chain teams.',
      '/solutions/procurement-teams'
    )
  }),
  supplyChainLeaders: () => ({
    title: 'Solutions for Supply Chain Leaders',
    description:
      'Supply chain executives use Janio to orchestrate a resilient 4PL logistics network focused on cost, control, and customer promises.',
    keywords:
      'supply chain leader solutions, 4PL for executives, logistics network orchestration, resilient logistics strategy',
    url: `${siteUrl}/solutions/supply-chain-leaders`,
    image: defaultImage,
    structuredData: createStructuredData(
      'Solutions for Supply Chain Leaders',
      'Janio partners with supply chain leaders to build resilient logistics strategies.',
      '/solutions/supply-chain-leaders'
    )
  }),
  financeTeams: () => ({
    title: 'Solutions for Finance Teams',
    description:
      'Finance teams partner with Janio for predictable logistics spend, invoice accuracy, and investment-ready reporting.',
    keywords:
      'finance logistics solutions, logistics cost control, freight audit for finance, 4PL financial insights',
    url: `${siteUrl}/solutions/finance-teams`,
    image: defaultImage,
    structuredData: createStructuredData(
      'Solutions for Finance Teams',
      'Janio delivers cost control, invoice accuracy, and forecasting support for finance teams.',
      '/solutions/finance-teams'
    )
  }),
  resourcesGuides: () => ({
    title: 'Logistics Guides & Playbooks',
    description:
      'Download detailed logistics guides covering procurement, exception management, and cross-border strategy from Janio\'s experts.',
    keywords:
      'logistics guides, supply chain playbooks, 4PL e-books, logistics whitepapers, Janio guides',
    url: `${siteUrl}/resources/guides`,
    image: defaultImage,
    structuredData: createStructuredData(
      'Logistics Guides & Playbooks',
      'Logistics playbooks from Janio covering procurement, operations, and expansion.',
      '/resources/guides'
    )
  }),
  resourcesCalculators: () => ({
    title: 'Logistics Calculators',
    description:
      'Model savings and performance with Janio\'s logistics calculators for transportation costs, network design, and procurement ROI.',
    keywords:
      'logistics calculators, supply chain cost calculator, freight savings calculator, logistics ROI tools',
    url: `${siteUrl}/resources/calculators`,
    image: defaultImage,
    structuredData: createStructuredData(
      'Logistics Calculators',
      'Use Janio\'s logistics calculators to benchmark costs and identify savings.',
      '/resources/calculators'
    )
  }),
  resourcesAssessments: () => ({
    title: 'Logistics Assessments',
    description:
      'Evaluate logistics maturity and identify quick wins using Janio\'s assessments tailored for ecommerce and retail supply chains.',
    keywords:
      'logistics assessments, supply chain audit, logistics maturity assessment, 4PL readiness assessment',
    url: `${siteUrl}/resources/assessments`,
    image: defaultImage,
    structuredData: createStructuredData(
      'Logistics Assessments',
      'Complete Janio\'s logistics assessments to benchmark readiness and uncover quick wins.',
      '/resources/assessments'
    )
  }),
  resourcesCaseStudies: () => ({
    title: 'Logistics Case Studies Library',
    description:
      'Filter Janio case studies by industry and objective to uncover logistics strategies delivering measurable results.',
    keywords:
      'logistics case studies library, 4PL customer stories, ecommerce logistics case study, Janio success stories',
    url: `${siteUrl}/resources/case-studies`,
    image: defaultImage,
    structuredData: createStructuredData(
      'Logistics Case Studies Library',
      'Explore Janio case studies covering ecommerce, retail, and marketplace logistics wins.',
      '/resources/case-studies'
    )
  }),
  useCaseEcommerceScaling: () => ({
    title: 'Ecommerce Logistics Scaling Playbook',
    description:
      'Scale ecommerce demand without sacrificing delivery experience using Janio\'s 4PL network, automation, and partner governance.',
    keywords:
      'ecommerce logistics scaling, ecommerce fulfilment Southeast Asia, 4PL ecommerce playbook, scale ecommerce logistics',
    url: `${siteUrl}/use-cases/ecommerce-scaling`,
    image: defaultImage,
    structuredData: createStructuredData(
      'Ecommerce Logistics Scaling Playbook',
      'See how Janio boosts ecommerce logistics capacity while protecting customer experience.',
      '/use-cases/ecommerce-scaling'
    )
  }),
  useCaseInternationalExpansion: () => ({
    title: 'International Expansion Logistics Playbook',
    description:
      'Launch new markets confidently with Janio\'s customs, transportation, and partner onboarding blueprint for Southeast Asia expansion.',
    keywords:
      'international expansion logistics, cross-border launch Southeast Asia, customs logistics playbook, regional logistics strategy',
    url: `${siteUrl}/use-cases/international-expansion`,
    image: defaultImage,
    structuredData: createStructuredData(
      'International Expansion Logistics Playbook',
      'Janio manages international expansion with customs, transportation, and partner onboarding.',
      '/use-cases/international-expansion'
    )
  }),
  useCasePeakSeason: () => ({
    title: 'Peak Season Logistics Readiness',
    description:
      'Get ahead of peak season surges with Janio\'s demand planning, carrier diversification, and visibility playbooks.',
    keywords:
      'peak season logistics, peak season planning, logistics surge management, seasonal demand logistics',
    url: `${siteUrl}/use-cases/peak-season`,
    image: defaultImage,
    structuredData: createStructuredData(
      'Peak Season Logistics Readiness',
      'Janio prepares logistics networks for peak season surges with demand planning and capacity programs.',
      '/use-cases/peak-season'
    )
  }),
  useCaseDigitization: () => ({
    title: 'Logistics Digitization Playbook',
    description:
      'Digitize fragmented logistics workflows with Janio\'s control tower, API integration, and automation toolkit.',
    keywords:
      'logistics digitization, supply chain automation, logistics technology transformation, digital logistics playbook',
    url: `${siteUrl}/use-cases/digitization`,
    image: defaultImage,
    structuredData: createStructuredData(
      'Logistics Digitization Playbook',
      'Janio digitizes logistics workflows with control tower operations and integrations.',
      '/use-cases/digitization'
    )
  }),
  useCaseEntertainmentLeaderCostReduction: () => ({
    title: 'Entertainment Logistics Cost Reduction',
    description:
      'See how an entertainment leader cut logistics costs with Janio\'s 4PL procurement, analytics, and execution support.',
    keywords:
      'entertainment logistics, logistics cost reduction, 4PL case study entertainment, supply chain savings entertainment industry',
    url: `${siteUrl}/use-cases/entertainment-leader-cost-reduction`,
    image: defaultImage,
    structuredData: createStructuredData(
      'Entertainment Logistics Cost Reduction',
      'Case study: Janio reduced logistics costs for an entertainment company via 4PL procurement.',
      '/use-cases/entertainment-leader-cost-reduction'
    )
  }),
  useCaseFashionMarketplaceExpansion: () => ({
    title: 'Fashion Marketplace Expansion',
    description:
      'Explore how Janio enabled a fashion marketplace to expand internationally with flexible partner orchestration.',
    keywords:
      'fashion marketplace logistics, marketplace expansion case study, 4PL fashion logistics, cross-border fashion logistics',
    url: `${siteUrl}/use-cases/fashion-marketplace-expansion`,
    image: defaultImage,
    structuredData: createStructuredData(
      'Fashion Marketplace Expansion',
      'Case study: Janio orchestrated partners to launch new fashion marketplace regions.',
      '/use-cases/fashion-marketplace-expansion'
    )
  }),
  useCaseLuxuryBrandStandards: () => ({
    title: 'Luxury Brand Logistics Standards',
    description:
      'Learn how a luxury brand protected service standards by partnering with Janio\'s 4PL control tower and network.',
    keywords:
      'luxury brand logistics, premium customer experience logistics, luxury fulfilment case study, 4PL luxury brand',
    url: `${siteUrl}/use-cases/luxury-brand-standards`,
    image: defaultImage,
    structuredData: createStructuredData(
      'Luxury Brand Logistics Standards',
      'Case study: Janio upheld luxury brand delivery standards with 4PL logistics.',
      '/use-cases/luxury-brand-standards'
    )
  }),
  useCaseRetailBrandGrowth: () => ({
    title: 'Retail Brand Growth Logistics',
    description:
      'See how a retail brand scaled omnichannel operations through Janio\'s procurement, control tower, and analytics support.',
    keywords:
      'retail logistics growth, omnichannel logistics Southeast Asia, retail case study logistics, 4PL retail expansion',
    url: `${siteUrl}/use-cases/retail-brand-growth`,
    image: defaultImage,
    structuredData: createStructuredData(
      'Retail Brand Growth Logistics',
      'Case study: Janio powered retail brand omnichannel logistics growth.',
      '/use-cases/retail-brand-growth'
    )
  }),
  useCaseMarketplaceUnification: () => ({
    title: 'Marketplace Logistics Unification',
    description:
      'Understand how Janio unified marketplace logistics systems to improve SLA performance and reporting.',
    keywords:
      'marketplace logistics unification, marketplace SLA improvement, 4PL marketplace case study, logistics systems integration',
    url: `${siteUrl}/use-cases/marketplace-unification`,
    image: defaultImage,
    structuredData: createStructuredData(
      'Marketplace Logistics Unification',
      'Case study: Janio unified logistics systems for a leading marketplace.',
      '/use-cases/marketplace-unification'
    )
  }),
  useCasePlatformPeakSeason: () => ({
    title: 'Platform Peak Season Logistics',
    description:
      'Discover how Janio helped a platform operator manage peak season logistics while maintaining customer promises.',
    keywords:
      'platform peak season logistics, peak logistics case study, platform logistics management, 4PL platform support',
    url: `${siteUrl}/use-cases/platform-peak-season`,
    image: defaultImage,
    structuredData: createStructuredData(
      'Platform Peak Season Logistics',
      'Case study: Janio managed peak season logistics for a leading platform.',
      '/use-cases/platform-peak-season'
    )
  }),
  notFound: () => ({
    title: 'Page Not Found | Janio',
    description:
      'The page you are looking for does not exist. Explore Janio\'s logistics services, solutions, and resources.',
    keywords:
      'Janio 404, logistics services, logistics solutions, Janio site map',
    url: `${siteUrl}/404`,
    image: defaultImage,
    structuredData: createStructuredData(
      'Page Not Found',
      'Janio logistics resources and services to help you navigate back to the right page.',
      '/404'
    )
  })
};

export const getPageSeoConfig = (page: PageSeoKey): PageSeoConfig => pageSeoFactories[page]();
