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
      return queryInterface.bulkInsert('Comments', [
        {
        userId: 1,
        imageId: 1,
        comment: "What a nice picture",
        createdAt:new Date(),updatedAt: new Date()
        },
        {
        userId: 2,
        imageId: 1,
        comment: "Thanks for sharing",
        createdAt:new Date(),updatedAt: new Date()
        },
        {
        userId: 1,
        imageId: 2,
        comment: "Great shot!",
        createdAt:new Date(),updatedAt: new Date()
        },        {
        userId: 1,
        imageId: 2,
        comment: "What a nice picture",
        createdAt:new Date(),updatedAt: new Date()
        },        {
        userId: 1,
        imageId: 4,
        comment: "Great clouds!",
        createdAt:new Date(),updatedAt: new Date()
        },        {
        userId: 1,
        imageId: 2,
        comment: "Amazing!",
        createdAt:new Date(),updatedAt: new Date()
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
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
