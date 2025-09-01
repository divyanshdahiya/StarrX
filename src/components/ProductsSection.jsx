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
  <section className="products-section">
    <h1 className="products-title highlight">
      Our Accomplishment OUR PRODUCTS
    </h1>
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
