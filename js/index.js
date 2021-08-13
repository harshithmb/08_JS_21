const PRODUCTS_URL = "https://5d76bf96515d1a0014085cf9.mockapi.io/product";
const clothing = document.querySelector("#clothing-content");

{
  /* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */
}
fetch(PRODUCTS_URL)
  .then((res) => res.json())
  .then((res) => {
    res.slice(0, 4).map((item, index) => {
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
      cardBtn.href = `/product?id=1`;
      cardBody.append(cardBtn);

      card.append(cardBody);

      clothing.append(card);
    });
  });
