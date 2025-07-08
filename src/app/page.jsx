'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';
import Loader from './Components/loader/page';
import ServicePageItem from './services/ServicePageItem';
import ProjectShowcase from './projects/ProjectShow';
import { projectsLive, projects } from './Components/myservices/apis';
import Design from './Components/Design';
import ContactContext from './contact/ContactContext';
import AboutContent from './about/AboutContent';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoadFinish = () => setLoading(false);

    if (document.readyState === 'complete') {
      handleLoadFinish();
    } else {
      window.addEventListener('load', handleLoadFinish);
    }

    return () => {
      window.removeEventListener('load', handleLoadFinish);
    };
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
    
      <Wrapper>
            <Design />
        <LeftTestSection
          initial={{ opacity: 0, x: '-250px', y: '-250px' }}
          animate={{ opacity: 1, x: '0px', y: '0px' }}
          transition={{ duration: 1, delay: 1 }}
          className="text-white backdrop-blur-lg bg-opacity-30 border border-white/10 shadow-xl rounded-2xl p-6 flex flex-col items-start gap-4 animate-fade-in-up"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-green-300 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_2px_5px_rgba(255,255,255,0.25)]">
            Hi, I'm <span className="ml-2 text-yellow-300 text-2xl">Rk</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-bold text-yellow-100 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-400 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 01-8 0M12 14v7m-4-4h8" />
            </svg>
            Frontend Web Developer
          </h2>

          <p className="text-sm md:text-base text-gray-200 leading-relaxed">
            Thank you for stopping by! I specialize in building
            <span className="text-cyan-300 font-semibold"> responsive</span> and
            <span className="text-green-400 font-semibold"> user-friendly</span> web interfaces. I help bring ideas to life with clean code and modern design.
            Let’s create something <span className="text-pink-400 font-bold">great</span> together!
          </p>

          <button className="mt-4 px-6 py-2 text-md font-bold rounded-full border border-yellow-300 bg-gradient-to-r from-yellow-300 to-orange-400 text-black hover:scale-105 hover:shadow-[0_0_15px_rgba(255,204,112,0.6)] transition-all duration-300">
            <Link href="/contact" className="no-underline text-inherit">
              Start a chats 💬
            </Link>
          </button>
        </LeftTestSection>




        <RightTestSection
          initial={{ opacity: 0, x: '250px', y: '250px' }}
          animate={{ opacity: 1, x: '0px', y: '0px' }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-wrap justify-center items-center gap-6 p-4"
        >
          {[
            'text-yellow-400',
            'text-pink-400',
            'text-blue-400',
            'text-green-400',
            'text-purple-400',
            'text-red-400',
          ].map((color, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.6, delay: index * 1, repeat: Infinity,
                repeatType: 'loop',
              }}
              className={`rounded-full p-5 border-2 ${color} border-current w-20 h-20 flex items-center justify-center shadow-md hover:scale-110 transition-all duration-300`}
            >
              <svg
                className={`w-8 h-8 ${color}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 4v16m8-8H4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          ))}
        </RightTestSection>
       
      </Wrapper>

      <ServicePageItem />
     
      <ProjectShowcase apis={projectsLive} showOnly={3} title="Live Projects" />
      <ProjectShowcase apis={projects} showOnly={3} title="Projects" />
      <ContactContext width="main" />
      <AboutContent />
      
    </>
  );
}

const leftBgColor = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
  Math.random() * 255
)}, ${Math.floor(Math.random() * 255)}, 0.1)`;



const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  overflow-x: hidden;
  button{
    padding: 10px 20px;
    margin-top: 10px;
  }
  @media(max-width:990px){
  overflow: hidden;
    height:80vh;
  }
    @media(max-width:660px){
    height:75vh;
    }
`;

const LeftTestSection = styled(motion.div)`
  width: 550px;
  height: max-content;
  padding: 20px;
  background: ${leftBgColor};
  position: absolute;
  top: 0px;
  left: 0;
  z-index: 1;
  border-radius: 20px;
  backdrop-filter: blur(10px);

  @media (min-width: 990px) {
    top: 15%;
    left: 10%;
  }
  @media (max-width: 990px) {
    width: 500px;
    top: 10%;
  }
  @media (max-width: 660px) {
    width: 80%;
    top: 2%;
    border-radius: 0px 20px 20px 0px;
    background: transparent;
    left: 0%;
  }
`;

const RightTestSection = styled(motion.div)`
  width: 550px;
  height: max-content;
  padding: 20px;
  position: absolute;
  bottom: -100px;
  right: -20px;
  z-index: 1;
  border-radius: 20px;
  font-size: 0.8rem;

  @media (min-width: 990px) {
    top: 45%;
    right: 5%;
    font-size: 1rem;
  }
  @media (max-width: 990px) {
    width: 60%;
    top: 60%;
    right: 0%;
  }
  @media (max-width: 660px) {
    width: 80%;
    top: 52vh;
    right: 0%;
    border-radius: 20px 0px 0px 20px;
  }
`;
