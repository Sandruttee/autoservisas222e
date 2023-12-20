import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTime, setTimes } from "./actions";

const AvailableTimeForm = () => {
  const dispatch = useDispatch();
  const times = useSelector((state) => state.times);
  const [newTime, setNewTime] = React.useState("");
  const [deletedIndices, setDeletedIndices] = React.useState([]);

  const handleInputChange = (e) => {
    setNewTime(e.target.value);
  };

  const addTimeHandler = () => {
    if (newTime !== "") {
      dispatch(addTime(newTime));
      setNewTime("");
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
          Įveskite savo laiką, kuriuo esate laisvas. <br />{" "}
          <div className="smaller-font">Pavyzdys: 10:00-11:00</div>
        </h1>
        <input
          type="text"
          value={newTime}
          onChange={handleInputChange}
          className="loginInput"
        />

        <button className="loginButton" onClick={addTimeHandler}>
          Pridėti laiką
        </button>

        <div>
          <h3 className="special-margin">
            Jūs pridėjote šiuos laikus: <br />{" "}
            <div className="small-font">
              (norėdami pašalinti klaidingai pridėtą laiką tiesiog paspauskite
              ant jo){" "}
            </div>
          </h3>
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

export default AvailableTimeForm;
