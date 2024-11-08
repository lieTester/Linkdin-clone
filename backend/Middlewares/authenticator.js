const jwt = require("jsonwebtoken");
const User = require("../Modules/userModule");

exports.accessTokenVerifier = async (req, res, next) => {
   const possible =
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer");
   if (possible) {
      try {
         // console.log(req.headers["authorization"]);
         const token = req.headers["authorization"].split(" ")[1];
         const _iduser = verifyToken(token, process.env.ACCESS_SECRET_KEY).data;
         const user = await User.findOne({ _id: _iduser });
         req.body.user = user;
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
