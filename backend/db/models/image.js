'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    title: {
      type:DataTypes.STRING(100),
      allowNull:false,
    },
    imageURL:{
      type: DataTypes.STRING(255),
      allowNull:false,
    },
    description: {
      type:DataTypes.STRING(255),
    },
    userId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    albumId: {
      type:DataTypes.INTEGER,
    },
    locationId: {
      type:DataTypes.INTEGER
    }
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
    // Image.belongsTo(models.User, {foreighKey:"userId"});


  };
  return Image;
};
