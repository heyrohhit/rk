'use client';

import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';
import Background from './objects/Background';
import { useMemo } from 'react';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background-color: black;
  }
  .design {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`;

function Design() {
  // ✅ Background quantity random only once per render
  const backgroundQuantity = useMemo(() => Math.floor(Math.random() * 10) + 1, []);

  return (
    <>
      <GlobalStyle />
      <MainSection className="design">
        <MainImageSection>
          <img
            src="/img/pic02.webp"
            alt="Main visual"
            loading="lazy"
            onError={(e) => {
              const target = e.target;
              if (target instanceof HTMLImageElement && target.parentElement) {
                target.parentElement.style.backgroundColor = 'black';
              }
            }}
          />
        </MainImageSection>
        <Background quantity={backgroundQuantity} />
      </MainSection>
    </>
  );
}

export default Design;

const MainSection = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: linear-gradient(to left, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1)),
    url('/img/pic01.webp') right center/cover no-repeat;
  flex-wrap: wrap;
  overflow-x: hidden;

  @media (max-width: 768px) {
    height: auto;
    min-height: 100vh;
  }
`;

const MainImageSection = styled(motion.div)`
  width: 350px;
  height: 350px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  overflow: visible;

  img {
    width: 100%;
    height: 130%;
    position: absolute;
    top: -20%;
    object-fit: cover;
    z-index: 9;
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;
