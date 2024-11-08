const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const dbUrl = process.env.DATABASE_URL;

if (!dbUrl) {
   throw new Error("DATABASE_URL is not defined in .env");
}

const connectDB = async () => {
   try {
      await mongoose
         .connect(dbUrl)
         .then(() => {
            console.log("MongoDB connected successfully");
         })
         .catch((err) => {
            console.error("MongoDB connection error:", err.message);
         });
   } catch (error) {
      console.error("MongoDB connection error:", error);
      process.exit(1);
   }
};

module.exports = connectDB;
