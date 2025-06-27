"use client";

import React from 'react';
import styled, { keyframes } from 'styled-components';

// Education Data with updated .webp image paths
const education = [
    {
        year: "2018 - 2019",
        degree: "Diploma in Computer Application",
        institution: "RIIT INFOTECH PVT. LTD.",
        description: "Computer Application",
        grade: "A Grade",
        models: "./img/pic01.webp"
      },
  {
    year: "2017 - 2021",
    degree: "Bachelor of Arts (Programme)",
    institution: "Delhi University",
    description: "B.A Programme",
    grade: "1st Division",
    models: "./img/pic03.webp"
  },
];

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

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(99, 179, 237, 0.5); }
  50% { box-shadow: 0 0 20px rgba(99, 179, 237, 0.8); }
  100% { box-shadow: 0 0 5px rgba(99, 179, 237, 0.18); }
`;

// Styled Components for Education Section
const EducationSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem 1rem;
  backdrop-filter: blur(15px);
  position: relative;
  animation: ${fadeIn} 1.5s ease-out;
  margin: 0 auto;
  max-width: 80rem;
  width: 100%;
  box-sizing: border-box;
  @media (min-width: 480px) {
    padding: 1.75rem 1.25rem;
    gap: 1.75rem;
  }
  @media (min-width: 640px) {
    padding: 2rem 1.5rem;
    gap: 2rem;
  }
  @media (min-width: 768px) {
    padding: 2.5rem 2rem;
  }
  @media (min-width: 1024px) {
    padding: 3rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #e2e8f0;
  text-align: center;
  position: relative;
  padding-bottom: 0.75rem;
  background: linear-gradient(90deg, #60a5fa, #a3bffa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: #60a5fa;
    transition: width 0.3s ease;
  }
  @media (min-width: 480px) {
    font-size: 1.375rem;
  }
  @media (min-width: 640px) {
    font-size: 1.5rem;
  }
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Timeline = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  &:before {
    content: '';
    position: absolute;
    left: 0.75rem;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(to bottom, #60a5fa, #3b82f6);
    border-radius: 2px;
  }
  @media (min-width: 480px) {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width:100%;
    gap: 1.75rem;
    &:before {
      left: 1rem;
      width: 4px;
    }
  }
  @media (min-width: 640px) {
  flex-direction: column;
    gap: 2rem;
    &:before {
      left: 1.5rem;
    }
  }
  @media (min-width: 990px) {
  
    &:before {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const TimelineItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem;
  background: rgba(45, 55, 72, 0.8);
  border-radius: 0.75rem;
  border: 1px solid rgba(99, 179, 237, 0.2);
  backdrop-filter: blur(12px);
  position: relative;
  animation: ${slideIn} 0.8s ease-out ${props => props.index * 0.2}s;
  animation-fill-mode: backwards;
  &:before {
    content: '';
    position: absolute;
    left: -1.15rem;
    top: 1rem;
    width: 10px;
    height: 10px;
    background: #60a5fa;
    border-radius: 50%;
    border: 2px solid #0d1117;
    z-index: 1;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0 6px 20px rgba(99, 179, 237, 0.4);
    border-color: rgba(99, 179, 237, 0.5);
  }
  @media (min-width: 480px) {
  width:90%;
  align-items: center;
  justify-content: center;
    padding: 1.25rem;
    margin-left:3rem;
    &:before {
      left: -1.35rem;
      top: 1.25rem;
      width: 12px;
      height: 12px;
    }
  }
  @media (min-width: 640px) {
  max-width:80%;
    padding: 1.5rem;
    &:before {
      left: -1.85rem;
      top: 1.5rem;
      width: 16px;
      height: 16px;
      border: 3px solid #0d1117;
    }
  }
  @media (min-width: 768px) {
    max-width: 48%;
    margin-left: ${props => (props.index % 2 === 0 ? 'auto' : '0')};
    margin-right: ${props => (props.index % 2 === 0 ? '0' : 'auto')};
    &:before {
      left: ${props => (props.index % 2 === 0 ? 'auto' : '-1.85rem')};
      right: ${props => (props.index % 2 === 0 ? '-1.85rem' : 'auto')};
    }
  }
  @media (min-width: 1024px) {
    max-width: 45%;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  @media (min-width: 480px) {
    gap: 1rem;
  }
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    gap: 1.25rem;
  }
  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`;

const TextContent = styled.div`
  flex: 1;
  @media (min-width: 640px) {
    max-width: 65%;
  }
  @media (min-width: 768px) {
    max-width: 60%;
  }
`;

const EducationTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #e2e8f0;
  margin-bottom: 0.5rem;
  @media (min-width: 480px) {
    font-size: 1.0625rem;
  }
  @media (min-width: 640px) {
    font-size: 1.125rem;
  }
`;

const EducationYear = styled.div`
  font-size: 0.85rem;
  color: #60a5fa;
  font-weight: 500;
  margin-bottom: 0.5rem;
  @media (min-width: 480px) {
    font-size: 0.9rem;
  }
  @media (min-width: 640px) {
    font-size: 0.95rem;
  }
`;

const EducationText = styled.p`
  color: #d1d5db;
  font-size: 0.85rem;
  line-height: 1.6;
  font-weight: 300;
  @media (min-width: 480px) {
    font-size: 0.875rem;
  }
  @media (min-width: 640px) {
    font-size: 0.9rem;
  }
`;

const EducationImage = styled.img`
  width: 100%;
  max-width: 100px;
  height: auto;
  border-radius: 0.5rem;
  object-fit: cover;
  transition: transform 0.3s ease;
  @media (min-width: 480px) {
    max-width: 120px;
  }
  @media (min-width: 640px) {
    max-width: 150px;
  }
  @media (min-width: 768px) {
    max-width: 180px;
  }
  @media (min-width: 1024px) {
    max-width: 200px;
  }
`;

// EducationSection Component
const EducationSectionComponent = () => {
  return (
    <EducationSection>
      <SectionTitle>Other Details</SectionTitle>
      <Timeline>
        {education.map((edu, index) => (
          <TimelineItem key={index} index={index}>
            <ContentWrapper>
              <TextContent>
                <EducationYear>{edu.year}</EducationYear>
                <EducationTitle>{edu.degree}</EducationTitle>
                <EducationText><strong>Institution:</strong> {edu.institution}</EducationText>
                <EducationText><strong>Description:</strong> {edu.description}</EducationText>
                <EducationText><strong>Grade:</strong> {edu.grade}</EducationText>
              </TextContent>
              {edu.models && (
                <EducationImage src={edu.models} alt={`${edu.degree} certificate`} />
              )}
            </ContentWrapper>
          </TimelineItem>
        ))}
      </Timeline>
    </EducationSection>
  );
};

export default EducationSectionComponent;