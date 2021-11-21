import React, { Component } from 'react';
import styled from 'styled-components';

const Text = styled.h1`
  color: #edf2f4;
  font-family: 'Lato', sans-serif;
  font-weight: 800;
  font-size: 3rem;
  align-items: center;
  margin: 1px;
`;

Text.defaultProps = {
  round: 0,
};

const DisplayRounds = () => {
  return (
    <div>
      <h1 style={{ color: '#edf2f4' }}>ROUND</h1>
      <Text>0</Text>
    </div>
  );
};

export default DisplayRounds;
