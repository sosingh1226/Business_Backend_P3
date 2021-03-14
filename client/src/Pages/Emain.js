import React, { useContext, useEffect } from "react";
import Enav from "../Component/enav";
import UserContext from "../Context/UserContext";
import { useHistory } from "react-router-dom";

function Emain() {
	const { userData } = useContext(UserContext);
	const history = useHistory();

	useEffect(() => {
		if (!userData.user) history.push("/");
		
	}, [userData.user, history]);

	return (
		<div>
			<Enav />
			<h2>
				{" "}
				Hello{" "}
				<span class="" id="specialtxt">
					{" "}
					{userData.user ? userData.user.displayName : null}{" "}
				</span>{" "}
			</h2>
			<p>
				{" "}
				Welcome to our employee portal. Review the links above to select a task
			</p>

			<h1>EMPLOYEE PAGE</h1>
		</div>
	);
}

export default Emain;

// This is the main page that a regular employee will see after logging in
