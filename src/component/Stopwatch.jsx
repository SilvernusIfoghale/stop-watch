import React, { useState } from "react";

export default function Stopwatch() {
  //default time state
  const [time, setTime] = useState({
    ms: 0,
    s: 0,
    m: 0,
    h: 0,
  });
  //time count interval
  const [timerInterval, setTimerInterval] = useState();
  const handleStart = () => {
    run();
    setTimerInterval(setInterval(run, 10));
  };

  //handling Error on DoubleClick
  const [isDisabled, setIsDisabled] = useState(false);

  //time variables
  let updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  //Start-Resume Stopwatch
  const run = () => {
    setIsDisabled(true);
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

  //Reset stopwatch
  const handleReset = () => {
    setIsDisabled(false);
    clearInterval(timerInterval);
    setTime({
      ms: 0,
      s: 0,
      m: 0,
      h: 0,
    });
  };

  //stop-pause stopwatch
  const handleStop = () => {
    setIsDisabled(false);
    clearInterval(timerInterval);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[100vh] bg-gradient-to-tl from-violet-500 to-indigo-500">
        <div className="flex items-center justify-center bg-slate-100 rounded-lg  text-[3.2rem] sm:text-7xl  w-[380px] sm:w-[500px] h-[130px] gap-3 font-semibold ">
          <p>{time.h >= 10 ? time.h : "0" + time.h}</p>{" "}
          <span className="mb-3">:</span>
          <p>{time.m >= 10 ? time.m : "0" + time.m}</p>{" "}
          <span className="mb-3">:</span>
          <p>{time.s >= 10 ? time.s : "0" + time.s}</p>{" "}
          <span className="text-indigo-600 mb-3">:</span>
          <div className="w-10 mr-5 sm:mr-10">
            <p className="text-indigo-600">
              {time.ms >= 10 ? time.ms : "0" + time.ms}
            </p>
          </div>
        </div>
        <div className="flex gap-4 mt-10 text-2xl">
          <button
            disabled={isDisabled}
            onClick={handleStart}
            className="w-28 h-14 bg-white text-indigo-700 rounded-lg font-semibold hover:bg-gray-200"
          >
            Start
          </button>

          <button
            onClick={handleStop}
            className="w-28 h-14 bg-white text-indigo-700 rounded-lg font-semibold hover:bg-gray-200"
          >
            Stop
          </button>
          <button
            onClick={handleReset}
            className="w-28 h-14 bg-white text-indigo-700 rounded-lg font-semibold hover:bg-gray-200"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
