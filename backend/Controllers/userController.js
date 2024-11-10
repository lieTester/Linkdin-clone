const { User } = require("../Modules/userModule");

exports.getExperiences = async (req, res) => {
   const _iduser = req.user;
   try {
      const user = await User.findById(_iduser);
      if (!user) {
         return res.status(404).send({ msg: "User not found" });
      }
      return res.status(200).send({
         msg: "Experience retrieved successfully",
         data: user.experience,
      });
   } catch (error) {}
};

exports.addExperience = async (req, res) => {
   const userId = req.user; // Assuming req.user has the authenticated user's ID
   const {
      startTime,
      endTime,
      organization,
      designation,
      descriptionPointers,
   } = req.body;

   try {
      // Find the user by ID
      const user = await User.findById(userId);
      if (!user) {
         return res.status(404).json({ msg: "User not found" });
      }

      if (!startTime || !endTime || !organization || !designation) {
         return res.status(404).json({
            msg: "Missing required fields: startTime or endTime or organization or designation or all!",
         });
      }

      // Add new experience to the experience array
      user.experience.push({
         startTime,
         endTime,
         organization,
         designation,
         descriptionPointers,
      });

      // Save the updated user document
      await user.save();

      return res.status(201).json({
         msg: "Experience added successfully",
         experience: user.experience[user.experience.length - 1],
      });
   } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Error adding experience", error });
   }
};

exports.updateExperience = async (req, res) => {
   const _iduser = req.user; // Assuming req.user contains the authenticated user's ID
   const _idexperience = req.params.id;
   const {
      startTime,
      endTime,
      organization,
      designation,
      descriptionPointers,
   } = req.body;

   try {
      // Find the user
      const user = await User.findById(_iduser);
      if (!user) {
         return res.status(404).json({ msg: "User not found" });
      }

      // Find the specific experience by its ID
      const experience = user.experience.id(_idexperience);
      if (!experience) {
         return res.status(404).json({ msg: "Experience not found" });
      }

      // Update the experience fields
      experience.startTime = startTime || experience.startTime;
      experience.endTime = endTime || experience.endTime;
      experience.organization = organization || experience.organization;
      experience.designation = designation || experience.designation;
      experience.descriptionPointers =
         descriptionPointers || experience.descriptionPointers;

      // Save the updated user document
      await user.save();

      return res.status(200).json({
         msg: "Experience updated successfully",
         experience,
      });
   } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Error updating experience", error });
   }
};

exports.deleteExperience = async (req, res) => {
   const _iduser = req.user; // Assuming req.user contains the authenticated user's ID
   const _idexperience = req.params.id;

   try {
      const user = await User.findById(_iduser);
      if (!user) {
         return res.status(404).json({ msg: "User not found" });
      }

      // Find the specific experience by its ID
      const experience = user.experience.id(_idexperience);
      if (!experience) {
         return res.status(404).json({ msg: "Experience not found" });
      }

      // Remove the experience from the array
      user.experience.pull({ _id: _idexperience });

      // Save the updated user document
      await user.save();

      return res.status(200).json({ msg: "Experience deleted successfully" });
   } catch (error) {
      console.error(error);
      return res
         .status(500)
         .json({ msg: "Internal Server Error", error: error.message });
   }
};

// Education API paths
exports.getEducation = async (req, res) => {
   const _iduser = req.user;
   try {
      const user = await User.findById(_iduser);
      if (!user) {
         return res.status(404).send({ msg: "User not found" });
      }
      return res.status(200).send({
         msg: "Education retrieved successfully",
         data: user.education,
      });
   } catch (error) {}
};

exports.addEducation = async (req, res) => {
   const userId = req.user; // Assuming req.user has the authenticated user's ID
   const {
      institution,
      degree,
      fieldOfStudy,
      startYear,
      endYear,
      description,
   } = req.body;

   try {
      // Find the user by ID
      const user = await User.findById(userId);
      if (!user) {
         return res.status(404).json({ msg: "User not found" });
      }
      if (!institution || !degree || !startYear) {
         return res.status(404).json({
            msg: "Missing required fields: institution or degree or startYear or all!",
         });
      }
      // Add new education to the education array
      user.education.push({
         institution,
         degree,
         fieldOfStudy,
         startYear,
         endYear,
         description,
      });

      // Save the updated user document
      await user.save();

      return res.status(201).json({
         msg: "Education added successfully",
         education: user.education[user.education.length - 1],
      });
   } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Error adding education", error });
   }
};

