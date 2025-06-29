"use client";
import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";

const Page = () => {
  const [divs, setDivs] = useState([]);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 50) + 1;
    const newDivs = Array.from({ length: randomNumber }).map((_, index) => ({
      id: index,
      size: Math.floor(Math.random() * 100),
      borderRadius: Math.random() > 0.5 ? "50%" : "10px",
      blur: Math.random() > 0.5 ? "5px" : "2px",
      duration: (Math.random() * 5 + 3) + "s",
      delay: (Math.random() * 2) + "s",
      animationName: `moveUp${index}`
    }));
    setDivs(newDivs);
  }, []);

  return (
    <Wrapper>
      {divs.map((item) => (
        <StyledDiv
          key={item.id}
          size={item.size}
          borderRadius={item.borderRadius}
          blur={item.blur}
          duration={item.duration}
          delay={item.delay}
          animationName={item.animationName}
        />
      ))}
    </Wrapper>
  );
};

export default Page;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  top:0;
  display: flex;
  overflow-x: hidden;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const StyledDiv = styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background: rgba(${()=>  Math.random() * 255},${()=>  Math.random() * 255},${()=>  Math.random() * 255},${()=>  Math.random() * 0.2});
  backdrop-filter: blur(${(props) => props.blur});
  border-radius: ${(props) => props.borderRadius};
  position: relative;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 12px;
  animation: ${(props) => keyframes`
    0% { transform: translateY(100vh); opacity: 0; }
    50% { opacity: 0.5; }
    100% { transform: translateY(-100vh); opacity: 0; }
  `} ${(props) => props.duration} linear infinite;
  animation-delay: ${(props) => props.delay};
`;
