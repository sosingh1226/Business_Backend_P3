import React from "react";
import { Link } from "react-router-dom";
import icon from "../Img/774.png";

function Enav() {
	return (
		<header class="container01">
			<span className="top">HUDDLE ROOM</span>{" "}
			<span className="coname">An Employee Management Portal 
			<img src={icon} alt="icon"></img></span>
			<span className="rolenm">EMPLOYEE PAGE</span>
			<nav className="menubar">
				<ul id="nav">
					<li><Link to="/Emain"> HOME</Link></li>
					<li><Link to="/Emppage">SCHEDULE</Link></li>
					<li><Link to="/Eannoucements">ANNOUCEMENTS</Link></li>
					<li><Link to="/Loginpage">LOGOUT</Link></li>
				</ul>

			</nav>
		</header>
	);
}

export default Enav;

// This is the navbar that a regular employee will see after logging in
