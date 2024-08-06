import React, { useState } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState({
    ms: 0,
    s: 0,
    m: 0,
    h: 0,
  });
  const [timerInterval, setTimerInterval] = useState();
  const handleStart = () => {
    run();
    setTimerInterval(setInterval(run, 10));
  };

  let updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedS = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({
      ms: updatedMs,
      s: updatedS,
      m: updatedM,
      h: updatedH,
    });
  };

  const handleReset = () => {
    clearInterval(timerInterval);
    setTime({
      ms: 0,
      s: 0,
      m: 0,
      h: 0,
    });
  };
  const handleStop = () => {
    clearInterval(timerInterval);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[100vh] bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div className="flex items-center justify-center bg-slate-100 rounded-lg text-6xl py-2 px-4 font-semibold">
          <p>{time.h >= 10 ? time.h : "0" + time.h}</p> <span>:</span>
          <p>{time.m >= 10 ? time.m : "0" + time.m}</p> <span>:</span>
          <p>{time.s >= 10 ? time.s : "0" + time.s}</p> <span>:</span>
          <p>{time.ms >= 10 ? time.ms : "0" + time.ms}</p>
        </div>
        <div className="flex gap-3 mt-10">
          <button
            onClick={handleStart}
            className="w-24 h-10 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-400"
          >
            Start
          </button>
          <button
            onClick={handleStop}
            className="w-24 h-10 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-400"
          >
            Stop
          </button>
          <button
            onClick={handleReset}
            className="w-24 h-10 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-400"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
