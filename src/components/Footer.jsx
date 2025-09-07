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
            <div className="footer-col-title">Quick Links</div>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/accomplishments">Accomplishments</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Solutions</div>
            <a href="#tournaments">Tournament Management</a>
            <a href="#scoring">Scoring Systems</a>
            <a href="#analytics">Analytics Platform</a>
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
