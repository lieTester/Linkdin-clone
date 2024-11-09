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
      console.log(experience, _idexperience);
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
