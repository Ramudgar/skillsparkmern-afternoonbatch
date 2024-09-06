const CategoryModel = require("../models/categoryModel");

// controller to create a new category

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await CategoryModel.findOne({ name });
    if (category) {
      return res.status(400).json({ message: "Category already exists" });
    }
    const newCategory = new CategoryModel({ name });
    const categoryResponse = await newCategory.save();
    return res
      .status(201)
      .json({ message: "Category created", category: categoryResponse });
  } catch (error) {
    // console.log(error);
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

module.exports = { createCategory };
