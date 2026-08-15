import { useEffect } from 'react';

/**
 * Translates every `[data-parallax]` element by scrollY * its speed,
 * producing the lag effect behind the hero and grid cards.
 */
const useParallax = () => {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('[data-parallax]'));
    if (!els.length) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      els.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax) || 0;
        const scale = el.dataset.parallaxScale ? ` scale(${el.dataset.parallaxScale})` : '';
        el.style.transform = `translate3d(0, ${y * speed}px, 0)${scale}`;
      });
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
};

export default useParallax;
