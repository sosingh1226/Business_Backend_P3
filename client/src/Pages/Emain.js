import React, { Component, useEffect, useContext } from "react";
// import UserContext from "../Context/UserContext";
// import { useHistory } from "react-router-dom";
import Enav from "../Component/enav";
import Heading from "../Component/heading";
import Emputils from "../utils/emputils";
import EmpNotes from "../Component/EmpNotes"


// This is the main page that a regular employee will see after logging in
 
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
		// function Emain() {
		// 	const { userData } = useContext(UserContext);
		// 	const history = useHistory();
		
		// 	useEffect(() => {
		// 		if (!userData.user) history.push("/");
				
		// 	}, [userData.user, history]);
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=1').then((response) => response.json()).then((data) => {
      this.setState({ data });
    });
  }

  render() {
    return <div className="home">
      <Enav />
      <Heading />
			<p></p>
			<p>
				{" "}
				Welcome to our employee portal. Review the links above to select a task
			</p>

			<h1>EMPLOYEE PAGE</h1>
      {this.state.data && <Emputils employees={this.state.data} />}
			<br></br>
			<EmpNotes />
    </div>;
  }
}