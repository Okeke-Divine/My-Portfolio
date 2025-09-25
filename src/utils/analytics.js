export const GA_TRACKING_ID = 'G-Z6X4LGWP3Z';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Custom scroll tracking
export const trackScrollDepth = (depth) => {
  window.gtag('event', 'scroll_depth', {
    event_category: 'Engagement',
    event_label: `Scrolled to ${depth}%`,
    value: depth,
  });
};

// Component visibility tracking
export const trackComponentView = (componentName) => {
  window.gtag('event', 'component_view', {
    event_category: 'Engagement',
    event_label: `Viewed ${componentName}`,
  });
};

// Click tracking
export const trackClick = (elementName, section) => {
  window.gtag('event', 'click', {
    event_category: 'Interaction',
    event_label: `Clicked ${elementName} in ${section}`,
  });
};