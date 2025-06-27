"use client";

import styled,{createGlobalStyle} from "styled-components";
import { motion } from "framer-motion";
import ThreeDObject from "./objects/3dScenes";

export default function Design() {
 
  const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`;

  return (
    <>
        <GlobalStyle/>
        <MainSection>
          <MainImageSection>
            <img src="/img/pic02.webp" alt="pic02" />
          </MainImageSection>
          <ShapeOne 
          initial={{ opacity: 0,x:"0%",y:"0%"}}
          animate={{ opacity: 1,x:"-250px",y:"-250px" }}
          delay={1.5}
          transition={{ duration: 1 }}
          >
         <ThreeDObject 
        geometry="TorusGeometry"
        material="MeshPhongMaterial"
        color={`rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`}  
        size={Math.floor(Math.random() * 2)+4}
        top="0%"
        left="0%"
        wireframe
          // Random animation for object 1
      />
          </ShapeOne>
          <ShapeTwo 
          initial={{ opacity: 0,x:"0%",y:"0%"}}
          animate={{ opacity: 1,x:"-100px",y:"-180px" }}
          delay={1.5}
          transition={{ duration: 1 }}
          >
            <ThreeDObject 
        geometry="TorusGeometry"
        material="MeshPhongMaterial"
        color={`rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`}  
        size={Math.floor(Math.random() * 2)+4}
        top="0%"
        left="0%"
        wireframe
          // Random animation for object 1
      />
          </ShapeTwo>
          <ShapeThree 
          initial={{ opacity: 0,x:"0%",y:"0%"}}
          animate={{ opacity: 1,x:"50px",y:"-300px" }}
          delay={1.5}
          transition={{ duration: 1 }}
          >
       <ThreeDObject 
        geometry="TorusGeometry"
        material="MeshPhongMaterial"
        color={`rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`}  
        size={Math.floor(Math.random() * 2)+2}
        top="0%"
        left="0%"
        wireframe
          // Random animation for object 1
      />
          </ShapeThree>
          <ShapeFour 
          initial={{ opacity: 0,x:"0%",y:"0%"}}
          animate={{ opacity: 1,x:"150px",y:"-180px" }}
          delay={1.5}
          transition={{ duration: 1 }}
          >
       <ThreeDObject 
        geometry="TorusGeometry"
        material="MeshPhongMaterial"
        color={`rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`}  
        size={Math.floor(Math.random() * 2)+3}
        top="0%"
        left="0%"
        wireframe
          // Random animation for object 1
      />
          </ShapeFour>
          <ShapeFive
          initial={{ opacity: 0,x:"0%",y:"0%"}}
          animate={{ opacity: 1,x:"300px",y:"-260px" }}
          delay={1.5}
          transition={{ duration: 1 }}>
       <ThreeDObject 
        geometry="TorusGeometry"
        material="MeshPhongMaterial"
        color={`rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)},0.8)`}  
        size={Math.floor(Math.random() * 2)+3}
        top="0%"
        left="0%"
        wireframe
          // Random animation for object 1
      />
          </ShapeFive>
        </MainSection>
        </>
  );
}

const MainSection = styled(motion.div)`
  width:100%;
  height:100vh;
  display:flex;
  overflow-x:hidden;
  justify-content: center;
  align-items: center;
  position:relative;
  background:linear-gradient(to left,rgba(0,0,0,0.6),rgba(0,0,0,1)),url("/img/pic01.webp") right center/cover no-repeat;
  flax-wrap:wrap-revers;
`

const MainImageSection = styled(motion.div)`
  width:350px;
  height:350px;
  position:absolute;
  top:35%;
  z-index:1;
  display:flex;
  overflow:visible;

  background:rgba(0,0,0,0.3);
  border-radius:50%;
  justify-content: center;
  align-items: center;
  z-index:99;
  img{
  width:100%;
  height:130%;
  top:-20%;
  position:absolute;
  z-index:9;

  }
  @media(max-width:780px){
    width:250px;
    height:250px;
    top:30%;
  }
`
const ShapeOne = styled(motion.div)`
  width:${Math.floor(Math.random() * 200)+100}px;
  height:${Math.floor(Math.random() * 200)+100}px;
  position:absolute;
  overflow:hidden;
`
const ShapeTwo = styled(motion.div)`
  width:${Math.floor(Math.random() * 160)+100}px;
  height:${Math.floor(Math.random() * 160)+100}px;
  position:absolute;
  overflow:hidden;
`
const ShapeThree = styled(motion.div)`
  width:${Math.floor(Math.random() * 120)+100}px;
  height:${Math.floor(Math.random() * 120)+100}px;
  position:absolute;
  overflow:hidden;
`
const ShapeFour = styled(motion.div)`
  width:${Math.floor(Math.random() * 80)+100}px;
  height:${Math.floor(Math.random() * 80)+100}px;
  position:absolute;
  overflow:hidden;
`

const ShapeFive = styled(motion.div)`
  width:${Math.floor(Math.random() * 40)+100}px;
  height:${Math.floor(Math.random() * 40)+100}px;
  position:absolute;
  overflow:hidden;
`
