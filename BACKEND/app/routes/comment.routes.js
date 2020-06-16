module.exports = app => {
  const comment = require("../controllers/comment.controller.js");

  var router = require("express").Router();

  router.post("/", comment.create);

  router.get("/", comment.findAll);

  router.get("/:id", comment.findOne);

  app.use('/api/comment', router);
};
