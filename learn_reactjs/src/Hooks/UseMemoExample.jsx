/**
 * What useMemo does-useMemo memoizes (caches) the result of a calculation so
 *  it only recomputes when dependencies change.
 * This helps improve performance for expensive operations.
 */

import { useMemo, useState } from "react";

const ExpensiveComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  //   expensive calc
  const expensiveCalc = useMemo(() => {
    console.log("calculating...");
    let result = 0;
    for (let i; i < 1e7; i++) {
      result += 1;
    }
    return result + count;
  }, [count]);
  return (
    <div>
      <h2>Expensive value:::{expensiveCalc}</h2>
      <button onClick={() => setCount(count + 1)}>Increment value</button>
      <input
        type="text"
        placeholder="Type Something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};
export default ExpensiveComponent;
