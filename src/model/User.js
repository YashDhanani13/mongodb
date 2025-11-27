import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,       // prevent duplicate emails
      lowercase: true,    // converts to lowercase
      trim: true,         // removes spaces
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  }
);

const User = mongoose.model("User", UserSchema);

export default User;
