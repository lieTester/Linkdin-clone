const { User } = require("../Modules/userModule");
const { verifyToken } = require("../Utils/utilFunctions");

//<----------Inportant----------->
// we need to handel the scenario where after logout still accessToke has link to access data for some time.
exports.accessTokenVerifier = async (req, res, next) => {
   const possible =
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer");
   if (possible) {
      try {
         const token = req.headers["authorization"].split(" ")[1];
         const _iduser = verifyToken(token, process.env.ACCESS_SECRET_KEY).data;

         const user = await User.findOne({ _id: _iduser });
         req.body.user = user;
         req.user = user._id;
         next();
      } catch (error) {
         res.status(403).send({
            msg: "TokenExpiredError or InvalidTokenError",
            error: error.stack,
            status: false,
         });
      }
   } else {
      return res.sendStatus(401);
   }
};
