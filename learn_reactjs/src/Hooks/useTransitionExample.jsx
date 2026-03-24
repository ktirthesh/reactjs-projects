import { useState, useTransition } from "react";

const expensiveSearch = (query) => {
  const data = Array.from({ length: 900000 }, (_, i) => `Item ${i}`);
  const start = performance.now();
  while (performance.now() - start < 50) {
    // block CPU for ~50ms
  }
  if (!query) return data.slice(0, 50);
  return data
    .filter((item) => item.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 50); // limit results
};

export function ResultsList({ data }) {
  if (!data.length) {
    return <p>No results found</p>;
  }

  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [results, setResult] = useState([]);
  const [isPending, startTransition] = useTransition();
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    startTransition(() => {
      const filtered = expensiveSearch(value);
      setResult(filtered);
    });
  };
  return (
    <>
      <input value={query} onChange={handleChange} />
      {isPending && <p>Loading...</p>}
      <ResultsList data={results} />
    </>
  );
};
export default SearchComponent;
