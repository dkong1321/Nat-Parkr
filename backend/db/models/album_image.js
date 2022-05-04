'use strict';
module.exports = (sequelize, DataTypes) => {
  const AlbumImage = sequelize.define('Album_Image', {
    albumId: DataTypes.INTEGER,
    imageId: DataTypes.INTEGER
  }, {});
  AlbumImage.associate = function(models) {
    // associations can be defined here


  };
  return AlbumImage;
};
