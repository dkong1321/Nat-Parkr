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
    locationId: {
      type:DataTypes.INTEGER
    }
  }, {});
  Image.associate = function(models) {
    // associations can be defined here

    // Image belongs to a single user
    Image.belongsTo(models.User, {foreignKey:"userId"});

    // Image Album join table
    const columnMapping = {
      through:'AlbumImages',
      otherKey:'albumId',
      foreignKey:'imageId'
    }

    Image.belongsToMany(models.Album, columnMapping)

    // Image had many comments
    Image.hasMany(models.Comment, {foreignKey:"imageId"})

    //image belongs to a location
    Image.belongsTo(models.Location, {foreignKey:"locationId"})

    // Image belongs to an album
    // Image.belongsTo(models.Album, {foreignKey:"albumId"})

  };
  return Image;
};
