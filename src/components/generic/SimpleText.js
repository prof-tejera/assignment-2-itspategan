import React from 'react';
import styled from 'styled-components';

const Text = styled.h1`
  color: #edf2f4;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 1.25rem;
  align-items: center;
  margin-bottom: 1px;
`;

const SimpleText = (props) => {
  return (
    <div>
      <Text>{props.value}</Text>
    </div>
  );
};

export default SimpleText;
