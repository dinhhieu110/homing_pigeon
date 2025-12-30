import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    hashedPassword: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    displayName: {
      type: String,
      required: true,
      trim: true,
    },
    avatarUrl: {
      type: String, // link CDN to display avatar
      default: "",
    },
    avatarId: {
      type: String, // Cloudinary public_id to remove avatar when needed
      default: "",
    },
    bio: {
      type: String,
      default: "",
      maxLength: 500,
    },
    phone: {
      type: String,
      sparse: true, // allows null, but enforces uniqueness
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
export default User;
