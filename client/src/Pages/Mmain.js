import React from "react";
import Mnav from "./../Component/mnav";

function MMain() {
		return (
			<div>
				<Mnav />
				<h2>
					{" "}
					Hello{" "}
					<span class="" id="specialtxt">
						{" "}
						username{" "}
					</span>{" "}
				</h2>
				<p>
					{" "}
					Welcome to our employee portal. Review the links above to select a
					task
				</p>
        <h1>MANAGER PAGE</h1>
			</div>
		);
	}

export default MMain;

// This is the main page that a Manager employee will see after logging in
