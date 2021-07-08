const friends = ['raki', 'janu', 'raji'];
friends.push('sama'); // push means adding an element at the end of the array list
console.log(friends);
console.log(friends.newLength);

friends.unshift('swarupa'); // unshift means adding element at the beginning of the array list
console.log(friends);

//Removing elements
friends.pop(); // last element 
const popped = friends.pop();
console.log(popped); // removed last element 
console.log(friends);

friends.shift(); //first
console.log(friends);

console.log(friends.indexOf('janu')); // indexOf is gives the value of element in array list like 1 'janu'
console.log(friends.indexOf('king')); // indexOf is here is -1 'king'

friends.push(23);

console.log(friends.includes('raki')); //includes checks whether u have the element in arraly list if it is gives true value
console.log(friends.includes('snailbaby')); // includes checks snailbaby is not present in the array list so gives false
console.log(friends.includes(23));

// includes can be used for conditional statements
if (friends.includes('raki')){
    console.log('you have a friend called raki');
}

