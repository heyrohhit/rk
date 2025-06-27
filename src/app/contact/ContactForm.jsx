'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  width: 350px;
  margin: 50px auto;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 15px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
`;

const FormTitle = styled.h2`
  text-align: center;
  color: #aaa;
  margin-bottom: 20px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const InputField = styled.input`
  padding: 12px 15px;
  background: transparent;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  transition: all .3s ease-in-out;
  &:focus {
    background: #333;
    border-color: #007bff;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 120px;
  background: transparent;
  transition: all .3s ease-in-out;
  resize: vertical;
  &:focus {
    background: #333;
    border-color: #007bff;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  padding: 12px 20px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    background: #0056b3;
    transform: scale(1.05);
  }
`;

const SuccessMessage = styled.p`
  text-align: center;
  color: green;
  margin-top: 15px;
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  

  return (
    <FormWrapper>
      <FormTitle>Send me a Message</FormTitle>
      <StyledForm action="https://formsubmit.co/rohitfolio8700@gmail.com" method="POST">
        <InputField
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <InputField
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <SubmitButton type="submit">Send Message</SubmitButton>
      </StyledForm>
      {submitted && <SuccessMessage>Thank you! Your message has been sent.</SuccessMessage>}
    </FormWrapper>
  );
};

export default ContactForm;
