import Product from './products.model.js';

// Create new product
const createProductIntoDb = async (productData) => {
  const product = new Product(productData);
  await product.save();
  return product;
};

const getAllProductsfromDb = async (query) => {
  let filter = {};

  //    if (query.search) {
  //   filter.brand = {
  //     $regex: query.search,
  //     $options: "i",
  //   };
  // }

  if (query.search) {
    const searchRegex = {
      $regex: query.search,
      $options: 'i',
    };

    filter = {
      $or: [{ name: searchRegex }, { brand: searchRegex }, { category: searchRegex }],
    };
  }

  // name, brand , categorey

  const result = await Product.find(filter);
  return result;
};

export const ProductService = { createProductIntoDb, getAllProductsfromDb };
