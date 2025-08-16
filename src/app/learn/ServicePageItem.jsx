'use client';

import { useState, useEffect } from 'react';
import { servicesData } from '../Components/myservices/apis';
import ServiceModal from './ServiceModel'

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  // Disable background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedService ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedService]);

  return (
    <div className="overflow-x-hidden w-screen h-max mx-auto text-center flex flex-col items-center justify-center text-white animate-[fadeInUp_1s_ease_forwards]" style={{ padding: '2rem' }}>
      <div className="inline-block bg-[#ff6b35] rounded-[20px] text-sm uppercase tracking-wider cursor-pointer" style={{ padding: '0.5rem 1rem' }}>
        Our Services
      </div>

      <h2 className="text-[2.5rem] mb-2 text-[#ccc]">What we learn</h2>

      <p className="text-base text-[#aaa] mb-12">
      Our smart learning methods make studying easier and more efficient, helping students prepare for future success.
      </p>

      <div className="w-full h-max flex flex-wrap gap-8 justify-center items-center text-left overflow-hidden">
        {servicesData.map((service, index) => (
          <div
            key={service.id}
            className="w-[500px] h-auto bg-transparent text-white overflow-hidden p-8 rounded-2xl flex flex-col items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.08)] transition duration-300 ease-in-out cursor-pointer"
            style={{
              padding: '1.2rem',
              animationDelay: `${index * 0.2}s`,
              animationFillMode: 'both',
            }}
          >
            <div className="text-[3rem] text-[#ff6b35] mb-4 text-right w-full">
              {service.icon}
            </div>

            <h3 className="w-full text-2xl text-[#fff] mb-2">{service.title}</h3>

            <p className="text-[1rem] text-[#aaa] mb-2">
              {service.desc.slice(0, 150)}...
            </p>

            <button
              onClick={() => openModal(service)}
              className="inline-block bg-[#ff6b35] text-white rounded-lg transition-colors duration-300 hover:bg-[#e85c2e] cursor-pointer"
              style={{ padding: '0.5rem 1rem', marginTop: '1rem',alignSelf: `${index % 2 === 0 ? 'flex-start' : 'flex-end'}`}}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>

      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default ServicesSection;
