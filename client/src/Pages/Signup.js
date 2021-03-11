import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";
import { useHistory, Link } from "react-router-dom";
import Axios from "axios";


const Signup = () => {
	const { setUserData } = useContext(UserContext);
	const [form, setForm] = useState();
	const history = useHistory();

	const onChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const submit = async (e) => {
		e.preventDefault();
		try {
			await Axios.post("/register", form);
			const loginRes = await Axios.post("/login", {
				email: form.email,
				password: form.password,
			});

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

	return (
		<div>
			<span class="top">EMPLOYEE MANAGEMENT PORTAL</span>
			<p></p>
			<span>
				Welcome! Please sign in or signup to view contents
				<form onSubmit={submit}>
					<input
						onChange={onChange}
						type="text"
						name="email"
						placeholder="email"
					></input>{" "}
					<input
						onChange={onChange}
						type="text"
						name="displayName"
						placeholder="Display name"
					></input>
					<br></br>
					<input
						onChange={onChange}
						type="text"
						name="password"
						placeholder="password"
					></input>{" "}
					<input
						onChange={onChange}
						type="text"
						name="passwordCheck"
						placeholder="passwordCheck"
					></input>
					<br />
					<label>Select Job Title:</label>{" "}
					<select name="role" onChange={onChange} placeholder="Job Title">
						<option disabled >Select</option>
						<option value="Employee">Employee</option>
						<option value="Manager">Manager</option>
					</select>
			
					<br></br>
					<input type="submit"></input>
				</form>
				Already have an account? <Link to="/login"> Click here to Login!</Link>
			</span>
		</div>
	);
};

export default Signup;
