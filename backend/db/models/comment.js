'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: DataTypes.INTEGER,
    imageId: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {});
  Comment.associate = function(models) {

    // associations can be defined here

    // comment belongs to Image
    Comment.belongsTo(models.Image, {foreignKey:"imageId"})

    // comment belongs to User
    Comment.belongsTo(models.User, {foreignKey:"userId"})

  };
  return Comment;
};
