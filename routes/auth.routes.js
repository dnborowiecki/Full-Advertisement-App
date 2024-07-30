const express = require("express");
const router = express.Router();

const user = require("../controllers/user.controller");
const userValidator = require("../validators/user.validator");
const authMiddleware = require("../utils/authMiddleware");
const uploadImage = require("../utils/uploadImage");

router.post(
  "/auth/register",
  uploadImage.uploadFile.single("avatar"),
  userValidator.add,
  user.add
);
router.post("/auth/login", userValidator.login, user.login);
router.use(authMiddleware.isAuthorised);
router.get("/auth/user", user.current);
router.delete("/auth/logout", user.logout);

module.exports = router;
