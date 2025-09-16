import { useMemo } from 'react';
import SEO, { SEOProps } from './SEO';
import { getPageSeoConfig, PageSeoKey } from '@/config/seo';

export interface PageSEOProps {
  page: PageSeoKey;
  overrides?: Partial<SEOProps> & {
    structuredData?: SEOProps['structuredData'];
  };
}

const PageSEO = ({ page, overrides }: PageSEOProps) => {
  const config = useMemo(() => getPageSeoConfig(page), [page]);
  const {
    structuredData: baseStructuredData,
    ...baseMeta
  } = config;

  const {
    structuredData: overrideStructuredData,
    ...overrideMeta
  } = overrides || {};

  const structuredData = overrideStructuredData ?? baseStructuredData;

  return (
    <SEO
      {...baseMeta}
      {...overrideMeta}
      structuredData={structuredData}
    />
  );
};

export default PageSEO;
