'use client';

import React from 'react';
import { FaReact, FaNodeJs, FaPaintBrush, FaDatabase } from 'react-icons/fa';
import { motion } from 'framer-motion';

const skills = [
  {
    icon: <FaReact className="text-sky-400" size={32} />,
    title: 'React Mastery',
    desc: 'Expertise in building reusable components and dynamic UIs using React & Hooks.',
  },
  {
    icon: <FaNodeJs className="text-green-500" size={32} />,
    title: 'Node.js & APIs',
    desc: 'Skilled in building fast, scalable backend systems and RESTful APIs.',
  },
  {
    icon: <FaDatabase className="text-yellow-400" size={32} />,
    title: 'Database Management',
    desc: 'Experience with SQL & NoSQL databases like MongoDB and PostgreSQL.',
  },
  {
    icon: <FaPaintBrush className="text-pink-400" size={32} />,
    title: 'Creative UI/UX',
    desc: 'Design-focused approach using Figma, Tailwind CSS, and smooth interactions.',
  },
];

const stats = [
  { number: 50, label: 'Projects' },
  { number: 5, label: 'Years Exp' },
  { number: 120, label: 'Happy Clients' },
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
            <h3 className="text-lg font-semibold mb-2 text-yellow-100">{skill.title}</h3>
            <p className="text-sm text-gray-400">{skill.desc}</p>
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
