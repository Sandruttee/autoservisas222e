import React, { useState } from "react";

const Booking = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();
    if (username === "x" && password === "y") {
      alert("hi");
    }
  }
  return (
    <div class="page-container">
      <main className="login">
        <form className="login__form" onSubmit={handleSubmit}>
          <h5 className="login__title">Prisijunkite prie savo paskyros</h5>
          <label htmlFor="username">Vartotojo vardas</label>
          <input
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={setUsername}
            className="username"
          />
          <label htmlFor="password">Slaptažodis</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={setPassword}
            className="password"
          />
          <input className="loginButton" type="submit" value="Prisijungti" />
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
};

export default Booking;
