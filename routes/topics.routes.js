"use strict";

const Router = require("express");
const router = new Router();
const topicController = require("../controller/topics.conroller");

router.get("/", topicController.getTopics);

module.exports = router;
