import React, { useState } from "react";

export default function Owner() {
  return (
    <div>
      <main>
        <form>
          {" "}
          <label>Pasirinkite laiką</label> <br />
          <select>
            <option>08:30 - 09:00</option>
            <option>09:00 - 10:00</option>
          </select>{" "}
          <br />
          <button className="bookingBtn">REZERVUOTI</button>
        </form>
      </main>
      <footer>
        <h4>
          AUTO<span class="red-text">SERVISAS 222E</span>
        </h4>
        <p class="p-footer">Mus rasite adresu: Staniūnų g. 67a, Panevėžys</p>
        <p class="p-footer">Susisiekite su mumis: +37063222439</p>
      </footer>
    </div>
  );
}
