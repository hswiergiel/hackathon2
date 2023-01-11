const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const vehicleControllers = require("./controllers/vehicleControllers");
const bookingControllers = require("./controllers/bookingControllers");
const ownerControllers = require("./controllers/ownerControllers");

router.get("/users", userControllers.browse);

router.get("/vehicles", vehicleControllers.browse);

router.get("/booking", bookingControllers.browse);
router.post("/booking", bookingControllers.add);

router.post("/loginowner", ownerControllers.login);
router.get("/owners", ownerControllers.browse);
module.exports = router;
