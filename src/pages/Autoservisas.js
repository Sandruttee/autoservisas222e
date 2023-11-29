import React from "react";
import logo from "./autoservisas-logo.jpeg";
import "./styling.css";

const Autoservisas = () => {
  return (
    <div class="page-container">
      <div class="container">
        <img src={logo} class="img-fluid autoservisas-logo" alt="logo" />
      </div>
      <p>
        <h1>Sveiki atvykę į AUTOSERVISAS 222e</h1>
        <h2>Mes rūpinamės Jūsų automobiliais nuo 2021-ųjų</h2>
      </p>
      <footer>
        <h4>
          AUTO<span className="red-text">SERVISAS 222E</span>
        </h4>
        <p className="p-footer">
          Mus rasite adresu: Staniūnų g. 67a, Panevėžys
        </p>
        <p className="p-footer">Susisiekite su mumis: +37063222439</p>
      </footer>
    </div>
  );
};

export default Autoservisas;
