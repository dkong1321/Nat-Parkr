'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    comment: {
      type:DataTypes.TEXT,
      allowNull:false
    },
    userId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    imageId: {
      type:DataTypes.INTEGER,
      allowNull:false
    }
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here

    // a comment belongs to a user
    Comment.belongsTo(models.User, {foreignKey:"userId"})
  };
  return Comment;
};
