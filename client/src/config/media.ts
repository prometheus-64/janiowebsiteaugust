/**
 * Cloudflare R2 Media Configuration
 * 
 * All media assets are served from Cloudflare R2 bucket with CDN optimization
 * Base URL: https://assets.janio.com/
 * 
 * STANDARD MEDIA IMPLEMENTATION (use for ALL future media):
 * - Use getMediaUrl(asset, true) to bypass optimization for quality
 * - Include explicit width/height attributes matching native resolution
 * - Add imageRendering: 'high-quality' CSS properties
 * - Use larger containers: max-w-[1600px] instead of max-w-7xl
 * - Implement responsive grid layouts: [1fr_1.2fr] for content+image
 * - Maintain responsive behavior with maxWidth: '100%', height: 'auto'
 * 
 * File naming convention: [feature]-[description]-[variant].[ext]
 * Examples:
 * - mcpms-dashboard-operations.png
 * - mcpms-workflow-exception.gif
 * - hero-command-center.mp4
 */

export const MEDIA_CONFIG = {
  BASE_URL: 'https://assets.janio.com',
  
  // MCPMS Platform Screenshots
  MCPMS: {
    DASHBOARD_OPERATIONS: 'mcpms-dashboard-operations.png',
    DASHBOARD_ANALYTICS: 'mcpms-dashboard-analytics.png',
    EXCEPTION_MANAGEMENT: 'mcpms-exception-management.png',
    EXCEPTIONS_OVERVIEW: 'mcpms-exceptions-deepdive_loop.mov',
    ALLOCATION_RULES: 'mcpms-allocation-rules_vid.mov',
    INTEGRATION_HUB: 'mcpms-integration-hub.png',
    LANE_ANALYTICS: 'mcpms-lane-analytics.png',
    WORKFLOW_AUTOMATION: 'mcpms-workflow-automation.png',
  },
  
  // Hero Section Assets
  HERO: {
    COMMAND_CENTER: 'hero-command-center.mp4',
    LOGISTICS_OVERVIEW: 'hero-logistics-overview.png',
  },
  
  // Feature Demonstrations
  FEATURES: {
    REAL_TIME_TRACKING: 'feature-real-time-tracking.gif',
    COST_OPTIMIZATION: 'feature-cost-optimization.png',
    AUTOMATION_WORKFLOW: 'feature-automation-workflow.gif',
  },
  
  // Testimonials & Case Studies
  TESTIMONIALS: {
    CLIENT_VIDEO_1: 'testimonial-client-video-1080p.mp4',
    CLIENT_VIDEO_2: 'testimonial-client-video-2-1080p.mp4',
    SUCCESS_STORY_CHART: 'testimonial-success-chart.png',
  }
} as const;

/**
 * Helper function to get full media URL
 */
export const getMediaUrl = (assetPath: string, bypassOptimization: boolean = false): string => {
  const url = `${MEDIA_CONFIG.BASE_URL}/${assetPath}`;
  
  // Add query parameter to bypass Cloudflare optimization for high-quality images
  if (bypassOptimization) {
    return `${url}?original=true`;
  }
  
  return url;
};

/**
 * Helper function to get optimized image URL with Cloudflare transformations
 */
export const getOptimizedImageUrl = (
  assetPath: string, 
  options?: {
    width?: number;
    height?: number;
    format?: 'webp' | 'avif' | 'auto';
    quality?: number;
  }
): string => {
  const baseUrl = `${MEDIA_CONFIG.BASE_URL}/${assetPath}`;
  
  if (!options) return baseUrl;
  
  // Cloudflare Image Resizing URL format
  const params = new URLSearchParams();
  if (options.width) params.set('width', options.width.toString());
  if (options.height) params.set('height', options.height.toString());
  if (options.format) params.set('format', options.format);
  if (options.quality) params.set('quality', options.quality.toString());
  
  // Use Cloudflare's image transformation service if parameters exist
  if (params.toString()) {
    return `${MEDIA_CONFIG.BASE_URL}/cdn-cgi/image/${params.toString()}/${assetPath}`;
  }
  
  return baseUrl;
};

/**
 * Responsive image srcSet generator for different screen sizes
 */
export const getResponsiveSrcSet = (assetPath: string): string => {
  return [
    `${getOptimizedImageUrl(assetPath, { width: 480, format: 'webp' })} 480w`,
    `${getOptimizedImageUrl(assetPath, { width: 800, format: 'webp' })} 800w`,
    `${getOptimizedImageUrl(assetPath, { width: 1200, format: 'webp' })} 1200w`,
    `${getOptimizedImageUrl(assetPath, { width: 1920, format: 'webp' })} 1920w`,
  ].join(', ');
};

/**
 * STANDARD HIGH-QUALITY IMAGE PROPS
 * Use this object spread for all images to ensure consistent quality
 * 
 * Usage:
 * <img 
 *   src={getMediaUrl(MEDIA_CONFIG.MCPMS.DASHBOARD, true)}
 *   {...getStandardImageProps(1920, 968)}
 *   alt="Description"
 * />
 */
export const getStandardImageProps = (width: number, height: number) => ({
  width,
  height,
  loading: 'lazy' as const,
  className: 'w-full h-auto max-w-none',
  style: {
    imageRendering: 'crisp-edges' as const,
    maxWidth: '100%',
    height: 'auto'
  } as React.CSSProperties
});

/**
 * STANDARD CONTAINER PROPS
 * Use for containers that hold high-quality images
 */
export const getStandardContainerProps = () => ({
  containerClass: 'container mx-auto px-4',
  wrapperClass: 'max-w-[1600px] mx-auto',
  gridClass: 'grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16 items-center',
  imageContainerClass: 'order-first lg:order-last'
});