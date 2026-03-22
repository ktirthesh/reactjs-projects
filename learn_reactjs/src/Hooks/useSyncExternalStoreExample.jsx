// useSyncExternalStore is a React hook (introduced in React 18) used to safely subscribe to external stores
// (like Redux, custom stores, browser APIs) in a way that works with concurrent rendering.

import { useSyncExternalStore } from "react";

let count = 0;
let listeners = new Set();
const store = {
  increment() {
    count++;
    listeners.forEach((listener) => listener());
  },
  getSnapShot() {
    return count;
  },
  subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
};

const Counter = () => {
  const count = useSyncExternalStore(store.subscribe, store.getSnapShot);
  return (
    <div>
      <p>Count::{count}</p>
      <button onClick={store.increment}>Increment</button>
    </div>
  );
};
export default Counter;
