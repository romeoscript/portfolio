import { useRef } from 'react';

/**
 * Pulls its child toward the pointer while hovered, then springs back.
 */
const Magnetic = ({ children, strength = 0.35, className = '' }) => {
  const wrapRef = useRef(null);
  const contentRef = useRef(null);

  const handleMove = (e) => {
    const wrap = wrapRef.current;
    const content = contentRef.current;
    if (!wrap || !content) return;

    const rect = wrap.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;

    content.style.transition = 'transform 0.15s ease-out';
    content.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleLeave = () => {
    const content = contentRef.current;
    if (!content) return;
    content.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
    content.style.transform = 'translate(0, 0)';
  };

  return (
    <div
      ref={wrapRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`magnetic-wrap hoverable ${className}`}
    >
      <div ref={contentRef} className="magnetic-content">
        {children}
      </div>
    </div>
  );
};

export default Magnetic;
