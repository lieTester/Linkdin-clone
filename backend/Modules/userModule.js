const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { encrypter } = require("../Utils/utilFunctions");

// Define the experience schema
const experienceSchema = new mongoose.Schema({
   startTime: { type: Date, required: true },
   endTime: { type: Date, required: true },
   organization: { type: String, required: true },
   designation: { type: String, required: true },
   descriptionPointers: { type: String }, // Optional
});

// Define the education schema
const educationSchema = new mongoose.Schema({
   institution: { type: String, required: true },
   degree: { type: String, required: true },
   fieldOfStudy: { type: String },
   startYear: { type: Number, required: true },
   endYear: { type: Number },
   description: { type: String }, // Optional
});

// Define the skills schema (can be simple or more complex if including endorsements)
const skillSchema = new mongoose.Schema({
   skillName: { type: String, required: true },
   endorsements: { type: Number, default: 0 }, // Optional endorsement count
});

// Define the user schema with experience, education, and skills sections
const userSchema = new mongoose.Schema(
   {
      username: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      verified: { type: Boolean, required: true, default: false },
      profile: { type: String },
      about: { type: String },
      refreshToken: { type: String, required: true, default: " " },
      experience: { type: [experienceSchema] }, // Array of experience objects
      education: { type: [educationSchema] }, // Array of education objects
      skills: { type: [skillSchema] }, // Array of skills
   },
   { timestamps: true }
); // Timestamps for created and updated times

// Define the user schema
const userVerifySchema = new mongoose.Schema({
   email: { type: String, required: true, unique: true },
   password: { type: String, required: true },
   OTP: { type: String, required: true },
});

// Method to compare passwords
userSchema.methods.matchPasswords = async function (password) {
   return await bcrypt.compare(password, this.password);
};

// Create the model
const User = mongoose.model("User", userSchema);
const UserVerification = mongoose.model("UserVerification", userVerifySchema);

module.exports = { User, UserVerification };
