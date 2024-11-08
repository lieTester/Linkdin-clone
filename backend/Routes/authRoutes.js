const express = require("express");
const {
   login,
   register,
   verifyUser,
   forgotPassword,
} = require("../Controllers/userController"); // Ensure this import is correct
const { accessTokenVerifier } = require("../Middlewares/authenticator"); // Ensure this import is correct

const router = express.Router();

// Define the login route
router.post("/login", login); // Pass the login function directly

// Define the register route
router.post("/register", register);

// Define the forgot-password route
router.post("/forgot-password", forgotPassword);

// Define the user-verification route
router.post("/user-verification", verifyUser);

module.exports = router;
