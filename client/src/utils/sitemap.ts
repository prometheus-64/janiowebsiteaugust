// Sitemap generation utilities for Janio website

interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export const generateSitemap = (): string => {
  const baseUrl = 'https://janio.com';
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

  const urls: SitemapEntry[] = [
    // Main pages
    { url: '/', lastmod: today, changefreq: 'daily', priority: 1.0 },
    { url: '/about', lastmod: today, changefreq: 'monthly', priority: 0.8 },
    { url: '/contact', lastmod: today, changefreq: 'monthly', priority: 0.9 },
    
    // Solutions pages
    { url: '/solutions', lastmod: today, changefreq: 'weekly', priority: 0.9 },
    { url: '/solutions/ecommerce-brands', lastmod: today, changefreq: 'weekly', priority: 0.8 },
    { url: '/solutions/marketplaces', lastmod: today, changefreq: 'weekly', priority: 0.8 },
    { url: '/solutions/logistics-partners', lastmod: today, changefreq: 'weekly', priority: 0.8 },
    
    // Services pages
    { url: '/services', lastmod: today, changefreq: 'weekly', priority: 0.9 },
    { url: '/services/logistics-as-a-service', lastmod: today, changefreq: 'weekly', priority: 0.8 },
    { url: '/services/transportation-procurement', lastmod: today, changefreq: 'weekly', priority: 0.8 },
    { url: '/services/control-tower', lastmod: today, changefreq: 'weekly', priority: 0.8 },
    { url: '/services/invoice-audit', lastmod: today, changefreq: 'weekly', priority: 0.8 },
    
    // Use cases
    { url: '/use-cases', lastmod: today, changefreq: 'weekly', priority: 0.7 },
    { url: '/use-cases/ecommerce-scaling', lastmod: today, changefreq: 'monthly', priority: 0.7 },
    { url: '/use-cases/international-expansion', lastmod: today, changefreq: 'monthly', priority: 0.7 },
    { url: '/use-cases/peak-season', lastmod: today, changefreq: 'monthly', priority: 0.7 },
    { url: '/use-cases/digitization', lastmod: today, changefreq: 'monthly', priority: 0.7 },
    
    // Resources
    { url: '/resources', lastmod: today, changefreq: 'weekly', priority: 0.8 },
    { url: '/resources/blogs', lastmod: today, changefreq: 'daily', priority: 0.9 },
    { url: '/resources/guides', lastmod: today, changefreq: 'weekly', priority: 0.8 },
    { url: '/resources/case-studies', lastmod: today, changefreq: 'weekly', priority: 0.8 },
    { url: '/resources/calculators', lastmod: today, changefreq: 'monthly', priority: 0.7 },
    
    // Blog posts
    { url: '/resources/blogs/4pl-vs-3pl-vs-in-house-total-cost-ownership-comparison-east-asia', lastmod: '2024-12-20', changefreq: 'monthly', priority: 0.8 },
    { url: '/resources/blogs/designing-exception-playbooks-shrink-wismo-30-percent', lastmod: '2024-12-18', changefreq: 'monthly', priority: 0.8 },
    
    // Guides
    { url: '/resources/guides/freight-spend-negotiation-tactics', lastmod: today, changefreq: 'monthly', priority: 0.8 },
    
    // Legal pages
    { url: '/privacy', lastmod: today, changefreq: 'yearly', priority: 0.3 },
    { url: '/terms', lastmod: today, changefreq: 'yearly', priority: 0.3 },
    
    // Legacy pages (for SEO)
    { url: '/ecommerce-brands', lastmod: today, changefreq: 'weekly', priority: 0.7 },
    { url: '/marketplaces', lastmod: today, changefreq: 'weekly', priority: 0.7 },
    { url: '/logistics-partners', lastmod: today, changefreq: 'weekly', priority: 0.7 },
    { url: '/b2c-import-growth', lastmod: today, changefreq: 'monthly', priority: 0.7 },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls.map(entry => `  <url>
    <loc>${baseUrl}${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};

export const generateSitemapRoute = () => {
  // For a static sitemap file generation
  const sitemap = generateSitemap();
  return sitemap;
};