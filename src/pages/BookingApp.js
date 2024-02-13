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
      <div className="page-container">
        <div className="formContainer">
          <h1>Reserve time for your visit</h1>
          <form>
            <label className="bookingLabel">Choose time</label> <br />
            <select
              className="bookingInput"
              onChange={this.handleTimeSelection}
            >
              <option value="">Choose time</option>{" "}
              {/*Here i want user to be able to choose time for his/her appointment that was preeviously added buy the admin */}
              {this.props.availableTimes &&
                this.props.availableTimes.map((time, index) => {
                  console.log(time);
                  return (
                    <option key={index} value={time}>
                      {time}
                    </option>
                  );
                })}
            </select>
            <ul>
              {this.state.bookedTimes.map((time, index) => (
                <li key={index}>{time}</li>
              ))}
            </ul>{" "}
            <label className="bookingLabel" for="name">
              Name and Surename
            </label>{" "}
            <br />
            <input className="bookingInput" type="text"></input>
            <br />
            <label className="bookingLabel" for="name">
              E-mail adress
            </label>{" "}
            <br />
            <input className="bookingInput" type="email"></input>
            <br />
            <label className="bookingLabel" for="name">
              Phone number
            </label>{" "}
            <br />
            <input className="bookingInput" type="text"></input>
            <br />
            <label className="bookingLabel" for="name">
              Write a comment <br /> (example: car, problem)
            </label>{" "}
            <br />
            <input className="bookingInputSpecial" type="text"></input>
            <br />
            <button className="loginButton" onClick={this.bookTime}>
              Reserve time{" "}
              {/*Here the user should be able to click and reserve the time for the appointment, before puttiong all the information about them. The admin should be notified by email/sms about the reservation*/}
            </button>
          </form>
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
}

export default BookingApp;
