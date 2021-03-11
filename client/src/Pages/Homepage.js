import React, {useState, useEffect} from "react";
import {useHistory} from 'react-router-dom'
import Mmain from "../Pages/Mmain";
import Emain from "../Pages/Emain";
import UserContext from "../Context/UserContext";

const Home = () => {

	// const [userData, setUserData] = useState({
	// 	user: undefined,
	// 	token: undefined,
	// 	role: undefined
	// });
	// console.log(userData.role)

	// const history = useHistory()

	// const adminLogin = () => {
	// 	setUserData({
	// 		role: userData.role
	// 	})
	// 	if (role === "Manager") {
	// 		history.push({Mmain})
	// 	} else {
	// 	if (role === "Employee") {
	// 		history.push({Emain})
	// 	}
	// }

	// useEffect(() => {
	// 	adminLogin();
	// }, []);

	return (
		<div></div>
	)
};

export default Home
