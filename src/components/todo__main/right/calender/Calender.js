import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CalendarComp() {
  // set states of calendar date
  const [calDate, setCalDate] = useState(new Date());

  function onChange(calDate) {
    // change results based on calendar date click
    setCalDate(calDate);
  }

  return (
    <div style={{ alignSelf: "center" }} className="result-calendar">
      <Calendar onChange={onChange} value={calDate} />
    </div>
  );
}
