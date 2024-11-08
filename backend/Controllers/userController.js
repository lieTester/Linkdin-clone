const jwt = require("jsonwebtoken");
const User = require("../Modules/userModule");

// Load JWT_SECRET from the environment variables
const JWT_SECRET = process.env.JWT_SECRET;

// Define the login handler
const login = async (req, res) => {
   const { email, password } = req.body;

   try {
      // Find the user by email
      const user = await User.findOne({ email });
      if (!user || !(await user.matchPasswords(password))) {
         return res.status(400).json({ message: "Invalid credentials" });
      }

      // Generate a JWT token
      const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
         expiresIn: "1h",
      });

      // Send the token in the response
      res.status(200).json({ token });
   } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: "Server error" });
   }
};

module.exports = { login };
