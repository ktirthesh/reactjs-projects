import { useId } from "react";

const Textinput = ({ label }) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" />
    </div>
  );
};

const UseIdExample = () => <Textinput />;

export { UseIdExample };
