module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("post", {
    title: {
      type: Sequelize.STRING
    },
    body: {
      type: Sequelize.STRING
    }
  }, {
    timestamps: true,
  });

  return Post;
};
