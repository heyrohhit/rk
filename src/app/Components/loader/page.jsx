'use client'
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  position: fixed;
  inset: 0;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  z-index: 9999;
  flex-direction: column;
`;

const ProgressText = styled.div`
  margin-top: 20px;
  font-size: 2rem;
  color: #3498db;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Papyrus', 'Comic Sans MS', cursive;
  text-align: center;
`;

const ProgressBarContainer = styled.div`
  width: 80%;
  height: 10px;
  background: #333;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 20px;
`;

const ProgressBar = styled.div`
  height: 100%;
  background: #3498db;
  width: ${props => props.$percent}%;
  transition: width 0.1s linear;
`;

export default function GlobalLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;

    if (progress < 100) {
      interval = setInterval(() => {
        setProgress(prev => {
          const next = prev + Math.floor(Math.random() * 5) + 1;
          return next >= 95 ? 95 : next;
        });
      }, 100);
    }

    const handleLoad = () => {
      clearInterval(interval);
      setProgress(100);
      setTimeout(() => setLoading(false), 300);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener('load', handleLoad);
    };
  }, [progress]);

  if (!loading) return null;

  return (
    <LoaderWrapper style={{display: loading ? "flex" : "none",justifyContent: "center",alignItems: "center",zIndex: 9999,width: "100vw",height: "100vh",}}>
      <ProgressText>Loading {progress}%</ProgressText>
      <ProgressBarContainer>
        <ProgressBar $percent={progress} />
      </ProgressBarContainer>
    </LoaderWrapper>
  );
}
