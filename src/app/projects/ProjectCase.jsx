"use client";
import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";
import Link from 'next/link';

// 🟡 Styled Components
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    overflow-x:hidden;
  }
`;

const Container = styled.div`
  padding: 60px 10px;
  overflow-x: hidden;
  width: 100%;
  font-family: 'Poppins', sans-serif;
  position: relative;
  z-index: 1;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: #fff;
  font-weight: 600;
  text-align: center;
  font-family: 'Poppins', cursive;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ProjectList = styled.div`
  display: grid;
  gap: 60px;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
`;

const ProjectItem = styled.div`
  display: flex;
  flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
  gap: 40px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

// IframeWrapper with conditional styling
const IframeWrapper = styled.div`
  width: ${({ $isLarge }) => ($isLarge ? "500px" : "350px")};
  height: ${({ $isLarge }) => ($isLarge ? "400px" : "300px")};
  overflow: hidden;
  padding: 20px;
  border-radius: 15px;
  position: relative;
`;

const IframeImage = styled.iframe`
  width: ${({ $isLarge }) => ($isLarge ? "200%" : "260%")};
  height: ${({ $isLarge }) => ($isLarge ? "200%" : "250%")};
  border: none;
  transform: ${({ $isLarge }) => ($isLarge ? "scale(0.6)" : "scale(0.4)")};
  transform-origin: top left;
  pointer-events: none;
  user-select: none;
  position: absolute;
  top: 0;
  left: 0;

  @media (max-width: 780px) {
    width: ${({ $isLarge }) => ($isLarge ? "300%" : "340%")};
    height: ${({ $isLarge }) => ($isLarge ? "300%" : "300%")};
    transform: ${({ $isLarge }) => ($isLarge ? "scale(0.4)" : "scale(0.3)")};
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #ccc;

  span {
    font-size: 0.8rem;
    text-align: right;
    font-family: 'Poppins', cursive;
    font-weight: 500;
    color: #fff;
  }

  h3 {
    font-size: 1.4rem;
    color: #fff;
    text-transform: uppercase;
    font-family: 'Poppins', cursive;
    font-weight: 500;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    color: #aaa;
  }

  a {
    margin-top: 10px;
    font-size: 0.95rem;
    background: #ffffff;
    color: #000000;
    padding: 10px 20px;
    border-radius: 6px;
    font-weight: 500;
    width: fit-content;
    transition: 0.3s ease;

    &:hover {
      background: #ddd;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    align-items: center;
    justify-content: center;
  }
`;

export default function ProjectShowcase({ apis = [], showOnly = 0, title }) {
  const displayedProjects = showOnly > 0 ? apis.slice(0, showOnly) : apis;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <GlobalStyle />
      <Container>
        <Title>{title}</Title>
        <ProjectList>
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectItem $reverse={index % 2 !== 0}>
                <IframeWrapper>
                  <IframeImage
                    src={project.image}
                    alt={project.title}
                  />
                </IframeWrapper>
                <Content>
                  <span>Date: {project.date}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <Link
                    href={project.image}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </Link>
                </Content>
              </ProjectItem>
            </motion.div>
          ))}
        </ProjectList>
      </Container>
    </motion.div>
  );
}
