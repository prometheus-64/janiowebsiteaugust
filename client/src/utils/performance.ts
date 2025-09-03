// Performance monitoring utilities
export const measureWebVitals = () => {
  // Core Web Vitals tracking
  if ('PerformanceObserver' in window) {
    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime);
      
      // Send to analytics if needed
      if (window.gtag) {
        window.gtag('event', 'web_vitals', {
          name: 'LCP',
          value: Math.round(lastEntry.startTime),
          event_category: 'Web Vitals'
        });
      }
    });
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const fidEntry = entry as any;
        console.log('FID:', fidEntry.processingStart - entry.startTime);
        
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            name: 'FID',
            value: Math.round(fidEntry.processingStart - entry.startTime),
            event_category: 'Web Vitals'
          });
        }
      }
    });
    fidObserver.observe({ type: 'first-input', buffered: true });

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const clsEntry = entry as any;
        if (!clsEntry.hadRecentInput) {
          clsValue += clsEntry.value;
        }
      }
      console.log('CLS:', clsValue);
      
      if (window.gtag) {
        window.gtag('event', 'web_vitals', {
          name: 'CLS',
          value: Math.round(clsValue * 1000),
          event_category: 'Web Vitals'
        });
      }
    });
    clsObserver.observe({ type: 'layout-shift', buffered: true });
  }

  // First Contentful Paint (FCP)
  if ('performance' in window && 'getEntriesByType' in performance) {
    const paintEntries = performance.getEntriesByType('paint');
    const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    
    if (fcpEntry) {
      console.log('FCP:', fcpEntry.startTime);
      
      if (window.gtag) {
        window.gtag('event', 'web_vitals', {
          name: 'FCP',
          value: Math.round(fcpEntry.startTime),
          event_category: 'Web Vitals'
        });
      }
    }
  }
};

// Resource hints for critical resources
export const addResourceHints = () => {
  const head = document.head;

  // Preload critical fonts
  const fontPreload = document.createElement('link');
  fontPreload.rel = 'preload';
  fontPreload.href = 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap';
  fontPreload.as = 'style';
  fontPreload.crossOrigin = 'anonymous';
  head.appendChild(fontPreload);

  // Prefetch likely navigation targets
  const prefetchTargets = ['/services', '/solutions', '/contact', '/about'];
  prefetchTargets.forEach(path => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = path;
    head.appendChild(link);
  });
};

// Lazy load non-critical resources
export const lazyLoadResources = () => {
  // Lazy load images
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
};

// Initialize performance optimizations
export const initPerformanceOptimizations = () => {
  // Run after DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      measureWebVitals();
      addResourceHints();
      lazyLoadResources();
    });
  } else {
    measureWebVitals();
    addResourceHints();
    lazyLoadResources();
  }
};