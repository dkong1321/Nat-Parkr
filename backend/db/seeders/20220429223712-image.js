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
           { title:'First time at Yellow Stone',
             imageURL: 'yellowstone_1.jpg',
           description: 'Yellowstone Hot Springs',
           userId:2,
           albumId:null,
           locationId:12,
           createdAt:new Date(),
           updatedAt: new Date()},
           { title:'Amazing Springs',
             imageURL: 'https://lh3.googleusercontent.com/xQPPdh2824JvtykmXcKXDTd5rcl2Vz1K2LowIe8vdoLqQuVJMuZKr7rUOSTP7IXrUz3IleL-JUvFV2Dzlh9GFcArzGWFqv5cAMewEcgJjoWqETtQVGDj_BqV1mx_dG_eh6Ov86glFT6aqnatmxzwYYWylTG7Xf55P7LMlP2cKFfsxxN_5PzENxzLEtal15eLKi4jG6UkBJAdcqz5ni4Oa6WVcnerKDrVMU6gOI9NB6mEz2it7VgdZXQoHjewAojvBjzSjVk-JlNdiCNeb0jD8mbQZHGxA23nHPqjfK8hE4KDsbOo39UvYDu-WrmEYRW2PelSUQAaJIAX_4nbfpIcsLA3yKrtBI5YOgMWx_o6hgYj_4ih3bx4g5-wLOxOmxOBG_zOatusOxOTjp5QmLyki4ieTUKJMlCVdpjzEw7Vh3mpuzc0gnwh4nImxItDiJQ8ZmDMFU9Zqatzc5wiyRDAR8EsZNgcOnFj4QqtNLKJXhoLNhuYSPLxKHcBj1KBXRiKQFG4tcQnRTI80J8qA0mCbAOuxv8B528aspVOZt4XZcaDPofsTEGsXU7VHGO-XOklCKStYfTsEwFpMKIZ5JsZlOZKuzk8JVzV3l22qCER5x5jUcrLOQR2_BDQLnGssb_OsaY-OScBey_nOL7t2T67Lo0-0talRASpn6nOVDXlLRh8_SExWCN8QuJNBF5lEvUgacviRAHNH57SyRvKmsgTHwGAxVO0b8SLqdv0clUsIlmXeHb67kJ2igSCt0WG-3E=w1406-h938-no?authuser=0',
           description: 'This water is so blue',
           userId:2,
           albumId:null,
           locationId:12,
           createdAt:new Date(),
           updatedAt: new Date()},
           { title:'Breath Taking Mountains',
             imageURL: 'https://lh3.googleusercontent.com/YSq_C-PCkcUNPblmEqybv8VAVDZxc7Rzi-tu-8sbY9caup7ZfvloFb46q4tSS-U2l6AUBTbmaHWEcNbAfTeWNs7afwle990rq_WYduGtpnmHC6R58eHPZwrxhJnKif6tsesZ90GRTBciMkZw5HSAqkxvCvewBwqIRXBSQ_VA-ye67GFztca1t_MSGNuUvLeZbiEOnCBj2Q5cvLGw2igpLK-sO9_p5JY_z-ObJUS62v8eUq_EYZZpjuLdPaNugrTMTq15br4otXe0lTikvJLKL3GHcXEEYh5XMlo_09rODif-eFo0Syfw0jPd2gbDiEYlXD1_yNr9lt3E_qmhsxlRuDZiL8b5gz0__e7iM83wiwbnuievw2V1C3Jnhmp6bY25cyIXC-khiHC1wHhxKEbqCShvK0qpECRcqEYHXpyrHv-L9MQb9AtwEqdGCZc6yhwWGg9fKac5j6RxpNXu-IIkQxGDK736JdQq-9F8rGwJ6npv3xO-JZM8-zWOIWyEFpHd1J7Q097vydHrNYX-M7jfqpu_j-s5heLgXBXZTYb-PDfX8rk4TGogjTByUb2H_tj8iJe_e1poa2QvZxtRJQsRynLGgYFPgkv3erqzyiI4CCfoqmY5O8dzDgZbWbRHSgtOWmDhCV3jkNxL8ibHJhzBCzP_abyN79aksYQoY8rq_kbTyS12UsvLQlxvatLdislxUr_TsEDcA7VRnxUYlk30wOwNaa5Z6YA_wfIamjzp_aqs07jE6aLMAeeE1xQ5Vvw=w1406-h938-no?authuser=0',
           description: 'Denali Mountains',
           userId:2,
           albumId:null,
           locationId:12,
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
