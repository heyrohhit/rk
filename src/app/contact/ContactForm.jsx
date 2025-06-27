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

const ErrorMessage = styled.p`
  text-align: center;
  color: red;
  margin-top: 15px;
`;

const ContactForm = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        mode: 'cors',
        redirect: 'follow',
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Server responded with status ${res.status}: ${errorText}`);
      }

      const result = await res.json();
      if (result.result === 'success') {
        setStatus('✅ Message sent successfully!');
        e.target.reset();
      } else {
        setStatus(`❌ Something went wrong: ${result.message}`);
      }
     
    } catch (error) {
      console.error('Frontend Error:', error);
      setStatus(`❌ Error: ${error.message}`);
    }
    e.target.reset();
  };

  return (
    <FormWrapper>
      <FormTitle>Send me a Message</FormTitle>
      <StyledForm onSubmit={handleSubmit}>
        <InputField type="text" name="name" placeholder="Your Name" required />
        <InputField type="email" name="email" placeholder="Your Email" required />
        <TextArea name="message" placeholder="Your Message" required />
        <SubmitButton type="submit">Send Message</SubmitButton>
      </StyledForm>

      {status.includes('success') && <SuccessMessage>{status}</SuccessMessage>}
      {status.includes('❌') && <ErrorMessage>{status}</ErrorMessage>}
    </FormWrapper>
  );
};

export default ContactForm;