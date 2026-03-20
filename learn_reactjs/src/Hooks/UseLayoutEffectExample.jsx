import { useLayoutEffect, useRef, useState } from "react";

const Box = () => {
  const [width, setWidth] = useState();
  const boxRef = useRef(null);
  useLayoutEffect(() => {
    const rect = boxRef.current.getBoundingClientRect();
    setWidth(rect.width);
  }, []);
  return (
    <div>
      <div
        ref={boxRef}
        style={{ width: "200px", height: "100px", background: "lightblue" }}
      >
        Box
      </div>
      <p>width:{width}px</p>
    </div>
  );
};

const UseLayoutEffectExample = () => {
  return (
    <div>
      <Box />
    </div>
  );
};

export { UseLayoutEffectExample };
