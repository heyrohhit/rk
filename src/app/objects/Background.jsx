"use client";
import { motion } from "framer-motion";
import styled from "styled-components";
import ThreeDObject from './3dScenes';

const Background = ({ quantity }) => {
  const allowedGeometries = ["TorusGeometry", "TorusKnotGeometry"];

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const getMaxPosition = () => {
    return Math.random() * 6;
  }

  const generateShapes = (count) =>
    Array.from({ length: count }, () => {
      const geometry = ["TorusGeometry", "TorusKnotGeometry",][Math.floor(Math.random() * 2)];
      return {
        x: `${Math.floor(Math.random() * 80-10)}vw`,
        y: `${Math.floor(Math.random() * 80-10)}vh`,
        size: Math.floor(Math.random() * 3) + 3,
        color: getRandomColor(),
        wireframe: Math.random() > 0.5,
        animation: Math.random() > 0.5,
        geometry: geometry,
      };
    })

  const shapes = generateShapes(quantity || 2);

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      position: "absolute",
      zIndex: Math.random() > 0.5 ? 1 : -1,
      backgroundColor: "transparent",
      overflow: "hidden"
    }}>
      {shapes.map((shape, index) => {
        // ✅ Geometry check: render only allowed geometries
        if (!allowedGeometries.includes(shape.geometry)) {
          return null;
        }

        return (
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
              maxPosition={getMaxPosition}
            />
          </Shape>
        );
      })}
    </div>
  )
}

export default Background;

const Shape = styled(motion.span)`
  width: 100px;
  height: 100px;
  position: absolute;
  z-index:9999;
`;
