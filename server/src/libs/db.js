import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTIONSTRING);
    console.log("Connected to DB successfully");
  } catch (error) {
    console.error("Error connecting to DB:", error);
    process.exit(1);
  }
};
