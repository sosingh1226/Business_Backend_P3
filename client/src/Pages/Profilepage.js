import React, {Component} from "react";
import Table from "../utils/Table";
import Mnav from "../Component/mnav";
import Heading from "../Component/heading"

 
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=8').then((response) => response.json()).then((data) => {
      this.setState({ data });
    });
  }

  render() {
    return <div className="home">
      <Mnav />
      <Heading />
      {this.state.data && <Table employees={this.state.data} />}
    </div>;
  }
}