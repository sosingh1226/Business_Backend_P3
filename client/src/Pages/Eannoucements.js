import React from "react";
import Enav from "../Component/enav";
import Heading from "../Component/heading";
import AnnounceContainer from '../Component/AnnounceContainer'

const eAnnoucements = () => {
	return (
		<div>
            <Heading />
			<Enav />
			<h2>ANNOUNCEMENTS</h2>
			Here we will post new annoucements 
			<br></br>
			<AnnounceContainer/>
		</div>
	);
}

export default eAnnoucements;