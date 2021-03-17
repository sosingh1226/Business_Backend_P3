import React from "react";
import { Link } from "react-router-dom";



function Mnav() {
	return (
		<header>
			<nav class="menubar">
				<ul>
					<li>
						<Link to="/Mmain"> HOME</Link>
					</li>
					<li>
						<Link to="/Mschedule">SCHEDULE</Link>
					</li>
					<li>
						<Link to="/Profilepage">EMPLOYEE PROFILES</Link>
					</li>
		
					<li>
						<Link to="/Mannoucements">ANNOUCEMENTS</Link>
					</li>

					<li><Link to="/Loginpage">LOGOUT</Link></li>
				</ul>
				<br></br>
				<span class="team">
					APPLICATION BROUGHT TO YOU BY THE SHANGHAI TEAM
				</span>
				<br></br>
			</nav>
		</header>
	);
}

export default Mnav;

// This is the navbar that a Manager employee will see after logging in
