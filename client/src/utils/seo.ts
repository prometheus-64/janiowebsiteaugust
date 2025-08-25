// Utility functions for SEO optimization

export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters except hyphens and spaces
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim()
    .substring(0, 60); // Limit to 60 characters for SEO
};

export const formatDateForSEO = (dateString: string): string => {
  return new Date(dateString).toISOString();
};

export const generateBreadcrumbs = (pathname: string) => {
  const paths = pathname.split('/').filter(Boolean);
  const breadcrumbs = [
    { name: 'Home', url: '/' }
  ];
  
  let currentPath = '';
  paths.forEach((path, index) => {
    currentPath += `/${path}`;
    const name = path.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    breadcrumbs.push({
      name,
      url: currentPath
    });
  });
  
  return breadcrumbs;
};

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Janio",
  "description": "Southeast Asia's leading 4PL logistics provider specializing in supply chain optimization, transportation procurement, and logistics management.",
  "url": "https://janio.com",
  "logo": "https://janio.com/logo.png",
  "sameAs": [
    "https://www.linkedin.com/company/janio-asia",
    "https://twitter.com/janioasia"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "SG",
    "addressRegion": "Singapore"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+65-6000-0000",
    "contactType": "customer service",
    "availableLanguage": ["English"]
  },
  "foundingDate": "2015",
  "numberOfEmployees": "100-500",
  "industry": "Logistics and Supply Chain Management"
});

export const generateArticleSchema = (article: {
  title: string;
  description: string;
  publishDate: string;
  slug: string;
  category: string;
  readTime?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "image": `https://janio.com/blog-images/${article.slug}.jpg`,
  "author": {
    "@type": "Organization",
    "name": "Janio",
    "url": "https://janio.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Janio",
    "logo": {
      "@type": "ImageObject",
      "url": "https://janio.com/logo.png"
    }
  },
  "datePublished": formatDateForSEO(article.publishDate),
  "dateModified": formatDateForSEO(article.publishDate),
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://janio.com/resources/blogs/${article.slug}`
  },
  "articleSection": article.category,
  "wordCount": article.readTime ? parseInt(article.readTime) * 200 : 2000, // Estimate based on read time
  "inLanguage": "en-US"
});

export const generateWebPageSchema = (page: {
  title: string;
  description: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": page.title,
  "description": page.description,
  "url": page.url,
  "publisher": {
    "@type": "Organization",
    "name": "Janio"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": generateBreadcrumbs(new URL(page.url).pathname).map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `https://janio.com${crumb.url}`
    }))
  }
});

export const generateKeywords = (category: string, title: string): string => {
  const categoryKeywords: Record<string, string[]> = {
    'Cost Management': ['logistics costs', 'supply chain optimization', 'cost reduction', 'TCO analysis', '4PL vs 3PL'],
    'Operations': ['logistics operations', 'supply chain management', 'WISMO reduction', 'exception management', 'operational efficiency'],
    '4PL Strategy': ['fourth party logistics', '4PL strategy', 'logistics outsourcing', 'supply chain strategy'],
    'International Expansion': ['international logistics', 'cross-border shipping', 'global expansion', 'Southeast Asia logistics'],
    'Technology': ['logistics technology', 'supply chain automation', 'logistics software', 'digital transformation'],
    'default': ['logistics', 'supply chain', 'Southeast Asia', 'transportation', 'procurement']
  };
  
  const keywords = categoryKeywords[category] || categoryKeywords['default'];
  const titleWords = title.toLowerCase().split(' ').filter(word => word.length > 3);
  
  return [...keywords, ...titleWords.slice(0, 3)].join(', ');
};