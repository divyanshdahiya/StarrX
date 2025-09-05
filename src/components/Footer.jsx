import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => (
  <>
    <footer className="footer-section">
      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-logo">StarrX</div>
          <p className="footer-desc">
            Powering the future of sports with real-time data, analytics, and
            seamless management solutions.
          </p>
          <div className="footer-contact">
            <div>starrxlabs@gmail.com</div>
            <div>+91-9811400202</div>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <div className="footer-col-title">Home</div>
            <a href="#about">About Us</a>
            <a href="#products">Products</a>
            <Link to="/contact">Contact Us</Link>
          </div>
          {/* <div className="footer-col">
            <div className="footer-col-title">Resources</div>
            <a href="#contact">Contact Us</a>
            <a href="#faq">FAQ</a>
            <a href="#blog">Blog</a>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Legal</div>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
          </div> */}
        </div>
      </div>
      <div className="footer-bottom">
        Copyright © StarrX {new Date().getFullYear()} All Rights Reserved
      </div>
    </footer>
  </>
);

export default Footer;
