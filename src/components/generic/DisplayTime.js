import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 200px;
  background-color: rgba(0, 0, 0, 0.1);
  border: 4px solid #edf2f4;
  font-size: 48px;
  color: #eeee;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export class DisplayTime extends Component {
  render() {
    return <Container>00:00</Container>;
  }
}

export default DisplayTime;
