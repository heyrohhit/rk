"use client";

import React from 'react';
import styled, { keyframes } from 'styled-components';

// Education Data
const education = [
  {
    year: "2018 - 2019",
    degree: "Diploma in Computer Application",
    institution: "RIIT INFOTECH PVT. LTD.",
    description: "Computer Application",
    grade: "A Grade",
    models: "./img/pic01.webp",
  },
  {
    year: "2017 - 2021",
    degree: "Bachelor of Arts (Programme)",
    institution: "Delhi University",
    description: "B.A Programme",
    grade: "1st Division",
    models: "./img/pic03.webp",
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

// Styled Components
const EducationSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem 1rem;
  max-width: 80rem;
  width: 100%;
  margin: 0 auto;
  animation: ${fadeIn} 1s ease-out;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  text-align: center;
  background: linear-gradient(90deg, #60a5fa, #a3bffa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: #60a5fa;
  }
`;

const Timeline = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(to bottom, #60a5fa, #3b82f6);
    border-radius: 2px;
    left: 0.75rem; /* Mobile - left side line */
  }

  @media (min-width: 768px) {
    &:before {
      left: 50%; /* Tablet & up - center line */
      transform: translateX(-50%);
    }
  }
`;

const TimelineItem = styled.div`
  background: transparent;
  border: 1px solid rgba(99, 179, 237, 0.2);
  border-radius: 0.75rem;
  padding: 1rem;
  position: relative;
  overflow: hidden;
  animation: ${slideIn} 0.8s ease-out forwards;
  animation-delay: ${({ index }) => index * 0.2}s;
  opacity: 0;
  cursor: pointer;
  z-index: 1;
  &::before {
    content: '';
    position: absolute;
    top: 1rem;
    left: -0.95rem;
    width: 12px;
    height: 12px;
    background: #60a5fa;
    border: 2px solid #0d1117;
    border-radius: 50%;
    z-index: 1;
  }

  @media (min-width: 768px) {
    max-width: 45%;
    margin-left: ${({ index }) => (index % 2 === 0 ? 'auto' : '0')};
    margin-right: ${({ index }) => (index % 2 === 0 ? '0' : 'auto')};

    &::before {
      left: ${({ index }) => (index % 2 === 0 ? 'auto' : '-0.95rem')};
      right: ${({ index }) => (index % 2 === 0 ? '-0.95rem' : 'auto')};
    }
  }
    @media (max-width: 768px) {
    width: 350px;
    height: max-content;
    background: rgba(99, 179, 237, 0.2);
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  align-items: center;

  @media (max-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const TextContent = styled.div`
  flex: 1;
`;

const EducationYear = styled.div`
  font-size: 0.9rem;
  color: #60a5fa;
  font-weight: 500;
  margin-bottom: 0.25rem;
`;

const EducationTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #e2e8f0;
  margin-bottom: 0.25rem;
`;

const EducationText = styled.p`
  color: #d1d5db;
  font-size: 0.85rem;
  line-height: 1.5;
`;

const EducationImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 0.5rem;
  transform: scale(0.9);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1);
  }

  @media (min-width: 480px) {
    width: 100px;
    height: 120px;
    cursor: pointer;
  }

  @media (min-width: 640px) {
    width: 120px;
    height: auto;
  }

  @media (min-width: 768px) {
    width: 150px;
  }

  @media (min-width: 1024px) {
    width: 180px;
  }
`;

// Final Component
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
