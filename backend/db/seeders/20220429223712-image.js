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
             imageURL: 'https://national-park-img.s3.amazonaws.com/1651692046137.jpg',
           description: 'First time seeing the Arches it. Breathtaking view',
           userId:2,
           albumId:null,
           locationId:null,
           createdAt:new Date(),

           updatedAt: new Date()},
           { title:'Sweet View of the Arches',
             imageURL: 'https://national-park-img.s3.amazonaws.com/1651692250031.jpg',
           description: 'Wonderful day at the Arches National Park',
           userId:2,
           albumId:null,
           locationId:null,
           createdAt:new Date(),

           updatedAt: new Date()},
           { title:'Wild Flowers in Desert',
             imageURL: 'https://national-park-img.s3.amazonaws.com/1651692309345.jpg',
           description: 'Saw these flowers on a hike at Arches national park',
           userId:2,
           albumId:null,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Clouds over Big Bend',
             imageURL: 'https://national-park-img.s3.amazonaws.com/1651692681794.jpg',
           description: 'Blue sky with clouds over Big Bend',
           userId:1,
           albumId:null,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Big Bend River',
             imageURL: 'https://national-park-img.s3.amazonaws.com/1651692702048.jpg',
           description: 'Rushing waters at Big Bend',
           userId:1,
           albumId:null,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Under the Shade at Canyonlands',
             imageURL: 'https://national-park-img.s3.amazonaws.com/1651692780743.jpg',
           description: 'Nice view out of the heat!',
           userId:1,
           albumId:null,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Stars at Crater Link',
             imageURL: 'https://national-park-img.s3.amazonaws.com/1651692826255.jpg',
           description: 'Camping out at crater lake',
           userId:1,
           albumId:null,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Majest Mountains in Denali',
             imageURL: 'https://national-park-img.s3.amazonaws.com/1651692899847.jpg',
           description: 'Sitting by the river',
           userId:1,
           albumId:null,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Goats at Denali',
             imageURL: 'https://national-park-img.s3.amazonaws.com/1651692926797.jpg',
           description: 'Wide shot of goats',
           userId:1,
           albumId:null,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Glacier Lake',
             imageURL: 'https://national-park-img.s3.amazonaws.com/1651692985389.jpg',
           description: 'Reflective waters at the lake',
           userId:1,
           albumId:null,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Glacier Mountains',
             imageURL: 'https://national-park-img.s3.amazonaws.com/1651693042760.jpg',
           description: 'cloudy day at glacier',
           userId:1,
           albumId:null,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Clouds over Mountains',
             imageURL: 'https://national-park-img.s3.amazonaws.com/1651693082370.jpg',
           description: 'Shade over the mountains',
           userId:1,
           albumId:null,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Majestic View at Grand Canyon',
             imageURL: 'https://national-park-img.s3.amazonaws.com/1651693169417.jpg',
           description: 'Steep Cliffs here',
           userId:1,
           albumId:null,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Milky Way in Grand Canyon',
           imageURL: 'https://national-park-img.s3.amazonaws.com/1651693155146.jpg',
           description: 'Great view of the stars',
           userId:1,
           albumId:null,
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
