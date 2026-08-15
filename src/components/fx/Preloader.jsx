import { useEffect, useState } from 'react';

const Preloader = () => {
  const [value, setValue] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current = Math.min(current + Math.floor(Math.random() * 10) + 3, 100);
      setValue(current);
      if (current === 100) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (value < 100) return undefined;
    const slide = setTimeout(() => setLoaded(true), 350);
    const remove = setTimeout(() => setGone(true), 1450);
    return () => {
      clearTimeout(slide);
      clearTimeout(remove);
    };
  }, [value]);

  if (gone) return null;

  return (
    <div className={`preloader ${loaded ? 'loaded' : ''}`}>
      <div className="font-display text-5xl sm:text-6xl font-bold mb-4 tracking-tighter text-bone">
        {value}%
      </div>
      <div className="loader-bar">
        <div className="loader-progress" style={{ width: `${value}%` }} />
      </div>
      <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-smoke font-display">
        Romeo Ezeugwu
      </p>
    </div>
  );
};

export default Preloader;
