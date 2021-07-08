// using Objects can use Dot & [] notation
const raki = {
  firstName: "swarupa",
  lastName: "sama",
  age: 2021 - 1960,
  job: "artist",
  friends: ["raki", "janu", "raji"],
};
console.log(raki);

// another method by using Dot notation
console.log(raki.lastName);
console.log(raki.age);

// another method by using Bracket notation
console.log(raki["age"]);

const nameKey = "Name";
console.log(raki["first" + nameKey]);
console.log(raki["last" + nameKey]);

//const interestedIn = prompt('what do you want to know about raki? Choose between firstName, lastName, age, job, children');
//console.log(raki[interestedIn]);

// if (raki[interestedIn]){
//     console.log(raki[interestedIn]);
// }
// else{
//     console.log('wrong request!');
// }

raki.location = "hyderabad";
raki["facebook"] = "raki@gmail.com";
console.log(raki);

//challenge
// 'raki has 3 friends, and his best friend is called Swapna'
console.log(
  `${raki.firstName} has ${raki.friends.length} friends, and his best friend is called ${raki.friends[0]}`
);
