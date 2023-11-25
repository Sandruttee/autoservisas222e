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
      <div className="formContainer">
        <h2>Pasirinkite Jums tinkamą laiką</h2>
        <select className="loginInput" onChange={this.handleTimeSelection}>
          <option value="">Pasirinkti laiką</option>
          {this.props.availableTimes &&
            this.props.availableTimes.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
        </select>
        <button className="loginButton" onClick={this.bookTime}>
          Rezervuoti laiką
        </button>
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
