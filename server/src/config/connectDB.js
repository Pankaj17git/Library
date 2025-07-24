import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const DBUrl = process.env.MONGO_URL;

const connectToDB = async () => {
  try {
    await mongoose.createConnection(DBUrl);
    console.log("Mongodb is connected Successfully !");
  } catch (error) {
    console.error("Failed to connect", error);
    process.exit(1);
    
  }
};

export default connectToDB;