import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Booking() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  const navigate = useNavigate();

  function updateUsername(event) {
    setUsername(event.target.value);
  }

  function updatePassword(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (username === "Egidijus" && password === "y") {
      navigate("/AvailableTimeForm");
    } else {
      alert("sorry");
    }
  }

  return (
    <div className="page-container">
      <main className="login">
        <form className="login__form" onSubmit={handleSubmit}>
          <h1 className="login__title">Prisijunkite prie savo paskyros</h1>
          <label htmlFor="username">Vartotojo vardas</label>
          <input
            id="username"
            name="username"
            type="text"
            onChange={updateUsername}
            className="username loginInput"
          />
          <label htmlFor="password">Slaptažodis</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={updatePassword}
            className="password loginInput"
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
