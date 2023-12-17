import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTime, setTimes } from "./actions"; // Import the setTimes action

const AvailableTimeForm = () => {
  const dispatch = useDispatch();
  const times = useSelector((state) => state.times);
  const [newTime, setNewTime] = React.useState("");

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
    const newTimes = [...times];
    newTimes.splice(index, 1);
    dispatch(setTimes(newTimes));
  };

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

        <button className="loginButton" onClick={addTimeHandler}>
          Pridėti laiką
        </button>

        <div>
          <h3 className="special-margin">Jūs pridėjote šiuos laikus:</h3>
          <ul>
            {times.map((time, index) => (
              <button
                className="addedTimeButton"
                onClick={() => this.removeTime(index)}
                key={index}
              >
                <li>{time}</li>
              </button>
            ))}
          </ul>
          <h3 className="special-margin">
            Norėdami pašalinti klaidingai pridėtą laiką tiesiog paspauskite ant
            jo.
          </h3>
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
};

export default AvailableTimeForm;
