const express = require("express");

const router = express.Router();

// experience routes
router.get("/get-experience", (req, res) => {
   console.log("get-experience");
   return res
      .status(200)
      .send({ msg: "all-experiences", data: [req.user, req.body] });
});
router.post("/add-experience", (req, res) => {
   console.log();
   return res.status(200).send({ msg: "add-experience" });
});
router.patch("/update-experience/:id", (req, res) => {
   console.log();
   return res.status(200).send({ msg: "update-experience" });
});
router.delete("/delete-experience/:id", (req, res) => {
   console.log();
   return res.status(200).send({ msg: "delete-experience" });
});

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
