"use client";

import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(99, 179, 237, 0.5); }
  50% { box-shadow: 0 0 20px rgba(99, 179, 237, 0.8); }
  100% { box-shadow: 0 0 5px rgba(99, 179, 237, 0.5); }
`;

// Styled Components for Modern Dark Theme
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  color: #e2e8f0;
  overflow-x: hidden;
  @media (min-width: 640px) {
    padding: 3rem 1.5rem;
  }
  @media (min-width: 1024px) {
    padding: 4rem 2rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 80rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  animation: ${fadeIn} 1.2s ease-out;
`;

const Title = styled.h1`
width:100%;
  // flex: 1;
  font-size: 1.5rem;
  font-weight: 900;
  text-align: center;
  background: linear-gradient(90deg, #60a5fa, #a3bffa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.5rem;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  animation: ${glow} 3s infinite ease-in-out;
  position:relative;
  &::before{
    content:'';
    position:absolute;
    top:0;
    left:50%;
    transform:translateX(-50%);
    width:10%;
    height:2px;
    background:linear-gradient(90deg,#60a5fa,#7dd3fc);
    opacity:1;
    transition:all 0.3s ease;
    animation: ${glow} 3s infinite ease-in-out;
  }
  &:hover::before{
    opacity:1;
    width:25%;
  }
  
`;

const Description = styled.p`
width:100vw;
flex: 1 / -1;
  font-size: 1rem;
  text-align: center;
  color: #d1d5db;
  line-height: 1.8;
  max-width: 65rem;
  margin: 0 auto;
  font-weight: 300;
  @media (min-width: 640px) {
    font-size: 1.125rem;
  }
`;

const Section = styled.div`
    width:350px;
    height:350px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(22, 33, 62, 0.85);
  border-radius: 1rem;
  border: 1px solid rgba(99, 179, 237, 0.2);
  backdrop-filter: blur(12px);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  &:hover {
    transform: translateY(-10px);
    cursor: pointer;
    box-shadow: 0 8px 30px rgba(99, 179, 237, 0.3);
    border-color: rgba(99, 179, 237, 0.5);
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #60a5fa, #7dd3fc);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  &:hover::before {
    opacity: 1;
  }
  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #e2e8f0;
  position: relative;
  padding-bottom: 0.5rem;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background: #60a5fa;
    transition: width 0.3s ease;
  }
  ${Section}:hover & {
    &::after {
      width: 100px;
    }
  }
  @media (min-width: 640px) {
    font-size: 1.5rem;
  }
`;

const SectionText = styled.p`
  color: #d1d5db;
  line-height: 1.7;
  font-size: 0.95rem;
  font-weight: 300;
  @media (min-width: 640px) {
    font-size: 1rem;
  }
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  color: #d1d5db;
`;

const ListItem = styled.li`
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
  position: relative;
  padding-left: 1.5rem;
  &:before {
    content: '→';
    position: absolute;
    left: 0;
    color: #60a5fa;
    font-weight: bold;
  }
  @media (min-width: 640px) {
    font-size: 1rem;
  }
`;

const ButtonWrapper = styled.div`
    width:100vw;
  text-align: center;
`;

const Button = styled.a`
  display: inline-block;
  padding: 0.75rem 2rem;
  background: linear-gradient(90deg, #3b82f6, #60a5fa);
  color: #fff;
  font-weight: 600;
  border-radius: 3rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(96, 165, 250, 0.5);
  position: relative;
  overflow: hidden;
  z-index: 1;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.4s ease;
    z-index: -1;
  }
  &:hover {
    background: linear-gradient(90deg, #2563eb, #3b82f6);
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(96, 165, 250, 0.7);
    &:before {
      left: 100%;
    }
  }
  @media (min-width: 640px) {
    padding: 1rem 3rem;
  }
`;

// AboutContent Component
const AboutContent = () => {
  return (
    <Container>
      <ContentWrapper>
        <Title>About RK Webs</Title>
        <Description>
          Welcome to RK Webs, where innovation meets creativity. We are a passionate team dedicated to crafting exceptional web experiences that empower businesses and individuals alike.
        </Description>
        
        <Section>
          <SectionTitle>Our Mission</SectionTitle>
          <SectionText>
            At RK Webs, our mission is to deliver cutting-edge web solutions that drive growth, enhance user experiences, and create lasting impact. We believe in building websites that are not just functional but also visually stunning and user-friendly.
          </SectionText>
        </Section>
        
        <Section>
          <SectionTitle>Our Vision</SectionTitle>
          <SectionText>
            To be a global leader in web development, transforming ideas into digital realities with innovation, reliability, and excellence at the core of everything we do.
          </SectionText>
        </Section>
        
        <Section>
          <SectionTitle>Our Team</SectionTitle>
          <SectionText>
            Our team comprises skilled developers, designers, and strategists who bring diverse expertise to the table. We work collaboratively to ensure every project reflects our commitment to quality and innovation.
          </SectionText>
        </Section>
        
        <Section>
          <SectionTitle>Why Choose Us?</SectionTitle>
          <List>
            <ListItem>Customized web solutions tailored to your needs ?</ListItem>
            <ListItem>Responsive and modern designs powered by the latest technologies ?</ListItem>
            <ListItem>Dedicated support and maintenance for seamless performance ?</ListItem>
            <ListItem>Privacy-focused analytics to optimize user experience ?</ListItem>
          </List>
        </Section>
        
        <ButtonWrapper>
          <Button href="/contact">Get in Touch</Button>
        </ButtonWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default AboutContent;