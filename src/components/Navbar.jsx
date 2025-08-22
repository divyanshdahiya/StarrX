import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Left: Logo */}
        <div className="navbar-logo">
          <Link to="/">StarrX</Link>
        </div>
        {/* Right: Nav links + Contact button */}
        <div className="navbar-right">
          <div className="navbar-menu">
            <Link to="/about" className="nav-link">
              About Us
            </Link>
            <Link to="/programs" className="nav-link">
              Programs
            </Link>
            <Link to="/company" className="nav-link">
              Company
            </Link>
            <Link to="/teams" className="nav-link">
              Teams
            </Link>
          </div>
          <Link to="/contact" className="contact-btn">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
