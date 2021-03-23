import React from "react";
import Mnav from "../Component/mnav";
import Heading from "../Component/heading";
import AnnounceContainer from "../Component/AnnounceContainer";

const MAnnouncements = () => {
	return (
		<div class="pagetitle">
			<Heading />
			<Mnav />
			<h2>ANNOUNCEMENTS</h2>
			Here we will post new annoucements
			<br></br>
			<AnnounceContainer />
		</div>
	);
};

export default MAnnouncements;
