import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/eoinlynchcodes")
      .then(response => {
        this.setState({ data: response.data });
        console.log(this.state.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return <h1>Yo</h1>;
  }
}

export default App;
