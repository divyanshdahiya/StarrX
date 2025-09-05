import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div className="about-us">
      <div className="about-container">
        <div className="about-header">
          <h1>About StarrX Labs</h1>
          <p>
            At StarrX Labs, we believe technology has the power to transform the
            way sports are played, managed, and experienced. Our mission is
            simple: to build innovative tools that empower athletes, coaches,
            and sports organizations to achieve more. We’re not just creating
            software—we’re shaping the future of sports.
          </p>
        </div>

        <div className="about-content">
          <div className="founder-section">
            <div className="founder-content">
              <div className="founder-image">
                <div className="founder-placeholder">
                  <span>👤</span>
                </div>
              </div>
              <div className="founder-text">
                <h3>Meet Our Founder</h3>
                <h1>Divyansh Dahiya</h1>
                <p className="founder-title">Founder </p>
                <p className="founder-bio">
                  Divyansh Dahiya founded StarrX Labs with a clear vision: to
                  solve the complex logistical challenges of the sports world
                  with powerful, elegant software. As a seasoned software
                  engineer, Divyansh observed that while the passion in sports
                  was modern, the technology powering it was often inefficient
                  and outdated.
                </p>
                <p className="founder-bio">
                  Driven by a belief that great technology should be an enabler,
                  not a hurdle, We build the intuitive, powerful, and reliable
                  platforms that StarrX Labs offers today. We continues to lead
                  the company with a focus on client success and a deep
                  commitment to innovation that serves the real needs of
                  athletes, coaches, and organizers.
                </p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <div className="section-content">
              <h2>Technology That Powers Victory</h2>
              <p>
                Sport is about moments—the last-second goal, the personal best,
                the championship win. At StarrX Labs, we build the technology
                that makes those moments possible. We were founded by athletes
                and data experts who believe that powerful, intuitive technology
                can unlock the true potential of every game, every athlete, and
                every organization.
              </p>
            </div>
          </div>

          <div className="about-section">
            <div className="section-content">
              <h2>Our Solutions: From Kick-off to Final Whistle</h2>
              <div className="services-grid">
                <div className="service-item">
                  <div className="service-icon">🏆</div>
                  <h3>Seamless Tournament Management</h3>
                  <p>
                    Forget spreadsheets and administrative chaos. Our platform
                    streamlines everything from registration and scheduling to
                    live bracketing and communication, creating a flawless
                    experience for organizers, participants, and fans.
                  </p>
                </div>
                <div className="service-item">
                  <div className="service-icon">📊</div>
                  <h3>Dynamic Real-Time Scoring</h3>
                  <p>
                    Capture every point with precision. Our intuitive scoring
                    systems deliver instant, accurate results to scoreboards,
                    websites, and mobile apps, keeping everyone in the heart of
                    the action.
                  </p>
                </div>
                <div className="service-item">
                  <div className="service-icon">📈</div>
                  <h3>Actionable Performance Analytics</h3>
                  <p>
                    Move beyond the final score. We transform raw data into
                    clear, visual insights that give you a competitive edge.
                    Empower coaches with smarter strategies and help athletes
                    train more effectively to achieve new heights.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-section">
            <div className="section-content">
              <h2>The StarrX Advantage</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <h4>✨ Built for Sport, By Sports Lovers</h4>
                  <p>
                    Our solutions are designed with a deep understanding of the
                    challenges you face. We don’t just build tech; we build
                    tools to solve real-world problems for coaches, organizers,
                    and athletes.
                  </p>
                </div>
                <div className="feature-item">
                  <h4>🎯 Rock-Solid Reliability</h4>
                  <p>
                    When the game is on the line, our systems deliver. Trusted
                    by sports organizations for robust, scalable platforms that
                    perform flawlessly under pressure.
                  </p>
                </div>
                <div className="feature-item">
                  <h4>🤝 Your Success is Our Goalt</h4>
                  <p>
                    We see ourselves as your partner, not just a provider. Our
                    dedicated support team is here to ensure you have the
                    guidance and assistance you need to succeed, every step of
                    the way.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-section">
            <div className="section-content">
              <h2>Our Vision: Powering the Future of Sport</h2>
              <p>
                Our goal is to create a globally connected sports ecosystem
                where technology removes barriers, enhances performance, and
                amplifies the passion for competition at every level—from
                grassroots clubs to professional leagues.
              </p>

              <h3>Ready to Elevate Your Game?</h3>
              <Link to="/contact" className="contact-btn">
                Request a Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
