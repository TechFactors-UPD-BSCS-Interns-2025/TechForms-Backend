var express = require("express");
const { UserAccountRoutes } = require("./user_account/user_account_routes");
const { DepartmentRoutes } = require("./department/department_routes");
const { RoleRoutes } = require("./role/role_routes");
const { ApproverRoutes } = require("./approver/approver_routes");
const { UserProfileRoutes } = require("./user_profile/user_profile_routes");

var router = express.Router();

router.use("/user", UserAccountRoutes);
router.use("/department", DepartmentRoutes);
router.use("/role", RoleRoutes);
router.use("/approver", ApproverRoutes);
router.use("/user_profile", UserProfileRoutes);

module.exports = router;