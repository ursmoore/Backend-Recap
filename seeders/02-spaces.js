"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert(
      "spaces",
      [
        {
          title: "Super de dooper Space",
          description: "SUUUUUUUUUUUPER",
          backgroundColor: "#ffffff",
          color: "#000000",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          title: "Shitty Space",
          description: "most shitty space ever!",
          backgroundColor: "#060A5D",
          color: "#DE0000",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
        {
          title: "COOL Space",
          description: "COOL COOOL COOOL!",
          backgroundColor: "#ffffff",
          color: "#000000",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
        },
        {
          title: "fukki Space",
          description: "fikki fukki fack!",
          backgroundColor: "#060A5D",
          color: "#DE0000",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 4,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("spaces", null, {});
  },
};
