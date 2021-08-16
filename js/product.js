const Product_URL = "https://5d76bf96515d1a0014085cf9.mockapi.io/product/";
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const container = document.getElementById("container");
const cart = document.getElementById("cart");
const cartItems = JSON.parse(window.localStorage.getItem("cart")) || [];
cart.textContent = cartItems.length;
fetch(Product_URL + id)
  .then((res) => res.json())
  .then((res) => {
    const { brand, description, id, price, name } = res;

    const title = document.createElement("h1");
    title.textContent = name;
    container.appendChild(title);

    const addToCart = document.createElement("button");
    addToCart.textContent = "Add to Cart";
    addToCart.addEventListener("click", () => {
      const checkItemIndex = cartItems.findIndex((item) => item.id === res.id);
      if (checkItemIndex !== -1) {
        cartItems[checkItemIndex].qty += 1;
      } else {
        res["qty"] = 1;
        cartItems.push(res);
      }
      const cartItemString = JSON.stringify(cartItems);
      window.localStorage.setItem("cart", cartItemString);
      cart.textContent = cartItems.length;
    });
    container.appendChild(addToCart);
  });
