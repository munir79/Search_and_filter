import Product from "./products.model.js";

// Create new product
const createProductIntoDb = async (productData) => {
  const product = new Product(productData);
  await product.save();
  return product;
};


const getAllProductsfromDb=async(query)=>{
    let filter={};

     if (query.search) {
    filter.name = {
      $regex: query.search,
      $options: "i", // case-insensitive
    };
  }

  const result=await Product.find(filter);
  return result;
}

export const ProductService={createProductIntoDb,getAllProductsfromDb}