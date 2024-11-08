const jwt = require("jsonwebtoken");
const { User, UserVerification } = require("../Modules/userModule");
const { encrypter } = require("../Utils/utilFunctions");
const {
   generateToken,
   decrypter,
   getExpiry,
   makeAvatar,
} = require("../Utils/utilFunctions");
const { mailit } = require("../Utils/mail");

// Define the login handler
exports.login = async (req, res) => {
   const { email, password } = req.body;

   try {
      // Find the user by email
      const user = await User.findOne({ email });
      if (!user || !(await user.matchPasswords(password))) {
         return res.status(400).json({ message: "Invalid credentials" });
      }

      const accessToken = generateToken(
         user._id,
         process.env.ACCESS_SECRET_KEY,
         // chnge 1d > 1m after work completed on api
         "10m"
      );
      const refreshToken = generateToken(
         { "jwt-token": "refreshToken", id: user._id },
         process.env.REFRESH_SECRET_KEY,
         "22d"
      );

      await user.updateOne({
         $set: {
            refreshToken: refreshToken,
         },
      });

      res.cookie("SESSION_ID", refreshToken, {
         httpOnly: true,
         secure: process.env.NODE_ENV === "production" ? true : false, // with secure we cannot work at localhost
         sameSite: "none",
         maxAge: getExpiry(22),
      });
      return res.status(200).json({
         msg: "Login successfull",
         token: accessToken,
         username: user.username,
         id: user._id,
         profile: user.profile,
      });
   } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: "Server error" });
   }
};

// Define the register handler
exports.register = async (req, res) => {
   try {
      const { username, email, password, profile } = req.body;
      const emailCheck = await User.findOne({ email: email });
      if (emailCheck) {
         return res.status(302).json({ msg: "Email already exists" });
      }

      // send mail with defined transport object
      const { transporter, OTP, option } = mailit(email);
      await transporter
         .sendMail(option)
         .then(async () => {
            await User.create({
               email: email,
               username: username,
               password: password,
               profile: profile || (await makeAvatar(username)),
            }).then(async () => {
               await UserVerification.create({
                  email: email,
                  OTP: OTP,
               });
            });
         })
         .catch((err) => {
            throw err;
         });

      return res.status(200).send({
         msg: "Check your mail for verification!",
      });
   } catch (error) {
      console.error(error);
      return res
         .status(500)
         .send({ msg: "Registeration not sucessfull", error: error });
   }
};
// Define the register handler
exports.forgotPassword = async (req, res) => {
   try {
      const { email, newpassword } = req.body;
      const emailCheck = await User.findOne({ email: email });
      if (!emailCheck) {
         return res.status(400).json({ msg: "User not found" });
      }

      // send mail with defined transport object
      const { transporter, OTP, option } = mailit(email);
      await transporter
         .sendMail(option)
         .then(async () => {
            await User.updateOne(
               { email: email },
               {
                  $set: {
                     password: await encrypter(newpassword),
                     verified: false,
                  },
               }
            ).then(async () => {
               await UserVerification.create({
                  email: email,
                  OTP: OTP,
               });
            });
         })
         .catch((err) => {
            throw err;
         });

      return res.status(200).send({
         msg: "Check your mail for verification!",
      });
   } catch (error) {
      console.error(error);
      return res
         .status(500)
         .send({ msg: "Server Error for newPassword", error: error });
   }
};

// Define the register handler
exports.verifyUser = async (req, res) => {
   const { email, OTP } = req.body;

   try {
      // Find the user by email
      const verify = await UserVerification.findOne({ email });
      if (!verify || verify.OTP !== OTP) {
         return res.status(400).json({ message: "Invalid credentials" });
      }
      // Send the token in the response
      await UserVerification.deleteOne({ email: email });
      const user = await User.findOne({ email });
      await user.updateOne({
         $set: {
            verified: true,
         },
      });
      res.status(200).json({ msg: "Success try login now!" });
   } catch (error) {
      console.error("Verification error:", error);
      res.status(500).json({ message: "Server error" });
   }
};
