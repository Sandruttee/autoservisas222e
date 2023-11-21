import React, { useState } from "react";
import AvailableTimeForm from "./AvailableTimeForm";
import BookingApp from "./BookingApp";

function Parent() {
  const [availableTimes, setAvailableTimes] = useState([]);

  return (
    <div>
      <AvailableTimeForm setAvailableTimes={setAvailableTimes} />
      <BookingApp availableTimes={availableTimes} />
    </div>
  );
}

export default Parent;
