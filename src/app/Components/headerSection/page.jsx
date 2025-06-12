"use client"
import styled from "styled-components"

const HeaderSection = styled.div`
width: 100vw;
height: max-content;
padding: 10px;
background-color: transparent;
position: fixed;
top: 0;
left: 0;
right: 0;
font-family: "Papyrus", "Comic Sans MS", cursive;
text-align: center;
font-size: 0.8rem;
z-index: 99;
backdrop-filter: blur(10px);
`

const page = () => {
  return (
    <HeaderSection>
        <h1>
            Rk.. Portfolio
        </h1>
    </HeaderSection>
  )
}

export default page