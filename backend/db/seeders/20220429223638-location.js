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

        return queryInterface.bulkInsert('Locations', [
          {name: 'Arches', createdAt:new Date(),updatedAt: new Date()},
          {name: 'Badlands', createdAt:new Date(),updatedAt: new Date()},
          {name: 'Big Bend', createdAt:new Date(),updatedAt: new Date()},
          {name: 'Canyonlands', createdAt:new Date(),updatedAt: new Date()},
          {name: 'Canyon Lakes', createdAt:new Date(),updatedAt: new Date()},
          {name: 'Denali', createdAt:new Date(),updatedAt: new Date()},
          {name: 'Glacier', createdAt:new Date(),updatedAt: new Date()},
          {name: 'Grand Canyon', createdAt:new Date(),updatedAt: new Date()},
          {name: 'Great Sand Dunes', createdAt:new Date(),updatedAt: new Date()},
          {name: 'Hot Springs', createdAt:new Date(),updatedAt: new Date()},
          {name: 'Rocky Mountain', createdAt:new Date(),updatedAt: new Date()},
          {name: 'Yellow Stone', createdAt:new Date(),updatedAt: new Date()},

        ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('Locations', null, {});

  }
};
