import './Timer.css';

function Timer() {
  return (
    <div className="timer">
      <h1>Timer</h1>
      <div className="clock">
        <div className="hours">00</div>
        <div className="minutes">00</div>
        <div className="seconds">00</div>
      </div>
      <div className="options">
        <button className="start">START</button>
        <button className="pause">PAUSE</button>
        <button className="reset">RESET</button>
      </div>
    </div>
  );
}

export default Timer;
