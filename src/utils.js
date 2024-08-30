const allProductsUrl =
  "https://justcors.com/tl_035203b/https://course-api.com/javascript-store-products";
// temporary single product
// 'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog'
const singleProductUrl =
  "https://justcors.com/tl_035203b/https://course-api.com/javascript-store-single-product";

const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(
    `Please check "${selection}" selector, no such element exist`
  );
};

const formatPrice = (price) => {
  let formatedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  }).format((price * 10).toFixed(2));
  return formatedPrice;
};

const getStorageItem = (name) => {
  let storageItem = localStorage.getItem(name);
  if (storageItem) {
    storageItem = JSON.parse(localStorage.getItem(name));
  } else {
    storageItem = [];
  }
  return storageItem;
};
const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
};

export {
  allProductsUrl,
  singleProductUrl,
  getElement,
  formatPrice,
  getStorageItem,
  setStorageItem,
};
