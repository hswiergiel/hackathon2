const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const vehicleControllers = require("./controllers/vehicleControllers");
const bookingControllers = require("./controllers/bookingControllers");
const ownerControllers = require("./controllers/ownerControllers");

router.get("/users", userControllers.browse);
router.post("/loginuser", userControllers.login);

router.get("/vehicles", vehicleControllers.browse);
router.post("/vehicles", vehicleControllers.add);
router.put("/vehicles/:id", vehicleControllers.edit);

router.get("/booking", bookingControllers.browse);
router.post("/booking", bookingControllers.add);

router.get("/owners", ownerControllers.browse);
router.post("/loginowner", ownerControllers.login);

module.exports = router;
