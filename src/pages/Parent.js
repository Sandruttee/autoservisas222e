import React, { Component } from "react";
import AvailableTimeForm from "./AvailableTimeForm";
import BookingApp from "./BookingApp";

class Parent extends Component {
  // ...
}
  constructor(props) {
    super(props);
    this.state = {
      availableTimes: [],
    };
  }

  handleAddTime = (newTime) => {
    this.setState((prevState) => ({
      availableTimes: [...prevState.availableTimes, newTime],
    }));
  };

  render() {
    return (
      <div>
    <AvailableTimeForm onAddTime={this.handleAddTime} />

        <BookingApp availableTimes={this.state.availableTimes} />
      </div>
    );
  }
}

export default Parent;
