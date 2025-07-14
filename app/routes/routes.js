var express = require("express");
const { UserAccountRoutes } = require("./user_account/user_account_routes");
const { DepartmentRoutes } = require("./department/department_routes");
const { RoleRoutes } = require("./role/role_routes");
const { ApproverRoutes } = require("./approver/approver_routes");
const { UserProfileRoutes } = require("./user_profile/user_profile_routes");
const { FlierRoutes } = require("./flier/flier_routes");
<<<<<<< HEAD
const { FormTypeRoutes } = require("./form_type/form_type_routes");

=======
const { PurposeOfTravelRoutes } = require("./purpose_of_travel/purpose_of_travel_routes");
const { BookingDetailsRoutes } = require("./booking_details/booking_details_routes");
>>>>>>> cb4f8073aaac4f58cb85d32255625a5eec09e85a

var router = express.Router();

router.use("/user", UserAccountRoutes);
router.use("/department", DepartmentRoutes);
router.use("/role", RoleRoutes);
router.use("/approver", ApproverRoutes);
router.use("/user_profile", UserProfileRoutes);
router.use("/flier", FlierRoutes);
<<<<<<< HEAD
router.use("/form_type", FormTypeRoutes)
=======
router.use("/purpose_of_travel", PurposeOfTravelRoutes);
router.use("/booking_details", BookingDetailsRoutes);
>>>>>>> cb4f8073aaac4f58cb85d32255625a5eec09e85a

module.exports = router;