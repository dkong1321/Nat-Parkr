'use strict';
const bcrypt = require('bcryptjs');

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
      return queryInterface.bulkInsert('Users', [
        {
        email: 'chris_t_money@jbhunt.com',
        username: 'Shower__Shirt__ProductId',
        hashedPassword: bcrypt.hashSync('password1')
      },
      {
        email: 'demo@demo.com',
        username: 'PropanePrince',
        hashedPassword: bcrypt.hashSync('password1')
      },
      {
        email: 'ara@demo.com',
        username: 'PaleRider',
        hashedPassword: bcrypt.hashSync('password1')
      },
      {
          email: 'maica@demo.com',
        username: 'Edel_Fan_123',
        hashedPassword: bcrypt.hashSync('password')
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      const Op = Sequelize.Op
      return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Shower__Shirt__ProductId', 'PropanePrince', 'PaleRider','Edel_Fan_123'] }
    }, {});
  }
};
