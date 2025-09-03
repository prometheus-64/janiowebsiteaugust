declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-3S5VEXWDJE';

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Common events for Janio website
export const trackContactFormSubmission = () => {
  event({
    action: 'submit',
    category: 'contact_form',
    label: 'contact_page',
  });
};

export const trackCTAClick = (ctaName: string, location: string) => {
  event({
    action: 'click',
    category: 'cta',
    label: `${ctaName}_${location}`,
  });
};

export const trackServicePageView = (serviceName: string) => {
  event({
    action: 'view',
    category: 'service',
    label: serviceName,
  });
};

export const trackUseCaseView = (useCaseName: string) => {
  event({
    action: 'view',
    category: 'use_case',
    label: useCaseName,
  });
};

export const trackDownload = (fileName: string) => {
  event({
    action: 'download',
    category: 'resource',
    label: fileName,
  });
};