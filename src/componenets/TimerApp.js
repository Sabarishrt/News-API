import React, { useEffect, useState } from "react";

function TimerApp() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (running) {
      timer = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [running]);

  return (
    <div>
      <h2>Timer Application</h2>
      <p>{seconds} seconds</p>

      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Stop</button>
      <button onClick={() => {
        setSeconds(0);
      }}>
        Reset
      </button>
    </div>
  );
}

export default TimerApp;
