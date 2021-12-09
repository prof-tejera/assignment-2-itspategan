import React, { Component } from "react";
import styled from "styled-components";

const TextInput = styled.input`
  width: 100px;
  height: 50px;
  padding: 10px;
  margin: 10px;
  border: 2px solid #ef233c;
  border-radius: 5px;
  font-size: 40px;
`;

class Input extends Component {
  render() {
    return (
      <div>
        <TextInput />
      </div>
    );
  }
}

export default Input;
