'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('AlbumImages', [
        {
        albumId: 3,
        imageId: 1,
        createdAt:new Date(),
        updatedAt: new Date()
        },
        {
        albumId: 3,
        imageId: 2,
        createdAt:new Date(),
        updatedAt: new Date()
        },
        {
        albumId: 3,
        imageId: 3,
        createdAt:new Date(),
        updatedAt: new Date()
        },
        {
        albumId: 3,
        imageId: 4,
        createdAt:new Date(),
        updatedAt: new Date()
        },
        {
        albumId: 1,
        imageId: 5,
        createdAt:new Date(),
        updatedAt: new Date()
        },
        {
        albumId: 1,
        imageId: 6,
        createdAt:new Date(),
        updatedAt: new Date()
        },
        {
        albumId: 1,
        imageId: 7,
        createdAt:new Date(),
        updatedAt: new Date()
        },
        {
        albumId: 1,
        imageId: 8,
        createdAt:new Date(),
        updatedAt: new Date()
        },
        {
        albumId: 1,
        imageId: 9,
        createdAt:new Date(),
        updatedAt: new Date()
        },
        {
        albumId: 1,
        imageId: 10,
        createdAt:new Date(),
        updatedAt: new Date()
        },
        {
        albumId: 1,
        imageId: 11,
        createdAt:new Date(),
        updatedAt: new Date()
        },
        {
        albumId: 1,
        imageId: 12,
        createdAt:new Date(),
        updatedAt: new Date()
        },
        {
        albumId: 1,
        imageId: 13,
        createdAt:new Date(),
        updatedAt: new Date()
        },
        {
        albumId: 1,
        imageId: 14,
        createdAt:new Date(),
        updatedAt: new Date()
        },
        {
        albumId: 3,
        imageId: 14,
        createdAt:new Date(),
        updatedAt: new Date()
        },
        {
        albumId: 3,
        imageId: 11,
        createdAt:new Date(),
        updatedAt: new Date()
        },
        {
        albumId: 3,
        imageId: 15,
        createdAt:new Date(),
        updatedAt: new Date()
        },
        {
        albumId: 4,
        imageId: 1,
        createdAt:new Date(),
        updatedAt: new Date()
        },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('AlbumImages', null, {});

  }
};
