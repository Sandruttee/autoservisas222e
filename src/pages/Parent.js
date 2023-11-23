import React from "react";
import AvailableTimeForm from "./AvailableTimeForm";
import BookingApp from "./BookingApp";

class Parent extends React.Component {
  render() {
    return (
      <div>
        <AvailableTimeForm />
        <BookingApp />
      </div>
    );
  }
}

export default Parent;
