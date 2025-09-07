"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useTheme } from "next-themes";

export default function Design() {
  const { theme } = useTheme("dark");
  const [mounted, setMounted] = useState(false);

  // Hydration mismatch avoid करने के लिए
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <MainSection
      className={theme === "light" ? "darkMode" : "lightMode"} // 👈 यहाँ class pass कर दी
      themeMode={theme}
    >
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
              target.parentElement.style.backgroundColor = "black";
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
