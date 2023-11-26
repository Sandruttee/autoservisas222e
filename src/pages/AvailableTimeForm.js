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
      <div className="formContainer">
        <h2>
          Įveskite savo laiką, kuriuo esate laisvas. Pavyzdys: 10:00-11:00
        </h2>
        <input
          type="text"
          value={newTime}
          onChange={this.handleInputChange}
          className="loginInput"
        />

        <button className="loginButton" onClick={this.addTime}>
          Add Time
        </button>

        <div>
          <h3>Times added:</h3>
          <ul>
            {times.map((time, index) => (
              <li key={index}>{time}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default AvailableTimeForm;
