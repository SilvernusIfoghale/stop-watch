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
      <div className="flex">
        <div className="w-10 h-10 border-gray-400 border-2 flex justify-center items-center m-4">
          <p className="font-semibold text-2xl">
            {time.h >= 10 ? time.h : "0" + time.h}
          </p>
        </div>
        <div className="w-10 h-10 border-gray-400 border-2 flex justify-center items-center m-4">
          <p className="font-semibold text-2xl">
            {time.m >= 10 ? time.m : "0" + time.m}
          </p>
        </div>
        <div className="w-10 h-10 border-gray-400 border-2 flex justify-center items-center m-4">
          <p className="font-semibold text-2xl">
            {time.s >= 10 ? time.s : "0" + time.s}
          </p>
        </div>
        <div className="w-10 h-10 border-gray-400 border-2 flex justify-center items-center m-4">
          <p className="font-semibold text-2xl">
            {time.ms >= 10 ? time.ms : "0" + time.ms}
          </p>
        </div>
        <button
          onClick={handleStart}
          className="w-24 h-10 bg-blue-500 text-white rounded-lg"
        >
          Start
        </button>
        <button
          onClick={handleReset}
          className="w-24 h-10 bg-blue-500 text-white rounded-lg"
        >
          Reset
        </button>
        <button
          onClick={handleStop}
          className="w-24 h-10 bg-blue-500 text-white rounded-lg"
        >
          Stop
        </button>
      </div>
    </>
  );
}
