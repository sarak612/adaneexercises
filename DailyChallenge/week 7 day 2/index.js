/* <title>Week 7 Day 2</title> */
//  Exercise 1 : Scope
//  Instructions
//  Analyse the code below, and predict what will be the value of a in all the following functions.
//  Write your prediction as comments in a js file. Explain your predictions.
// #1
// function funcOne() {
//      const a = 5;
//      if(a > 1) {
//          a = 3;
//     }
//      alert(`inside the funcOne function ${a}`);
//  }
//  funcOne() 
// the value of a = 3

// // #1.1 - run in the console:
// funcOne()
// // #1.2 What will happen if the variable is declared 
// // with const instead of let ?
// receive an error message. with const unable to change the variable.

// //#2
//   let a = 0;
//   function funcTwo() {
//       a = 5;
//   }
//   funcTwo()
//   the value of  a = 5

//  function funcThree() {
//      alert(`inside the funcThree function ${a}`);
//  }
// funcThree()
// the value of  a = 5
// // #2.1 - run in the console:
// funcThree() a = 5
// funcTwo()a = 5
// funcThree()
// // #2.2 What will happen if the variable is declared 
// // with const instead of let ? receive an error message. with const unable to change the variable.


// //#3
//    function funcFour() {
//        window.a = "hello";
//    }
//   funcFour()
// the value of window.a = hello


//  function funcFive() {
//      alert(`inside the funcFive function ${a}`);
//  }
//funcFive()
// the value of a = 5

// // #3.1 - run in the console:
// funcFour() Hello 
// funcFive() a

// //#4
//   let a = 1;
//   function funcSix() {
//       let a = "test";
//       alert(`inside the funcSix function ${a}`);
//   }
//  funcSix()
 // the value of a = test

// // #4.1 - run in the console:
// funcSix()
// // #4.2 What will happen if the variable is declared 
// // with const instead of let ?
// there's no change because there's no change to a.

// //#5
//  const a = 2;
//  if (true) {
//      let a = 5;
//      alert(`in the if block ${a}`);
//  }
//  alert(`outside of the if block ${a}`);
//  console.log(a)

// // #5.1 - run the code in the console
// // #5.2 What will happen if the variable is declared 
// // with const instead of let ?
// both the 2 and 5 show with let and const
// Exercise 2 : Ternary Operator
// Instructions
// Using the code below:

// function winBattle(){
//     return true;
// }

// Transform the winBattle() function to an arrow function.
// const winBattle = () => true;
// winBattle();

// Create a variable called experiencePoints.
// let experiencePoints;
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// experiencePoints = winBattle() ? 10 : 1;
// Console.log the experiencePoints variable.
// console.log("experiencePoints:", experiencePoints);
// 🌟 Exercise 3 : Is It A String ?
// Instructions
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. Use ternary operator
// Check out the example below to see the expected output
// Example:
// console.log(isString('hello')); 
//true
// console.log(isString([1, 2, 4, 0]));
//false
// const isString = (argue) => (typeof argue === "string" ? true : false);

// console.log('isString("hello"):', isString("hello"))
// console.log('isString(1,2,4,0):', isString(1,2,4,0))
// Exercise 4 : Colors
// Instructions
// Using this array :

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// for (let i = 0; i < colors.length; i++) {
//     const color = colors[i];
//     console.log(`#${i + 1} choice is ${color}`);
// }
// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.
// Exercise 5 : Colors #2
// Instructions
// Using these arrays :

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];

// colors.forEach((color, index) =>     {
//     console.log(`${index + 1} ${getOrderOrdinal(index + 1)} choice is ${color}`);
// }
// );

// function getOrderOrdinal(index) {
// if (index === 1 || index ===2 || index === 3) return ordinal[index];  
// return ordinal[0];
// }
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.
// Exercise 6 : Bank Details
// Instructions
// In this exercise, you have to decide which type of variables you have to use (ie. let or const):
// Create a global variable called bankAmount which value is the amount of money currently in your account.
let bankAmount = 0;
// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
const vatAmount = .17;
// Create an array with all your monthly expenses, both positive and negative (money made and money spent).
// Example : 
const details = ["+200", "-100", "+146", "+167", "-2900"]
// Create a program that modifies the expenses (ie. the positive AND the negative expenses) so that they will include taxes (multiply each expense by the VAT).
const currentBankAccount = addVat(details);
console.log("currentBankAccount:", currentBankAccount);


function addVat(expenses) {
let total = 0;
expenses. forEach((expense)=> {
const numExpense = Number(expense);
const expenseWithVat = numExpense * (1 + vatAmount);
total = total + expenseWithVat;
}
);
return total;
}
// Display your current bankAccount standing at the end of the month.
