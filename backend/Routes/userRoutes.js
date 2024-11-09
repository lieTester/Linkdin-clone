const express = require("express");
const {
   addExperience,
   getExperiences,
   updateExperience,
   deleteExperience,
} = require("../Controllers/userController");

const router = express.Router();

// experience routes
router.get("/get-experience", getExperiences);
router.post("/add-experience", addExperience);
router.put("/update-experience/:id", updateExperience);
router.delete("/delete-experience/:id", deleteExperience);

// skill routes
router.get("/get-skills", (req, res) => {
   return res.status(200).send({ msg: "all-skills" });
});
router.post("/add-skill", (req, res) => {
   console.log();
   return res.status(200).send({ msg: "add-skill" });
});
router.delete("/delete-skill/:id", (req, res) => {
   console.log();
   return res.status(200).send({ msg: "delete-skill" });
});

// education routes
router.get("/get-education", (req, res) => {
   return res.status(200).send({ msg: "all-education" });
});
router.post("/add-education", (req, res) => {
   console.log();
   return res.status(200).send({ msg: "add-education" });
});
router.put("/update-education/:id", (req, res) => {
   console.log();
   return res.status(200).send({ msg: "update-education" });
});
router.delete("/delete-education/:id", (req, res) => {
   console.log();
   return res.status(200).send({ msg: "delete-education" });
});

module.exports = router;
