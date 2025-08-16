import { useState } from "react";
import styled from "styled-components";

const whyLearnItems = [
  {
    question: "Student-friendly courses designed for beginners and advanced learners",
    answer: "Our courses are structured to guide you step-by-step — from basic concepts to advanced applications — making them perfect for learners at any level.",
  },
  {
    question: "Project-based learning to build real-world skills and confidence",
    answer: "You'll work on hands-on projects that mimic real-world scenarios, helping you apply what you learn and build a strong portfolio.",
  },
  {
    question: "Responsive support and guidance from experienced mentors",
    answer: "We provide active mentor support through chats, email, and live sessions to help you overcome challenges and stay on track.",
  },
  {
    question: "Up-to-date content aligned with industry tools and technologies",
    answer: "Our content is regularly updated to include the latest tools, frameworks, and best practices used in the industry.",
  },
];

function WhyLearnWithUs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  const Section = styled.div`
      width:350px;
      height:350px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
    background: transparent;
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


  return (
    <Section>
      <SectionTitle>Why Learn with Us?</SectionTitle>
      <List>
        {whyLearnItems.map((item, index) => (
          <div key={index} style={{ marginBottom: "1rem" }}>
            <ListItem
              style={{ cursor: "pointer", fontWeight: "bold" }}
              onClick={() => toggleItem(index)}
            >
              {item.question}
            </ListItem>
            {openIndex === index && (
              <p style={{ marginTop: "0.5rem", paddingLeft: "1rem", color: "#666" }}>
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </List>
    </Section>
  );
}

export default WhyLearnWithUs;