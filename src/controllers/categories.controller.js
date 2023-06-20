import Category from "../models/category.model.js";

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    return res.status(200).json(categories);
  } catch (error) {
    console.log(error);
  }
};

export { getCategories };
