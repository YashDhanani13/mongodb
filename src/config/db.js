import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("");
    console.log("MongoDB Connected 🚀");
  } catch (error) {
    console.log("MongoDB Connection Error ❌", error);
  }
};

export default connectDB;
