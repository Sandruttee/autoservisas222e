import React from "react";

class AvailableTimeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      availableTimes: [],
      newTime: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({ newTime: e.target.value });
  };

  addTime = () => {
    this.setState((prevState) => ({
      availableTimes: [...prevState.availableTimes, this.state.newTime],
      newTime: "",
    }));
  };

  render() {
    return (
      <div>
        <h2>Available Time Form</h2>
        <input
          type="text"
          value={this.state.newTime}
          onChange={this.handleInputChange}
        />
        <button onClick={this.addTime}>Add Time</button>
        <ul>
          {this.state.availableTimes.map((time, index) => (
            <li key={index}>{time}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AvailableTimeForm;
