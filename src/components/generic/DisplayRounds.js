import React, { Component } from "react";
import styled from "styled-components";

const Text = styled.h1`
  color: #edf2f4;
  font-family: "Lato", sans-serif;
  font-weight: 800;
  font-size: 3rem;
  align-items: center;
  margin: 1px;
`;

Text.defaultProps = {
  value: 0,
};

export class DisplayRounds extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: "#edf2f4" }}>ROUND</h1>
        <Text>{this.props.value}</Text>
      </div>
    );
  }
}

export default DisplayRounds;
