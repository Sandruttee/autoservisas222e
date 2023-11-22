import React, { useState } from "react";

function AvailableTimeForm({ setAvailableTimes }) {
  const [timeSlot, setTimeSlot] = useState("");
  console.log(timeSlot);
  const handleAddTimeSlot = () => {
    if (timeSlot.trim() !== "") {
      setAvailableTimes((prevTimes) => [...prevTimes, timeSlot]);
      setTimeSlot("");
    }
  };

  return (
    <div>
      <div className="formContainer">
        <h3>Set Your Available Time</h3>
        <input
          type="text"
          value={timeSlot}
          onChange={(e) => setTimeSlot(e.target.value)}
        />
        <button onClick={handleAddTimeSlot}>Add Time Slot</button>
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

export default AvailableTimeForm;
