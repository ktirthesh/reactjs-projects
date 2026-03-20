import React, { useReducer } from "react";
/**useReducer is a React Hook used for managing complex state logic. It’s an alternative to useState, especially when:
State depends on previous state
There are multiple sub-values
Logic is more structured 
*/
/**
 * useState vs useReducer
useState	useReducer
Simple state	Complex logic
Direct updates	Action-based updates
Easy to use	More scalable
 */
/**
 * When to Use
Use useReducer when:
You have multiple related state values
State transitions are complex
You want predictable state flow
 */

const initialState = { age: 2 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increamented_age":
      return { age: state.age + 1 };
    case "decrement_age":
      return { age: state.age - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>Hello! you are {state.age}</p>
      <button onClick={() => dispatch({ type: "increamented_age" })}>
        Increament age
      </button>
      <button onClick={() => dispatch({ type: "decrement_age" })}>
        Decrement age
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};

export default UseReducerExample;
