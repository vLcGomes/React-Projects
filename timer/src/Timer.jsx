import { useState, useEffect, useRef } from 'react';
import './Timer.css';

function Timer() {

  const [isRunning, setIsRunning] = useState(false)
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  const startTime = useRef(0)
  
  useEffect(() => {
    const time = () => {
      setSeconds(startTime.current % 60)
      setHours(Math.floor(startTime.current / 60 / 60))
      setMinutes(Math.floor((startTime.current - (3600 * hours)) / 60))
    }

    if(isRunning) {
      startTime.current = setInterval(() => {
        setSeconds(seconds + 1)
        time()
      }, 1000)
    }
    
    return () => {
      clearInterval(startTime.current)
    }
  }, [isRunning, seconds, hours])

  

  function startTimer() {
    setIsRunning(true)
  }

  const stopTimer = () => {
    setIsRunning(false)
  }

  const resetTimer = () => {
    setSeconds(0)
    setMinutes(0)
    setHours(0)
    clearInterval(startTime.current)
    setIsRunning(false)
  }

  return (
    <div className="timer">
      <h1>Timer</h1>
      <div className="clock">
        <div className="hours">{hours <= 9 ? '0' + hours : hours}</div>
        <div className="minutes">{minutes <= 9 ? '0' + minutes : minutes}</div>
        <div className="seconds">{seconds <= 9 ? '0' + seconds : seconds}</div>
      </div>
      <div className="options">
        <button className="start" onClick={startTimer}>START</button>
        <button className="pause" onClick={stopTimer}>PAUSE</button>
        <button className="reset" onClick={resetTimer}>RESET</button>
      </div>
    </div>
  );
}

export default Timer;
