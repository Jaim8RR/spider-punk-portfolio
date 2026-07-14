import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for Intersection Observer based scroll reveal animations.
 * Returns a ref callback to attach to elements that should animate on scroll.
 */
export function useScrollReveal(options = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -60px 0px' } = options;

  const refCallback = useCallback(
    (node) => {
      if (!node) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
            observer.unobserve(entry.target);
          }
        },
        { threshold, rootMargin }
      );

      observer.observe(node);

      // Cleanup on unmount is handled by React — the node
      // will be garbage-collected along with its observer.
    },
    [threshold, rootMargin]
  );

  return refCallback;
}

/**
 * Hook to track scroll position for navbar styling.
 */
export function useScrollPosition() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrolled;
}
