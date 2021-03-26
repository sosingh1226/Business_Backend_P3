import React from "react";
import Enav from "../Component/enav";
import Calendar from "../Component/Calendar";

function empPage() {
	return (
		<div>
			<Enav />
			<h2>EMPLOYEE SCHEDULE</h2>
			<p>View the schedule for the entire month here. Contact your manager for any questions regarding schedule</p>

			<div className="col-md-6">
				<Calendar />
			</div>
		</div>
	);
}

export default empPage;
