// Exercise 4 : Building Management
// Instructions:
let building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}


// Review About Objects
// Copy and paste the above object to your Javascript file.

// Console.log the number of floors in the building.
console.log(building. numberOfFloors);
// Console.log how many apartments are on the floors 1 and 3.
console.log("apartments on first floor:", building.numberOfAptByFloor.firstFloor);
console.log("apartments on third floor:",building.numberOfAptByFloor.thirdFloor);
// Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log("second tenant:",building.nameOfTenants[1])
console.log("dan has this many rooms:",building.numberOfRoomsAndRent.dan[0])
// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
let sarahRent =(building.numberOfRoomsAndRent.sarah[1])
console.log(sarahRent);
let davidRent =(building.numberOfRoomsAndRent.david[1])
console.log(davidRent);
let danRent =(building.numberOfRoomsAndRent.dan[1])
console.log(danRent);

if ((sarahRent + davidRent) > danRent) 
{building.numberOfRoomsAndRent.dan[1]= 1200;}

console.log(building);
// Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
let family = {
    dad:"Shlomo",
    mom:"Rivka",
    son: "Sam"
}
// Using a for in loop, console.log the keys of the object.

for (let member in family) {
    console.log('member:', member)
    console.log('value:',family[member])
}
// Using a for in loop, console.log the values of the object.

// Exercise 6 : Rudolf
// Instructions
 const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
let sentence = ""
for (const item in details) {
    console.log(item)
    sentence = sentence + " " + item +" " + details[item]
    console.log(sentence)
}
// Exercise 7 : Secret Group
// Instructions
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters


let groupName = ""
for (const name of names) {
    console.log(name)
    groupName = groupName + name[0]
}
console.log(groupName)

// Console.log the name of their secret society. The output should be “ABJKPS”
groupName.sort();

console.log(groupName);
