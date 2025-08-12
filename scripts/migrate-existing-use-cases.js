import { Pool, neonConfig } from '@neondatabase/serverless';
import ws from 'ws';

neonConfig.webSocketConstructor = ws;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// Generate slugs for existing use cases
const useCaseSlugs = [
  { title: "How Disney Cut Logistics Costs by 35% While Expanding Across Asia", slug: "disney-cost-optimization" },
  { title: "GOAT's 2-Week Expansion into Southeast Asia", slug: "goat-rapid-expansion" },
  { title: "Swarovski's Premium Service Standards Across Borders", slug: "swarovski-luxury-logistics" },
  { title: "Beyond The Vines: From Startup to Regional Leader", slug: "beyond-the-vines-growth" },
  { title: "Shopee's Unified Cross-Border Operations", slug: "shopee-cross-border" },
  { title: "Lazada's Peak Season Success Story", slug: "lazada-peak-season" }
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