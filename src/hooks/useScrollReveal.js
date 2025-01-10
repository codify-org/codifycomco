import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    // Observe elements with reveal-on-scroll class
    document.querySelectorAll('.reveal-on-scroll').forEach(element => {
      observer.observe(element);
    });

    // Observe elements with parallax-scroll class
    document.querySelectorAll('.parallax-scroll').forEach(element => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll('.reveal-on-scroll, .parallax-scroll').forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);
}; 