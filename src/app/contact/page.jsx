
"use client"
import styled from 'styled-components'
import ContactContext from './ContactContext'
import ContactForm from './ContactForm'
import Background from '../objects/Background'

const page = () => {
  return (
    <Wrapper>
      <Background/>
       {/* <Background quantity={2}/> */}
        <TopContent>
        <h2>Get in touch</h2>
        <p>"Reach out anytime – I'm just a message away from collaborating, networking, and creating something great together!"</p>
        </TopContent>
    <ContactContext width="combine"/>
    <ContactForm width="combine"/>
    </Wrapper>
  )
}

export default page

const Wrapper = styled.div`
width:100vw;
  // min-height: 50vh;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  background: #000;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.9) 100%
    ),
    url('/img/pic01.webp');
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
  overflow-x: hidden;
  position: relative;
  z-index: 1;
`

const Shapes = styled.div`
position: absolute;
width:100%;
height:100%;
z-index: 99;
`
const TopContent = styled.div`
padding: 30px;
width:100%;
text-align: center;
color: #fff;
p{
color:#aaa;
}
@media (max-width: 768px) {
    width:100%;
}
`