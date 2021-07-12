const passport = require("passport");
const secureRoute = require("./secured-routes");
const beneficiaryRoutes = require("./beneficiary");
const isTokenBlacklisted = require("../../../middlewares/isTokenBlackListed");
const verifyToken = require("../../../middlewares/verifyToken");
require("../beneficiary/auth");

const router = require("express").Router();

router.use("/beneficiary", beneficiaryRoutes);

// Plug in the JWT strategy as a middleware so only verified users can access this route.
// router.use(
//   "/beneficiary",
//   passport.authenticate("jwt", { session: false }),
//   secureRoute
// );
// Plug in custom middlewares that have being created to verify users.

router.use("/beneficiary", verifyToken, isTokenBlacklisted, secureRoute);
module.exports = router;
