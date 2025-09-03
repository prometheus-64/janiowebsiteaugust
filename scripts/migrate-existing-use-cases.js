import { Pool, neonConfig } from '@neondatabase/serverless';
import ws from 'ws';

neonConfig.webSocketConstructor = ws;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// Generate slugs for existing use cases
const useCaseSlugs = [
  { title: "How a Global Entertainment Leader Cut Logistics Costs by 35% While Expanding Across Asia", slug: "entertainment-leader-cost-optimization" },
  { title: "Fashion Marketplace Pioneer's 2-Week Expansion into Southeast Asia", slug: "fashion-pioneer-rapid-expansion" },
  { title: "International Luxury Brand's Premium Service Standards Across Borders", slug: "luxury-brand-logistics" },
  { title: "Growing Retail Brand: From Startup to Regional Leader", slug: "retail-brand-growth" },
  { title: "Leading SEA Marketplace's Unified Cross-Border Operations", slug: "marketplace-cross-border" },
  { title: "Regional E-commerce Platform's Peak Season Success Story", slug: "platform-peak-season" }
];

async function addSlugsToUseCases() {
  const client = await pool.connect();
  try {
    console.log('Adding slugs to existing use cases...');
    
    for (const useCase of useCaseSlugs) {
      await client.query(
        'UPDATE use_cases SET slug = $1 WHERE title = $2',
        [useCase.slug, useCase.title]
      );
      console.log(`Updated slug for: ${useCase.title}`);
    }
    
    console.log('Successfully added slugs to all use cases!');
  } catch (error) {
    console.error('Error adding slugs:', error);
  } finally {
    client.release();
    await pool.end();
  }
}

addSlugsToUseCases();