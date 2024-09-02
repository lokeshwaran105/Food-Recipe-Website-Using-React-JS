import React, { useState } from 'react';
import '../App.css'

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Your message has been sent!');
  };

  return (
    <div className="contact-us container my-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="w-75 mx-auto">
        <div className="form-group mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control border-secondary"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control border-secondary"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            id="message"
            name="message"
            className="form-control border-secondary"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn w-100 text-white" style={{ backgroundColor: '#E54C44' }}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
