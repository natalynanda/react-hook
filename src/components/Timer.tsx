import { useEffect, useRef, useState } from "react";

type TimerProps = {
  milliseconds: number;
  stop: boolean;
};

export const Timer = ({ milliseconds, stop }: TimerProps) => {
  const [seconds, setSeconds] = useState(0);
  const ref = useRef<NodeJS.Timer>();

  useEffect(() => {
    if (stop && ref.current) {
      clearInterval(ref.current);
      ref.current = undefined;
      return;
    }
    ref.current && clearInterval(ref.current);
    ref.current = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, milliseconds);

    return () => {
      ref.current && clearInterval(ref.current);
    };
  }, [milliseconds, stop]);
  return (
    <>
      <h3>
        Timer: <small>{seconds}</small>
      </h3>
    </>
  );
};
