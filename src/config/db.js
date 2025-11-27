import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mydatabase");
    console.log("MongoDB Connected 🚀");
  } catch (error) {
    console.log("MongoDB Connection Error ❌", error);
  }
};

export default connectDB;
// yashdhanani16_db_user

// yash123

// mongodb+srv://yashdhanani16_db_user:yash123@mongodb.rfzauar.mongodb.net/
