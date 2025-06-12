"use client"

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaHeart, FaCoffee } from "react-icons/fa";
import Link from "next/link";
import {usePathname } from 'next/navigation';

const FooterContainer = styled(motion.footer)`
  width: 100%;
  color: white;
  padding: 40px 5px 0px 20px;
  text-align: left;
  position: relative;
  bottom: 0;
  left: 0;
  font-size: 0.5rem;
  font-weight: 500;
  box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const SectionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 3.5rem;
  padding-right:15px;
`;

const Section = styled.div`
  flex: 1;
  min-width: 150px;
  max-width: 300px;

  // background:red;
`;

const SectionTitle = styled.h2`
  margin-bottom: 15px;
  font-size:1.5rem;
  color: rgb(${()=>  Math.random() * 255},${()=>  Math.random() * 255},${()=>  Math.random() * 255});
font-family:'Papyrus', 'Comic Sans MS', cursive;
`;

const SectionItem = styled.h2`
  margin: 5px 0;
  color: #f8f9fa;
  cursor:pointer;
  transition:all 0.3s ease-in-out;
  &:hover{
    color: #ffcc70;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 20px;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FooterText = styled.h1`
  margin: 0;
  display:flex;
  justify-content:center;
  color: #f8f9fa;
  font-size:0.7rem;
  break-word:break-all;
font-family:"Poppins";
`;

const IconContainer = styled.span`
  color: #ffcc70;
  margin: 0 5px;
`;

const FooterPage = () => {
  const pathname = usePathname()
  return (
    <FooterContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <SectionsContainer>
        <Section>
          <SectionTitle>Portfolio</SectionTitle>
          <SectionItem>Innovating the web, one pixel at a time.</SectionItem>
        </Section>
        <Section>
          <SectionTitle>Quick Links</SectionTitle>
          <SectionItem><Link href="/">Home</Link></SectionItem>
          <SectionItem><Link href="/services">Services</Link></SectionItem>
          <SectionItem><Link href="/about">About</Link></SectionItem>
          <SectionItem><Link href="/contact">Contact</Link></SectionItem>
        </Section>
        <Section>
          <SectionTitle>Services</SectionTitle>
          <SectionItem><Link href={pathname === "/services" ? "#excelDataManagement" : "/services#excelDataManagement"}>Excel Data Management</Link></SectionItem>
          <SectionItem><Link href={pathname === "/services" ? "#emailScraping" : "/services#emailScraping"}>Email Scraping</Link></SectionItem>
          <SectionItem><Link href={pathname ===  "/services" ? "#socialMediaAdsCampaigns" : "/services#socialMediaAdsCampaigns"}>Social Media Ads Campaigns</Link></SectionItem>
          <SectionItem><Link href={pathname === "/services" ? "#fbManagement" : "/services#fbManagement"}>Fb & Instagram Management</Link></SectionItem>
          <SectionItem><Link href={pathname === "/services" ? "#webDesign" : "/services#webDesign"}>Web Design</Link></SectionItem>
          <SectionItem><Link href={pathname === "/services" ? "#webDevelopment" : "/services#webDevelopment"}>Web Development</Link></SectionItem>
         
        </Section>
        <Section>
          <SectionTitle>Contact Info</SectionTitle>
          <SectionItem ><Link href="https://www.google.com/maps/place/Delhi,+India" target="_blank">Delhi, India</Link></SectionItem>
          <SectionItem><Link href="mailto:rohitfolio8700@gmail.com" target="_blank">rohitfolio8700@gmail.com</Link></SectionItem>
          <SectionItem><Link href="tel:+918700750589" target="_blank">+91 8700750589</Link></SectionItem>
        </Section>
      </SectionsContainer>
      <FooterBottom>
        <FooterText>
          Made with
          <IconContainer>
            <FaHeart />
          </IconContainer>
          and
          <IconContainer>
            <FaCoffee />
          </IconContainer>
        </FooterText>
        <FooterText>© 2025 rk960. All rights reserved. Developed by rk96x0</FooterText>
       
      </FooterBottom>
    </FooterContainer>
  );
};

export default FooterPage;
