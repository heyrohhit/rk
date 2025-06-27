"use client";

import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";
import ThreeDObject from "./objects/3dScenes";

export default function Design({ quantity }) {
  // Generate random shape configurations based on quantity
  const generateShapes = (count) =>
    Array.from({ length: count }, () => ({
      x: `${Math.floor(Math.random() * 600 - 280)}px`, // Random x between -300px and 300px
      y: `${Math.floor(Math.random() * 200 - 300)}px`, // Random y between -300px and 300px
      size: Math.floor(Math.random() * 2) + 1, // Random size between 2 and 4
      color: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`,
      wireframe: true,
      animation: Math.random() > 0.5,
    }));

  const shapes = generateShapes(quantity);

  const GlobalStyle = createGlobalStyle`
    .design{
      margin: 0;
      padding: 0;
      overflow-y: hidden;
    }
  `

  return (
    <>
      <GlobalStyle />
      <MainSection className="design">
        <MainImageSection>
          <img src="/img/pic02.webp" alt="pic02" />
        </MainImageSection>
        {shapes.map((shape, index) => (
          <Shape
            key={index}
            initial={{ opacity: 0, x: "0%", y: "0%" }}
            animate={{ opacity: 1, x: shape.x, y: shape.y }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <ThreeDObject
              geometry="TorusGeometry"
              material="MeshPhongMaterial"
              color={shape.color}
              size={shape.size}
              wireframe={shape.wireframe}
              animation={shape.animation}
            />
          </Shape>
        ))}
      </MainSection>
    </>
  );
}

const MainSection = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: linear-gradient(to left, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1)),
    url("/img/pic01.webp") right center/cover no-repeat;
  flex-wrap: wrap-reverse;
  overflow-y: hidden!important;
`;

const MainImageSection = styled(motion.div)`
  width: 350px;
  height: 350px;
  position: absolute;
  top: 35%;
  z-index: 1;
  display: flex;
  overflow-x: visible;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  z-index: 99;

  img {
    width: 100%;
    height: 130%;
    top: -20%;
    overflow: visible;
    position: absolute;
    z-index: 9;
  }

  @media (max-width: 780px) {
    width: 250px;
    height: 250px;
    top: 30%;
  }
`;

const Shape = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: transparent;
  position: absolute;
  overflow: hidden;
`;