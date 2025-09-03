import { Pool, neonConfig } from '@neondatabase/serverless';
import ws from 'ws';
neonConfig.webSocketConstructor = ws;

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const useCases = [
  {
    title: "How a Global Entertainment Leader Cut Logistics Costs by 35% While Expanding Across Asia",
    category: "Cost Optimization",
    industry: "Entertainment",
    challenge: "High operational costs with fragmented logistics providers across multiple markets",
    result: "35% cost reduction, 50% faster market entry",
    tags: ["Cost Reduction", "Asia Expansion", "Enterprise"],
    href: "/use-cases/entertainment-leader-case-study",
    metrics: [
      { label: "Cost Savings", value: "35%" },
      { label: "Markets Added", value: "5" },
      { label: "Time to Market", value: "50% faster" }
    ]
  },
  {
    title: "Fashion Marketplace Pioneer's 2-Week Expansion into Southeast Asia",
    category: "Scaling",
    industry: "Fashion",
    challenge: "Needed rapid expansion into new markets with complex customs requirements",
    result: "Live in 3 countries within 2 weeks vs. traditional 6-month timeline",
    tags: ["Rapid Scaling", "Southeast Asia", "Fashion"],
    href: "/use-cases/fashion-pioneer-expansion",
    metrics: [
      { label: "Launch Speed", value: "2 weeks" },
      { label: "Markets", value: "3" },
      { label: "Clearance Rate", value: "99.2%" }
    ]
  },
  {
    title: "International Luxury Brand's Premium Service Standards Across Borders",
    category: "International",
    industry: "Luxury",
    challenge: "Maintaining luxury brand standards while managing cross-border logistics complexity",
    result: "99.8% on-time delivery with white-glove service across 8 countries",
    tags: ["Luxury", "Service Quality", "Cross-border"],
    href: "/use-cases/luxury-brand-standards",
    metrics: [
      { label: "On-time Delivery", value: "99.8%" },
      { label: "Countries", value: "8" },
      { label: "Service Rating", value: "4.9/5" }
    ]
  },
  {
    title: "Growing Retail Brand: From Startup to Regional Leader",
    category: "Ecommerce",
    industry: "Wine & Spirits",
    challenge: "Small wine brand needed scalable logistics to compete with established players",
    result: "300% growth enabled with flexible, cost-effective logistics",
    tags: ["Startup", "Growth", "Ecommerce"],
    href: "/use-cases/retail-brand-growth",
    metrics: [
      { label: "Revenue Growth", value: "300%" },
      { label: "Cost per Shipment", value: "-40%" },
      { label: "Customer Satisfaction", value: "98%" }
    ]
  },
  {
    title: "Leading SEA Marketplace's Unified Cross-Border Operations",
    category: "Marketplace",
    industry: "E-commerce Platform",
    challenge: "Standardizing logistics across sellers and multiple countries",
    result: "Single platform managing 6,000+ tonnes monthly with 99%+ reliability",
    tags: ["Marketplace", "Cross-border", "Scale"],
    href: "/use-cases/marketplace-unification",
    metrics: [
      { label: "Monthly Volume", value: "6,000+ tonnes" },
      { label: "Reliability", value: "99.1%" },
      { label: "Seller Satisfaction", value: "4.8/5" }
    ]
  },
  {
    title: "Regional E-commerce Platform's Peak Season Success Story",
    category: "Scaling",
    industry: "E-commerce Platform",
    challenge: "Managing 5x volume spike during peak shopping season",
    result: "Seamless peak season handling with 100% capacity availability",
    tags: ["Peak Season", "Marketplace", "Capacity"],
    href: "/use-cases/platform-peak-season",
    metrics: [
      { label: "Volume Increase", value: "5x" },
      { label: "Capacity Availability", value: "100%" },
      { label: "Peak Performance", value: "99.3%" }
    ]
  }
];

async function seedUseCases() {
  const client = await pool.connect();
  try {
    console.log('Starting use cases seeding...');
    
    // Clear existing use cases
    await client.query('DELETE FROM use_cases');
    console.log('Cleared existing use cases');
    
    // Insert use cases
    for (const useCase of useCases) {
      const query = `
        INSERT INTO use_cases (title, category, industry, challenge, result, tags, href, metrics)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      `;
      
      await client.query(query, [
        useCase.title,
        useCase.category,
        useCase.industry,
        useCase.challenge,
        useCase.result,
        useCase.tags,
        useCase.href,
        JSON.stringify(useCase.metrics)
      ]);
      
      console.log(`Inserted: ${useCase.title}`);
    }
    
    console.log(`Successfully seeded ${useCases.length} use cases!`);
  } catch (error) {
    console.error('Error seeding use cases:', error);
  } finally {
    client.release();
    await pool.end();
  }
}

seedUseCases();