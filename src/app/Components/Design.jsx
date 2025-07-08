'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';

function Design() {


  return (
    <MainSection className="w-[100%] h-[100%] overflow-hidden flex justify-center items-center relative flex-wrap sm:min-h-screen">
      <MainImageSection className="z-10 flex justify-center items-center overflow-visible"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}>
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

export default Design;

const MainSection = styled(motion.div)`
  background: linear-gradient(to left, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1)),
    url('/img/pic01.webp') right center/cover no-repeat;
  background-size: cover;
`;

const MainImageSection = styled(motion.div)`
  width: 350px;
  height: 350px;
  position: absolute;
  overflow: visible;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  @media(min-width:340px){
  top:280px;
  width:250px;
  height:250px;
  left:200px;
  }
  @media (min-width:480px){
  }
  @media (min-width: 780px) {
  width:250px;
  height:250px;
    top:25%;
    left:50%;
    transform: translate(-80%, -60%);
  }
  @media(min-width:1080px){
  width:350px;
  height:350px;
  top: 40%;
  left: 50%;
  transform: translate(-80%, -60%);
  }
`;
