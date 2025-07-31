import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  useEffect(
    function () {
        if (secondsRemaining <= 0) return;

      const intervalId = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      
      return () => clearInterval(intervalId);
    },
    [dispatch]
  );
  return <div className="timer">{secondsRemaining}</div>;
}

export default Timer;
