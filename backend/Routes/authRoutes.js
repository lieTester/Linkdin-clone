const express = require("express");
const {
   login,
   logout,
   register,
   verifyUser,
   refreshToken,
   forgotPassword,
} = require("../Controllers/authController"); // Ensure this import is correct

const router = express.Router();

// Define the login route
router.post("/login", login); // Pass the login function directly
router.post("/logout", logout);

// Define the register route
router.post("/register", register);

// Define the forgot-password route
router.post("/forgot-password", forgotPassword);

// Define the user-verification route
router.post("/user-verification", verifyUser);

// Define the get-access-by-refreshToken route
router.post("/get-access-by-refreshToken", refreshToken);

module.exports = router;
