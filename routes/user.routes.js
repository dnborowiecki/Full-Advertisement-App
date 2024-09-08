const express = require("express");
const router = express.Router();

const user = require("../controllers/user.controller");
const filterResponse = require("../utils/filterResponse");

router.get("/users", filterResponse.filterCredentials, user.getAll);
router.get("/users/:id", filterResponse.filterCredentials, user.get);

module.exports = router;
