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
  };
  return Album;
};
