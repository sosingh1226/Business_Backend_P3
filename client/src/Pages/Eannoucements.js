import React, { useState } from "react";
import Enav from "../Component/enav";
import Heading from "../Component/heading";
import EannounceContainer from "../Component/EannounceContainer";

const Eannoucements = () => {
	return (
		<div>
			<Heading />
			<Enav />
			<h2>ANNOUNCEMENTS</h2>
			Here we will post new annoucements
			<br></br>
			<h1>employee</h1>
			<EannounceContainer />
		</div>
	);
};

export default Eannoucements;
