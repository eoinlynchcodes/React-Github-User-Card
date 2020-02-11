import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 5px solid red;
`;

class UserCard extends React.Component {
  constructor(props) {
    super(props);
    console.log(this);
    this.state = {
      data: this
    };
  }

  render() {
    console.log(this.props.data);
    return (
      <Card>
        <img src="https://avatars0.githubusercontent.com/u/51007160?v=4"></img>
        <h1> {this.props.data.login}</h1>
        <h1> {this.props.data.name} </h1>
        <h1> {this.props.data.location} </h1>
      </Card>
    );
  }
}

export default UserCard;
