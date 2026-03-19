import { startTransition, useActionState } from "react";
import { addToCart, removeFromCart } from "../Services/API";
/**
 * useActionState is a React hook designed to simplify handling async actions—especially in forms—by tying the action
 * result directly to component state. It’s commonly used with React Server Actions
 * (e.g., in Next.js App Router), but can also work in client components.
 */
/**
 * Basic idea
 * It lets you: Run an async action (like form submission) Automatically store the result in state Track pending status
 */
// Example (Form submission)
/**
Parameters:
fn → your async action function
initialState → starting value of the state

Returns:
state → latest result from the action
action → function you call (or pass to <form action={...}>)
isPending → boolean indicating loading state
 */
async function submitForm(prevState, formData) {
  const name = formData.get("name");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  if (!name) return { error: "Name is Required." };
  return { success: `Hello, ${name}!` };
}

const UseActionStateExample = () => {
  const [state, formAction, isPending] = useActionState(submitForm, null);
  return (
    <form action={formAction}>
      <input name="name" placeholder="please enter name" />
      <button type="submit" disabled={isPending}>
        {isPending ? "Submitting..." : "Submit"}
      </button>
      {state?.error && <p>{state.error}</p>}
      {state?.success && <p>{state.success}</p>}
    </form>
  );
};
// =============================-------------------========================================================
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
});

const Total = ({ quantity, isPending }) => {
  return (
    <div className="row">
      <span>Total</span>
      {isPending ? "🌀 Updating..." : formatter.format(quantity ** 2)}
    </div>
  );
};

const updateCartAction = async (prevCount, actionPayload) => {
  // eslint-disable-next-line default-case
  switch (actionPayload.type) {
    case "ADD":
      await addToCart(prevCount);
      return prevCount + 1;
    case "REMOVE":
      await removeFromCart(prevCount);
      return prevCount - 1;
  }
  return prevCount;
};

function Checkout() {
  const [count, dispatchAction, isPending] = useActionState(
    updateCartAction,
    0,
  );
  const handleAdd = () =>
    startTransition(() => dispatchAction({ type: "ADD" }));
  const handleRemove = () =>
    startTransition(() => dispatchAction({ type: "REMOVE" }));

  return (
    <div>
      <h1>Eras yout ticket</h1>
      <span>{isPending ? "🌀" : count}</span>
      <br />
      <br />
      <span>
        <button onClick={handleAdd}>Add Item</button>
        <button onClick={handleRemove}>Remove Item</button>
      </span>
      <Total quantity={count} isPending={isPending} />
    </div>
  );
}

export { UseActionStateExample, Checkout };
