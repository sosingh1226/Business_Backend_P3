import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Pages/Loginpage";
import Signup from "./Pages/Signup";
import Mmain from "./Pages/Mmain";
import Emain from "./Pages/Emain";
import mSchedule from "./Pages/Mschedule";
import Profile from "./Pages/Profilepage";
import empPage from "./Pages/Emppage";
import EAnnoucements from "./Pages/Eannoucements";
import MAnnoucements from "./Pages/mannoucements";
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
				<UserContext.Provider value={{ userData, setUserData }}>
					<Switch>
						<Route path="/login" component={Login} />
						<Route path="/signup" component={Signup} />
						<Route path="/Mmain" component={Mmain} />
						<Route path="/Emain" component={Emain} />
						<Route path="/Mschedule" component={mSchedule} />
						<Route path="/Profilepage" component={Profile} />
						<Route path="/Emppage" component={empPage} />
						<Route path="/Eannoucements" component={EAnnoucements} />
						<Route path="/Mannoucements" component={MAnnoucements} />
						<Route path="/" component={Login} />
					</Switch>
				</UserContext.Provider>
			</BrowserRouter>
		</div>
	);
}

export default App;
