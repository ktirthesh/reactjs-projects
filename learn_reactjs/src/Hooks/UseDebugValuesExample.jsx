import { useDebugValue, useEffect, useState } from "react";

const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sizeLabel = width < 600 ? "small" : width < 1024 ? "medium" : "large";
  useDebugValue(sizeLabel);
  return { width, sizeLabel };
};

const WindowSize = () => {
  const { sizeLabel, width } = useWindowSize();
  return (
    <div>
      <p>window width:{width}</p>
      <p>size category:{sizeLabel}</p>
    </div>
  );
};
export default WindowSize;
