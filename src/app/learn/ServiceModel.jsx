'use client';

import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const ServiceModal = ({ service, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md flex items-center justify-center px-2 sm:px-4 py-6 sm:py-8 overflow-y-auto"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="relative top-0 bg-[#000] p-4 sm:p-6 md:p-8 rounded-2xl w-full max-w-md sm:max-w-lg md:max-w-3xl shadow-xl max-[660px]:text-[0.5rem] max-[660px]:top-[-5%]"
        style={{ padding: '1rem' }}
      >
        <button
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[#ff6b35] text-lg sm:text-xl md:text-2xl"
          onClick={onClose}
          aria-label="Close modal"
        >
          <FaTimes />
        </button>

        <div className="text-xl sm:text-2xl md:text-3xl text-[#ff6b35] mb-3 sm:mb-4 text-right">
          {service.icon}
        </div>

        <h3 className="text-lg sm:text-xl md:text-2xl text-left mb-2 sm:mb-3 font-semibold text-[#ff6b35]">
          {service.title}
        </h3>

        <p className="text-xs md:text-base text-left mb-3 sm:mb-4 leading-relaxed text-white max-[480px]:text-[0.8rem]">
          {service.desc}
        </p>

        <Link
          href={service.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-1 sm:mt-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-[#ff6b35] text-white text-xs sm:text-sm md:text-base font-medium rounded-lg transition-all duration-300 hover:bg-[#ef5c2e] hover:scale-105"
          style={{ padding: '0.5rem 1rem' }}
        >
          Contact Us
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ServiceModal;