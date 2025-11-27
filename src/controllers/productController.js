import { Product } from "../model/Product.js";

// Get all products
export const getProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, products });
  } catch (error) {
    console.error("Get products error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create product
export const createProduct = async (req, res) => {
  try {
    const { name, price, category, description, image, rating } = req.body;
    
    // Validation
    if (!name || !price || !category || !description) {
      return res.status(400).json({ 
        success: false, 
        message: "Name, price, category, and description are required" 
      });
    }

    const newProduct = await Product.create({
      name,
      price: Number(price),
      category,
      description,
      image: image || "https://via.placeholder.com/150",
      rating: Number(rating) || 0,
    });

    res.status(201).json({ success: true, product: newProduct });
  } catch (error) {
    console.error("Create product error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    
    const deletedProduct = await Product.findByIdAndDelete(id);
    
    if (!deletedProduct) {
      return res.status(404).json({ 
        success: false, 
        message: "Product not found" 
      });
    }

    res.status(200).json({ 
      success: true, 
      message: "Product deleted successfully" 
    });
  } catch (error) {
    console.error("Delete product error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};