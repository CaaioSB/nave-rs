module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define("comment", {
    id: {
      type: Sequelize.INTEGER,
      foreignKey: true,
      primaryKey: true
    },
    message: {
      type: Sequelize.STRING
    },
    post_id: {
      type: Sequelize.INTEGER
    }
  }, {
    timestamps: true,
  });

  return Comment;
};
