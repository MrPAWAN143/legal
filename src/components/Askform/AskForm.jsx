import React from "react";
import { useState } from "react";
import "./AskFrom.css";

function AskForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for contacting us! We will get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      };
    
      return (
        <div className="contact-us-wrapper">
          <div className="contact-us-text">
            <h1>Contact Us</h1>
            <p>
              We’d love to hear from you! Whether you have a question about our services, need assistance, 
              or just want to provide feedback, our team is ready to assist you.
            </p>
            <p>
              Use the form below to send us a message, and we’ll get back to you within 24–48 hours. 
              Alternatively, feel free to reach out via our email or phone.
            </p>
          </div>
    
          <div className="contact-form-container">
            <h2>Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </label>
              <label>
                Message:
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  required
                />
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      );
    };

export default AskForm;
