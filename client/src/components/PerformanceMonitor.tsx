import { useEffect } from 'react';
import { initPerformanceOptimizations } from '@/utils/performance';

export const PerformanceMonitor = () => {
  useEffect(() => {
    initPerformanceOptimizations();
  }, []);

  return null;
};

export default PerformanceMonitor;