import React from "react";
import { Link } from "react-router-dom";
import icon from "../Img/774.png";

function Enav() {
	return (
		<header>
			<span class="top">EMPLOYEE MANAGEMENT PORTAL</span>{" "}
			<span class="coname"> Company Name</span>
			<img src={icon} alt="icon"></img>
			
			{/* <div className="content" id="menu"> */}
			<nav class="menubar">
				<ul id="nav">
					<li><Link to="/Emain"> HOME</Link></li>
					<li><Link to="/Schedulepage">SCHEDULE</Link></li>
					<li><Link to="/Profilepage">EMPLOYEE PROFILES</Link></li>
					<li><Link to="/Loginpage">LOGOUT</Link></li>
				</ul>
			</nav>
		</header>
	);
}

export default Enav;

// This is the navbar that a regular employee will see after logging in
