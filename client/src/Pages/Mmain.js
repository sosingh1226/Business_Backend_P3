import React, { useContext, useEffect } from "react";
import Mnav from "./../Component/mnav";
import UserContext from "../Context/UserContext";
import { useHistory } from "react-router-dom";
// import Heading from "../Component/heading";
import pic from "../Img/imgmn.PNG";


function MMain() {
	const { userData } = useContext(UserContext);
	const history = useHistory();

	useEffect(() => {
		if (!userData.user) history.push("/");
		
	}, [userData.user, history]);

		return (
			<div>
				<Mnav />
				<h2>
					
					{" "}
					Hello{" "}
					<span className="" id="specialtxt">
						{" "}
						{userData.user ? userData.user.displayName : null}{" "}
					</span>{" "}
				</h2>
				<p>
					{" "}
					<img src={pic} alt="pic"></img>
					<p></p>
					Welcome to our employee portal. Review the links above to select a
					task
				</p>
				
		
			</div>
		);
	}

export default MMain;

// This is the main page that a Manager employee will see after logging in
