import React, { useState } from "react";
import Mnav from "../Component/mnav";
import Heading from "../Component/heading";
import AnnounceContainer from "../Component/AnnounceContainer";

const MAnnoucements = () => {
	return (
		<div>
			<Heading />
			<Mnav />
			<h2>ANNOUNCEMENTS</h2>
			Here we will post new annoucements
			<br></br>
			<h1>Manager</h1>
			<AnnounceContainer />
		</div>
	);
};

export default MAnnoucements;
