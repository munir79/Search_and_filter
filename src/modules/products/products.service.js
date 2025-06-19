import Product from "./products.model.js";

// Create new product
const createProductIntoDb = async (productData) => {
  const product = new Product(productData);
  await product.save();
  return product;
};


export const ProductService={createProductIntoDb}