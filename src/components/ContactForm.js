import React, { useState } from 'react';
import { FaComment, FaTimes, FaPaperPlane } from 'react-icons/fa';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const toggleChatBox = () => {
    setIsOpen(!isOpen);
    // Reset form and status when closing
    if (isOpen) {
      resetForm();
    }
  };

  const resetForm = () => {
    setEmail('');
    setMessage('');
    setSubmitStatus(null);
    setErrors({});
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Email validation
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    
    // Message validation
    if (!message) {
      newErrors.message = 'Message is required';
    } else if (message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('sending');
    
    try {
      // Using EmailJS service to send emails without a backend
      // You'll need to sign up for EmailJS and configure your template
      const response = await fetch('https://formspree.io/f/xnnpqvov', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        resetForm();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="chat-box-container">
      {/* Chat box toggle button */}
      <button 
        className="chat-box-toggle"
        onClick={toggleChatBox}
        aria-label={isOpen ? "Close contact form" : "Open contact form"}
      >
        {isOpen ? <FaTimes /> : <FaComment />}
      </button>
      
      {/* Chat box content */}
      {isOpen && (
        <div className="chat-box">
          <div className="chat-box-header">
            <h3>Send me a message</h3>
            <button 
              className="close-button" 
              onClick={toggleChatBox}
              aria-label="Close contact form"
            >
              <FaTimes />
            </button>
          </div>
          
          <div className="chat-box-content">
            {submitStatus === 'success' ? (
              <div className="success-message">
                <p>Thank you for your message! I'll get back to you soon.</p>
                <button 
                  className="new-message-button"
                  onClick={resetForm}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className={errors.email ? 'error' : ''}
                    disabled={isSubmitting}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here..."
                    rows="4"
                    className={errors.message ? 'error' : ''}
                    disabled={isSubmitting}
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>
                
                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} 
                  <FaPaperPlane className="send-icon" />
                </button>
                
                {submitStatus === 'error' && (
                  <div className="error-alert">
                    There was an error sending your message. Please try again.
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactForm; 