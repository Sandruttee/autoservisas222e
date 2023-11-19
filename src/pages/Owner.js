import React, { useState } from "react";

export default function AvailableTime({ setAvailableTimes }) {
  const [timeSlot, setTimeSlot] = useState("");

  const handleAddTimeSlot = () => {
    if (timeSlot.trim() !== "") {
      setAvailableTimes((prevTimes) => [...prevTimes, timeSlot]);
      setTimeSlot("");
    }
  };

  return (
    <div>
      <h3>Set Your Available Time</h3>
      <input
        type="text"
        value={timeSlot}
        onChange={(e) => setTimeSlot(e.target.value)}
      />
      <button onClick={handleAddTimeSlot}>Add Time Slot</button>
      <hr />
    </div>
  );
}
