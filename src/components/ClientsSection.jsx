import React from "react";
import "./ClientsSection.css";
import astafLogo from "../assets/astafLogo.jpeg";
import istafLogo from "../assets/istafLogo.png";
import kheloindiaLogo from "../assets/kheloindiaLogo.jpg";
import stfiLogo from "../assets/stfiLogo.png";
import youthGamesLogo from "../assets/youthgames.webp";
import beachGamesLogo from "../assets/beach-games.avif";

const clients = [
  { src: istafLogo, alt: "ISTAF" },
  { src: astafLogo, alt: "ASTAF" },
  { src: stfiLogo, alt: "STFI" },
  { src: youthGamesLogo, alt: "Khelo India Youth Games" },
  { src: beachGamesLogo, alt: "Khelo India Beach Games" },
];

function ClientsSection() {
  return (
    <section className="clients-section">
      <h1 className="clients-title">OUR CLIENTS</h1>
      <div className="clients-logos">
        {clients.map((client, idx) => (
          <div className="client-item" key={idx}>
            <div className="client-logo-box">
              <img
                src={client.src}
                alt={client.alt}
                className="client-logo"
                loading="lazy"
              />
            </div>
            <div className="client-name">{client.alt}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ClientsSection;
