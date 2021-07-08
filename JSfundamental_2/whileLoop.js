//while loop : only one condition can specify

let rep = 1;
while (rep <= 10) {
    console.log(`While: lifting weights repition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
//console.log(dice);

while (dice !== 6) {
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6)
    console.log('loop is about to end...');
}






