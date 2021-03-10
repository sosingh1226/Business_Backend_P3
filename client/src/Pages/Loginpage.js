import React, { useState, useContext, useEffect } from "react";
import UserContext from "../Context/UserContext";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { Link } from "react-router-dom";
import icon from "../Img/774.png";

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
			console.log(loginRes);

			setUserData({
				token: loginRes.data.token,
				user: loginRes.data.user,
			});

			localStorage.setItem("auth-token", loginRes.data.token);
			history.push("/");
		} catch (err) {
			console.log("problem", err);
		}
	};

	useEffect(() => {
		if (userData.user) history.push("/");
	}, [userData.user, history]);

	return (
		<div>
			<span class="top">EMPLOYEE MANAGEMENT PORTAL</span>
			<p></p>
			<span>
				Welcome! Please sign in or signup to view contents
				<form id="form" onSubmit={submit}>
					<label htmlFor="email">Email</label>
					<input type="text" name="email" onChange={onChange} />
					<label htmlFor="password">Password</label>
					<input type="text" name="password" onChange={onChange} />
					<input type="submit" value="Submit" />
				</form>
				<p></p>
				Don't have an account? <Link to="/Signup"> Click here to Sign Up!</Link>
			</span>
		</div>
	);
};

export default Login;
