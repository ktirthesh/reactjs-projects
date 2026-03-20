//  Example 1: Fetch Data from API

import { useEffect, useState } from "react";

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

export { UseEffectExample };
