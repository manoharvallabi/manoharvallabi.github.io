import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const isNameValid = name.trim() !== '';
    const isEmailValid = email.trim() !== '';
    const isMessageValid = message.trim() !== '';

    setNameError(!isNameValid);
    setEmailError(!isEmailValid);
    setMessageError(!isMessageValid);

    if (isNameValid && isEmailValid && isMessageValid) {
      const templateParams = {
        name,
        email,
        message
      };

      emailjs
          .send(
              'service_5rl4np2',          // your EmailJS service ID
              'template_py5pl8m',         // your EmailJS template ID
              templateParams,
              'KII1RFN3H4bpOnkCd'         // your EmailJS public key
          )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
          })
          .catch((error) => {
            console.error('FAILED...', error);
            alert('Message failed to send. Please try again.');
          });

      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
      <div id="contact">
        <div className="items-container">
          <div className="contact_wrapper">
            <h1>Contact Me</h1>
            <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
            <Box
                component="form"
                noValidate
                autoComplete="off"
                className="contact-form"
                onSubmit={sendEmail}
            >
              <div className="form-flex">
                <TextField
                    required
                    label="Your Name"
                    placeholder="What's your name?"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    error={nameError}
                    helperText={nameError ? 'Please enter your name' : ''}
                />
                <TextField
                    required
                    label="Email / Phone"
                    placeholder="How can I reach you?"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={emailError}
                    helperText={emailError ? 'Please enter your email or phone number' : ''}
                />
              </div>
              <TextField
                  required
                  label="Message"
                  placeholder="Send me any inquiries or questions"
                  multiline
                  rows={10}
                  className="body-form"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  error={messageError}
                  helperText={messageError ? 'Please enter the message' : ''}
              />
              <Button
                  type="submit"
                  variant="contained"
                  endIcon={<SendIcon />}
              >
                Send
              </Button>
            </Box>
          </div>
        </div>
      </div>
  );
}

export default Contact;
