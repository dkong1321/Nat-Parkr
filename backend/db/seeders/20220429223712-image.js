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
             imageURL: 'https://national-park-img.s3.amazonaws.com/1651806356207.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
           userId:2,
           locationId:null,
           createdAt:new Date(),

           updatedAt: new Date()},

           { title:'Clouds over Big Bend',
             imageURL: 'https://national-park-img.s3.amazonaws.com/big_bend_1.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Big Bend River',
             imageURL: 'https://national-park-img.s3.amazonaws.com/big_bend_2.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Under the Shade at Canyonlands',
             imageURL: 'https://national-park-img.s3.amazonaws.com/canyon_lands_1.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Stars at Crater Link',
             imageURL: 'https://national-park-img.s3.amazonaws.com/creater_lake_1.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Majest Mountains in Denali',
             imageURL: 'https://national-park-img.s3.amazonaws.com/denali_1.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Goats at Denali',
             imageURL: 'https://national-park-img.s3.amazonaws.com/denali_2.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Glacier Lake',
             imageURL: 'https://national-park-img.s3.amazonaws.com/glavier_1.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Glacier Mountains',
             imageURL: 'https://national-park-img.s3.amazonaws.com/glacier_2.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Clouds over Mountains',
             imageURL: 'https://national-park-img.s3.amazonaws.com/glacier_3.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Milky Way in Grand Canyon',
           imageURL: 'https://national-park-img.s3.amazonaws.com/1651693155146.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Yellowstone Springs',
           imageURL: 'https://national-park-img.s3.amazonaws.com/AdobeStock_101144094.jpeg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Arches National Park',
           imageURL: 'https://national-park-img.s3.amazonaws.com/Arches+National+Park.jpeg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Snake River Sunet',
           imageURL: 'https://national-park-img.s3.amazonaws.com/Snake+River+Sunset.jpeg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Everglade Herons',
           imageURL: 'https://national-park-img.s3.amazonaws.com/Everglade_Herons.jpeg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:2,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Grand Teton Wyoming',
           imageURL: 'https://national-park-img.s3.amazonaws.com/John+Moulton+barn%2C+Grand+Teton+National+Park%2C+Wyoming.jpeg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Joshua Tree in the Desert',
           imageURL: 'https://national-park-img.s3.amazonaws.com/Joshua+Tree+with+green+leaves+in+the+desert.jpeg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Arches Panoramic',
           imageURL: 'https://national-park-img.s3.amazonaws.com/Arches+national+park+scenic+by+way+panoramic+view.jpeg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'American Rockies',
           imageURL: 'https://national-park-img.s3.amazonaws.com/American+Rockies+-+Glacier+National+Park%2C+Montana.jpeg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Yosemite Falls',
           imageURL: 'https://national-park-img.s3.amazonaws.com/Yosemite_Falls.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Yosemite Foggy Day',
           imageURL: 'https://national-park-img.s3.amazonaws.com/Yosemite_Fog.jpg',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           userId:1,
           locationId:null,
           createdAt:new Date(),
           updatedAt: new Date()},

           { title:'Amazing Sunrise in Yosemite',
           imageURL: 'https://national-park-img.s3.amazonaws.com/Yosemite_Sunrise.jpg',
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
