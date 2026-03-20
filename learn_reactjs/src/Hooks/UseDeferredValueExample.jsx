import { useDeferredValue, useMemo, useState } from "react";

const BigList = Array.from({ length: 10000 }, (_, i) => `Item-${i}`);

const UseDeferredValueExample = () => {
  const [query, setquery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const isLoading = query !== deferredQuery;
  const FilteredList = useMemo(() => {
    return BigList.filter((item) =>
      item.toLowerCase().includes(deferredQuery.toLowerCase()),
    );
  }, [deferredQuery]);
  return (
    <div>
      <input
        // disabled={isLoading }
        value={query}
        onChange={(e) => setquery(e.target.value)}
        placeholder="Search..."
      />
      {isLoading && <div className="spinner">Loading...</div>}
      <ul style={{ opacity: isLoading ? 0.5 : 1 }}>
        {FilteredList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseDeferredValueExample;
