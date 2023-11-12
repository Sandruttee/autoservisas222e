import React from "react";

export default function Owner() {
  var schedule = 5;
  var handleTimeChange = 5;
  var time = 5;
  var handleSaveSchedules = 5;
  return (
    <div>
      <h2>BookMe</h2>
      <main className="dashboard__main">
        <h2 className="dashboard__heading">Select your availability</h2>

        <div className="timezone__wrapper">
          <p>Pick your timezone</p>

          {schedule.map((sch, id) => (
            <div className="form" key={id}>
              <p>{sch.day}</p>
              <div className="select__wrapper">
                <label htmlFor="startTime">Start Time</label>
                <select
                  name="startTime"
                  id="startTime"
                  onChange={(e) => handleTimeChange(e, id)}
                >
                  {time.map((t) => (
                    <option key={t.id} value={t.t} id={t.id}>
                      {t.t}
                    </option>
                  ))}
                </select>
              </div>
              <div className="select__wrapper">
                <label htmlFor="endTime">End Time</label>
                <select
                  name="endTime"
                  id="endTime"
                  onChange={(e) => handleTimeChange(e, id)}
                >
                  {time.map((t) => (
                    <option key={t.id} value={t.t} id={t.id}>
                      {t.t}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>

        <div className="saveBtn__container">
          <button onClick={handleSaveSchedules}>SAVE SCHEDULES</button>
        </div>
      </main>
    </div>
  );
}
