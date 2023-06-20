import mongoose from "mongoose";
import Country from "./country.model.js";

const DepartmentSchema = new mongoose.Schema({
  name_department: {
    type: String,
    required: true,
  },
  country: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Country",
    required: true,
  },
});

export default mongoose.model("Department", DepartmentSchema);
