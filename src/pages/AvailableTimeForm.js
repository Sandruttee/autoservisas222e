import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTime, setTimes } from "./actions";

const AvailableTimeForm = () => {
  const dispatch = useDispatch();
  const times = useSelector((state) => state.times);
  const [selectedTime, setSelectedTime] = useState("");
  const [deletedIndices, setDeletedIndices] = React.useState([]);

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleAddTime = () => {
    if (selectedTime !== "") {
      dispatch(addTime(selectedTime));
      setSelectedTime("");
    }
  };

  const removeTime = (index) => {
    const updatedTimes = times.filter((time, idx) => idx !== index);
    dispatch(setTimes(updatedTimes));
    setDeletedIndices([...deletedIndices, index]);
  };

  return (
    <div>
      <div className="formContainer">
        <h1 className="special-margin">
          Pasirinkite laiką, kuriuo esate laisvas.
        </h1>
        <Clock onTimeSelect={handleTimeSelect} onAddTime={handleAddTime} />

        <div>
          <h3 className="special-margin">Jūs pridėjote šiuos laikus:</h3>
          <div className="small-font">
            (norėdami pašalinti klaidingai pridėtą laiką tiesiog paspauskite ant
            jo)
          </div>
          <ul>
            {times.map((time, index) =>
              !deletedIndices.includes(index) ? (
                <button
                  className="addedTimeButton"
                  onClick={() => removeTime(index)}
                  key={index}
                >
                  <li>{time}</li>
                </button>
              ) : null
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Clock = ({ onTimeSelect, onAddTime }) => {
  const [selectedHour, setSelectedHour] = useState("");
  const [selectedMinute, setSelectedMinute] = useState("");

  const handleTimeSelect = () => {
    if (selectedHour !== "" && selectedMinute !== "") {
      const time = selectedHour + ":" + selectedMinute;
      onTimeSelect(time);
      setSelectedHour("");
      setSelectedMinute("");
    }
  };

  const handleButtonClick = () => {
    handleTimeSelect();
    onAddTime();
  };

  return (
    <div className="clock">
      <label htmlFor="hour" className="label-text">
        Valanda:{" "}
      </label>
      <br />
      <select
        id="hour"
        className="timeInput"
        value={selectedHour}
        onChange={(e) => setSelectedHour(e.target.value)}
      >
        <option value="">Pasirinkite valandą</option>
        {Array.from({ length: 24 }, (_, i) => (
          <option value={i < 10 ? `0${i}` : i} key={i}>
            {i < 10 ? `0${i}` : i}
          </option>
        ))}
      </select>
      <br />

      <label htmlFor="minute" className="label-text">
        Minutė:{" "}
      </label>
      <br />
      <select
        id="minute"
        className="timeInput"
        value={selectedMinute}
        onChange={(e) => setSelectedMinute(e.target.value)}
      >
        <option value="">Pasirinkite minutę</option>
        {Array.from({ length: 60 }, (_, i) => (
          <option value={i < 10 ? `0${i}` : i} key={i}>
            {i < 10 ? `0${i}` : i}
          </option>
        ))}
      </select>
      <br />
      <button
        className="clockButton pasirinktiButton"
        onClick={handleButtonClick}
      >
        Pasirinkti laiką
      </button>
    </div>
  );
};

export default AvailableTimeForm;
