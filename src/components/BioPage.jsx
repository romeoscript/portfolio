import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import romeoImg from '../assets/personal/main.jpg';
import { FaGithub } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaTiktok } from 'react-icons/fa';
// import { FaX } from 'react-icons/fa';

const BioPage = () => {
  return (
    <div className="mt-[6rem] sm:mt-[6rem]">
      {/* Two Column Header - Picture Left, Content Right */}
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start mb-12 sm:mb-16">
        
        {/* Left Column - Profile Picture */}
        <div className="flex justify-center lg:justify-start">
          <div className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] aspect-square rounded-lg overflow-hidden shadow-card bg-jetLight">
            <img
              src={romeoImg}
              alt="Romanus Chukwuemeka Ezeugwu"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/500?text=Romanus+Chukwuemeka+Ezeugwu';
              }}
            />
          </div>
        </div>
        {/* Right Column - Header Content */}
        <div className="space-y-4 sm:space-y-6">
          
          {/* Name */}
          <div>
            <h2 className={`${styles.sectionHeadTextLight} text-[32px] xs:text-[40px] sm:text-[48px] md:text-[56px] leading-[1.1] mb-3`}>
              Romanus Chukwuemeka Ezeugwu
            </h2>
            <div className="flex gap-2 sm:gap-3">
              <a
                href="https://github.com/romeoscript"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Romanus Chukwuemeka Ezeugwu's GitHub profile"
                className="text-white hover:text-french transition-colors text-xl sm:text-2xl">
                
                <FaGithub />
              </a>
              <a
                href="mailto:romeobourne211@gmail.com"
                aria-label="Send email to Romanus Chukwuemeka Ezeugwu"
                className="text-flashWhite hover:text-french transition-colors text-xl sm:text-2xl">
                
                <FaEnvelope />
              </a>
              <a
                href="https://www.linkedin.com/in/ezeugwuromanus/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Romanus Chukwuemeka Ezeugwu's LinkedIn profile"
                className="text-white hover:text-french transition-colors text-xl sm:text-2xl">
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/romeoscript1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Romanus Chukwuemeka Ezeugwu's Instagram profile"
                className="text-white hover:text-french transition-colors text-xl sm:text-2xl">
                <FaInstagram />
              </a>
              <a
                href="https://www.x.com/romeoscript1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Romanus Chukwuemeka Ezeugwu's X (Twitter) profile"
                className="text-white hover:text-french transition-colors text-xl sm:text-2xl">
                
                <FaXTwitter />
              </a>
              <a
                href="https://www.tiktok.com/@romeoscript5"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Romanus Chukwuemeka Ezeugwu's TikTok profile"
                className="text-white hover:text-french transition-colors text-xl sm:text-2xl">
                <FaTiktok />
              </a>
            </div>
            <p className="text-french text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
              CEO & Senior Software Engineer (Frontend)
            </p>
          </div>

          {/* Biography */}
          <div>
            <p className="text-timberWolf text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[24px] md:leading-[26px] font-poppins">
              Romanus Chukwuemeka Ezeugwu, also known as Romeo or Romeoscript, is a Senior Software Engineer 
              specializing in frontend development and CEO of Qubic Digital Services. Starting his journey by 
              borrowing a cousin's phone to learn HTML, CSS, and JavaScript, he transformed constraints into 
              creativity, building production-ready systems that serve thousands of users. He served as Lead 
              Frontend Engineer at Nanocodes, developing their flagship Learning Management System. Beyond 
              engineering, he mentors developers, contributes to open-source infrastructure, and speaks at tech 
              events, including an appearance on FLOSS Weekly.
            </p>
          </div>

          {/* Areas of Expertise */}
       
        </div>
      </div>

      {/* Full Width Biography Content Below */}
      <div className="space-y-8 sm:space-y-10 max-w-4xl mt-8 sm:mt-12">
        <div>
        <div>
            <h3 className={`${styles.sectionHeadTextLight} text-[20px] sm:text-[22px] md:text-[24px] mb-3 sm:mb-4`}>
              Areas of Expertise
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {[
                'Frontend Development',
                'React',
                'TypeScript',
                'JavaScript',
                'Web Technologies',
                'User Interface Design',
                'System Architecture',
                'Open Source',
                'Mentoring',
                'Product Development'
              ].map((skill, index) => (
                <span
                  key={index}
                  className="bg-french px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-eerieBlack text-xs sm:text-sm font-semibold">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Facts */}
          <div>
            <h3 className={`${styles.sectionHeadTextLight} text-[20px] sm:text-[22px] md:text-[24px] mb-3 sm:mb-4`}>
              Quick Facts
            </h3>
            <div className="space-y-2 text-timberWolf text-sm sm:text-base">
              <p><span className="text-taupe">Also Known As:</span> Romeo / Romeoscript</p>
              <p><span className="text-taupe">Role:</span> CEO, Qubic Digital Services | LinkedTrust</p>
              <p><span className="text-taupe">Location:</span> Nigeria / Expanding to UK</p>
              <p><span className="text-taupe">Specialization:</span> Frontend Engineering</p>
            </div>
          </div>

          {/* Key Achievements */}
          <div>
            <h3 className={`${styles.sectionHeadTextLight} text-[20px] sm:text-[22px] md:text-[24px] mb-3 sm:mb-4`}>
              Key Achievements
            </h3>
            <ul className="space-y-2 text-timberWolf text-sm sm:text-base">
              <li>• Lead Frontend Engineer at Nanocodes, built TechVerve LMS</li>
              <li>• HNG Internship 9 Finalist (300 out of 18,000 participants)</li>
              <li>• GAIN Hackathon Finalist (Team GETO AI)</li>
              <li>• Featured on FLOSS Weekly podcast (TWiT.tv)</li>
              <li>• Speaker at Google Developer Groups</li>
              <li>• Mentor at Solana Student Africa Hackathon</li>
            </ul>
          </div> 
          <div>
             <h3 className={`${styles.sectionHeadTextLight} text-[24px] sm:text-[28px] md:text-[32px] mb-3 sm:mb-4`}>Early Journey</h3>
             <div className="space-y-4">
               <p className="text-timberWolf text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] sm:leading-[26px] md:leading-[28px] font-poppins">
                 Romanus's journey into technology began with borrowed resources and determination. Without a 
                 laptop or smartphone, he constantly borrowed his cousin's phone to research and study coding. 
                 He taught himself HTML, CSS, and JavaScript using SoloLearn, studying until the battery died, 
                 then waiting for it to charge. This experience shaped his foundational approach: identify the 
                 blocker, find a solution, then execute.
               </p>
             </div>
           </div>

           {/* Professional Impact */}
           <div className="mt-8 sm:mt-10">
             <h3 className={`${styles.sectionHeadTextLight} text-[24px] sm:text-[28px] md:text-[32px] mb-3 sm:mb-4`}>Professional Impact</h3>
            <div className="space-y-4">
              <p className="text-timberWolf text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] sm:leading-[26px] md:leading-[28px] font-poppins">
                At Nanocodes, where he served as Lead Frontend Engineer, Romanus shaped both product and people. 
                He led development of the company's flagship Learning Management System (TechVerve), serving hundreds 
                of students, and built their online marketplace and blog, establishing the technical foundation that 
                still powers their business today.
              </p>
               <p className="text-timberWolf text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] sm:leading-[26px] md:leading-[28px] font-poppins">
                 Beyond engineering, he worked with marketing teams to shape acquisition funnels, setting up analytics, 
                 optimizing SEO, and defining experiences that turned visitors into active users.</p>
             </div>
           </div>

           <div className="mt-8 sm:mt-10">
             <h3 className={`${styles.sectionHeadTextLight} text-[24px] sm:text-[28px] md:text-[32px] mb-3 sm:mb-4`}>Mentorship & Community</h3>
             <div className="space-y-4">
               <p className="text-timberWolf text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] sm:leading-[26px] md:leading-[28px] font-poppins">
                 What defined Romanus's time at Nanocodes wasn't just the code he wrote; it was the developers he 
                 mentored. In 2022, he organized trips to GDG DevFest Enugu so students could meet real practitioners 
                 and see how the industry works. His impact extends beyond company walls—he contributes to open-source 
                 infrastructure and has established himself as a voice in the digital technology community.
               </p>
              
             </div>
           </div>

           {/* Recognition & Future Vision */}
           <div className="mt-8 sm:mt-10">
             <h3 className={`${styles.sectionHeadTextLight} text-[24px] sm:text-[28px] md:text-[32px] mb-3 sm:mb-4`}>Recognition & Future Vision</h3>
             <div className="space-y-4">
               <p className="text-timberWolf text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] sm:leading-[26px] md:leading-[28px] font-poppins">
                 Romanus graduated as one of 300 finalists out of 18,000 participants in HNG Internship 9—one of 
                 Africa's most competitive tech bootcamps. He was also a finalist at the Generative AI Network (GAIN) 
                 Hackathon, serving as a frontend engineer for Team GETO AI. These experiences reinforced his belief 
                 that his value isn't just in the code he writes—it's in the infrastructure he contributes to, the 
                 developers he mentors, and the knowledge he shares.
               </p>
               <p className="text-timberWolf text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] sm:leading-[26px] md:leading-[28px] font-poppins">
                 As CEO of Qubic Digital Services, Romanus is building digital infrastructure for businesses across 
                 Africa, helping SMEs establish their digital presence. He plans to expand Qubic's footprint into the 
                 UK market, focusing on privacy-first, user-centric platforms and scalable frontend systems. His vision 
                 includes bridging skill gaps by hosting workshops, collaborating with organizations that help 
                 underrepresented youths build open-source portfolios, and partnering with universities to explore 
                 privacy-preserving systems and decentralized architectures.
               </p>
             </div>
           </div>

          {/* Back Link */}
          <div className="pt-4 sm:pt-6 border-t border-taupe mt-8 sm:mt-10">
            <a
              href="/"
              className="text-french hover:text-flashWhite transition-colors text-sm sm:text-base md:text-[16px] flex items-center gap-2">
              <span>←</span> Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(BioPage, 'bio');
