'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    title: {
      type:DataTypes.STRING(100),
      allowNull:false,
    },
    imageURL:{
      type: DataTypes.TEXT,
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

    // Image belongs to a single user
    Image.belongsTo(models.User, {foreignKey:"userId"});

    // Image belongs to an album
    Image.belongsTo(models.Album, {foreignKey:"albumId"})

    //image belongs to a location
    Image.belongsTo(models.Location, {foreignKey:"locationId"})
  };
  return Image;
};
