import { useEffect, useRef } from 'react';

/**
 * Dot that tracks the pointer exactly, plus a circle that lags behind and
 * swells over anything marked `.hoverable`. Fine pointers only.
 */
const Cursor = () => {
  const dotRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!fine.matches) return undefined;

    document.body.classList.add('custom-cursor');

    const dot = dotRef.current;
    const circle = circleRef.current;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let circleX = mouseX;
    let circleY = mouseY;
    let frame;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    };

    const onOver = (e) => {
      if (e.target.closest?.('.hoverable, a, button')) circle.classList.add('hovered');
    };
    const onOut = (e) => {
      if (e.target.closest?.('.hoverable, a, button')) circle.classList.remove('hovered');
    };

    const tick = () => {
      circleX += (mouseX - circleX) * 0.15;
      circleY += (mouseY - circleY) * 0.15;
      circle.style.transform = `translate(${circleX}px, ${circleY}px) translate(-50%, -50%)`;
      frame = requestAnimationFrame(tick);
    };
    tick();

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      document.body.classList.remove('custom-cursor');
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={circleRef} className="cursor-circle hidden md:block" />
    </>
  );
};

export default Cursor;
