import React from "react";

class AvailableTimeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTime: "",
      times: [],
    };
  }

  handleInputChange = (e) => {
    this.setState({ newTime: e.target.value });
  };

  addTime = () => {
    const { newTime } = this.state;
    if (newTime !== "") {
      this.setState((prevState) => ({
        times: [...prevState.times, newTime],
        newTime: "",
      }));
    }
  };

  render() {
    const { newTime, times } = this.state;

    return (
      <div>
        <div className="formContainer">
          <h1 className="special-margin">
            Įveskite savo laiką, kuriuo esate laisvas. Pavyzdys: 10:00-11:00
          </h1>
          <input
            type="text"
            value={newTime}
            onChange={this.handleInputChange}
            className="loginInput"
          />

          <button className="loginButton" onClick={this.addTime}>
            Pridėti laiką
          </button>

          <div>
            <h3 className="special-margin">Jūs pridėjote šiuos laikus:</h3>
            <ul>
              {times.map((time, index) => (
                <li key={index}>{time}</li>
              ))}
            </ul>
          </div>
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

export default AvailableTimeForm;
