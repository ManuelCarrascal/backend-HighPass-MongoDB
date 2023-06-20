import mongoose from "mongoose";

const SampleSchema = new mongoose.Schema({
  sample_title: {
    type: String,
    trim: true,
    required: true,
  },
  sample_description: {
    type: String,
    trim: true,
  },
  categories: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

export default mongoose.model("Sample", SampleSchema);
