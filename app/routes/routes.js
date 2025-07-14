var express = require("express");
const { UserAccountRoutes } = require("./user_account/user_account_routes");
const { DepartmentRoutes } = require("./department/department_routes");
const { RoleRoutes } = require("./role/role_routes");
const { ApproverRoutes } = require("./approver/approver_routes");
const { UserProfileRoutes } = require("./user_profile/user_profile_routes");
const { FlierRoutes } = require("./flier/flier_routes");
<<<<<<< HEAD
const { PurposeOfTravelRoutes } = require("./purpose_of_travel/purpose_of_travel_routes");
=======
const { BookingDetailsRoutes } = require("./booking_details/booking_details_routes");
>>>>>>> main

var router = express.Router();

router.use("/user", UserAccountRoutes);
router.use("/department", DepartmentRoutes);
router.use("/role", RoleRoutes);
router.use("/approver", ApproverRoutes);
router.use("/user_profile", UserProfileRoutes);
router.use("/flier", FlierRoutes);
<<<<<<< HEAD
router.use("/purpose_of_travel", PurposeOfTravelRoutes);
=======
router.use("/booking_details", BookingDetailsRoutes);
>>>>>>> main

module.exports = router;