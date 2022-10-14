/* eslint-disable camelcase */
"use strict";

const { CollectionTopics } = require("../database/database.sequelize");

class CollectionTopicsController {
  async getTopics(req, res) {
    const topics = await CollectionTopics.findAll();
    res.json({ topics });
  }
}

module.exports = new CollectionTopicsController();
