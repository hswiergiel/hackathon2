const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const vehicleControllers = require("./controllers/vehicleControllers");
const bookingControllers = require("./controllers/bookingControllers");
const ownerControllers = require("./controllers/ownerControllers");

router.get("/users", userControllers.browse);
router.post("/loginuser", userControllers.login);

router.get("/vehicles", vehicleControllers.browsePool);
router.get("/vehicles/:id", vehicleControllers.getOwnerId);
router.post("/vehicles", vehicleControllers.add);
router.put("/vehicles/:id", vehicleControllers.edit);
router.put("vehicles/available/:id", vehicleControllers.editAvailable);

router.get("/booking", bookingControllers.browse);
router.post("/booking/:owner", bookingControllers.add);
// router.put("/booking/:id", bookingControllers.updateCovoit);
// router.post("/booking-covoit/", bookingControllers.)

router.get("/owners", ownerControllers.browse);
router.post("/loginowner", ownerControllers.login);

module.exports = router;
