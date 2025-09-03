# Google Analytics Setup

Google Analytics has been successfully implemented on the Janio website. Here's what was added:

## 🎯 Features Implemented

### 1. **Page View Tracking**
- Automatic page view tracking for all routes using React Router
- Tracks URL changes without page refreshes

### 2. **Event Tracking** 
- Contact form submissions
- CTA button clicks (with source page tracking)
- Service page views
- Use case views 
- File downloads

### 3. **Environment Configuration**
- Uses `VITE_GA_MEASUREMENT_ID` environment variable
- Gracefully handles missing or placeholder values
- Dynamic script loading only when valid ID is provided

## 📁 Files Added/Modified

### New Files:
- `client/src/utils/analytics.ts` - Analytics utility functions
- `client/src/hooks/usePageTracking.ts` - Page tracking hook
- `client/src/components/AnalyticsTracker.tsx` - Analytics tracker component
- `client/src/components/GoogleAnalytics.tsx` - GA script loader

### Modified Files:
- `client/src/App.tsx` - Added analytics components
- `client/src/pages/Contact.tsx` - Added contact form tracking
- `client/src/components/CTALink.tsx` - Added CTA click tracking
- `.env.example` - Added GA environment variable example

## 🚀 Setup Instructions

### 1. Get Google Analytics Tracking ID
1. Go to [Google Analytics](https://analytics.google.com)
2. Create a new GA4 property for janio.asia
3. Copy the Measurement ID (format: G-XXXXXXXXXX)

### 2. Configure Environment Variables
```bash
# Copy .env.example to .env
cp .env.example .env

# Edit .env and add your actual GA Measurement ID
VITE_GA_MEASUREMENT_ID=G-YOUR-ACTUAL-ID
```

### 3. Deploy and Verify
```bash
# Build and test locally
npm run build
npm run start

# Check browser console for GA initialization
# Check browser DevTools > Network tab for gtag requests
```

## 📊 Tracked Events

### Automatic Events:
- **Page Views**: Every route change
- **Contact Form**: Successful form submissions
- **CTA Clicks**: All CTALink and CTAButton components

### Custom Events Available:
```typescript
import { trackServicePageView, trackUseCaseView, trackDownload } from '@/utils/analytics';

trackServicePageView('Logistics as a Service');
trackUseCaseView('Ecommerce Scaling');
trackDownload('logistics-guide.pdf');
```

## 🔧 Testing

1. **Development**: Analytics won't load if `VITE_GA_MEASUREMENT_ID` is not set or is the placeholder value
2. **Production**: Verify GA events in browser DevTools Network tab
3. **Real-time**: Check Google Analytics Real-time reports after deployment

## 🎯 Marketing Benefits

- **Lead Attribution**: Track which pages generate contact form submissions
- **Content Performance**: See which service/use case pages perform best
- **User Journey**: Understand how visitors navigate through the site
- **Conversion Funnel**: Identify drop-off points in the lead generation process