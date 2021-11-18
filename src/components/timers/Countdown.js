import React from "react";
import styled from "styled-components";
import DisplayTime from "../generic/DisplayTime";
import ControlButton from "../generic/ControlButton";
import Input from "../generic/Input";
import SimpleText from "../generic/SimpleText";

const Container = styled.div`
  height: 90%;
  width: 100%;
  border: none;
  background: #8d99ae;
  padding: 20px;
  text-align: center;
`;

class Stopwatch extends React.Component {
  render() {
    return (
      <Container>
        <DisplayTime></DisplayTime>
        <div>
          <ControlButton value={"start"} />
          <ControlButton value={"pause"} />
        </div>
        <SimpleText value={"SET TIME"} />
        <Input />
      </Container>
    );
  }
}

export default Stopwatch;
