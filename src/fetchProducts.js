import { allProductsUrl } from "./utils.js";

const fetchProducts = async () => {
  try {
    const response = await fetch(allProductsUrl);
    const data = response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default fetchProducts;
