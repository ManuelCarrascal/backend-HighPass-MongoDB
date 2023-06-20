import mongoose from "mongoose";

const CitySchema = new mongoose.Schema({
  name_city: {
    type: String,
    required: true,
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
    required: true,
  },
  country: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Country",
    required: true,
  },
});

export default mongoose.model("City", CitySchema);
