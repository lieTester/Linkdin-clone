const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const cookieParser = require("cookie-parser");
// Database Import
const connectDB = require("./config/db");
// Routes Import
const authRoutes = require("./Routes/authRoutes");

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

// Connect to database
connectDB();

app.use(express.json());

// Middleware for parsing cookies
app.use(cookieParser());

app.use("/api/auth/", authRoutes);

const port = process.env.PORT || 5001;
const server = app.listen(port, () => {
   console.log(`Server running on port ${port}`);
});

module.exports = server;
