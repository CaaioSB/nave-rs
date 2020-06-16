module.exports = app => {
  const post = require("../controllers/post.controller.js");

  var router = require("express").Router();

  router.post("/", post.create);

  router.get("/", post.findAll);

  router.get("/:id", post.findOne);

  app.use('/api/post', router);
};
