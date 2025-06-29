'use client'

import Link from 'next/link'
import Image from 'next/image'
import styled, { createGlobalStyle } from 'styled-components'
import { motion } from 'framer-motion'
import { FaShareAlt, FaWhatsapp, FaInstagram, FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa'
import ThreeDObject from '../objects/3dScenes'

const icons = [
  { icon: <FaWhatsapp />, link: 'https://wa.me/918700750589' },
  { icon: <FaInstagram />, link: 'https://www.instagram.com/rk96x0' },
  { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/rk96x0' },
  { icon: <FaFacebook />, link: 'https://www.facebook.com/rk96x0' },
  { icon: <FaGithub />, link: 'https://github.com/rk96x0' }
]

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  .main {
    width: 100vw;
    height: max-content;
    position: relative;
    overflow: hidden;

    .objects {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 1;
    }
  }

  .combine {
    width: 50vw;
    overflow: hidden;
     .objects {
      position: absolute;
      width: 100vw;
      height: 100vh;
      z-index: 1;
    }
    @media (max-width: 768px) {
      width: 350px;
}
  }
`

export default function Page(props) {
  return (
    <>
      <GlobalStyle />

      <Container className={props.width}>
        <InnerWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <ProfileCard>
            <Header>
              <ProfileImageWrapper>
                <Image
                  src="/img/pic02.webp"
                  alt="Profile"
                  width={150}
                  height={150}
                  priority
                  style={{
                    width: '90%',
                    height: '110%',
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
                <span>Years</span>
              </div>
              <div>
                100+<br />
                <span>Projects</span>
              </div>
            </Stats>

            <Content>
              <Name>Rohit Kumar</Name>
              <Bio>
                <p>
                  "Feel free to reach me through any platform below – Let's build meaningful connections!"
                </p>
                {icons.map((icon, index) => (
                  <span key={index}>
                    <Link href={icon.link} target="_blank" rel="noopener noreferrer">
                      {icon.icon}
                    </Link>
                  </span>
                ))}
              </Bio>

              <StyleLink href="https://instagram.com/rk96x0" target="_blank">
                Let's connect for ideas, growth & future success!
              </StyleLink>

              <ButtonRow>
                <Button>
                  <Link href="https://instagram.com/rk96x0" target="_blank">
                    View Profile
                  </Link>
                </Button>

                <Button
                  onClick={() => {
                    const shareData = {
                      title: 'Rohit Kumar Portfolio',
                      text: 'Check out this amazing profile!',
                      url: window.location.href
                    }
                    if (navigator.share) {
                      navigator.share(shareData).catch(console.error)
                    } else {
                      const url = encodeURIComponent(window.location.href)
                      const text = encodeURIComponent('Check out this amazing profile!')
                      window.open(`https://wa.me/?text=${text}%20${url}`, '_blank')
                    }
                  }}
                >
                  <FaShareAlt style={{ marginRight: '6px' }} />
                  Share Profile
                </Button>
              </ButtonRow>
            </Content>
          </ProfileCard>
        </InnerWrapper>
      </Container>
    </>
  )
}

// Styled Components

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  overflow-x: hidden;
  position: relative;

`

const InnerWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1300px;
  gap: 10px;
  padding: 20px;
  position: relative;
  z-index: 1;

  .profileCard {
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`

const ProfileCard = styled.div`
  max-width: 320px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  position: relative;
  padding: 0;
  max-height: 550px;

  @media (max-width: 450px) {
    max-width: 260px;
    max-height: 400px;
  }
`

const Header = styled.div`
  height: 250px;
  background: linear-gradient(180deg, #ff5e62 0%, #ff9966 100%);
  position: relative;
`

const Corve = styled.div`
  background: #fff;
  border-radius: 50%;
  width: 640px;
  height: 100%;
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
  overflow: hidden;
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
    gap: 120px;
  }

  div {
    text-align: center;
    line-height: 1.3;
  }
`

const Content = styled.div`
  text-align: center;
  position: relative;
  z-index: 5;
  color: #000;

  @media (max-width: 450px) {
    padding: 0 0.8rem 4rem;
  }
`

const Name = styled.h1`
  font-size: 38px;
  font-weight: 700;
  color: #222;

  @media (max-width: 450px) {
    font-size: 18px;
  }
`

const Bio = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  gap: 0.5rem;
  flex-wrap: wrap;
  color: #666;
  line-height: 1.4;

  p {
    font-size: 0.8rem;
    padding: 0 1rem;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    box-shadow: inset 2px 2px 10px rgba(255, 255, 255, 0.8),
      2px 2px 10px rgba(0, 0, 0, 0.8);
    border-radius: 50%;
    background: rgba(
      ${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)},
      0.5
    );
    transform: scale(0.8);
    color: #000;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
    transition: all 0.3s ease-in-out;
  }

  a:hover {
    transform: scale(1.1);
  }

  @media (max-width: 450px) {
    font-size: 16px;
  }
`

const StyleLink = styled(Link)`
  padding: 20px 10px;
  text-decoration: none;
  color: #444;
`

const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  padding: 0 10px;
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
  color: #fff;

  @media (max-width: 450px) {
    font-size: 12px;
  }

  svg {
    margin: 0 6px;
  }

  &:hover {
    color: #000;
    background-color: #e0e0e0;
  }
`
