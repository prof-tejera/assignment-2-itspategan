import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 200px;
  height: 200px;
  font-variant-numeric: tabular-nums;
  border-radius: 200px;
  background-color: rgba(0, 0, 0, 0.1);
  border: 4px solid #edf2f4;
  font-size: 36px;
  color: #eeee;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export default function DisplayTime(props) {
  return (
    <Container>
      <span>{('0' + Math.floor((props.time / 60000) % 60)).slice(-2)}:</span>
      <span>{('0' + Math.floor((props.time / 1000) % 60)).slice(-2)}.</span>
      <span>{('0' + ((props.time / 10) % 100)).slice(-2)}</span>
    </Container>
  );
}
