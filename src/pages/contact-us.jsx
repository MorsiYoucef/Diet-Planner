import React, { Component } from 'react'
import Header from '../components/Header'
import './contact-us.css'

const ContactUs = () => {
  return (
    <div className="contact-all">
      <Header />
      <div className="ano-container">
        <div className="contact">
          <h1 className="titre">Contact Us</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="another-form">
              <label htmlFor="name">Your Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Your Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Your Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>

              <button type="submit" className="btn-5">
                Submit
              </button>
            </div>

            {/* <img src={imgSvg} alt="logo" /> */}
          </form>
        </div>
        <div className="empty"></div>
      </div>
    </div>
  )
}

export default ContactUs
