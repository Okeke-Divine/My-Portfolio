import { useEffect, useRef } from 'react';
import { trackScrollDepth, trackComponentView } from '../utils/analytics';

export const useScrollTracking = (componentName, threshold = 0.5) => {
  const componentRef = useRef(null);
  const hasBeenTracked = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenTracked.current) {
          trackComponentView(componentName);
          hasBeenTracked.current = true;
          
          // Calculate scroll depth
          const scrollPercentage = Math.round(
            (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
          );
          trackScrollDepth(scrollPercentage);
        }
      },
      { threshold }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, [componentName, threshold]);

  return componentRef;
};