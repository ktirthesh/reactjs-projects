const addToCart = async (count) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return count + 1;
};

const removeFromCart = async (count) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return Math.max(0, count - 1);
};

export { removeFromCart, addToCart };
