import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const NavigationTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Store the current page for referrer tracking
    // Skip storing /contact to avoid circular referrer
    if (location.pathname !== '/contact') {
      sessionStorage.setItem('lastVisitedPage', location.pathname);
    }
  }, [location.pathname]);

  return null; // This component doesn't render anything
};

export default NavigationTracker;