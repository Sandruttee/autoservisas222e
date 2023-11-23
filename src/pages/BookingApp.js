import React from "react";

class BookingApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookedTimes: [],
      selectedTime: "",
    };
  }

  handleTimeSelection = (e) => {
    this.setState({ selectedTime: e.target.value });
  };

  bookTime = () => {
    this.setState((prevState) => ({
      bookedTimes: [...prevState.bookedTimes, this.state.selectedTime],
      selectedTime: "",
    }));
  };

  render() {
    return (
      <div>
        <h2>Booking App</h2>
        <select onChange={this.handleTimeSelection}>
          <option value="">Select a Time</option>
          {this.props.availableTimes &&
            this.props.availableTimes.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
        </select>
        <button onClick={this.bookTime}>Book Time</button>
        <ul>
          {this.state.bookedTimes.map((time, index) => (
            <li key={index}>{time}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BookingApp;
