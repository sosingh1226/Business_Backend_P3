import React from "react";
import Mnav from "../Component/mnav";
import Heading from "../Component/heading";
import Calendar from "../Component/schedule";

function mSchedule() {
	return (
		<div>
			<Heading />
			<Mnav />
			<h2>Schedule</h2>
			<p>This is where a manager can view, change or add to the schedule</p>
			<br></br>
			<Calendar />
		</div>
	);
}

export default mSchedule;
