import React from "react";
import Mnav from "../Component/mnav";
import Heading from "../Component/heading";
// import Calendar from "../Component/schedule";
import Calendar from "../Component/Calendar";

function mSchedule() {
	return (
		<div>
			<Heading />
			<Mnav />
			<h2>Schedule</h2>
			<p>This is where a manager can view, change or add to the schedule</p>
			<br></br>
			{/* <Calendar /> */}
      <div className="col-md-6">
        <Calendar/>
      </div>
      
		</div>
	);
}

export default mSchedule;