exports.updateEducation = async (req, res) => {
   const _iduser = req.user; // Assuming req.user contains the authenticated user's ID
   const _ideducation = req.params.id;
   const {
      institution,
      degree,
      fieldOfStudy,
      startYear,
      endYear,
      description,
   } = req.body;

   try {
      // Find the user
      const user = await User.findById(_iduser);
      if (!user) {
         return res.status(404).json({ msg: "User not found" });
      }

      // Find the specific education by its ID
      const education = user.education.id(_ideducation);
      if (!education) {
         return res.status(404).json({ msg: "Education not found" });
      }

      // Update the education fields
      education.institution = institution || education.institution;
      education.degree = degree || education.degree;
      education.fieldOfStudy = fieldOfStudy || education.fieldOfStudy;
      education.startYear = startYear || education.startYear;
      education.endYear = endYear || education.endYear;
      education.description = description || education.description;

      // Save the updated user document
      await user.save();

      return res.status(200).json({
         msg: "Education updated successfully",
         education: user.education.id(_ideducation),
      });
   } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Error updating education", error });
   }
};

exports.deleteEducation = async (req, res) => {
   const _iduser = req.user; // Assuming req.user contains the authenticated user's ID
   const _ideducation = req.params.id;

   try {
      const user = await User.findById(_iduser);
      if (!user) {
         return res.status(404).json({ msg: "User not found" });
      }

      // Find the specific education by its ID
      const education = user.education.id(_ideducation);
      if (!education) {
         return res.status(404).json({ msg: "Education not found" });
      }

      // Remove the education from the array
      user.education.pull({ _id: _ideducation });

      // Save the updated user document
      await user.save();

      return res.status(200).json({ msg: "Education deleted successfully" });
   } catch (error) {
      console.error(error);
      return res
         .status(500)
         .json({ msg: "Internal Server Error", error: error.message });
   }
};

// Skill API paths
exports.getSkills = async (req, res) => {
   const _iduser = req.user;
   try {
      const user = await User.findById(_iduser);
      if (!user) {
         return res.status(404).send({ msg: "User not found" });
      }
      return res.status(200).send({
         msg: "skill retrieved successfully",
         data: user.skills,
      });
   } catch (error) {}
};

exports.addSkill = async (req, res) => {
   const userId = req.user; // Assuming req.user has the authenticated user's ID
   let { newSkills } = req.body; // We need to allow reassignment, so `let` is used.

   try {
      // Find the user by ID
      const user = await User.findById(userId);
      if (!user) {
         return res.status(404).json({ msg: "User not found" });
      }

      // Filter out skills that already exist in the user's skills array
      const existingSkills = user.skills.map((skill) => skill.skillName);
      const newSkillsToAdd = newSkills.filter(
         (skill) => !existingSkills.includes(skill)
      );

      // If no new skills to add, return a 409 Conflict response
      if (newSkillsToAdd.length === 0) {
         return res.status(409).json({ msg: "All skills already exist!" });
      }

      // Add new skills to the user's skills array
      newSkillsToAdd.forEach((skill) => {
         user.skills.push({ skillName: skill });
      });

      // Save the updated user document
      await user.save();

      return res.status(201).json({
         msg: "Skills added successfully",
         skills: user.skills.filter((skill) =>
            newSkillsToAdd.includes(skill.skillName)
         ),
      });
   } catch (error) {
      console.error(error);
      return res
         .status(500)
         .json({ msg: "Error adding skills", error: error.message });
   }
};

exports.deleteSkill = async (req, res) => {
   const _iduser = req.user; // Assuming req.user contains the authenticated user's ID
   const _idskill = req.params.id;

   try {
      const user = await User.findById(_iduser);
      if (!user) {
         return res.status(404).json({ msg: "User not found" });
      }

      // Find the specific skill by its ID
      const skill = user.skills.id(_idskill);
      if (!skill) {
         return res.status(404).json({ msg: "Skill not found" });
      }

      // Remove the skill from the array
      user.skills.pull({ _id: _idskill });

      // Save the updated user document
      await user.save();

      return res.status(200).json({ msg: "Skill deleted successfully" });
   } catch (error) {
      console.error(error);
      return res
         .status(500)
         .json({ msg: "Internal Server Error", error: error.message });
   }
};
