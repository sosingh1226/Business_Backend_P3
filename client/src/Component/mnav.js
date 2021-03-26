import React from "react";
import { Link } from "react-router-dom";
import icon from "../Img/774.png";


function Mnav() {
	return (

<header class="container01">
			<span className="top">HUDDLE ROOM</span>{" "}
			<span className="coname">An Employee Management Portal 
			<img src={icon} alt="icon"></img></span>
			<span className="rolenm">MANAGER PAGE</span>

			<nav className="menubar">
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
						<Link to="/Mannouncements">ANNOUNCEMENTS</Link>
					</li>

					<li><Link to="/Loginpage">LOGOUT</Link></li>
				</ul>
				<br></br>
				<span className="team">
					APPLICATION BROUGHT TO YOU BY THE SHANGHAI TEAM
				</span>
				<br></br>
			</nav>
		</header>
	);
}

export default Mnav;

// This is the navbar that a Manager employee will see after logging in