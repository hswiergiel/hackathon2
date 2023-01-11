const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const vehicleControllers = require("./controllers/vehicleControllers");

router.get("/users", userControllers.browse);
router.post("/loginuser", userControllers.verifyUser);
router.get("/vehicles", vehicleControllers.browse);
router.post("/vehicles", vehicleControllers.add);
module.exports = router;
