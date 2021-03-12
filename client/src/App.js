import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Loginpage";
import Signup from "./Pages/Signup";
import Mmain from "./Pages/Mmain";
import Emain from "./Pages/Emain";
import Schedule from "./Pages/Schedulepage";
import Profile from "./Pages/Profilepage";
import Pg03 from "./Pages/Page03";
import Pg04 from "./Pages/Page04";
import UserContext from "./Context/UserContext";

function App() {
	const [userData, setUserData] = useState({
		user: undefined,
		token: undefined,
	});
	const checkLoggedIn = async () => {
		let token = localStorage.getItem("auth-token");

		if (token === null) {
			localStorage.setItem("auth-token", "");
			token = "";
		} else {
			const userRes = await axios.get("/", {
				headers: { "x-auth-token": token },
			});

			setUserData({
				token,
				user: userRes.data,
			});
		}
	};

	const logout = () => {
		setUserData({
			token: undefined,
			user: undefined,
		});

		localStorage.setItem("auth-token", "");
	};

	useEffect(() => {
		checkLoggedIn();
	}, []);

	return (
		<div className="App">
			<BrowserRouter>
				<Link to="/login" onClick={logout}>
					Logout
				</Link>

				<UserContext.Provider value={{ userData, setUserData }}>
					<Switch>
						<Route path="/login" component={Login} />
						<Route path="/signup" component={Signup} />
						<Route path="/Mmain" component={Mmain} />
						<Route path="/Emain" component={Emain} />
						<Route path="/Schedulepage" component={Schedule} />
						<Route path="/Profilepage" component={Profile} />
						<Route path="/Page03" component={Pg03} />
						<Route path="/Page04" component={Pg04} />
						<Route path="/" component={Login} />
					</Switch>
				</UserContext.Provider>
			</BrowserRouter>
		</div>
	);
}

export default App;
