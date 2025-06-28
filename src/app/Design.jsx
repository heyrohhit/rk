"use client";

import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";
import ThreeDObject from "./objects/3dScenes";

export default function Design({ quantity = 5 }) {
  const generateShapes = (count) =>
    Array.from({ length: count }, () => ({
      x: `${Math.floor(Math.random() * 600 - 250)}px`,
      y: `${Math.floor(Math.random() * 100 - 300)}px`,
      size: Math.floor(Math.random() * 3) + 2,
      color: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`,
      wireframe: Math.random() > 0.5,
      animation: Math.random() > 0.5,
    }));

  const shapes = generateShapes(quantity);

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

  return (
    <>
      <GlobalStyle />
      <MainSection className="design">
        <MainImageSection>
          <img
            src="/img/pic02.webp"
            alt="Main visual"
            onError={(e) => {
              e.target.parentElement.style.backgroundColor = "black";
            }}
          />
        </MainImageSection>
        {shapes.map((shape, index) => (
          <Shape
            key={index}
            initial={{ opacity: 0, x: "0%", y: "0%" }}
            animate={{ opacity: 1, x: shape.x, y: shape.y }}
            transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
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
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: linear-gradient(to left, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1)),
    url("/img/pic01.webp") right center/cover no-repeat;
  flex-wrap: wrap;
  overflow-x: hidden;

  @media (max-width: 768px) {
    overflow-x: hidden;
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

const Shape = styled(motion.div)`
  width: 150px;
  height: 150px;
  background: rgba(0,0,0,0);
  position: absolute;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;