"use client";
import styled from "styled-components";

// 🔧 Styled header with sticky behavior
const HeaderSection = styled.div`
  width: 100%;
  height:max-content;
  padding: 10px;
  background-color: rgba(0,0,0,0.2);
  position: sticky;
  top: 0;
  font-family: "Papyrus", "Comic Sans MS", cursive;
  text-align: center;
  font-size: 0.8rem;
  z-index: 9999;
  backdrop-filter: blur(10px);
`;


const Page = () => {
  return (
  
      <HeaderSection>
        <h1>Rk.. Portfolio</h1>
      </HeaderSection>
  );
};

export default Page;
