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
          <form>
            <label className="bookingLabel">
              Pasirinkite Jums tinkamą laiką
            </label>{" "}
            <br />
            <select
              className="bookingInput"
              onChange={this.handleTimeSelection}
            >
              <option value="">Pasirinkti laiką</option>
              {this.props.availableTimes &&
                this.props.availableTimes.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
            </select>
            <ul>
              {this.state.bookedTimes.map((time, index) => (
                <li key={index}>{time}</li>
              ))}
            </ul>{" "}
            <label className="bookingLabel" for="name">
              Vardas ir Pavardė
            </label>{" "}
            <br />
            <input className="bookingInput" type="text"></input>
            <br />
            <label className="bookingLabel" for="name">
              El. pašto adresas
            </label>{" "}
            <br />
            <input className="bookingInput" type="email"></input>
            <br />
            <label className="bookingLabel" for="name">
              Telefono numeris
            </label>{" "}
            <br />
            <input className="bookingInput" type="text"></input>
            <br />
            <button className="loginButton" onClick={this.bookTime}>
              Rezervuoti laiką
            </button>
          </form>
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
      </div>
    );
  }
}

export default BookingApp;
