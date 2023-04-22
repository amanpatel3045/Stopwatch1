
import React, { useState, useRef } from 'react';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const handleStart = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  };

  const handleStop = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const handleReset = () => {
    setTime(0);
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

 

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>{time}</p>
      <div>
        {!isRunning && (
          <button onClick={handleStart}>Start</button>
        )}
        {isRunning && (
          <>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Stopwatch;
