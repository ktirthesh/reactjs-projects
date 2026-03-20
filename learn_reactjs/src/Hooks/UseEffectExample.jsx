import { useEffect, useState } from "react";
//  Example 1: Fetch Data from API

const UseEffectExample = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));

    // return () => {
    //   second;
    // };
  }, []);
  return (
    <ul>
      {user.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

// Example 1: Custom Hook for Fetching Data
const UseEffectExampleHook = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return users;
};

const UseEffectExampleTwo = () => {
  const users = UseEffectExampleHook();
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export { UseEffectExample, UseEffectExampleTwo };
