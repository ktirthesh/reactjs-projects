// useContext is a React Hook that lets you read and subscribe to context from your component.
import { createContext, useContext } from "react";

const ThemeContext = createContext(null);

const MyApp = () => (
  <ThemeContext value="dark">
    <Form />
  </ThemeContext>
);
const Form = () => (
  <Panel title="Welcome">
    <Button>Sign Up</Button>
    <Button>Login</Button>
  </Panel>
);

const Panel = ({ title, children }) => {
  const theme = useContext(ThemeContext);
  const className = `panel-${theme}`;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
};
const Button = ({ children }) => {
  const theme = useContext(ThemeContext);
  const className = `button-${theme}`;
  return <button className={className}>{children}</button>;
};

export default MyApp;
