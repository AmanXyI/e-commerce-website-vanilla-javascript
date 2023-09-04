import { getElement } from "../utils.js";
import display from "../displayProducts.js";
const setupSearch = (store) => {
  const form = getElement(".input-form");
  const nameInput = getElement(".search-input");
  form.addEventListener("keyup", function () {
    const value = nameInput.value;
    const filteredData = store.filter((product) => {
      if (product.name.includes(value)) {
        return product;
      }
    });
    display(filteredData, getElement(".products-container"), true);
    if (filteredData.length < 1) {
      const products = getElement(".products-container");
      products.innerHTML = `<h3 class="filter-error">Sorry, no product match your search</h3>`;
    } else {
      display(store, getElement(".products-container"), true);
    }
  });
};

export default setupSearch;
