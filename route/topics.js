"use strict";

const Router = require("express");
const router = new Router();
const topicController = require("../controller/topics");

router.get("/", topicController.getTopics);

module.exports = router;
