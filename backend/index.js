import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
// Database Import
import connectDB from "./config/db";
// Routes Import
import authRoutes from "./Routes/authRoutes";

dotenv.config();

const app = express();
const hosts = process.env.FRONT_HOSTS;
if (!hosts) {
   throw new Error("FRONT_HOSTS is not defined in .env");
}
app.use(
   cors({
      origin: hosts,
      credentials: true,
   })
);
// connect to database
connectDB();

app.use(express.json());

// middleware cookiesparser
app.use(cookieParser());

app.use("/api/auth/", authRoutes);

const port = process.env.PORT || 5001;
const server = app.listen(port, () => {
   console.log(`On port ${port}`);
});
