import { useState } from "react";
import { Timer } from "./Timer";

export const MainTimer = () => {
  const [milliseconds, setMilliseconds] = useState(1000);
  const [stop, setStop] = useState(false);

  const changeMilliseconds = (num: number = 1000): void => {
    setMilliseconds(num);
  };
  return (
    <>
      <h1>Main Timer</h1>
      <hr />
      <span>Milliseconds {1000}</span>
      <button
        className="btn btn-outline-primary mt-2"
        onClick={() => changeMilliseconds(1000)}
      >
        1000
      </button>

      <button
        className="btn btn-outline-primary mt-2"
        onClick={() => {
          changeMilliseconds(2000);
        }}
      >
        2000
      </button>

      <button
        className="btn btn-outline-primary mt-2"
        onClick={() => {
          setStop(!stop);
        }}
      >
        {stop ? "Start" : "Stop"}
      </button>
      <Timer milliseconds={milliseconds} stop={stop} />
    </>
  );
};
