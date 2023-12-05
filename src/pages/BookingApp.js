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
          <h1>Pasirinkite Jums tinkamą laiką</h1>
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
        <form>
          {" "}
          <label for="name">Vardas ir Pavardė</label>
          <input type="text"></input>
          <br />
          <label for="name">El. pašto adresas</label>
          <input type="email"></input>
          <br />
          <label for="name">Telefono numeris</label>
          <input type="text"></input>
          <br />
          <input type="submit" value="Rezervuoti laiką"></input>
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
    );
  }
}

export default BookingApp;
