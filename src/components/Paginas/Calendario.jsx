import React from "react";


const CalendarEvent1 = ({ day, startTime, endTime, description }) => {
  const gridStyle = {
    gridColumn: day,
    gridRow: `h${startTime} / h${endTime}`,
  };

  return (
    <li className="event work" style={gridStyle}>
      {description}
    </li>
  );
};

const CalendarEvent2 = ({ day, startTime, endTime, description }) => {
  const gridStyle = {
    gridColumn: day,
    gridRow: `h${startTime} / h${endTime}`,
  };

  return (
    <li className="event personal" style={gridStyle}>
      {description}
    </li>
  );
};

const Calendar = () => {
  return (
    <ul className="calendar weekly-byhour">
      <CalendarEvent1 day="mon" startTime={"08"} endTime={"12"} description="Aldo" />
      <CalendarEvent1 day="wed" startTime={"10"} endTime={"19"} description="Hans" />
      <CalendarEvent2 day="fri" startTime={"16"} endTime={"23"} description="Cordero"/>

    <li className="day sun">Sun</li>
    <li className="day mon">Mon</li>
    <li className="day tue">Tue</li>
    <li className="day wed">Wed</li>
    <li className="day thu">Thu</li>
    <li className="day fri">Fri</li>
    <li className="day sat">Sat</li>
    <li className="time h00">12:00 am</li>
    <li className="time h01">1:00 am</li>
    <li className="time h02">2:00 am</li>
    <li className="time h03">3:00 am</li>
    <li className="time h04">4:00 am</li>
    <li className="time h05">5:00 am</li>
    <li className="time h06">6:00 am</li>
    <li className="time h07">7:00 am</li>
    <li className="time h08">8:00 am</li>
    <li className="time h09">9:00 am</li>
    <li className="time h10">10:00 am</li>
    <li className="time h11">11:00 am</li>
    <li className="time h12">12:00 pm</li>
    <li className="time h13">1:00 pm</li>
    <li className="time h14">2:00 pm</li>
    <li className="time h15">3:00 pm</li>
    <li className="time h16">4:00 pm</li>
    <li className="time h17">5:00 pm</li>
    <li className="time h18">6:00 pm</li>
    <li className="time h19">7:00 pm</li>
    <li className="time h20">8:00 pm</li>
    <li className="time h21">9:00 pm</li>
    <li className="time h22">10:00 pm</li>
    <li className="time h23">11:00 pm</li>
    <li className="corner"></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  );
};

export default Calendar;
