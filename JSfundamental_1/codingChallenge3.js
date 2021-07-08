let averageDolphinScore = (96 + 108 + 89) / 3;
let averageKoalasScore = (88 + 91 + 110) / 3;

if (averageDolphinScore < averageKoalasScore) {
    console.log("Koalas is winner");
}
else {
    console.log("Dolphin is winner");
}

//step-3
const minimumScore = 100;

if (averageKoalasScore >= minimumScore && averageDolphinScore < averageKoalasScore) {
    console.log("Koalas is winner");
}
else if (averageDolphinScore >= minimumScore && averageKoalasScore < averageDolphinScore) {
    console.log("Dolphin is winner");
}
else if (averageDolphinScore == averageKoalasScore && averageKoalasScore >= minimumScore 
    && averageDolphinScore >= minimumScore) {
    console.log(" match is Draw");
}
else {
     console.log("nobody wins trophy");
}


