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
         return queryInterface.bulkInsert('Images', [
           { title:'Arches at Sunset',
             imageURL: 'https://national-park-img.s3.amazonaws.com/1657867262335.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
           userId:2,
           locationId:null,
           createdAt:new Date(),

           updatedAt: new Date()},

           { title:'Amazing View of the Arches',
             imageURL: 'https://national-park-img.s3.amazonaws.com/1657867274688.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Small Flowers at Arches',
             imageURL: 'https://national-park-img.s3.amazonaws.com/1657867294024.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Milky Way Arches',
             imageURL: 'https://national-park-img.s3.amazonaws.com/1657867327365.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Under the Arches',
             imageURL: 'https://national-park-img.s3.amazonaws.com/1657867363726.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Sunrise Over the Badlands',
             imageURL: 'https://national-park-img.s3.amazonaws.com/1657867456995.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Clouds Over Big Bend',
             imageURL: 'https://national-park-img.s3.amazonaws.com/1657867476479.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Winding River at Big Bend',
           imageURL: 'https://national-park-img.s3.amazonaws.com/1657867495372.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Under Canyon Lands Arch',
           imageURL: 'https://national-park-img.s3.amazonaws.com/1657867532761.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Crater Lake Stars',
           imageURL: 'https://national-park-img.s3.amazonaws.com/1657867550095.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Denali Mountains at Sunrise',
           imageURL: 'https://national-park-img.s3.amazonaws.com/1657867568105.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Goats on Denali Mountain',
           imageURL: 'https://national-park-img.s3.amazonaws.com/1657867586153.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Snowy Denali Mountain',
           imageURL: 'https://national-park-img.s3.amazonaws.com/1657867605847.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:2,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Glacier Mountains!',
           imageURL: 'https://national-park-img.s3.amazonaws.com/1657867623854.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Glacier Mountain Under Clouds',
           imageURL: 'https://national-park-img.s3.amazonaws.com/1657867648047.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Glacier Mountain Lake',
           imageURL: 'https://national-park-img.s3.amazonaws.com/1657867667279.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

          { title:'Snowy Grand Teton',
             imageURL: 'https://national-park-img.s3.amazonaws.com/1657867688086.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

          { title:'Grand Canyon Stars',
             imageURL: 'https://national-park-img.s3.amazonaws.com/1657867707167.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Grand Canyon is Amazing!',
             imageURL: 'https://national-park-img.s3.amazonaws.com/1657867736185.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Grand Teton Sunrise',
             imageURL: 'https://national-park-img.s3.amazonaws.com/1657867754255.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Sand Dunes',
             imageURL: 'https://national-park-img.s3.amazonaws.com/1657867798555.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Hot Springs Lake',
             imageURL: 'https://national-park-img.s3.amazonaws.com/1657867821824.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Grand Teton Hut',
             imageURL: 'https://national-park-img.s3.amazonaws.com/1657867865394.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Lone Joshua Tree',
             imageURL: 'https://national-park-img.s3.amazonaws.com/1657867889558.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Grand Canyon Pic long too small',
             imageURL: 'https://national-park-img.s3.amazonaws.com/denali_1.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Rocky Mountain Snow',
             imageURL: 'https://national-park-img.s3.amazonaws.com/1657867939194.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Rocky Mountain Reflection',
             imageURL: 'https://national-park-img.s3.amazonaws.com/1657867977132.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Sequoia Road',
             imageURL: 'https://national-park-img.s3.amazonaws.com/1657867995876.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Snake River Sunset',
             imageURL: 'https://national-park-img.s3.amazonaws.com/1657868016274.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Yellow Stone Spring',
             imageURL: 'https://national-park-img.s3.amazonaws.com/1657868031851.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Yellow Stone Winter',
             imageURL: 'https://national-park-img.s3.amazonaws.com/1657868052664.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Steaming Yellow Stone',
             imageURL: 'https://national-park-img.s3.amazonaws.com/1657868081171.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Yellow Stone Pool',
             imageURL: 'https://national-park-img.s3.amazonaws.com/1657868191932.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Shadow Over Yosemite',
             imageURL: 'https://national-park-img.s3.amazonaws.com/1657868208454.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Yosemite Falls',
             imageURL: 'https://national-park-img.s3.amazonaws.com/1657868277569.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Yosemite Deer',
             imageURL: 'https://national-park-img.s3.amazonaws.com/1657868297669.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Zion!',
             imageURL: 'https://national-park-img.s3.amazonaws.com/1657868312025.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},




      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Images', null, {});
    */
      return queryInterface.bulkDelete('Images', null, {});

  }
};
