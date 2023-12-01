import React from "react";

export default function Paslaugos() {
  return (
    <div>
      <div className="services">
        <h1>Mūsų siūlomos paslaugos: </h1>
        <div className="row paslaugos-spacing">
          <button className="paslaugos-button">
            Automobilių paruošimas techninei apžiūrai
          </button>
          <div className="col-6">
            <button className="paslaugos-button">Važiuoklės remontas</button>
          </div>
          <div className="col-6">
            <button className="paslaugos-button">
              Tepalų ir filtrų keitimas
            </button>
          </div>
          <div className="col-6">
            <button className="paslaugos-button">
              Stabdžių sistemos remontas
            </button>
          </div>
          <div className="col-6">
            <button className="paslaugos-button">
              Kompiuterinė diagnostika
            </button>
          </div>
          <div className="col-6">
            <button className="paslaugos-button">Sankabos remontas</button>
          </div>
          <div className="col-6">
            <button className="paslaugos-button">
              Kondicionierių pildymas ir remontas
            </button>
          </div>
          <button className="paslaugos-button">Kitos paslaugos</button>
        </div>
      </div>
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
}
