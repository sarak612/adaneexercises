// Exercise 1 : List Of People
// Instructions
 let people = ["Greg", "Mary", "Devon", "James"];
console.log(people)

// Part I - Review About Arrays
// Write code to remove “Greg” from the people array.
people.shift()
console.log(people)
// Write code to replace “James” to “Jason”.
people[2] = "Jason";
console.log(people)
// Write code to add your name to the end of the people array.
people.push("Sara")
console.log(people)
// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
people.indexOf("Mary")
console.log(people.indexOf("Mary"))

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
console.log(people.slice(1,3))

// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method

// Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people.indexOf("Foo")) //Foo isn't listed in the array.

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?
last = (people.length-1)
console.log('last:', last)

// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.
for (person of people) {console.log ("this person is" , person)}
// Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
// Hint: take a look at the break statement in the lesson.
for (person of people) 
{console.log ("this person is" , person) 
if (person === "Jason")
{break}}

// 🌟 Exercise 2 : Your Favorite Colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.
let colors = ["pink", "purple", "aqua","blue", "green"];
console.log(colors)
let suffixes = ["st", "nd", "rd", "th", "th"];
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
for (color of colors)
{console.log ("My #1 choice is", color)}
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
for (let i = 0;i <colors.length;i++){console.log(`My ${i+1}${suffixes[i]} choice is ${colors[i]}`)}
// Hint : create an array of suffixes to do the Bonus

// Exercise 3 : Repeat The Question
// Instructions
// Prompt the user for a number.
do {let userNumber = parseInt(prompt("Please choose a number bigger than 10");
console.log(userNumber);
}



console.log(typeof(choice));
let number = Number(choice);
console.log('Number:', Number +1);


// Hint : Check the data type you receive from the prompt (ie. Use the typeof method

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?
