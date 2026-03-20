import { forwardRef, useImperativeHandle, useRef } from "react";
/**
 * Use it only when necessary, such as:
Controlling focus, animations, or scrolling
Integrating with third-party libraries
Triggering child functions from parent
Avoid overusing it—React prefers declarative patterns via props/state
 */
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
    clear: () => {
      inputRef.current.value = "";
    },
  }));
  return <input ref={inputRef} type="text" placeholder="enter text here...." />;
});

const UseImperativeHandleExample = () => {
  const inputRef = useRef();
  return (
    <div>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
      <button onClick={() => inputRef.current.clear()}>Clear Input</button>
    </div>
  );
};

export { UseImperativeHandleExample };
