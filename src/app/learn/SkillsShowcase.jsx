'use client';

import React from 'react';
import { FaDatabase, FaBullhorn, FaChartLine, FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const skills = [
  {
    icon: <FaLaptopCode className="text-sky-400" size={32} />,
    title: 'Basic & Advance Computer Courses',
    desc: 'I am a B.A. student with a basic understanding of programming and computer applications through a DCA course. I am currently exploring web development and continuously learning new skills to build creative and functional websites.',
  },
  {
    icon: <FaDatabase className="text-green-500" size={32} />,
    title: 'Web Design',
    desc: 'I am a B.A. student with a basic understanding of programming and a growing interest in web design. Through my DCA course, I have developed foundational skills in creating user-friendly and visually appealing websites.',
  },
  {
    icon: <FaBullhorn className="text-pink-400" size={32} />,
    title: 'Digital Marketing',
    desc: 'I am a B.A. student with a basic understanding of computer applications and a strong interest in digital marketing. I am currently learning how to use online tools and platforms to promote brands effectively.',
  },
  {
    icon: <FaChartLine className="text-yellow-400" size={32} />,
    title: 'Web Development',
    desc: 'I am a B.A. student with a basic understanding of programming, gained through a Diploma in Computer Applications (DCA). I have a growing interest in web development and am currently learning technologies like HTML, CSS, and JavaScript to build responsive and user-friendly websites',
  },
];

const stats = [
  { number: 50, label: 'Assignments' },
  { number: 2, label: 'Years Exp' },
  { number: 120, label: 'Happy Students' },
];

export default function SkillsShowcase() {
  return (
    <section className="w-full min-h-screen px-6 py-16  from-black via-gray-900 to-black text-white flex flex-col items-center justify-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-2xl md:text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500"
        style={{
          padding: '1rem',
        }} >
        My Skill Arsenal 🚀
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-300 p-5 max-w-2xl mb-10 text-sm md:text-base "
      >
        I bring designs to life with code and craft seamless user experiences with performance in mind. Here's a glimpse of what I do best:
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 w-full max-w-6xl" style={{
        padding: '1rem',
      }}>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index }}
            className="bg-white/5 border flex flex-col items-center justify-center border-white/10 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 backdrop-blur-sm"
            style={{
              padding: '1rem',
            }}>
            <div className="mb-4">{skill.icon}</div>
            <h3 className="text-md font-semibold mb-2 text-yellow-100">{skill.title}</h3>
            <p className="text-sm text-gray-400 text-left">{skill.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="flex flex-wrap justify-center items-center gap-10" style={{
        padding: '1rem',
      }}>
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 + index * 0.2, type: 'spring' }}
            className="flex flex-col justify-center text-center items-center"
          >
            <span className="text-4xl md:text-5xl font-bold text-yellow-300">{stat.number}+</span>
            <span className="text-sm md:text-base text-gray-400">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
