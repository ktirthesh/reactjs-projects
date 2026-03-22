import { useOptimistic, useState } from "react";

/**
 * In React (especially with the new concurrent features), useOptimistic is a hook that helps you optimistically update UI
 * before a server action completes—great for things like comments, likes, or todos.
 *
 * What useOptimistic does
 *  -Immediately update the UI (optimistic state)
 *  -Assume success
 *  -Roll back automatically if the real state differs
 */
const Comments = () => {
  const [comments, setComments] = useState([]);
  const [optimisticComments, addOptimisiticComments] = useOptimistic(
    comments,
    (state, newComment) => [...state, newComment],
  );

  const handleAddComments = async (formData) => {
    const text = formData.get("comment");
    addOptimisiticComments({ text, sending: true });
    await new Promise((res) => setTimeout(res, 1000));
    setComments((prev) => [...prev, { text }]);
  };

  return (
    <div>
      <form action={handleAddComments}>
        <input name="comment" placeholder="Write Comment..." />
        <button type="submit">Send</button>
      </form>
      <ul>
        {optimisticComments.map((c, i) => (
          <li key={i}>
            {c.text}
            {c.sending && <small>(sending....)</small>}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Comments;
