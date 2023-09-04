import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupCompanies = (store) => {
  const btnContainer = getElement(".companies");

  const companies = ["all", ...new Set(store.map((item) => item.company))];
  btnContainer.innerHTML = companies
    .map((company) => {
      return `<button class="company-btn">${company}</button>`;
    })
    .join("");
  btnContainer.addEventListener("click", (e) => {
    const item = e.target;
    if (item.classList.contains("company-btn")) {
      const name = item.textContent.toLowerCase();
      if (name === "all") {
        display(store, getElement(".products-container"), true);
        return;
      }
      const filteredStore = store.filter((item) => {
        if (item.company === name) {
          return item;
        }
      });
      display(filteredStore, getElement(".products-container"));
    }
  });
};

export default setupCompanies;
