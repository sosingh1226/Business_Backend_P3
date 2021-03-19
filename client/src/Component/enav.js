import React from "react";
import { Link } from "react-router-dom";
import icon from "../Img/774.png";

function Enav() {
	return (
		<header>
			<span className="top">EMPLOYEE MANAGEMENT PORTAL</span>{" "}
			<span className="coname"> - EMPLOYEE</span>
			<img src={icon} alt="icon"></img>
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
