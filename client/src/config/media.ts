/**
 * Cloudflare R2 Media Configuration
 * 
 * All media assets are served from Cloudflare R2 bucket with CDN optimization
 * Base URL: https://assets.janio.com/
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