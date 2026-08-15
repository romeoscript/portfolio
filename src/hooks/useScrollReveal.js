import { useEffect } from 'react';

const SELECTOR = '.reveal-item, .split-line, .draw-path, .word-reveal, .counter';

const startCounter = (el) => {
  if (el.dataset.counted === 'true') return;
  el.dataset.counted = 'true';

  const target = Number(el.dataset.target) || 0;
  const step = target / 50;
  let count = 0;

  const timer = setInterval(() => {
    count += step;
    if (count >= target) {
      el.innerText = target;
      clearInterval(timer);
    } else {
      el.innerText = Math.ceil(count);
    }
  }, 30);
};

/**
 * Adds `.active` to reveal primitives as they scroll into view, driving the
 * CSS transitions defined in index.css. Counters tick up on first sight.
 */
const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('active');
          if (entry.target.classList.contains('counter')) startCounter(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );

    document.querySelectorAll(SELECTOR).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

export default useScrollReveal;
