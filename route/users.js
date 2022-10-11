"use strict";

const Router = require("express");
const router = new Router();
const usersController = require("../controller/users");

router.get("/", usersController.getUser.bind(usersController));
router.get("/:id/likes", usersController.getUserLikes);
router.post("/", usersController.createUser);
router.post("/:id", usersController.changeUserData.bind(usersController));
router.delete("/:id", usersController.removeUser.bind(usersController));

module.exports = router;
