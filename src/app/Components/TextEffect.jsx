'use client';

import React from 'react';
import styled from 'styled-components';

const RohitEffectPage = () => {
  return (
    <FullScreenContainer>
      <TextWrapper>
        {/* 1st - Outline only */}
        <StyledSpan className="outline-text">Rohit Kumar</StyledSpan>

        {/* 2nd - Filled text with masking support */}
        <StyledSpan className="filled-text">Rohit Kumar</StyledSpan>

        {/* 3rd - Outline only */}
        <StyledSpan className="outline-text third-text">Rohit Kumar</StyledSpan>
      </TextWrapper>
    </FullScreenContainer>
  );
};

export default RohitEffectPage;

// Styled Components

const FullScreenContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: transparent;
//   z-index: -1;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  line-height: -10;
`;

const StyledSpan = styled.span`
  font-size: calc(10vw + 20px);
  font-weight: 900;
  letter-spacing: 2px;
  position: relative;
  z-index: 9999;
  color: transparent;
    // background:red;
  &.outline-text {
  background: transparent;
    -webkit-text-stroke: 1.5px #ffffff;
    color: transparent;
    z-index: -1;
  }

  &.filled-text {
    position:relative;
  z-index: 1;
    color: white;
  }

  &.third-text {
    position:relative;
  z-index: -1;
    color: transparent;
  }
`;
