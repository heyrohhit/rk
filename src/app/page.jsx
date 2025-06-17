'use client'
import Link from 'next/link'
import styled, { keyframes } from 'styled-components'
import Image from 'next/image'
import { FaShareAlt } from 'react-icons/fa'
import {motion} from 'framer-motion'

// 🔥 KEYFRAMES for animated gradient-like color
const colorShift = keyframes`
  0% { color: #ff9966; }
  25% { color: #fcb045; }
  50% { color: #f45c43; }
  75% { color: #ec008c; }
  100% { color: #ff9966; }
`

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.9) 100%
    ),
    url('/img/pic01.png');
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
  padding: 2rem;
  overflow-x:hidden;
  position:relative;
 
`

const InnerWrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1300px;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

const ContentContainer = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 500px;
  color: white;
  text-align: left;

  h1 {
    font-size: 2.7rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1.2rem;
    color: #ddd;
  }

  @media (max-width: 768px) {
    text-align: center;

    h1 {
      font-size: 2rem;
    }
  }
`

// 🌈 This span animates through colors
const AnimatedSpan = styled.span`
  animation: ${colorShift} 5s linear infinite;
  font-weight: bold;
`

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;

  button {
    background: transparent;
    border: 2px solid white;
    padding: 0.6rem 1.2rem;
    border-radius: 10px;
    font-size: 1rem;
    color: white;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background: white;
      color: black;
    }
  }
`

const StyleLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const ProfileCard = styled.div`
  max-width: 360px;
  width: 100%;
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  position: relative;
  max-height: 550px;
@media (max-width: 450px) {
  max-width: 260px;
  max-height: 400px;
}
`

const Header = styled.div`
  height: 450px;
  background: linear-gradient(180deg, #ff5e62 0%, #ff9966 100%);
  position: relative;
`

const Corve = styled.div`
  background: #fff;
  border-radius: 50%;
  width: 640px;
  height: 440px;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
`

const ProfileImageWrapper = styled.div`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 200px;
  z-index: 1;
  border-radius: 50%;
    @media (max-width: 450px) {
    top: 10%;
      width: 140px;
      height: 140px;
    }
`

const Stats = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding-top: 50px;
  font-size: 14px;
  font-weight: 600;
  color: #555;
  position: absolute;
  z-index: 5;
  top: 26%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 100px;

  @media (max-width: 450px) {
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap:120px;
  }

  div {
    text-align: center;
    line-height: 1.3;
  }
`

const Content = styled.div`
  padding: 16px;
  text-align: center;
  position: relative;
  z-index: 5;

  @media (max-width: 450px) {
    top: 0px;
    padding: 0 0.8rem 5rem;
  }
`

const Name = styled.h1`
  font-size: 38px;
  font-weight: 700;
  color: #222;
  margin-top: -180px;
  
  @media (max-width: 450px) {
    font-size: 24px;
    margin-top: -100%;
  }
`

const Bio = styled.p`
  font-size: 18px;
  color: #666;
  margin: 0 0 2px;
  line-height: 1.4;
  @media (max-width: 450px) {
    font-size: 13px;
  }
`

const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-top: 16px;
  margin-bottom: 26px;
  @media (max-width: 450px) {
    gap: 16px;
  }
`

const Button = styled.button`
  flex: 1;
  background: #000;
  border: none;
  padding: 10px 0;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 450px) {
    font-size: 12px;
  }
  svg {
    margin:0 6px;
  }

  &:hover {
    background-color: #e0e0e0;
  }
`

export default function Page() {
  return (
    <Container>
      <InnerWrapper 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:1}}
      delay={0.1}
      >
        <ContentContainer>
          <h1>
            Transforming Ideas into Stunning
            <AnimatedSpan> Digital Realities</AnimatedSpan>
          </h1>
          <p>
          Driven by creativity and precision in web design, branding, and UI/UX. Let’s blend strategy with style to craft digital experiences that <AnimatedSpan>truly stand out</AnimatedSpan>—together, we
            <AnimatedSpan> build brilliance.</AnimatedSpan>
          </p>
          <ButtonsWrapper>
            <button>
              <StyleLink href="/contact">
                Get in <AnimatedSpan>Touch</AnimatedSpan>
              </StyleLink>
            </button>
            <button>
              <StyleLink href="/projects#showProjects">
                View My <AnimatedSpan>Work</AnimatedSpan>
              </StyleLink>
            </button>
          </ButtonsWrapper>
        </ContentContainer>

        <ProfileCard>
          <Header>
            <ProfileImageWrapper>
              <Image
                src="/img/pic02.png"
                alt="Profile"
                width={100}
                height={100}
                priority={true}
                style={{
                  width: '120%',
                  height: '140%',
                  position: 'absolute',
                  bottom: '-20px',
                  left: '50%',
                  transform: 'translateX(-50%)'
                }}
              />
            </ProfileImageWrapper>
          </Header>
          <Corve />
          <Stats>
            <div>
              3+<br />
              <span style={{ fontWeight: 400 }}>Years</span>
            </div>
            <div>
              100+<br />
              <span style={{ fontWeight: 400 }}>Projects</span>
            </div>
          </Stats>
          <Content>
            <Name>Rohit Kumar</Name>
            <Bio>Crafting bold brands and stunning UI/UX—let’s build something unforgettable together!</Bio>
            <StyleLink href="https://behance.net/anlygl" target="_blank">
              behance.net/anlygl
            </StyleLink>
            <ButtonRow>
              <Button>Edit Profile</Button>
              <Button>
                Share Profile <FaShareAlt />
              </Button>
            </ButtonRow>
          </Content>
        </ProfileCard>
      </InnerWrapper>
    </Container>
  )
}
