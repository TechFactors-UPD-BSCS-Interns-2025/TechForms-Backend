var express = require("express");
const { UserAccountRoutes } = require("./user_account/user_account_routes");

var router = express.Router();

router.use("/user", UserAccountRoutes);

module.exports = router;