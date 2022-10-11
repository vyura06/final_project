"use strict";

const Router = require("express");
const router = new Router();
const tagsController = require("../controller/tags");

router.get("/", tagsController.getTags);

module.exports = router;
