# Media Standards for Janio Website

## Overview
All media assets on the Janio website follow standardized implementation for maximum quality, performance, and consistency.

## Standard Implementation

### 1. Image Quality Configuration
**Always use this pattern for ALL images on the website:**

```tsx
import { MEDIA_CONFIG, getMediaUrl, getStandardImageProps } from "@/config/media";

<img 
  src={getMediaUrl(MEDIA_CONFIG.SECTION.ASSET_NAME, true)} 
  alt="Descriptive alt text"
  {...getStandardImageProps(actualWidth, actualHeight)}
/>
```

### 2. Container Layout Standards
**For sections with content + image:**

```tsx
<section className="py-20 bg-gradient-to-b from-primary/5 to-white">
  <div className="container mx-auto px-4">
    <div className="max-w-[1600px] mx-auto">
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-6 lg:pr-8">
          {/* Content here */}
        </div>
        
        {/* Right Image */}
        <div className="order-first lg:order-last">
          <div className="rounded-xl shadow-lg overflow-hidden bg-white">
            <img 
              src={getMediaUrl(MEDIA_CONFIG.SECTION.ASSET, true)} 
              alt="Description"
              {...getStandardImageProps(width, height)}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

## Key Standards

### Image Quality
- ✅ **Always use** `getMediaUrl(asset, true)` to bypass Cloudflare compression
- ✅ **Include native dimensions** as width/height attributes
- ✅ **Use high-quality rendering** CSS properties
- ✅ **Maintain responsive behavior** with proper CSS

### Layout Standards
- ✅ **Container**: `max-w-[1600px]` instead of `max-w-7xl`
- ✅ **Grid**: `lg:grid-cols-[1fr_1.2fr]` gives image 20% more space
- ✅ **Gaps**: `gap-8 lg:gap-16` for proper spacing
- ✅ **Mobile**: `order-first lg:order-last` for image-first mobile display

### File Naming Convention
```
[feature]-[description]-[variant].[ext]

Examples:
- mcpms-dashboard-operations.png
- mcpms-workflow-exception.gif
- hero-command-center.mp4
- feature-cost-optimization.png
- testimonial-client-video-1080p.mp4
```

### Asset Organization in media.ts
```typescript
export const MEDIA_CONFIG = {
  BASE_URL: 'https://assets.janio.com',
  
  SECTION_NAME: {
    ASSET_DESCRIPTION: 'filename.ext',
  }
}
```

## Benefits of This Standard

### Quality
- **Native Resolution**: Images display at full uploaded quality
- **Crisp Text**: Dashboard screenshots are readable and professional
- **High-DPI Support**: Optimized for retina/high-resolution displays

### Performance
- **Lazy Loading**: Only loads when needed
- **CDN Delivery**: Global edge locations for fast loading
- **Responsive**: Proper scaling across all device sizes

### Maintenance
- **Consistent**: Same implementation across entire website
- **Scalable**: Easy to add new media assets
- **Organized**: Clear file structure and naming conventions

## Usage Examples

### Dashboard Screenshots
```tsx
<img 
  src={getMediaUrl(MEDIA_CONFIG.MCPMS.DASHBOARD_OPERATIONS, true)} 
  alt="MCPMS Operations Dashboard showing KPIs and metrics"
  {...getStandardImageProps(1920, 968)}
/>
```

### Feature GIFs
```tsx
<img 
  src={getMediaUrl(MEDIA_CONFIG.FEATURES.AUTOMATION_WORKFLOW, true)} 
  alt="Animated workflow showing exception handling automation"
  {...getStandardImageProps(1200, 800)}
/>
```

### Video Assets
```tsx
<video 
  src={getMediaUrl(MEDIA_CONFIG.HERO.COMMAND_CENTER, true)}
  {...getStandardImageProps(1920, 1080)}
  autoPlay
  muted
  loop
/>
```

## Implementation Checklist

When adding any new media to the website:

- [ ] Upload asset to Cloudflare R2 with proper filename
- [ ] Add asset reference to `MEDIA_CONFIG` in `/src/config/media.ts`
- [ ] Use `getMediaUrl(asset, true)` for source URL
- [ ] Apply `{...getStandardImageProps(width, height)}` 
- [ ] Use standard container layout with `max-w-[1600px]`
- [ ] Include descriptive alt text
- [ ] Test on desktop, tablet, and mobile devices

## Result

This standard ensures:
- ✅ **Maximum image quality** across the entire website
- ✅ **Consistent professional presentation**
- ✅ **Optimal performance** with lazy loading and CDN
- ✅ **Responsive design** that works on all devices
- ✅ **Easy maintenance** and asset management