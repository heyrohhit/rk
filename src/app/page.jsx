'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Loader from './Components/loader/page';
import Service from './learn/page';
import ProjectShowcase from './projects/ProjectShow';
import ProjectCase from './projects/ProjectCase';
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
      <div className="w-screen h-screen flex justify-around items-center text-[var(--foreground)] flex-wrap relative overflow-x-hidden 
                      max-[990px]:h-[80vh] max-[660px]:h-[75vh] max-[990px]:overflow-hidden">
        <Design />
        <motion.div
          initial={{ opacity: 0, x: '-250px', y: '-250px' }}
          animate={{ opacity: 1, x: '0px', y: '0px' }}
          transition={{ duration: 1, delay: 1 }}
          className="w-[550px] text-[var(--foreground)] max-h-max p-5 bg-[var(--background)] backdrop-blur-lg border border-white/10 shadow-xl 
                     rounded-2xl absolute top-0 left-0 z-[1] flex flex-col items-start gap-4 animate-fade-in-up
                     min-[990px]:top-[15%] min-[990px]:left-[10%]
                     max-[990px]:w-[500px] max-[990px]:top-[10%]
                     max-[660px]:w-[80%] max-[660px]:top-[2%] max-[660px]:rounded-tl-none max-[660px]:rounded-bl-none max-[660px]:bg-transparent max-[660px]:left-0 max-[660px]:p-2"
                     style={{ padding: '0.8rem' }}
        >
          <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-green-300 via-blue-400 to-purple-500 
                        text-transparent bg-clip-text drop-shadow-[0_2px_5px_rgba(255,255,255,0.25)]">
            Hi, I'm <span className="ml-2 text-yellow-300 text-2xl">Rk</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-bold text-yellow-500 flex items-center gap-2">
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

          <p className="text-sm md:text-base text-[var(--foreground)] leading-relaxed">
            Thank you for stopping by! I specialize in building
            <span className="text-cyan-300 font-semibold"> responsive</span> and
            <span className="text-green-400 font-semibold"> user-friendly</span> web interfaces. I help bring ideas to life with clean code and modern design.
            Let’s create something <span className="text-pink-400 font-bold">great</span> together!
          </p>

          <button className="mt-4 px-6 py-2 text-md font-bold rounded-full border border-yellow-300 
                            bg-gradient-to-r from-yellow-300 to-orange-400 text-black 
                            hover:scale-105 hover:shadow-[0_0_15px_rgba(255,204,112,0.6)] transition-all duration-300"
                            style={{ padding: '0.5rem 1rem' }}>
            <Link href="/contact" className="no-underline text-inherit">
              Start a chats 💬
            </Link>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: '250px', y: '250px' }}
          animate={{ opacity: 1, x: '0px', y: '0px' }}
          transition={{ duration: 1, delay: 1.2 }}
          className="w-[550px] text-[var(--foreground)] max-h-max p-5 absolute bottom-[-100px] right-[-20px] z-[1] rounded-2xl 
                     flex flex-wrap justify-center items-center gap-6 text-sm
                     min-[990px]:top-[45%] min-[990px]:right-[5%] min-[990px]:text-base
                     max-[990px]:w-[60%] max-[990px]:top-[60%] max-[990px]:right-0
                     max-[660px]:w-[80%] max-[660px]:top-[52vh] max-[660px]:right-0 
                     max-[660px]:rounded-tr-none max-[660px]:rounded-br-none"
        >
          {[
            'text-yellow-400 border-yellow-400',
            'text-pink-400 border-pink-400',
            'text-blue-400 border-blue-400',
            'text-green-400 border-green-400',
            'text-purple-400 border-purple-400',
            'text-red-400 border-red-400',
          ].map((color, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.6, delay: index * 1, repeat: Infinity,
                repeatType: 'loop',
              }}
              className={`rounded-full p-5 border-2 ${color} w-20 h-20 flex items-center justify-center 
                         shadow-md hover:scale-110 transition-all duration-300`}
            >
              <svg
                className={`w-8 h-8 ${color.split(' ')[0]}`}
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
        </motion.div>
      </div>

      
      <ProjectCase apis={projectsLive} showOnly={3} title="Live Projects" />
      <ProjectShowcase apis={projects} showOnly={3} title="Projects" />
      <Service />
      <ContactContext width="main" />
      <AboutContent />
    </>
  );
}