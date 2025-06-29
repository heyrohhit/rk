'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';
import Loader from './Components/loader/page';
import ServicePageItem from './services/ServicePageItem';
import ProjectShowcase from './projects/ProjectShow';
import { projectsLive, projects } from './Components/myservices/apis';
import Design from './Design';
import ContactContext from './contact/ContactContext';
import AboutContent from './about/AboutContent';
import Background from './objects/Background';

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
      <Background/>
        <Design quantity={6} />
        <LeftTestSection
          initial={{ opacity: 0, x: '-250px', y: '-250px' }}
          animate={{ opacity: 1, x: '0px', y: '0px' }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h3>Welcome!</h3>
          <h1>
            Hi, I'm <span>Rk</span>
          </h1>
          <h2>Frontend Web Developer</h2>
          <p>
            Thank you for stopping by! I specialize in building responsive and
            user-friendly web interfaces. With a strong focus on clean code and
            modern design principles, I help bring digital ideas to life. Let’s
            work together and make something great!
          </p>
          <button>
            <Link href="/contact">Start a Conversation</Link>
          </button>
        </LeftTestSection>

        <RightTestSection
          initial={{ opacity: 0, x: '250px', y: '250px' }}
          animate={{ opacity: 1, x: '0px', y: '0px' }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <h3>Hello There!</h3>
          <h1>
            I'm <span>RK</span>
          </h1>
          <h2>DCA Trainee | Creative Designer</h2>
          <p>
            I'm currently expanding my skills in design and development through
            the DCA program. I enjoy crafting visually engaging designs and
            turning ideas into reality with creative solutions. Feel free to
            reach out and discuss your next project!
          </p>
          <button>
            <Link href="/contact">Let's Connect</Link>
          </button>
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

// ✅ Random color calculation only once per build (avoiding re-render color flicker)
const leftBgColor = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
  Math.random() * 255
)}, ${Math.floor(Math.random() * 255)}, 0.1)`;

const rightBgColor = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
  Math.random() * 255
)}, ${Math.floor(Math.random() * 255)}, 0.1)`;

const rightSpanColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
  Math.random() * 255
)}, ${Math.floor(Math.random() * 255)})`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  overflow-x: hidden;
`;

const LeftTestSection = styled(motion.div)`
  width: 450px;
  height: max-content;
  padding: 20px;
  background: ${leftBgColor};
  position: absolute;
  top: 0px;
  left: 0;
  z-index: 1;
  border-radius: 20px;
  backdrop-filter: blur(10px);

  h3 {
    font-size: 0.8rem;
    font-family: 'Papyrus', 'Comic Sans MS', cursive;
  }
  h1 {
    font-size: 2rem;
    span {
      margin-left: 10px;
      font-size: 1.5rem;
    }
  }
  p {
    font-size: 1rem;
    font-weight: 500;
  }
  button {
    font-size: 0.8rem;
    margin-top: 10px;
    padding: 5px 10px;
    border-radius: 20px;
    background: transparent;
    border: 1px solid #ffcc70;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      background: #ffcc70;
      color: #000;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
  }

  @media (min-width: 990px) {
    top: 10%;
    left: 10%;
  }
  @media (max-width: 990px) {
    width: 350px;
    top: 10%;
  }
  @media (max-width: 660px) {
    top: 15px;
    border-radius: 0px 20px 20px 0px;
    background: transparent;
    left: 0%;
    p {
      font-size: 0.8rem;
    }
  }
`;

const RightTestSection = styled(motion.div)`
  width: 450px;
  height: max-content;
  padding: 20px;
  position: absolute;
  bottom: -100px;
  right: -20px;
  z-index: 1;
  border-radius: 20px;
  font-size: 0.8rem;
  background: ${rightBgColor};

  h3 {
    font-size: 0.8rem;
    font-family: 'Papyrus', 'Comic Sans MS', cursive;
  }
  h1 {
    font-size: 2rem;
    span {
      margin-left: 10px;
      font-size: 1rem;
      transition: all 0.3s ease-in-out;
    }
  }
  p {
    font-size: 1rem;
    font-weight: 500;
  }
  button {
    font-size: 0.8rem;
    margin-top: 10px;
    padding: 5px 10px;
    border-radius: 20px;
    background: transparent;
    border: 1px solid #ffcc70;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      background: #ffcc70;
      color: #000;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
  }

  @media (min-width: 990px) {
    top: 45%;
    right: 5%;
    font-size: 1rem;
  }
  @media (max-width: 990px) {
    width: 270px;
    top: 60%;
    right: 0%;
  }
  @media (max-width: 660px) {
    top: 60vh;
    right: 0%;
    border-radius: 20px 0px 0px 20px;
    p {
      font-size: 0.8rem;
    }
  }
`;
