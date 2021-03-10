import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../Context/UserContext";
import Login from './Loginpage';
import {Link} from "react-router-dom";

const Home = () => {
	const { userData } = useContext(UserContext);
	const history = useHistory();

	useEffect(() => {
		if (!userData.user) history.push("/login");
	}, [userData.user, history]);

	return <div>

<span class="top">EMPLOYEE MANAGEMENT PORTAL</span> 
<p></p>
		<span>Welcome! Please sign in or signup to view contents
<Login />
<p></p>
Don't have an account? <Link to="/Signup"> Click here to Sign Up!</Link>

</span>
	</div>
	;
};

export default Home;