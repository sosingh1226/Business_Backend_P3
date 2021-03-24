import React from "react";
import Enav from "../Component/enav";
import Heading from "../Component/heading";
import Calendar from "../Component/Calendar";

function empPage() {
	return (
		<div>
			<Heading />
			<Enav />
			<h2>EMPLOYEE PAGE</h2>
			<p>Content to be decided. Adding Calendar and request time off status </p>

			<div className="col-md-6">
				<Calendar />
			</div>
		</div>
	);
}

export default empPage;
