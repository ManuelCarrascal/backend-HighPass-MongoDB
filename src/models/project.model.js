import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    project_title: {
      type: String,
      required: true,
      trim: true,
    },
    project_description: {
      type: String,
      trim: true,
    },
    categories: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Project", ProjectSchema);
