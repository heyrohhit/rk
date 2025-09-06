'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useTheme } from 'next-themes';

export default function Design() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Yeh hydration mismatch avoid karta hai
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // render mat karo jab tak theme ready nahi hai

  return (
    <MainSection themeMode={theme}>
      <MainImageSection
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <img
          src="/img/pic02.webp"
          alt="Main visual"
          loading="lazy"
          className="w-full h-[130%] absolute -top-[20%] object-cover z-[9]"
          onError={(e) => {
            const target = e.target;
            if (target instanceof HTMLImageElement && target.parentElement) {
              target.parentElement.style.backgroundColor = 'black';
            }
          }}
        />
      </MainImageSection>
    </MainSection>
  );
}

const MainSection = styled(motion.div)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-wrap: wrap;
  min-height: 100vh;
  color: var(--foreground);
  background: ${({ themeMode }) =>
    themeMode === 'light'
      ? `linear-gradient(to left, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 1)), url('/img/pic01.webp') right center/cover no-repeat`
      : `linear-gradient(to left, rgba(0, 0, 0, 0.8), rgba(0,0,0, 1)), url('/img/pic01.webp') right center/cover no-repeat`};
  background-size: cover;
  transition: background 0.5s ease-in-out;
`;

const MainImageSection = styled(motion.div)`
  width: 350px;
  height: 350px;
  position: absolute;
  overflow: visible;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;

  @media (min-width: 340px) {
    top: 280px;
    width: 250px;
    height: 250px;
    left: 200px;
  }

  @media (min-width: 780px) {
    width: 250px;
    height: 250px;
    top: 25%;
    left: 50%;
    transform: translate(-80%, -60%);
  }

  @media (min-width: 1080px) {
    width: 350px;
    height: 350px;
    top: 40%;
    left: 50%;
    transform: translate(-80%, -60%);
  }
`;
