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
			console.log(loginRes);
			setUserData({
				token: loginRes.data.token,
				user: loginRes.data.user,
			});

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
			alert("problem", err);
		}
	};

	return (
		<div>
			<span className="top">HUDDLE ROOM</span>
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
						placeholder="First & Last Name"
					></input>
					<br></br>

					{/* NOTE: Change type to "password" when done testing, below */}
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
					{/* NOTE: Change type to password when done testing, above */}

					<br />
					<label>Select Job Title:</label>{" "}
					<select name="role" onChange={onChange} placeholder="Job Title">
						<option value="Select">Select</option>
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