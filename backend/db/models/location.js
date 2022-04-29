'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    name: {
      type:DataTypes.STRING(50),
      allowNull:false
    }
  }, {});
  Location.associate = function(models) {
    // associations can be defined here
    Location.hasMany(models.Image, {foreignKey: "locationId"})
  };
  return Location;
};
