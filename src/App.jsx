import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, HomePage, BioPage } from './components';
import SpeakingPage from './components/SpeakingPage';
import Preloader from './components/fx/Preloader';
import Cursor from './components/fx/Cursor';
import ScrollProgress from './components/fx/ScrollProgress';
import usePageMeta from './hooks/usePageMeta';

/** Route changes should start at the top, not wherever the last page was. */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

/** Keeps title, description and canonical in step with the current route. */
const PageMeta = () => {
  usePageMeta();
  return null;
};

const App = () => (
  <BrowserRouter>
    <Preloader />
    <div className="noise-overlay" aria-hidden="true" />
    <Cursor />
    <ScrollProgress />

    <div className="relative z-0">
      <ScrollToTop />
      <PageMeta />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/speaking" element={<SpeakingPage />} />
        <Route path="/bio" element={<BioPage />} />
        <Route path="/about" element={<BioPage />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
