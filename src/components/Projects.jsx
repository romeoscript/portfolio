import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { github, pineapple } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({
  id,
  name,
  description,
  image,
  repo,
  demo,
  index,
  tags,
}) => {
  return (
    <div className="card-container w-full h-screen sticky top-0 flex items-center justify-center">
      <div
        className="card-content w-full max-w-[1000px] h-[70vh] rounded-[30px] border border-[rgba(255,255,255,0.05)] shadow-2xl relative overflow-hidden group"
        style={{ top: `calc(-10vh + ${index * 40}px)` }}
      >
        {/* Full Card Image Background */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Dark Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
        </div>

        {/* Content Positioned Over Image */}
        <div className="relative z-20 w-full h-full flex flex-col justify-end p-8 sm:p-12">
          <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
            <h3 className="text-white font-bold text-[36px] sm:text-[50px] uppercase font-beckman tracking-[2px] leading-tight">
              {name}
            </h3>
            <p className="mt-4 text-silver text-[16px] sm:text-[18px] leading-[1.6] max-w-[800px] opacity-90 drop-shadow-md">
              {description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2 mb-8">
              {tags &&
                tags.map((tag) => (
                  <span
                    key={tag.name}
                    className={`text-[13px] ${tag.color} px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 uppercase tracking-wider font-semibold shadow-sm`}
                  >
                    #{tag.name}
                  </span>
                ))}
            </div>

            <div className="flex gap-4">
              {repo && repo !== "https://github.com/" && (
                <button
                  onClick={() => window.open(repo, "_blank")}
                  className="flex items-center gap-3 px-6 py-3 rounded-full bg-black/60 backdrop-blur-md hover:bg-white border border-white/20 hover:border-white transition-all duration-300 group/btn"
                >
                  <img
                    src={github}
                    alt="github"
                    className="w-5 h-5 group-hover/btn:scale-110 group-hover/btn:invert transition-transform"
                  />
                  <span className="text-sm font-semibold tracking-wider text-white group-hover/btn:text-black transition-colors">
                    Source Code
                  </span>
                </button>
              )}
              {demo && demo !== "https://github.com/" && (
                <button
                  onClick={() => window.open(demo, "_blank")}
                  className="flex items-center gap-3 px-6 py-3 rounded-full bg-primary hover:bg-opacity-90 border border-primary transition-all duration-300 group/btn"
                >
                  <img
                    src={pineapple}
                    alt="live demo"
                    className="w-5 h-5 group-hover/btn:scale-110 transition-transform"
                  />
                  <span className="text-sm font-semibold tracking-wider text-white">
                    Visit Live Site
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Lenis Smooth Scroll Setup
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // GSAP ScrollTrigger Stacking Setup
    let cards = gsap.utils.toArray(".card-container");

    cards.forEach((card, i) => {
      if (i !== cards.length - 1) {
        gsap.to(card.querySelector(".card-content"), {
          scale: 0.9,
          opacity: 0.5,
          z: -100,
          filter: "blur(10px)",
          scrollTrigger: {
            trigger: card,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      } else {
        // Last card just fades out
        gsap.to(card.querySelector(".card-content"), {
          opacity: 0,
          scale: 0.95,
          scrollTrigger: {
            trigger: card,
            start: "bottom center",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      className="mt-[-2rem] sm:mt-[-6rem] relative z-10 bg-night"
      ref={containerRef}
    >
      <div className={`${styles.padding} max-w-7xl mx-auto relative z-20`}>
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <p className={`${styles.sectionSubText} `}>Case Studies</p>
          <h2 className={`${styles.sectionHeadTextLight}`}>Projects.</h2>
        </motion.div>

        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
          >
            These projects demonstrate my expertise with practical examples of
            some of my work, including brief descriptions and links to code
            repositories and live demos. They showcase my ability to tackle
            intricate challenges, adapt to various technologies, and efficiently
            oversee projects.
          </motion.p>
        </div>
      </div>

      <div className="flex flex-col w-full relative">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
        {/* Spacer to give the last card scroll distance */}
        <div className="w-full h-screen"></div>
      </div>
    </div>
  );
};

export default Projects;
