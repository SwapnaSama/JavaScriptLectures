const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. solution
const [players1, players2] = game.players;
console.log(players1, players2);

//2, solution
const [gk, ...fieldplayers] = players1;
console.log(gk, fieldplayers);

//3 solution
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4 solution
const playersFinal = [...players1, "Thiago", "Coutinho", "Periscic"];

//5 solution
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6 solution
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals("Davies", "Muller");
// printGoals(game.scored);
printGoals(...game.scored);

//7 solution
team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");
