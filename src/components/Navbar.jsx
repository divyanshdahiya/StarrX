import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Assuming you have a CSS file for styling

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""} ${
        mobileMenuOpen ? "mobile-open" : ""
      }`}
    >
      <div className="navbar-logo">
        <Link to="/">
          <span>StarrX</span>
        </Link>
      </div>

      <div className="navbar-menu">
        <Link to="/">
          <button className="nav-menu-btn">
            <p className="nav-menu-1">Home</p>
          </button>
        </Link>
        <Link to="/about">
          <button className="nav-menu-btn">
            <p className="nav-menu-2">About</p>
          </button>
        </Link>
        <Link to="/services">
          <button className="nav-menu-btn">
            <p className="nav-menu-3">Services</p>
          </button>
        </Link>
      </div>

      <div className="navbar-contact">
        <button className="nav-contact-btn cube cube-hover" type="button">
          <div className="nav-contact-bg-top">
            <div className="nav-contact-bg-inner"></div>
          </div>
          <div className="nav-contact-bg-right">
            <div className="nav-contact-bg-inner"></div>
          </div>
          <div className="nav-contact-bg">
            <div className="nav-contact-bg-inner"></div>
          </div>
          <div className="nav-contact-text">Contact Us</div>
        </button>
      </div>

      <div
        className="mobile-menu-button"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
