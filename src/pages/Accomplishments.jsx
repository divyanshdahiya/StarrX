import React from "react";
import "./Accomplishments.css";
import { Link } from "react-router-dom";

const tournaments = [
  {
    name: "ISTAF World Cup 2025",
    year: "2025",
    location: "Bihar, India",
    description:
      "Provided comprehensive game management system and scoring analytics",
    participants: "2,000+ athletes",
    events: "5 events",
    logo: require("../assets/istafLogo.png"),
  },
  {
    name: "Khelo India Beach Games",
    year: "2025",
    location: "Diu, India",
    description:
      "Complete tournament management system and TSR (timing, scoring, results)",
    participants: "850+ athletes",
    events: "11 sports disciplines",
    logo: require("../assets/kheloindiaLogo.jpg"),
  },
  {
    name: "Khelo India Youth Games",
    year: "2025",
    location: "Bihar, India",
    description:
      "Complete Scoring, Timing and Results system with match analystics for India's premier youth sporting event",
    participants: "2200+ athletes",
    events: "26 sports disciplines",
    logo: require("../assets/kheloindiaLogo.jpg"),
  },
];

const stats = [
  { number: "15+", label: "Tournaments Managed" },
  { number: "5,000+", label: "Athletes Served" },
  { number: "25+", label: "Countries Reached" },
  { number: "100+", label: "Sports Events" },
];

const Accomplishments = () => {
  return (
    <div className="accomplishments-page">
      <div className="accomplishments-hero">
        <h1 className="accomplishments-title">OUR ACCOMPLISHMENTS</h1>
        <p className="accomplishments-subtitle">
          Powering world-class sporting events with cutting-edge technology
        </p>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="accomplishments-content">
        <div className="tournaments-grid">
          {tournaments.map((tournament, tournamentIndex) => (
            <div key={tournamentIndex} className="tournament-card">
              <div className="tournament-header">
                <img
                  src={tournament.logo}
                  alt={tournament.name}
                  className="tournament-logo"
                />
                <div className="tournament-info">
                  <h3 className="tournament-name">{tournament.name}</h3>
                  <div className="tournament-meta">
                    <span className="tournament-year">{tournament.year}</span>
                    <span className="tournament-location">
                      {tournament.location}
                    </span>
                  </div>
                </div>
              </div>

              <p className="tournament-description">{tournament.description}</p>

              <div className="tournament-stats">
                <div className="tournament-stat">
                  <span className="stat-value">{tournament.participants}</span>
                  <span className="stat-type">Participants</span>
                </div>
                <div className="tournament-stat">
                  <span className="stat-value">{tournament.events}</span>
                  <span className="stat-type">Events</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="accomplishments-footer">
        <h2 className="footer-title">Ready to Power Your Next Event?</h2>
        <p className="footer-description">
          Join the world's leading sporting organizations who trust StarrX for
          their tournament management needs.
        </p>
        <Link Link to="/contact" className="cta-button">
          Get Started Today
        </Link>
      </div>
    </div>
  );
};

export default Accomplishments;
