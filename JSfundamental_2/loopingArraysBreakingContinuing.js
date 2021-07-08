// for loop using arrays

const raki = [ 
    'swarupa', 
    'sama', 
    2021 - 1960, 
    'artist', 
    ['raki', 'janu', 'raji'],
    true
];
const types = [];

for(let i = 0; i < raki.length; i++){
    //reading from raki array
    console.log(raki[i], typeof raki[i]);
//filling types array
// types[i] = typeof raki[i];
types.push(typeof raki[i]);
}
console.log(types);

const years = [1991, 1969, 2020, 2005];
const ages = [];

for(let j = 0; j< years.length; j++){
    ages.push(2037 - years[j]);
}
console.log(ages);

// continue and break
console.log('---ONLY STRINGS---');
for (let i = 0; i< raki.length; i++){
    if(typeof raki[i] !== 'string')
    continue;
    
    console.log(raki[i], typeof raki[i]);
}

console.log('---BREAK WITH NUMBER---');
for (let i = 0; i< raki.length; i++) {
    if(typeof raki[i] === 'number')
    break;

    console.log(raki[i], typeof raki[i]);
}