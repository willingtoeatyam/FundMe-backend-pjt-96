const beneficiaryController = require("../../../controllers/mobile/beneficiaryController");
const express = require("express");
const router = express.Router();

router.get("/profile", (req, res) => {
  let user = beneficiaryController.getBeneficiaryByID(req.userId);
  res.status(200).json({
    message: "Success",
    user: user,
    token: req.token,
  });
});

module.exports = router;
