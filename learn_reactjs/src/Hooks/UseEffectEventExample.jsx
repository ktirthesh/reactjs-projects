import { useEffect, useEffectEvent, useState } from "react";

const UseEffectEvenetTimer = () => {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);
  const onTick = useEffectEvent(() => {
    setCount(count + increment);
  });
  useEffect(() => {
    const id = setInterval(() => onTick(), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <>
      <h1>
        Counter: {count}
        <button onClick={() => setCount(0)}>Reset</button>
      </h1>
      <br />
      <p>
        Every second increment by
        <button onClick={() => setIncrement((i) => i + 1)}>+</button>
        <b>{increment}</b>
        <button onClick={() => setIncrement((i) => i - 1)}>-</button>
      </p>
    </>
  );
};
export { UseEffectEvenetTimer };
