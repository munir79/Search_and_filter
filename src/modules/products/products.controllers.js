import { ProductService } from "./products.service.js";

// Create product controller
export const createProductController = async (req, res, next) => {
  try {
    const newProduct = await ProductService.createProductIntoDb(req.body);
    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: newProduct,
    });
  } catch (err) {
    next(err);
  }
};




export const ProductController={createProductController}