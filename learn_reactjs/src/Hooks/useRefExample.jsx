// useRef in React is a hook that lets you persist values across renders without causing re-renders. It’s commonly used for:
// Accessing DOM elements
// Storing mutable values (like timers, previous state, etc.)

import { useRef } from "react";

// Example 1: Accessing an Input Field (Focus)

const InputFocus = () => {
  const inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input ref={inputRef} placeholder="Type Something..." />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};
export default InputFocus;
