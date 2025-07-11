var express = require("express");
const { UserAccountRoutes } = require("./user_account/user_account_routes");
const { DepartmentRoutes } = require("./department/department_routes");
const { RoleRoutes } = require("./role/role_routes");

var router = express.Router();

router.use("/user", UserAccountRoutes);
router.use("/department", DepartmentRoutes);
router.use("/role", RoleRoutes);

module.exports = router;