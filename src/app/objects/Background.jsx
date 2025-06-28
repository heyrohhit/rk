"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import ThreeDObject from "./3dScenes";

const Background = ({quantity}) => {
  const generateShapes = (count) =>
    Array.from({ length: count }, () => ({
      x: `${Math.floor(Math.random() * 80)}vw`, // Adjusted range for responsiveness
      y: `${Math.floor(Math.random() * 80)}vh`,
      size: Math.floor(Math.random() * 3) + 3, // Slightly larger default size
      color: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`,
      wireframe: Math.random() > 0.5,
      animation: Math.random() > 0.5,
      geometry: ["TorusGeometry", "BoxGeometry", "SphereGeometry"][Math.floor(Math.random() * 3)], // Random geometry
    }));

  const shapes = generateShapes(quantity);

  return (
    <Container>
      {shapes.map((shape, index) => (
        <Shape
          key={index}
          initial={{ opacity: 0, x: "0%", y: "0%" }}
          animate={{ opacity: 1, x: shape.x, y: shape.y }}
          transition={{ duration: 1.5, delay: index * 0.3, ease: "easeOut" }}
        >
          <ThreeDObject
            geometry={shape.geometry}
            material="MeshPhongMaterial"
            color={shape.color}
            size={shape.size}
            wireframe={shape.wireframe}
            animation={shape.animation}
            maxPosition={5} // Reduced for better clustering
          />
        </Shape>
      ))}
    </Container>
  );
};

export default Background;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: transparent;
  overflow: hidden;
  z-index: -1; /* Ensure background stays behind content */
`;

const Shape = styled(motion.div)`
  width: 120px;
  height: 120px;
  position: absolute;
  background: transparent;
  overflow: hidden;
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`;