const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

const dolphinScores = [44, 23, 71];
const dolphinAverage = calcAverage(
  dolphinScores[0],
  dolphinScores[1],
  dolphinScores[2]
);

console.log("Dolphin Average is " + dolphinAverage);

const koalaScore = [85, 54, 41];
const koalaAverage = calcAverage(koalaScore[0], koalaScore[1], koalaScore[2]);
console.log("Koalas Average is " + koalaAverage);

const checkWinner = function (avgDolphin, avgKoalas) {
  if (dolphinAverage < koalaAverage) {
    console.log(`Dolphin Win ${avgDolphin} vs ${avgKoalas}`);
  } else {
    console.log(`Koalas Win ${avgKoalas} vs ${avgDolphin}`);
  }
};
