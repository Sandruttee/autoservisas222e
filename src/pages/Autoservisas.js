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
        <h3>Mūsų siūlomos paslaugos: </h3>
        <ul>
          <li>Važiuoklės remontas</li>
          <li>Tepalų ir filtrų keitimas</li>
          <li>Stabdžių sistemos remontas</li>
          <li>Kompiuterinė diagnostika</li>
          <li>Sankabos remontas</li>
          <li>Kondicionierių pildymas ir remontas</li>
          <li>Kitos paslaugos</li>
        </ul>
      </p>
      <footer>
        <h4>
          AUTO<span class="red-text">SERVISAS 222E</span>
        </h4>
        <p class="p-footer">Mus rasite adresu: Staniūnų g. 67a, Panevėžys</p>
        <p class="p-footer">Susisiekite su mumis: +37063222439</p>
      </footer>
    </div>
  );
};

export default Autoservisas;
