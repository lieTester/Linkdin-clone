import express from "express";
import { login } from "../Controllers/userController"; // Ensure this import is correct

const router = express.Router();

// Define the login route
router.post("/login", login); // Pass the login function directly

// Example for the register route
router.post("/register", (req, res) => {
   res.status(200).json({ message: "Register successful" });
});

export default router;
