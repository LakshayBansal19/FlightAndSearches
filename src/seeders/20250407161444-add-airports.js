'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airports', [
      {
         name:'Chhatrapati Shivaji Maharaj International Airport',
         address:'Mumbai, Maharashtra 400099',
         cityId:4,
         createdAt:new Date(),
         updatedAt:new Date()
       },
      {
        name:'Juhu Airport',
         address:'Juhu Tara Rd, Airport Area, Juhu, Mumbai, Maharashtra 400056',
         cityId:4,
         createdAt:new Date(),
         updatedAt:new Date()
      },
      {
      name:'Indira Gandhi International Airport ',
      address:'New Delhi, Delhi 110037',
      cityId:6,
      createdAt:new Date(),
      updatedAt:new Date(),
      },
      {
        name:'Safdarjung Airport',
         address:'Sri Aurobindo Marg, near Jorbagh, Safdarjung Airport Area, Satya Sadan, New Delhi, Delhi 110003',
         cityId:6,
         createdAt:new Date(),
         updatedAt:new Date()
      },
      {
        name:'Kempegowda International Airport Bengaluru',
         address:'Karnataka 534320',
         cityId:7,
         createdAt:new Date(),
         updatedAt:new Date()
      },
      {
        name:'Mangaluru International Airport',
         address:'Bajpe Main Rd, Kenjar HC, Mangaluru, Karnataka 574142',
         cityId:7,
         createdAt:new Date(),
         updatedAt:new Date()
      },
      {
        name:'Birsa Munda Airport',
         address:'Hinoo, Ranchi, Jharkhand 834002',
         cityId:9,
         createdAt:new Date(),
         updatedAt:new Date()
      },
      {
        name:'Deoghar Airport',
         address:'Deoghar, Jharkhand 814143',
         cityId:9,
         createdAt:new Date(),
         updatedAt:new Date()
      },
      {
        name:'Netaji Subhash Chandra Bose International Airport',
         address:'Airport Service Rd, International Airport, Dum Dum, Kolkata, West Bengal 700052',
         cityId:11,
         createdAt:new Date(),
         updatedAt:new Date()
      },
      {
        name:'Chennai International Airport',
         address:'Airport Rd, Meenambakkam, Chennai, Tamil Nadu 600027',
         cityId:12,
         createdAt:new Date(),
         updatedAt:new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    //await queryInterface.bulkDelete('Airports', null, {}); //will delete all data to null 
  }
};
