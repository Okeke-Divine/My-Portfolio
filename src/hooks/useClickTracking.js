import { useCallback } from 'react';
import { trackClick } from '../utils/analytics';

export const useClickTracking = (section) => {
  const trackElementClick = useCallback((elementName) => {
    trackClick(elementName, section);
  }, [section]);

  return trackElementClick;
};