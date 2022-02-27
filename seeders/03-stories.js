"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "Marilyn Monroe",
          content:
            "pseudoniem van Norma Jeane Mortenson (Los Angeles (Californië), 1 juni 1926 – aldaar, 4 augustus 1962),[1][2] was een Amerikaans fotomodel, actrice en zangeres. Ze werd als sekssymbool een icoon in de jaren vijftig.",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Marilyn_Monroe%2C_Photoplay_1953.jpg/532px-Marilyn_Monroe%2C_Photoplay_1953.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 1,
        },
        {
          name: "Bridget Bardot",
          content:
            "september 1934) is een Frans fotomodel, actrice en zangeres. Als ondeugende stoeipoes en frivole pin-upgirl maakte ze zeer snel internationaal furore en vooral in Europa was ze een icoon van de jaren vijftig. Als sekssymbool was zij een Frans antwoord op de Amerikaanse Marilyn Monroe (MM).Haar naam werd vaak afgekort als BB, wat vanwege de alliteratie erg voor de hand lag, maar wat nog meer populair werd door een tophit van Dario Moreno (1961), waarin Bardot in het Frans en Portugees wordt bezongen.",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Brigitte_Bardot_-_1962.jpg/532px-Brigitte_Bardot_-_1962.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 1,
        },
        {
          name: "Poopie Woopie",
          content:
            "The 50s style continuesIn the early 1960s, fashion was an extension of the years before. There were tight dresses, classic pencil skirts and A-line skirts. There had not been a new trend for a few years, and designers knew the had to come up with something special really quick. In the mean , women were inspired by icons like Jackie Kennedy. She was always in style with decent dresses and had accessories that matched perfectly.",
          imageUrl: "https://prisma.watch/wp-content/uploads/2018/12/foto2.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 1,
        },
        {
          name: "Marilyn Monroe",
          content:
            "pseudoniem van Norma Jeane Mortenson (Los Angeles (Californië), 1 juni 1926 – aldaar, 4 augustus 1962),[1][2] was een Amerikaans fotomodel, actrice en zangeres. Ze werd als sekssymbool een icoon in de jaren vijftig.",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Marilyn_Monroe%2C_Photoplay_1953.jpg/532px-Marilyn_Monroe%2C_Photoplay_1953.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 2,
        },
        {
          name: "Bridget Bardot",
          content:
            "september 1934) is een Frans fotomodel, actrice en zangeres. Als ondeugende stoeipoes en frivole pin-upgirl maakte ze zeer snel internationaal furore en vooral in Europa was ze een icoon van de jaren vijftig. Als sekssymbool was zij een Frans antwoord op de Amerikaanse Marilyn Monroe (MM).Haar naam werd vaak afgekort als BB, wat vanwege de alliteratie erg voor de hand lag, maar wat nog meer populair werd door een tophit van Dario Moreno (1961), waarin Bardot in het Frans en Portugees wordt bezongen.",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Brigitte_Bardot_-_1962.jpg/532px-Brigitte_Bardot_-_1962.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 2,
        },
        {
          name: "Poopie Woopie",
          content:
            "The 50s style continuesIn the early 1960s, fashion was an extension of the years before. There were tight dresses, classic pencil skirts and A-line skirts. There had not been a new trend for a few years, and designers knew the had to come up with something special really quick. In the mean , women were inspired by icons like Jackie Kennedy. She was always in style with decent dresses and had accessories that matched perfectly.",
          imageUrl: "https://prisma.watch/wp-content/uploads/2018/12/foto2.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 2,
        },
        {
          name: "Marilyn Monroe",
          content:
            "pseudoniem van Norma Jeane Mortenson (Los Angeles (Californië), 1 juni 1926 – aldaar, 4 augustus 1962),[1][2] was een Amerikaans fotomodel, actrice en zangeres. Ze werd als sekssymbool een icoon in de jaren vijftig.",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Marilyn_Monroe%2C_Photoplay_1953.jpg/532px-Marilyn_Monroe%2C_Photoplay_1953.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 3,
        },
        {
          name: "Bridget Bardot",
          content:
            "september 1934) is een Frans fotomodel, actrice en zangeres. Als ondeugende stoeipoes en frivole pin-upgirl maakte ze zeer snel internationaal furore en vooral in Europa was ze een icoon van de jaren vijftig. Als sekssymbool was zij een Frans antwoord op de Amerikaanse Marilyn Monroe (MM).Haar naam werd vaak afgekort als BB, wat vanwege de alliteratie erg voor de hand lag, maar wat nog meer populair werd door een tophit van Dario Moreno (1961), waarin Bardot in het Frans en Portugees wordt bezongen.",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Brigitte_Bardot_-_1962.jpg/532px-Brigitte_Bardot_-_1962.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 3,
        },
        {
          name: "Poopie Woopie",
          content:
            "The 50s style continuesIn the early 1960s, fashion was an extension of the years before. There were tight dresses, classic pencil skirts and A-line skirts. There had not been a new trend for a few years, and designers knew the had to come up with something special really quick. In the mean , women were inspired by icons like Jackie Kennedy. She was always in style with decent dresses and had accessories that matched perfectly.",
          imageUrl: "https://prisma.watch/wp-content/uploads/2018/12/foto2.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 3,
        },
        {
          name: "Bridget Bardot",
          content:
            "september 1934) is een Frans fotomodel, actrice en zangeres. Als ondeugende stoeipoes en frivole pin-upgirl maakte ze zeer snel internationaal furore en vooral in Europa was ze een icoon van de jaren vijftig. Als sekssymbool was zij een Frans antwoord op de Amerikaanse Marilyn Monroe (MM).Haar naam werd vaak afgekort als BB, wat vanwege de alliteratie erg voor de hand lag, maar wat nog meer populair werd door een tophit van Dario Moreno (1961), waarin Bardot in het Frans en Portugees wordt bezongen.",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Brigitte_Bardot_-_1962.jpg/532px-Brigitte_Bardot_-_1962.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 1,
        },
        {
          name: "Poopie Woopie",
          content:
            "The 50s style continuesIn the early 1960s, fashion was an extension of the years before. There were tight dresses, classic pencil skirts and A-line skirts. There had not been a new trend for a few years, and designers knew the had to come up with something special really quick. In the mean , women were inspired by icons like Jackie Kennedy. She was always in style with decent dresses and had accessories that matched perfectly.",
          imageUrl: "https://prisma.watch/wp-content/uploads/2018/12/foto2.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 1,
        },
        {
          name: "Marilyn Monroe",
          content:
            "pseudoniem van Norma Jeane Mortenson (Los Angeles (Californië), 1 juni 1926 – aldaar, 4 augustus 1962),[1][2] was een Amerikaans fotomodel, actrice en zangeres. Ze werd als sekssymbool een icoon in de jaren vijftig.",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Marilyn_Monroe%2C_Photoplay_1953.jpg/532px-Marilyn_Monroe%2C_Photoplay_1953.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 2,
        },
        {
          name: "Bridget Bardot",
          content:
            "september 1934) is een Frans fotomodel, actrice en zangeres. Als ondeugende stoeipoes en frivole pin-upgirl maakte ze zeer snel internationaal furore en vooral in Europa was ze een icoon van de jaren vijftig. Als sekssymbool was zij een Frans antwoord op de Amerikaanse Marilyn Monroe (MM).Haar naam werd vaak afgekort als BB, wat vanwege de alliteratie erg voor de hand lag, maar wat nog meer populair werd door een tophit van Dario Moreno (1961), waarin Bardot in het Frans en Portugees wordt bezongen.",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Brigitte_Bardot_-_1962.jpg/532px-Brigitte_Bardot_-_1962.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 4,
        },
        {
          name: "Poopie Woopie",
          content:
            "The 50s style continuesIn the early 1960s, fashion was an extension of the years before. There were tight dresses, classic pencil skirts and A-line skirts. There had not been a new trend for a few years, and designers knew the had to come up with something special really quick. In the mean , women were inspired by icons like Jackie Kennedy. She was always in style with decent dresses and had accessories that matched perfectly.",
          imageUrl: "https://prisma.watch/wp-content/uploads/2018/12/foto2.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 4,
        },
        {
          name: "Marilyn Monroe",
          content:
            "pseudoniem van Norma Jeane Mortenson (Los Angeles (Californië), 1 juni 1926 – aldaar, 4 augustus 1962),[1][2] was een Amerikaans fotomodel, actrice en zangeres. Ze werd als sekssymbool een icoon in de jaren vijftig.",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Marilyn_Monroe%2C_Photoplay_1953.jpg/532px-Marilyn_Monroe%2C_Photoplay_1953.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 4,
        },
        {
          name: "Bridget Bardot",
          content:
            "september 1934) is een Frans fotomodel, actrice en zangeres. Als ondeugende stoeipoes en frivole pin-upgirl maakte ze zeer snel internationaal furore en vooral in Europa was ze een icoon van de jaren vijftig. Als sekssymbool was zij een Frans antwoord op de Amerikaanse Marilyn Monroe (MM).Haar naam werd vaak afgekort als BB, wat vanwege de alliteratie erg voor de hand lag, maar wat nog meer populair werd door een tophit van Dario Moreno (1961), waarin Bardot in het Frans en Portugees wordt bezongen.",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Brigitte_Bardot_-_1962.jpg/532px-Brigitte_Bardot_-_1962.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 4,
        },
        {
          name: "Poopie Woopie",
          content:
            "The 50s style continuesIn the early 1960s, fashion was an extension of the years before. There were tight dresses, classic pencil skirts and A-line skirts. There had not been a new trend for a few years, and designers knew the had to come up with something special really quick. In the mean , women were inspired by icons like Jackie Kennedy. She was always in style with decent dresses and had accessories that matched perfectly.",
          imageUrl: "https://prisma.watch/wp-content/uploads/2018/12/foto2.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 4,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
