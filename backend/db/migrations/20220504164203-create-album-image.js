'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('AlbumImages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      albumId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{model:'Albums'}
      },
      imageId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{model:'Images'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('AlbumImages');
  }
};
