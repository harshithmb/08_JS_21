const Product_URL = "https://5d76bf96515d1a0014085cf9.mockapi.io/product";
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
fetch(Product_URL + id)
  .then((res) => res.json())
  .then((res) => {});
