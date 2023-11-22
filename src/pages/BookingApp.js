import React, { useState } from "react";

function BookingApp({ availableTimes }) {
  const [selectedTime, setSelectedTime] = useState("");

  const handleTimeSlotClick = (time) => {
    setSelectedTime(time);
  };

  return (
    <div>
      <h1>Time Booking Application</h1>
      <h2>Select a time slot:</h2>
      <div>
        {availableTimes.map((time, index) => (
          <button key={index} onClick={() => handleTimeSlotClick(time)}>
            {time}
          </button>
        ))}
      </div>
      {selectedTime && (
        <div>
          <h3>Your selected time slot:</h3>
          <p>{selectedTime}</p>
        </div>
      )}

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

export default BookingApp;
