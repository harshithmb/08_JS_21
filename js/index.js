const PRODUCTS_URL = "https://5d76bf96515d1a0014085cf9.mockapi.io/product";
const clothing = document.querySelector("#clothing-content");

const cart = document.getElementById("cart");
const cartItems = JSON.parse(window.localStorage.getItem("cart")) || [];
cart.textContent = cartItems.length;
// const searchValue = document.querySelector("#search").value;

let originalProducts = []; // 10 products
fetch(PRODUCTS_URL)
  .then((res) => res.json())
  .then((res) => {
    originalProducts = res;
    originalProducts.slice(0, 4).map((item, id) => {
      const card = document.createElement("div");
      card.className = "card m-2";
      card.style.width = "18rem";
      //   card.addEventListener("click", () => {
      //     window.location.href = `/product/${item.id}`;
      //   });

      const cardImg = document.createElement("img");
      cardImg.className = "card-img-top";
      cardImg.src = item.preview;
      card.append(cardImg);

      const cardBody = document.createElement("div");
      cardBody.className = "card-body";

      const cardTitle = document.createElement("h5");
      cardTitle.className = "card-title";
      cardTitle.textContent = item.name;
      cardBody.append(cardTitle);

      const cardPrice = document.createElement("h5");
      cardPrice.className = "card-title";
      cardPrice.textContent = `Rs. ${item.price}`;
      cardBody.append(cardPrice);

      const cardBtn = document.createElement("a");
      cardBtn.className = "btn btn-primary";
      cardBtn.textContent = "More Details";
      cardBtn.href = `/product.html?id=${id}`;
      cardBody.append(cardBtn);

      card.append(cardBody);

      clothing.append(card);
    });
  });

products =
  searchValue &&
  originalProducts.filter((item) => item.name.includes(searchValue));
if (products.length) {
  products.map((item, id) => {
    const card = document.createElement("div");
    card.className = "card m-2";
    card.style.width = "18rem";
    //   card.addEventListener("click", () => {
    //     window.location.href = `/product/${item.id}`;
    //   });

    const cardImg = document.createElement("img");
    cardImg.className = "card-img-top";
    cardImg.src = item.preview;
    card.append(cardImg);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = item.name;
    cardBody.append(cardTitle);

    const cardPrice = document.createElement("h5");
    cardPrice.className = "card-title";
    cardPrice.textContent = `Rs. ${item.price}`;
    cardBody.append(cardPrice);

    const cardBtn = document.createElement("a");
    cardBtn.className = "btn btn-primary";
    cardBtn.textContent = "More Details";
    cardBtn.href = `/product.html?id=${id}`;
    cardBody.append(cardBtn);

    card.append(cardBody);

    clothing.append(card);
  });
} else {
  originalProducts.map((item, id) => {
    const card = document.createElement("div");
    card.className = "card m-2";
    card.style.width = "18rem";
    //   card.addEventListener("click", () => {
    //     window.location.href = `/product/${item.id}`;
    //   });

    const cardImg = document.createElement("img");
    cardImg.className = "card-img-top";
    cardImg.src = item.preview;
    card.append(cardImg);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = item.name;
    cardBody.append(cardTitle);

    const cardPrice = document.createElement("h5");
    cardPrice.className = "card-title";
    cardPrice.textContent = `Rs. ${item.price}`;
    cardBody.append(cardPrice);

    const cardBtn = document.createElement("a");
    cardBtn.className = "btn btn-primary";
    cardBtn.textContent = "More Details";
    cardBtn.href = `/product.html?id=${id}`;
    cardBody.append(cardBtn);

    card.append(cardBody);

    clothing.append(card);
  });
}
