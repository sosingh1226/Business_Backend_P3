import React, { useState, useContext, useEffect } from "react";
import UserContext from "../Context/UserContext";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { Link } from "react-router-dom";


const Login = () => {
	const { userData, setUserData } = useContext(UserContext);
	const [form, setForm] = useState({});
	const history = useHistory();

	const onChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const submit = async (e) => {
		e.preventDefault();

		try {
			const loginRes = await Axios.post("/login", {
				email: form.email,
				password: form.password,
			});

			setUserData({
				token: loginRes.data.token,
				user: loginRes.data.user,
				role: loginRes.data.user.role,
			});

			console.log("Role:-", loginRes.data.user.role)

			localStorage.setItem("auth-token", loginRes.data.token);
			const userRole = loginRes.data.user.role;
			if (userRole === "Manager") {
				history.push("/Mmain");
			} else {
				if (userRole === "Employee") {
					history.push("/Emain");
				}
			}
		} catch (err) {
			console.log("problem", err);
		}
	};

	useEffect(() => {
		if (userData.userData) history.push("/");
	}, [userData.user, history]);

	return (
		<div>
			<span class="top">EMPLOYEE MANAGEMENT PORTAL</span>
			<p></p>
			<span>
				Welcome! Please sign in or signup to view contents
				<form id="form" onSubmit={submit}>
					<label htmlFor="email">Email</label>
					<input type="text" className="loginEmail" name="email" onChange={onChange} />
					<br />
					<label htmlFor="password">Password</label>
					{/* NOTE: Change type to "password" when done testing, below */}
					<input type="text" name="password" className="loginPassword" onChange={onChange} />
					{/* NOTE: Change type to password when done testing, above */}
					<br />
					<input type="submit" value="Login" />
				</form>
				<p></p>
				Don't have an account? <Link to="/Signup"> Click here to Sign Up!</Link>
			</span>
		</div>
	);
};

export default Login;
