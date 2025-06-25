import Product from './products.model.js';

// Create new product
const createProductIntoDb = async (productData) => {
  const product = new Product(productData);
  await product.save();
  return product;
};

const getAllProductsfromDb = async (query) => {
  let filter = {};

  //  way -1---------------
  //    if (query.search) {
  //   filter.brand = {
  //     $regex: query.search,
  //     $options: "i",
  //   };
  // }

  //  way--*************************-2********************************
  if (query.search) {
    const searchRegex = {
      $regex: query.search,
      $options: 'i',
    };

    filter = {
      $or: [{ name: searchRegex }, { brand: searchRegex }, { category: searchRegex }],
    };
  }

  // *************************************************dynamic way  ********************************************

  //   if(query.search){
  //     const searchFields=["name","brand","category"];
  //     const SearchRegex={
  //       $regex:query.search,
  //       $options:'i'
  //     }
  //  filter.$or = searchFields.map(field => ({
  //       [field]: SearchRegex
  //     }));

  //   }

  // *************************************************dynamic way end *********************************

  // ****************************************************filtering **********************************

  // filter by brand
  if (query.brand) {
    filter.brand = query.brand;
  }

  // filter by category
  if (query.category) {
    filter.category = query.category;
  }

  // filter by price range

  const result = await Product.find(filter);
  return result;
};

export const ProductService = { createProductIntoDb, getAllProductsfromDb };
