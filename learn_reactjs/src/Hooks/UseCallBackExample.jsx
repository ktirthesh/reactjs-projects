/**useCallback is a React hook that memoizes (caches) a function, 
 * so it doesn’t get recreated on every render unless its dependencies change.
Why use useCallback?
In React, functions are recreated on every render. This can cause:
Unnecessary re-renders of child components
Performance issues (especially with React.memo)
useCallback helps keep the same function reference between renders. 
*/
/**
fn → function you want to cache
dependencies → when these change, function is recreated 
*/

import { useCallback, useState } from "react";

// basic counter example
const CounterCallBackExample = () => {
  const [counter, setCounter] = useState(0);
  const increment = useCallback(() => setCounter((prev) => prev + 1), []);
  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
export default CounterCallBackExample;
