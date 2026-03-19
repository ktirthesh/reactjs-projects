async function addToCart() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

async function removeFromCart() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

export { removeFromCart, addToCart };
