import moongose from "mongoose";

export const connectDB = async () => {
  try {
    await moongose.connect(
      "mongodb+srv://manuelCarrascal:Manuel96321@highpass.vt74e3v.mongodb.net/highpass?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(">>> DB is connected");
  } catch (error) {
    console.log(error);
  }
};
