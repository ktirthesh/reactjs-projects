import { useInsertionEffect } from "react";

const StyledBox = ({ style_name, color }) => {
  useInsertionEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
        .${style_name} {
        width: 100px;
        height: 100px;
        background-color: ${color};
      }`;
    document.head.appendChild(style);
    return () => document.head.appendChild(style);
  }, [color]);
  return <div className={style_name}></div>;
};

const UseInsertionEffectExample = () => {
  return (
    <>
      <StyledBox style_name={"hello"} color={"green"} />
      <StyledBox style_name={"hello2"} color={"blue"} />
    </>
  );
};

export default UseInsertionEffectExample;
