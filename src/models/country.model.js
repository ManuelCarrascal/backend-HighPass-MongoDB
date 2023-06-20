import mongoose from "mongoose";

const CountrySchema = new mongoose.Schema({
  name_contry: {
    type: String,
  },
});

export default mongoose.model("Country", CountrySchema);
