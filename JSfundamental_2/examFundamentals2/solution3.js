const mixedArray = [20, "sama", "javascript"];
const contactDetails = {
  address: "2015 Montreal",
  phoneNumber: 4389086756,
};
mixedArray.push(contactDetails);

for (const ele of mixedArray) {
  console.log(ele);
}
console.log(mixedArray.pop());

console.log(mixedArray);
