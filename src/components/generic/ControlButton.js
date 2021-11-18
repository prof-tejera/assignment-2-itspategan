import { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
  flex: 1 25%;
  font-weight: 100;
  background-color: #ef233c;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  font-size: 1.25em;
  color: #edf2f4;
  line-height: 100px;
  padding: 5px 15px;
  border-radius: 100px;
  border: 2px solid #edf2f4;
  outline: 0;
  text-transform: uppercase;
  text-align: center;
  margin: 10px;
  cursor: pointer;
  transition: ease background-color 100ms;
  &:hover {
    background-color: #d90429;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  height: "125px",
  width: "125px",
};

class ControlButton extends Component {
  static propTypes = {
    value: PropTypes.string,
  };
  render() {
    return <Button>{this.props.value}</Button>;
  }
}

export default ControlButton;

// valuable insight from https://react.school/ui/button .
