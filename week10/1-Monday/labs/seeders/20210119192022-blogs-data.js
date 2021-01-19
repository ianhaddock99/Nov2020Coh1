'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('blogs', [

      {
        title: 'Promises',
        body: 'asdasd',
        userID: 1,
        createdAt: new Date(),
        updatedAt: new Date()

      },

      {
        title: 'Prototypes',
        body: 'gdhfgjh',
        userID: 1,
        createdAt: new Date(),
        updatedAt: new Date()

      },

      {
        title: 'PG-PROMISE',
        body: 'rfhdghfgj',
        userID: 2,
        createdAt: new Date(),
        updatedAt: new Date()

      },

      {
        title: 'bootstrap',
        body: 'hktrtry',
        userID: 2,
        createdAt: new Date(),
        updatedAt: new Date()

      },

      {
        title: 'java',
        body: 'bnmvb',
        userID: 3,
        createdAt: new Date(),
        updatedAt: new Date()

      },

      {
        title: 'ruby',
        body: 'aweth',
        userID: 3,
        createdAt: new Date(),
        updatedAt: new Date()

      }
    
    ], {});
      
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
