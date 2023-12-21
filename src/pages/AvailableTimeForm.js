import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTime, setTimes } from "./actions";

const AvailableTimeForm = () => {
  const dispatch = useDispatch();
  const times = useSelector((state) => state.times);
  const [selectedTime, setSelectedTime] = useState("");

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
    const updatedTimes = times.filter((_, idx) => idx !== index);
    dispatch(setTimes(updatedTimes));
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
          <ul>
            {times.map((time, index) => (
              <button
                className="addedTimeButton"
                onClick={() => removeTime(index)}
                key={index}
              >
                <li>{time}</li>
              </button>
            ))}
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
      <label htmlFor="hour">Valanda: </label>
      <select
        id="hour"
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

      <label htmlFor="minute">Minutė: </label>
      <select
        id="minute"
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

      <button className="clockButton" onClick={handleButtonClick}>
        Pasirinkti ir pridėti laiką
      </button>
    </div>
  );
};

export default AvailableTimeForm;
