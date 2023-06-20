import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  category_name: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Category", CategorySchema);
