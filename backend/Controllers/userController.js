const { User } = require("../Modules/userModule");

exports.addEperience = async (req, res) => {
   const _iduser = req.user;
   const {
      startTime,
      endTime,
      organization,
      designation,
      descriptionPointers,
   } = req.body;
   try {
      const user = await User.findOne({ _id: _iduser });
      user.experience.create({
         startTime,
         endTime,
         organization,
         designation,
         descriptionPointers,
      });
      return res.status(201).send({ msg: "Experience created successfully" });
   } catch (error) {
      console.error(error);
      return res
         .status(404)
         .send({ msg: "Internal Server Error", error: error.message });
   }
};
