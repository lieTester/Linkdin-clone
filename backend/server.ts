import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(
   cors({
      origin: [
         // "Access-Control-Allow-Origin",
         process.env.FRONT_HOSTS,
      ],
      credentials: true,
   })
);

app.use(express.json());

// middleware cookiesparser
app.use(cookieParser());
const dbUrl = process.env.DATABASE_URL;

if (!dbUrl) {
   throw new Error("DATABASE_URL is not defined in .env");
}

mongoose
   .connect(dbUrl)
   .then(() => {
      console.log("MongoDB connected successfully");
   })
   .catch((err) => {
      console.error("MongoDB connection error:", err.message);
   });

app.use("/");
