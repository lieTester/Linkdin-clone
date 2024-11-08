const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Define the experience schema
const experienceSchema = new mongoose.Schema({
   startTime: { type: Date, required: true },
   endTime: { type: Date, required: true },
   organization: { type: String, required: true },
   designation: { type: String, required: true },
   descriptionPointers: { type: String }, // Optional
});

// Define the user schema
const userSchema = new mongoose.Schema({
   name: { type: String, required: true },
   email: { type: String, required: true, unique: true },
   password: { type: String, required: true },
   verified: { type: Boolean, required: true },
   profilePicture: { type: String },
   about: { type: String },
   experience: { type: [experienceSchema] }, // Array of experience objects
});

// Hash the password before saving if it's new or modified
userSchema.pre("save", async function (next) {
   if (!this.isModified("password")) {
      return next();
   }
   try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      next();
   } catch (err) {
      return next(err);
   }
});

// Method to compare passwords
userSchema.methods.matchPasswords = async function (password) {
   return await bcrypt.compare(password, this.password);
};

// Create the model
const User = mongoose.model("User", userSchema);

module.exports = User;
