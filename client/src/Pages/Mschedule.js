import React from "react";
import Mnav from "../Component/mnav";
import Calendar from "../Component/Calendar";

function mSchedule() {
	return (
		<div>
			<Mnav />
			<h2> SCHEDULE </h2>
			<p>This is you can can view, change or add to the schedule</p>
			<br></br>
			{/* <Calendar /> */}
      <div className="col-md-6">
        <Calendar/>
      </div>
      
		</div>
	);
}

export default mSchedule;
