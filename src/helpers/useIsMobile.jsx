import { useState, useEffect } from 'react';

function useIsScreen(variant) {
  // Setup initial state based on window width if available.
  const [isVariant, setIsVariant] = useState(() => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (variant === 'mobileOnly') {
        return width < 768;
      } else if (variant === 'midsize') {
        return width >= 768 && width < 1024;
      }
    }
    // Default to false if window is not available (SSR).
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      const width = window.innerWidth;
      if (variant === 'mobileOnly') {
        setIsVariant(width < 768);
      } else if (variant === 'midsize') {
        setIsVariant(width >= 768 && width < 1024);
      } else {
        setIsVariant(false);
      }
    };

    // Initialize and then listen for window resize events.
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [variant]);

  return isVariant;
}

export default useIsScreen;
