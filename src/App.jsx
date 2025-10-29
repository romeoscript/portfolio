import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Navbar,
  HomePage,
  BioPage,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bio" element={<BioPage />} />
          <Route path="/about" element={<BioPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
