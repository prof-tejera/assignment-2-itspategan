import React, { useState } from 'react';
import styled from 'styled-components';
import DisplayTime from '../generic/DisplayTime';
import ControlButton from '../generic/ControlButton';
import Input from '../generic/Input';
import SimpleText from '../generic/SimpleText';

const Container = styled.div`
  height: 90%;
  width: 100%;
  border: none;
  background: #8d99ae;
  padding: 20px;
  text-align: center;
`;

const Countdown = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(10000);
  // const [startTime, setStartTime] = useState();

  React.useEffect(() => {
    let interval = null;

    // if not paused, decrement
    if (isActive && isPaused === false && time > 0) {
      interval = setInterval(() => {
        setTime((time) => time - 10);
      });
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused, time]);

  // handlers
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <Container>
      <DisplayTime time={time} />
      <div>
        <ControlButton
          active={isActive}
          isPaused={isPaused}
          handleStart={handleStart}
          handlePause={handlePause}
          handleReset={handleReset}
        />
      </div>
      <SimpleText value={'SET TIME'} />
      <Input />
    </Container>
  );
};

export default Countdown;
