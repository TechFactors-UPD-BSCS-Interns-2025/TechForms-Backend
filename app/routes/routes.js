var express = require("express");
const { UserAccountRoutes } = require("./user_account/user_account_routes");
const { DepartmentRoutes } = require("./department/department_routes");

var router = express.Router();

router.use("/user", UserAccountRoutes);
router.use("/department", DepartmentRoutes);

module.exports = router;