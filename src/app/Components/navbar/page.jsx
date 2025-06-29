"use client"
import styled from "styled-components"
import { useEffect, useState } from "react";
import Link from 'next/link';
import {usePathname } from 'next/navigation';
import { AiFillHome } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { SiTheodinproject } from "react-icons/si";
import { IoMdContact } from 'react-icons/io';
import { FaDiagramProject } from "react-icons/fa6";
import {motion} from 'framer-motion';



const NavbarSection = () => {
  const [randomBgColor, setRandomBgColor] = useState('');

  useEffect(() => {
    setRandomBgColor(() => {
      const r = Math.floor(Math.random() * 150);
      const g = Math.floor(Math.random() * 150);
      const b = Math.floor(Math.random() * 150);
      return `rgba(${r}, ${g}, ${b}, 0.4)`;
    });
  }, []);
    const pathname = usePathname()
   const navText = [
    {title : "Service", path : "/services", icon: <SiTheodinproject/> },
    {title : "About", path : "/about", icon: <BsFillPersonFill/> },
    {title : "Home", path : "/", icon: <AiFillHome/> },
    {title : "Contact", path : "/contact", icon: <IoMdContact/> },
    {title : "Projects", path : "/projects", icon: <FaDiagramProject/> },
   ]


    return (
       <motion.div
       initial={{opacity:0}}
       animate={{opacity:1}}
       >
         <NavSection style={{background: randomBgColor}}>
            <ListContent>
                {navText.map((text, index) => (
                    <Li key={index}>
                        <StyleLink href={text.path} to={text.path}>
                        <span
                            className={`
                            ${pathname === text.path ? "active" : ""}
                        icon`} >{text.icon}</span>
                        <span
                            className={`
                            ${pathname === text.path ? "textActive" : ""}
                        text`}>{text.title}</span>
                        </StyleLink>
                    </Li>
                ))}
            </ListContent>
        </NavSection>
       </motion.div>
    )
}



export default NavbarSection

const NavSection = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 25px;
    z-index: 999;
    left: 50%;
    backdrop-filter: blur(10px);
    transform: translate(-50%, -30%);
    border-radius: 25px;
    width: 500px;
    height: 75px;
    color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    @media(max-width:780px){
    width:360px;
    padding: 0 10px;
    }
`
const ListContent = styled.ul`
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 20px;
        width: 100%;
        text-transform: capitalize;
    `
const Li = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 20%;
    // background: red;
    position: relative;
    // overflow-x: hidden;
    transition: all 0.3s ease-in-out;
`


const StyleLink = styled(Link)`
        position: relative;
        z-index: 99;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: auto;
        .icon {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            color: var(--foreground);
            text-align: center;
            position: relative;
            z-index: 2;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding-bottom: 20px;

            svg {
                position: relative;
                z-index: 2;
                font-size:15px;
                transition:all linear 0.2s;

            }

            &::after {
                content: "";
                position: absolute;
                width: 80%;
                height: 80%;
                top: 50%;
                left: 50%;
                opacity: 0;
                box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.2);
                border-radius: 50%;
                background-color: #fff;
                z-index: 1;
                transform: translate(-50%, -50%) scale(1);
                transition: all 0.3s ease-in-out;
            }
        }

        .active {
            width: 50px;
            height: 50px;
            color: var(--background);
            opacity: 1;
            background: rgba(${()=>  Math.random() * 255},${()=>  Math.random() * 255},${()=>  Math.random() * 255},${()=>  Math.random() * 0.9});
            color: balck;
            display: flex;
            font-size: 12px;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding-bottom: 0;
            overflow: hidden;
            position: relative;
            z-index: 9;
            box-shadow: 0 8px 10px rgba(0, 0, 0, 0.5);
            transform: translate(0px, -35px);
            text-shadow:1px 1px 5px #000;
            transition: transform 0.3s linear;
            svg{
            font-size:25px;
            color:rgba(${()=>Math.random() * 150},${()=>Math.random() * 150},${()=>Math.random() * 150},0.8);

            }
            &::after {
                opacity: 1;
            }
        }

        .text {
            color: var(--foreground);
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            margin-top: -15px;
            transform: translate(0px, 20px);
            font-size: 12px;
            &::after {
                content: "";
                position: absolute;
                width: 8px;
                height: 8px;
                bottom: -40%;
                border-radius: 50%;
                // background: red;
                z-index: 0;
                left: 40%;
                transform: scale(0);
                // transition: all 0.3s ease-in-out;
            }
        }

        .textActive {
          top:20px;
          left:20px;
            transform: translate(-23px, -30px);
            position: relative;
            font-size: 15px;
            transition: all 0.3s ease-in-out;
            text-shadow:1px 1px 5px #000;
            font-family: 'Papyrus', 'Comic Sans MS', cursive;
            font-weight: 1000;
            font-style: italic;
            color:#fff;
            padding-left:10px;
            &::after {
                content: "";
                position: absolute;
                width: 5px;
                height: 6px;
                bottom: -40%;
                border-radius: 50%;
                background: rgb(${()=>Math.random() * 255},${()=>Math.random() * 255},${()=>Math.random() * 255});
                z-index: 0;
                left: 50%;
                box-shadow: 1px 1px 5px rgba(0, 0, 0, 1);
                transform: scale(1) translate(50%, 0px);
                transition: transform 0.3s ease-in-out;
            }
        }

        `