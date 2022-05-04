'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    title: {
      type:DataTypes.STRING(30),
      allowNull:false,
    },
    userId: {
      type:DataTypes.INTEGER,
      allowNull:false
    }
  }, {});
  Album.associate = function(models) {
    // associations can be defined here

    // Album belongs to a single user
    Album.belongsTo(models.User, {foreignKey:"userId"})

    // join table album image
    const columnMapping = {
      through:'AlbumImages',
      otherKey:'imageId',
      foreignKey:'albumId'
    }

    Album.belongsToMany(models.Image, columnMapping)
    // Album has many images
    // Album.hasMany(models.Image, {foreignKey:"albumId"})

  };
  return Album;
};
