import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupPrice = (store) => {
  const priceInput = getElement(".price-filter");
  const priceValue = getElement(".price-value");

  let maxPrice = store.map((product) => product.price);
  maxPrice = Math.ceil(Math.max(...maxPrice) / 100);
  priceInput.value = maxPrice;
  priceInput.max = maxPrice;
  priceInput.min = 0;
  priceValue.textContent = `Value : $${priceInput.value}`;

  priceInput.addEventListener("input", function () {
    const value = parseInt(priceInput.value);
    priceValue.textContent = `Value : $${value}`;
    let filteredStore = store.filter((product) => {
      if (product.price / 100 <= value) return product;
    });

    display(filteredStore, getElement(".products-container"), true);
    if (filteredStore.length < 1) {
      const products = getElement(".products-container");
      products.innerHTML = `<h3 class="filter-error">Sorry, no product match your search</h3>`;
    }
  });
};

export default setupPrice;
