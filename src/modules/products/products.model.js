import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: String,
  category: String,
  price: Number,
});

const Product = mongoose.model("Product", productSchema);
export default Product;
