import React, { useState } from 'react';
import styled from 'styled-components';
import DisplayTime from '../generic/DisplayTime';
import ControlButton from '../generic/ControlButton';

const Container = styled.div`
  height: 90%;
  width: 100%;
  border: none;
  border-radius: 10px;
  background: #8d99ae;
  padding: 20px;
  text-align: center;
`;

const Stopwatch = () => {
  // state
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  // useEffect to set and clear interval

  React.useEffect(() => {
    let interval = null;

    // if not paused, increment
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      });
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

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
    </Container>
  );
};

export default Stopwatch;
