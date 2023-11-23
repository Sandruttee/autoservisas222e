import React from "react";

class AvailableTimeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTime: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({ newTime: e.target.value });
  };

  addTime = () => {
    if (this.props.onAddTime) {
      this.props.onAddTime(this.state.newTime);
      this.setState({ newTime: "" });
    }
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
      </div>
    );
  }
}

export default AvailableTimeForm;
