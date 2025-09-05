import React from "react";
import "./ProductsSection.css";

const products = [
  {
    name: "Sport Management System",
    description:
      "Comprehensive platform to manage federation, tournaments, registrations, and communication. Streamline operations for clubs, leagues, and federations.",
    image: require("../assets/youthgames.webp"),
    areas: [
      {
        title: "Comprehensive Federation & Tournament Management",
        desc: "A comprehensive platform to manage every level of your sport, from high-level federation oversight to the specifics of individual tournaments. Streamline operations for clubs, leagues, and federations with a single integrated system.",
        image: require("../assets/Pasted Graphic.png"),
      },
      {
        title: "Tournament Organisation",
        desc: "Take full control of your events with an all-in-one system for team registration, managing events, fixtures, and real-time updates.",
        image: require("../assets/tournament.png"),
      },
      {
        title: "Analytics Hub",
        desc: "Track key metrics, visualize trends in performance and participation, and generate insightful reports for organizational growth.",
        image: require("../assets/Analytics.png"),
      },
    ],
  },
  {
    name: "Sports Arena Organizer",
    description:
      "A management tool designed for field and arena owners. Simplify scheduling, track attendance and payments, and keep players engaged with live match stats, ratings, and AI-powered team selection. Make running games easier while creating a better experience for every group that rents your field.",
    image: require("../assets/youthgames.webp"),
    areas: [
      {
        title: "Comprehensive Arena Management",
        desc: "Fill your fields faster with automated scheduling tools that make it simple for groups to book recurring games and manage attendance.",
        image: require("../assets/arena-home.png"),
      },
      {
        title: "Player Engagement & Loyalty",
        desc: "Offer groups live match stats, player ratings, and AI-driven team selection—unique features that keep players coming back to your venue week after week.",
        image: require("../assets/arena-scoring.png"),
      },
      {
        title: "Integrated Payment System",
        desc: "Eliminate no-shows and late payments with integrated tracking, making your operations smoother and more reliable.",
        image: require("../assets/arena-stats.png"),
      },
    ],
  },
  {
    name: "Live Scoring & Data Analysis",
    description:
      "Real-time match scoring, player stats, and in-depth analytics for teams and tournaments. Instantly visualize performance and trends as the action unfolds.",
    image: require("../assets/beach-games.avif"),
    areas: [
      {
        title: "Live Scoring",
        desc: "Capture every point and event as it happens, with instant updates for fans, teams, and officials.",
        image: require("../assets/scoring-controls.png"),
      },
      {
        title: "Analytics Dashboard",
        desc: "Visualize player and team stats, trends, and insights in real time for smarter decisions.",
        image: require("../assets/scoring-home.png"),
      },
      {
        title: "Reports & Exports",
        desc: "Generate detailed match reports and export data for further analysis or sharing.",
        image: require("../assets/scoring-scorecard.jpeg"),
      },
    ],
  },
];

const ProductsSection = () => (
  <section className="products-section" id="products">
    <h1 className="products-title highlight">OUR PRODUCTS</h1>
    {products.map((product, idx) => (
      <div className="product-block" key={idx}>
        <div className="product-header">
          {/* <img
            src={product.image}
            alt={product.name}
            className="product-main-image"
          /> */}
          <div className="product-info">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-desc">{product.description}</p>
          </div>
        </div>
        <div className="product-areas">
          {product.areas.map((area, i) => (
            <div className="product-area-card" key={i}>
              <div className="product-area-image-wrapper">
                <img
                  src={area.image}
                  alt={area.title}
                  className="product-area-image"
                />
              </div>
              <h4 className="product-area-title">{area.title}</h4>
              <p className="product-area-desc">{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ))}
  </section>
);

export default ProductsSection;
