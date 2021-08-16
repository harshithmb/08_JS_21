const container = document.getElementById("container");
const cart = document.getElementById("cart");
const cartItems = JSON.parse(window.localStorage.getItem("cart")) || [];
cartItems.length &&
  cartItems.map((item) => {
    const card = document.createElement("h1");
    card.textContent = `${item.name} QTY : ${item.qty}`;
    container.appendChild(card);
  });
