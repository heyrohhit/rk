"use client"
import Navbar from "./navbar/page";
import { createGlobalStyle } from "styled-components";


const page = () => {
    const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      overflow-x: hidden;
    }
  `
  return (
    <>
    <GlobalStyle />
    <Navbar/>
    </>
  )
}

export default page