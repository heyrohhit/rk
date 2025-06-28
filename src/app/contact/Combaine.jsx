"use client"
import styled from 'styled-components'
import ContactContext from './ContactContext'
import ContactForm from './ContactForm'
import ThreeDObject from '../objects/3dScenes'

const Combaine = () => {
  return (
    <Wrapper>
       <ThreeDObject 
       geometry="TorusGeometry"
       material="MeshPhongMaterial"
       color="red"
       size={2}
       wireframe={true}
       animation={Math.random() > 0.5}
       position={[0, 0, 0]}
       rotation={[0, 0, 0]}
       scale={[1, 1, 1]}
       />
        <TopContent>
        <h2>Get in touch</h2>
        <p>"Reach out anytime – I'm just a message away from collaborating, networking, and creating something great together!"</p>
        </TopContent>
    <ContactContext width="100vw"/>
    <ContactForm width="100vw"/>
    </Wrapper>
  )
}

export default Combaine

const Wrapper = styled.div`
width:100vw;
  min-height: 50vh;
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