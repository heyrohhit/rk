"use client";

import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Loader from "./Components/loader/page";
import ServicePageItem from "./services/ServicePageItem";
import ProjectShowcase from "./projects/ProjectShow";
import {projectsLive,projects} from "./Components/myservices/apis"
import Design from "./Design";



export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoadFinish = () => setLoading(false);

    // Check if document already loaded
    if (document.readyState === "complete") {
      handleLoadFinish();
    } else {
      window.addEventListener("load", handleLoadFinish);
    }

    return () => {
      window.removeEventListener("load", handleLoadFinish);
    };
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Wrapper>
        <Design />
        <LeftTestSection 
        initial={{ opacity: 0,x:"-250px",y:"-250px" }}
        animate={{ opacity: 1,x:"0px",y:"0px" }}
        delay={1}
        transition={{ duration: 1 }}>
            <h3>Hi,</h3>
            <h1>Rk..
            <span>Web Developer..</span></h1>
            <p>Thank you for visiting my portfolio. I'm a passionate developer with a keen eye for detail and a love for creating innovative solutions. Let's connect and explore how we can bring your ideas to life.</p>
            <button>
              <Link href="/contact">Let's Chat</Link>
            </button>
        </LeftTestSection>
        <RightTestSection
        initial={{ opacity: 0,x:"250px",y:"250px" }}
        animate={{ opacity: 1,x:"0px",y:"0px" }}
        delay={1.2}
        transition={{ duration: 1 }}>
            <h3>Hello,</h3>
            <h1>RK.... 
            <span> DCA Trainee..</span></h1>
            <p>Thank you for visiting my portfolio. I'm a passionate designer with a keen eye for detail and a love for creating innovative solutions. Let's connect and explore how we can bring your ideas to life.</p>
            <button>
              <Link href="/contact">Let's Chat</Link>
            </button>
        </RightTestSection>
      </Wrapper>
      <ServicePageItem/>
      <ProjectShowcase apis={projectsLive} showOnly={3} title="Live Projects"/>
        <ProjectShowcase apis={projects} showOnly={3} title="Projects"/>
    </>
  );
}       


const Wrapper = styled.div`
  width: 100vw;
  height: max-content;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap:wrap;
  position: relative;
  overflow-x:hidden;
`;

const LeftTestSection = styled(motion.div)`
width:350px;
height:max-content;
padding:20px;
background:rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)},0.1);
position:absolute;
bottom:320px;
left:0;
z-index:1;
border-radius:20px;
padding:20px;
h3{
    font-size:0.8rem;
    font-family:'Papyrus', 'Comic Sans MS', cursive;
}
h1{
    font-size:2rem;
    span{
    margin-left:10px;
    font-size:1.5rem;
    }
}
p{
    
    font-size:1rem;
}
button{
    font-size:0.8rem;
    margin-top:10px;
    padding:5px 10px;
    border-radius:20px;
    background:transparent;
    border:1px solid #ffcc70;
    cursor:pointer;
    transition:all 0.3s ease-in-out;
    &:hover{
        background:#ffcc70;
        color:#000;
    }
}
@media(min-width:990px){
left:15%;
}
@media(min-width:780px){
top:20%;
}
@media(max-width:660px){
top:15px;
border-radius:0px 20px 20px 0px;
background:transparent;
left:0%;
p{
    font-size:0.8rem;
}
}
`

const RightTestSection = styled(motion.div)`
width:350px;
height:max-content;
padding:20px;
position:absolute;
bottom:100px;
right:-25px;
z-index:1;
border-radius:20px;
padding:20px;
font-size:0.8rem;
background:rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)},0.1);

h3{
    font-size:0.8rem;
    font-family:'Papyrus', 'Comic Sans MS', cursive;
}
h1{
    font-size:2rem;
    span{
    margin-left:10px;
    font-size:1rem;
    color:rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})
    transition:color 0.3s ease-in-out;
    }
}
p{
    font-size:1rem;
}
button{
    font-size:0.8rem;
    margin-top:10px;
    padding:5px 10px;
    border-radius:20px;
    background:transparent;
    border:1px solid #ffcc70;
    cursor:pointer;
    transition:all 0.3s ease-in-out;
    &:hover{
        background:#ffcc70;
        color:#000;
    }
}

@media(min-width:990px){
right:10%;
font-size:1rem;
}
@media(min-width:780px){
top:60%;
}
@media(max-width:660px){
top:65vh;
right:0%;
border-radius:20px 0px 0px 20px;
p{
    font-size:0.8rem;
}
}

`
