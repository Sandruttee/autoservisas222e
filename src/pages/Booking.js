import React, { useState } from "react";

export default function Booking() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  console.log(username);

  function handleSubmit(event) {
    event.preventDefault();

    if (username === "x" && password === "y") {
      alert("hi");
    }
  }

  function updateUsername(event) {
    setUsername(event.target.value);
  }

  function updatePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <div className="page-container">
      <main className="login">
        <form className="login__form" onSubmit={handleSubmit}>
          <h5 className="login__title">Prisijunkite prie savo paskyros</h5>
          <label htmlFor="username">Vartotojo vardas</label>
          <input
            id="username"
            name="username"
            type="text"
            onChange={updateUsername}
            className="username"
          />
          <label htmlFor="password">Slaptažodis</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={updatePassword}
            className="password"
          />
          <input className="loginButton" type="submit" value="Prisijungti" />
        </form>
      </main>

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
