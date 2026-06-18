const RESULTS = {
  groups: {},
  thirdPlace: [],
  groupMatches: { "A": {
      "Mexico__South Africa": { "home": 2, "away": 0 },
      "Mexico__South Korea": { "home": -1, "away": -1 },
      "Mexico__Czech Republic": { "home": -1, "away": -1 },
      "South Africa__South Korea": { "home": -1, "away": -1 },
      "South Africa__Czech Republic": { "home": -1, "away": -1 },
      "South Korea__Czech Republic": { "home": 2, "away": 1 }
    },
    "B": {
      "Canada__Switzerland": { "home": -1, "away": -1 },
      "Canada__Qatar": { "home": -1, "away": -1 },
      "Canada__Bosnia & Herzegovina": { "home": 1, "away": 1 },
      "Switzerland__Qatar": { "home": 1, "away": 1 },
      "Switzerland__Bosnia & Herzegovina": { "home": -1, "away": -1 },
      "Qatar__Bosnia & Herzegovina": { "home": -1, "away": -1 }      
    },
    "C": {
      "Brazil__Haiti": { "home": -1, "away": -1 },
      "Brazil__Morocco": { "home": 1, "away": 1 },
      "Brazil__Scotland": { "home": -1, "away": -1 },
      "Haiti__Morocco": { "home": -1, "away": -1 },
      "Haiti__Scotland": { "home": 0, "away": 1 },
      "Morocco__Scotland": { "home": -1, "away": -1 }
    },
    "D": {
      "Turkey__Paraguay": { "home": -1, "away": -1 },
      "Australia__Turkey": { "home": 2, "away": 0 },
      "Turkey__USA": { "home": -1, "away": -1 },
      "Paraguay__Australia": { "home": -1, "away": -1 },
      "USA__Paraguay": { "home": 4, "away": 1 },
      "Australia__USA": { "home": -1, "away": -1 }
    },
    "E": {
      "Curaçao__Ecuador": { "home": -1, "away": -1 },
      "Curaçao__Germany": { "home": 7, "away": 1 },
      "Curaçao__Ivory Coast": { "home": -1, "away": -1 },
      "Ecuador__Germany": { "home": -1, "away": -1 },
      "Ecuador__Ivory Coast": { "home": 1, "away": 0 },
      "Germany__Ivory Coast": { "home": -1, "away": -1 }
    },
    "F": {
      "Japan__Netherlands": { "home": 2, "away": 2 },
      "Japan__Tunisia": { "home": -1, "away": -1 },
      "Japan__Sweden": { "home": -1, "away": -1 },
      "Netherlands__Tunisia": { "home": -1, "away": -1 },
      "Netherlands__Sweden": { "home": -1, "away": -1 },
      "Tunisia__Sweden": { "home": 5, "away": 1 }
    },
     "G": {
      "Egypt__Belgium": { "home": 1, "away": 1 },
      "Egypt__Iran": { "home": -1, "away": -1 },
      "Egypt__New Zealand": { "home": -1, "away": -1 },
      "Belgium__Iran": { "home": -1, "away": -1 },
      "Belgium__New Zealand": { "home": -1, "away": -1 },
      "Iran__New Zealand": { "home": 2, "away": 2 }
    },
    "H": {
      "Uruguay__Spain": { "home": -1, "away": -1 },
      "Uruguay__Saudi Arabia": { "home": 1, "away": 1 },
      "Uruguay__Cape Verde": { "home": -1, "away": -1 },
      "Spain__Saudi Arabia": { "home": -1, "away": -1 },
      "Spain__Cape Verde": { "home": 0, "away": 0 },
      "Saudi Arabia__Cape Verde": { "home": -1, "away": -1 }
    },
    "I": {
      "France__Iraq": { "home": -1, "away": -1 },
      "France__Senegal": { "home": 3, "away": 1 },
      "France__Norway": { "home": -1, "away": -1 },
      "Iraq__Senegal": { "home": -1, "away": -1 },
      "Iraq__Norway": { "home": 1, "away": 4 },
      "Senegal__Norway": { "home": -1, "away": -1 }
    },
    "J": {
      "Argentina__Jordan": { "home": -1, "away": -1 },
      "Argentina__Algeria": { "home": 3, "away": 0 },
      "Argentina__Austria": { "home": -1, "away": -1 },
      "Jordan__Algeria": { "home": -1, "away": -1 },
      "Jordan__Austria": { "home": 3, "away": 1 },
      "Algeria__Austria": { "home": -1, "away": -1 }
    },
    "K": {
      "Portugal__Uzbekistan": { "home": -1, "away": -1 },
      "Portugal__DR Congo": { "home": 1, "away": 1 },
      "Portugal__Colombia": { "home": -1, "away": -1 },
      "Uzbekistan__DR Congo": { "home": -1, "away": -1 },
      "Uzbekistan__Colombia": { "home": 1, "away": 3 },
      "DR Congo__Colombia": { "home": -1, "away": -1 }
    },
    "L": {
      "England__Ghana": { "home": -1, "away": -1 },
      "England__Croatia": { "home": 4, "away": 2 },
      "England__Panama": { "home": -1, "away": -1 },
      "Ghana__Croatia": { "home": -1, "away": -1 },
      "Ghana__Panama": { "home": 1, "away": 0 },
      "Croatia__Panama": { "home": -1, "away": -1 }
    }},

  knockout: {
    round32: [],
    round16: [],
    quarterfinals: [],
    semifinals: [],

    champion: "",
    runnerUp: "",
    finalists: [],

    thirdPlaceWinner: "",
    final: "",
    thirdPlace: "",

    matches: {
      round32: [
        // {
        //   match: 73,
        //   team1: "",
        //   team2: "",
        //   winner: ""
        // }
      ],

      round16: [
        // {
        //   match: 89,
        //   team1: "",
        //   team2: "",
        //   winner: ""
        // }
      ],

      quarterfinals: [
        // {
        //   match: 97,
        //   team1: "",
        //   team2: "",
        //   winner: ""
        // }
      ],

      semifinals: [
        // {
        //   match: 101,
        //   team1: "",
        //   team2: "",
        //   winner: ""
        // }
      ],

      thirdPlace: [
        // {
        //   match: 103,
        //   team1: "",
        //   team2: "",
        //   winner: ""
        // }
      ],

      final: [
        // {
        //   match: 104,
        //   team1: "",
        //   team2: "",
        //   winner: ""
        // }
      ]
    }
  },

  semifinalists: [],
  finalists: [],

  champion: "",
  runnerUp: "",
  thirdPlaceWinner: "",

  awards: {
    goldenBoot: [],
    goldenBall: []
  }
};
