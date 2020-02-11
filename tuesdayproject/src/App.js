import React, { Component } from "react";
import axios from "axios";
import UserCard from './components/UserCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/eoinlynchcodes")
      .then(response => {
        this.setState({ data: response.data });
        // console.log(this.state.data);
        // console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    // console.log(this.state.data);
    return <UserCard data={this.state.data}/>;
  }
}

export default App;
