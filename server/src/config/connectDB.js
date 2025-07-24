import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const DBUrl = process.env.MONGO_URL;

const connectToDB = async () => {
  try {
    await mongoose.connect(DBUrl);
    console.log("MongoDB is connected successfully!");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
    process.exit(1);
  }
};

export default connectToDB;
