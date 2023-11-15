import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [schedules, setSchedules] = useState([]);
  const [timezone, setTimezone] = useState("");
  const [duration, setDuration] = useState("");
  const [error, setError] = useState(false);
  const [receiverEmail, setReceiverEmail] = useState("");

  const { user } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName("");
    setMessage("");
  };

  return (
    <div className="page-container">
      <div className="bookContainer">
        <h1 className="bookTitle">Rezervuoti laiką{user}</h1>
        <form onSubmit={handleSubmit} className="booking__form">
          <label htmlFor="fullName">Vardas ir Pavardė</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <label htmlFor="email">El-pašto adresas</label>
          <input
            id="email"
            name="email"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="message">Palikite žinutę</label>
          <textarea
            rows={5}
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <label htmlFor="session">Pasirinkite laiką {timezone}</label>
          <select name="duration" onChange={(e) => setDuration(e.target.value)}>
            {schedules.map((schedule) => (
              <option
                value={`${schedule.day} - ${schedule.startTime} : ${schedule.endTime}`}
                key={schedule.day}
              >{`${schedule.day} - ${schedule.startTime} : ${schedule.endTime}`}</option>
            ))}
          </select>
          <button className="bookingBtn">REZERVUOTI</button>
        </form>
      </div>
      <footer>
        <h4>
          AUTO<span class="red-text">SERVISAS 222E</span>
        </h4>
        <p class="p-footer">Mus rasite adresu: Staniūnų g. 67a, Panevėžys</p>
        <p class="p-footer">Susisiekite su mumis: +37063222439</p>
      </footer>{" "}
    </div>
  );
};

export default User;
