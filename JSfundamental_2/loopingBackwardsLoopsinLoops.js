
const raki = [ 
    'swarupa', 
    'sama', 
    2021 - 1960, 
    'artist', 
    ['raki', 'janu', 'raji'],
    
];

// 0,1,2 ....4
// 4,3,2,....0

// loop backwards
for (let i = raki.length - 1; i>= 0; i--){
    console.log(i, raki[i]);
}

// Loops in loops
for (let exercise = 1; exercise < 4; exercise++){
    console.log(`---Starting exercise ${exercise}`);

    for(let rep = 1; rep< 6; rep++){
        console.log(`Exercise ${exercise}: lifting weight reptition ${rep}`);
    }
}