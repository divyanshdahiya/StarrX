import React from "react";
import "./Footer.css";

const Footer = () => (
  <>
    <section className="get-started-section">
      <div className="get-started-bg">
        <h1 className="get-started-title">Ready to get Started?</h1>
        <p className="get-started-desc">
          Ready to modernize your federation? Get in touch with us to discuss
          how our platform can streamline your management processes.
        </p>
        <a href="#contact" className="get-started-btn">
          Request a Call <span className="arrow">→</span>
        </a>
      </div>
    </section>
    <footer className="footer-section">
      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-logo">StarrX</div>
          <p className="footer-desc">
            Powering the future of sports with real-time data, analytics, and
            seamless management solutions.
          </p>
          <div className="footer-contact">
            <div>dahiya.divyansh1@gmail.com</div>
            <div>+91-9811400202</div>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <div className="footer-col-title">Home</div>
            <a href="#about">About Us</a>
            <a href="#products">Products</a>
            <a href="#clients">Clients</a>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Resources</div>
            <a href="#contact">Contact Us</a>
            <a href="#faq">FAQ</a>
            <a href="#blog">Blog</a>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Legal</div>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        Copyright © StarrX {new Date().getFullYear()} All Rights Reserved
      </div>
    </footer>
  </>
);

export default Footer;
