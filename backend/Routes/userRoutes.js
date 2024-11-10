const express = require("express");
const {
   addExperience,
   getExperiences,
   updateExperience,
   deleteExperience,
   addEducation,
   getEducation,
   updateEducation,
   deleteEducation,
   addSkill,
   getSkills,
   deleteSkill,
} = require("../Controllers/userController");

const router = express.Router();

// experience routes
router.get("/get-experience", getExperiences);
router.post("/add-experience", addExperience);
router.put("/update-experience/:id", updateExperience);
router.delete("/delete-experience/:id", deleteExperience);

// education routes
router.get("/get-education", getEducation);
router.post("/add-education", addEducation);
router.put("/update-education/:id", updateEducation);
router.delete("/delete-education/:id", deleteEducation);

// skill routes
router.get("/get-skills", getSkills);
router.post("/add-skill", addSkill);
router.delete("/delete-skill/:id", deleteSkill);

module.exports = router;
