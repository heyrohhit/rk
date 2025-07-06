"use client";
import { useEffect, useState } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiFillHome } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { SiTheodinproject } from "react-icons/si";
import { IoMdContact } from 'react-icons/io';
import { FaDiagramProject } from "react-icons/fa6";
import { motion } from 'framer-motion';

const NavbarSection = () => {
  const [randomBgColor, setRandomBgColor] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const r = Math.floor(Math.random() * 150);
    const g = Math.floor(Math.random() * 150);
    const b = Math.floor(Math.random() * 150);
    setRandomBgColor(`rgba(${r}, ${g}, ${b}, 0.4)`);
  }, []);

  const navText = [
    { title: "Service", path: "/services", icon: <SiTheodinproject /> },
    { title: "About", path: "/about", icon: <BsFillPersonFill /> },
    { title: "Home", path: "/", icon: <AiFillHome /> },
    { title: "Contact", path: "/contact", icon: <IoMdContact /> },
    { title: "Projects", path: "/projects", icon: <FaDiagramProject /> },
  ];

  const getRandomIconColor = () => {
    const r = Math.floor(Math.random() * 150);
    const g = Math.floor(Math.random() * 150);
    const b = Math.floor(Math.random() * 150);
    return `rgba(${r}, ${g}, ${b}, 0.8)`;
  };

  const getRandomDotColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full">
      <nav 
        className="flex justify-center items-center fixed bottom-6 z-[999] left-1/2 backdrop-blur-xl -translate-x-1/2 -translate-y-[30%] rounded-3xl w-[500px] h-[75px] text-white shadow-[0_0_10px_rgba(0,0,0,0.5)] max-[780px]:w-[480px] max-[780px]:px-5 max-[660px]:w-[95%] max-[660px]:px-5"
        style={{ background: randomBgColor }}
      >
        <ul className="flex justify-around items-center gap-5 w-full capitalize">
          {navText.map((text, index) => (
            <li 
              key={index} 
              className="flex justify-center items-center text-center w-1/5 relative transition-all duration-300 ease-in-out"
            >
              <Link 
                href={text.path}
                className="relative z-[99] bottom-0 flex flex-col justify-center items-center m-auto"
              >
                <span 
                  className={`${
                    pathname === text.path 
                      ? `w-[50px] h-[50px] rounded-full text-black opacity-100 flex justify-center items-center text-center p-0 overflow-hidden relative z-[9] shadow-[0_8px_10px_rgba(0,0,0,0.5)] -translate-y-[28px] text-shadow-[1px_1px_5px_#000] transition-transform duration-300 before:content-[''] before:absolute before:w-4/5 before:h-4/5 before:top-1/2 before:left-1/2 before:opacity-100 before:shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] before:rounded-full before:bg-white before:z-[1] before:-translate-x-1/2 before:-translate-y-1/2 before:scale-100 before:transition-all before:duration-300 before:ease-in-out`
                      : `icon w-[35px] h-[35px] rounded-full text-[var(--foreground)] text-center relative z-[2] flex justify-center items-center pb-5 translate-y-[-15px] before:content-[''] before:absolute before:w-4/5 before:h-4/5 before:top-1/2 before:left-1/2 before:opacity-0 before:shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] before:rounded-full before:bg-white before:z-[1] before:-translate-x-1/2 before:-translate-y-1/2 before:scale-100 before:transition-all before:duration-300 before:ease-in-out`
                  }`}
               
                >
                  <span 
                    className={`${
                      pathname === text.path 
                        ? `text-[25px]`
                        : `text-[20px]`
                    } relative z-[2] transition-all duration-200`}
                    style={pathname === text.path ? { color: getRandomIconColor() } : {}}
                  >
                    {text.icon}
                  </span>
                </span>
                <span 
                  className={`${
                    pathname === text.path 
                      ? `top-1 left-5 -translate-x-[23px] -translate-y-[30px] relative transition-all duration-300 ease-in-out text-shadow-[1px_1px_5px_#000] font-['Papyrus','Comic_Sans_MS',cursive] font-black italic text-white pl-2.5 before:content-[''] before:absolute before:w-[7px] before:h-[8px] before:bottom-[-40%] before:rounded-full before:z-0 before:left-1/2 before:shadow-[1px_1px_5px_rgba(0,0,0,1)] before:scale-100 before:translate-x-1/2 before:transition-transform before:duration-300 before:ease-in-out before:bg-green-500 max-[660px]:text-[22px]`
                      : `text-[var(--foreground)] absolute flex justify-center items-center text-center -mt-[15px] translate-y-3 text-[15px] before:content-[''] before:absolute before:w-[8px] before:h-[8px] before:bottom-[-40%] before:rounded-full before:z-0 before:left-[40%] before:scale-0`
                  }`}
                >
                  {text.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};

export default NavbarSection;