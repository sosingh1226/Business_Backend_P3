import React from "react";
import { Link } from "react-router-dom";
import icon from "../Img/774.png";


function Mnav() {
	return (
		<header>
			
			<span class="top">EMPLOYEE MANAGEMENT PORTAL</span>{" "}
			<span class="coname"> Company Name</span>
			<img src={icon} alt="icon"></img>
			<nav class="menubar">
				<ul>
					<li>
						<Link to="/Mmain"> HOME</Link>
					</li>
					<li>
						<Link to="/Schedulepage">SCHEDULE</Link>
					</li>
					<li>
						<Link to="/Profilepage">EMPLOYEE PROFILES</Link>
					</li>
					<li>
						<Link to="/Page03">CLOCK IN/OUT</Link>
					</li>
					<li>
						<Link to="/Page04">ANNOUCEMENTS</Link>
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
