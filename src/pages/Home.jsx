import React from "react";
import "../pages/home.css";
import ClientsSection from "../components/ClientsSection";
import ProductsSection from "../components/ProductsSection";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home-top-bg">
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              the new <span className="highlight">operating system</span>
              <br />
              for the world of sports.
            </h1>

            <p className="hero-subtitle">
              "From the real-time tracking of every stat to the absolute
              management of the tournament, the entire ecosystem runs on our
              code."
            </p>

            <div className="hero-description">
              <p>
                We dominate the sports industry from the inside out, turning
                millions of data points into live strategic analytics and
                automating tournament logistics into a flawless process. Our
                software is no longer just a tool; it has become the industry's
                new foundation.
              </p>
            </div>
          </div>
        </div>

        <div className="stats-section">
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">{"<1 SEC"}</div>
              <div className="stat-label">Live Data Delivery</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">80%</div>
              <div className="stat-label">Reduction in Admin Time</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">150+</div>
              <div className="stat-label">Unique Metrics Tracked Per Game</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Retention Rate</div>
            </div>
          </div>
        </div>
      </div>
      <ClientsSection />
      <ProductsSection />
      <section className="get-started-section">
        <div className="get-started-bg">
          <h1 className="get-started-title">Ready to get Started?</h1>
          <p className="get-started-desc">
            Ready to modernize your federation? Get in touch with us to discuss
            how our platform can streamline your management processes.
          </p>
          <Link to="/contact" className="get-started-btn">
            Request a Call <span className="arrow">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
