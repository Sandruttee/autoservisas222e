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
    </div>
  );
}

export default BookingApp;
