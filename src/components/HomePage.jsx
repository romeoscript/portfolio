import React from 'react';
import {
  About,
  Contact,
  Experience,
  Hero,
  Tech,
  Projects,
} from './index';

const HomePage = () => {
  return (
    <div className="relative z-0">
      <div>
        <Hero />
      </div>

      <div className="bg-about bg-cover bg-center bg-no-repeat">
        <About />
      </div>

      <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
        <Tech />
      </div>

      <Projects />

      <div
        className="bg-experience bg-cover bg-center bg-no-repeat 
          rounded-tl-[150px] rounded-br-[150px]">
        <div
          className="bg-experienceLight bg-cover bg-center 
          bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
          <Experience />
        </div>
      </div>
      <div className="relative z-0">
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;

