import styled from 'styled-components';

const Button = styled.button`
  flex: 1 25%;
  font-weight: 100;
  background-color: #457b9d;
  height: 100px;
  width: 100px;
  font-size: 1.25em;
  color: #edf2f4;
  line-height: 75px;
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
    background-color: #1d3557;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: #e63946;
  font-size: 1em;
  &:hover {
    background-color: #ca1421;
  }
`;

function ControlButton(props) {
  const StartButton = <Button onClick={props.handleStart}>Start</Button>;
  const ActiveButtons = (
    <div>
      <SecondaryButton onClick={props.handleReset}>Reset</SecondaryButton>
      <SecondaryButton onClick={props.handlePause}>
        {props.isPaused ? 'Resume' : 'Pause'}
      </SecondaryButton>
    </div>
  );

  return <div>{props.active ? ActiveButtons : StartButton} </div>;
}

export default ControlButton;

// valuable insight from https://react.school/ui/button .
