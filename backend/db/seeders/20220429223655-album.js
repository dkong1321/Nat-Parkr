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

      return queryInterface.bulkInsert('Albums', [
        {title: 'Seeder Album', userId: 1, createdAt:new Date(),updatedAt: new Date()},
        {title: 'Shower Shirt', userId: 1, createdAt:new Date(),updatedAt: new Date()},
        {title: 'Propane Prince Pics', userId: 2, createdAt:new Date(),updatedAt: new Date()},
        {title: 'My Favorites', userId: 2, createdAt:new Date(),updatedAt: new Date()},
        {title: 'Desert', userId: 2, createdAt:new Date(),updatedAt: new Date()},


        // {title: 'My first album', userId: 2, createdAt:new Date(),updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Album', null, {});

    */
      return queryInterface.bulkDelete('Albums', null, {});

  }
};
