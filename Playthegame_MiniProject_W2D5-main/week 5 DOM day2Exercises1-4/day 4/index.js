// Part I : function with no parameters
// Create a function called infoAboutMe() that takes no parameter.
// function infoAboutMe() {
//     console.log("I'm studying functions now")
// }

// infoAboutMe()
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.

// Part II : function with three parameters
// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
//  function infoAboutPerson(personName, personAge,personFavoriteColor) {
//      console.log("Your name is" , personName)
//     console.log("You are" , personAge , "years old")
//        console.log("Your favorite color is", personFavoriteColor)
//  }
 

//  infoAboutPerson("David", 45, "blue")
//  infoAboutPerson("Josh", 12, "yellow")

// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")

// Exercise 2 : Tips
// Instructions
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// Create a function named calculateTip() that takes no parameter.
//  function calculateTip(){
//      const amount = Number(prompt("How much is the bill?"))
//      let tipPercent
//      if(amount < 50) tipPercent = .20
//      if(amount > 50 && amount < 200) tipPercent = .15
// if(amount > 200) tipPercent = .10
// const tip = amount * (1+tipPercent)

// console.log("bill", amount)
// console.log("tip", tip)
//  }

//  calculateTip()
// Inside the function, use prompt to ask John for the amount of the bill.

// Here are the rules
// If the bill is less than $50, tip 20%.
// If the bill is between $50 and $200, tip 15%.
// If the bill is more than $200, tip 10%.

// Console.log the tip amount and the final bill (bill + tip).


// 🌟 Exercise 3 : Find The Numbers Divisible By 23
// Instructions
// Create a function call isDivisible() that takes no parameter.

// function isDivisible() {
// // In the function, loop through numbers 0 to 500.
// let sum = 0
// for (let i = 0;i < 500;i++) {
// // Console.log all the numbers divisible by 23.
// if (i % 23 === 0) sum = sum + i
// }
// console.log("the sum of numbers divisible by 23 is:", sum)
// }
// isDivisible()
// // At the end, console.log the sum of all numbers that are divisible by 23.
// Exercise 4 : Shopping List
// Instructions
// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 
// // Add the stock and prices objects to your js file.

// // Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
// const shoppingList = ["banana", "orange", "apple"]
// // Create a function called myBill() that takes no parameters.
// function myBill()
// // The function should return the total price of your shoppingList. In order to do this you must follow these rules:
//  {
//     for (const item of shoppingList) {
//     console.log(item)
//         const quantityInStock = stock[item] 
//            if (quantityInStock > 0) {
//             const price = prices[item]
//             console.log("the price of", item, "is", price)
//             console.log("and we have this many in stock", stock[item])
//             stock[item] = stock[item] - 1
//             console.log("the new quantity of this item in stock is", stock[item])
//         } else {
//             console.log("there is no", item, "in stock")
//         }
//     }
//  }    

// myBill()
// // The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.

// Call the myBill() function.
//Bonus: If the item is in stock, decrease the item’s stock by 1

// Exercise 5 : What’s In My Wallet ?
// Instructions
// Note: Read the illustration (point 4), while reading the instructions

// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.

// function changeEnough(itemPrice, amountOfChange){
//     console.log("the item price is", itemPrice)
//             const sum = calculateSum(amountOfChange)
//     if(sum > itemPrice) {
//         console.log("you have enough money")
//         return true
//     } else {
//         console.log("you don't have enough money")
//         return false
//     }
// }

// function calculateSum(arr) {
//     let sum = 0
//     for (let i = 0;i < arr.length;i++){
// let coinValue
// const numberOfCoins = arr[i]
// if(i===0){coinValue = .25}
// if(i===1){coinValue = .10}
// if(i===2){coinValue = .05}
// if(i===3){coinValue = .01}
//     console.log("we have", numberOfCoins, "coins that have a value of", coinValue)

//     sum = sum + numberOfCoins * coinValue

//     console.log("the total sum is", sum)
//     }
//     return sum
//     }
//    calculateSum([25, 20, 5, 0])


// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01


// 4. To illustrate:

// After you created the function, invoke it like this:

// changeEnough(4.25, [25, 20, 5, 0])
// The value 4.25 represents the item’s price
// The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
// The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)


// Examples

// changeEnough(14.11, [2,100,0,0]) => returns false
// changeEnough(0.75, [0,0,20,5]) => returns true

// Exercise 6 : Vacations Costs
// Instructions
// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().


 function hotelCost(numberOfNights) {
    
 const costPerNight = 140
 const totalPrice =  Number(numberOfNights) * costPerNight
return totalPrice

 }
// // If the user doesn’t answer or if the answer is not a number, ask again.
 function isOnlyNumbers(str) {
 const regex = (/^[0-9]*$/)
 return regex.test(str)
 }

  function includesNumber(str) {
      const regex = (/\d/)
       return regex.test(str)
    }


// The hotel costs $140 per night. The function should return the total price of the hotel.
// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$

  
  function planeRideCost(destination) {
      
          if (destination == "London") return 183
     if (destination == "Paris") return 220
      return 300
      }
//     Define a function called rentalCarCost().

  function rentalCarCost(carAnswer) {
          const dailyPrice = 40
  const numberOfDays = Number(carAnswer)

  let discount = 0
      if (numberOfDays >= 10) discount = .05

      const totalPrice = dailyPrice * numberOfDays * (1 - discount)
  console.log('totalPrice', totalPrice)
  return totalPrice
      }

    // It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.

// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
 function totalVacationCost() {

    let hotelAnswer 
       while (!isOnlyNumbers(hotelAnswer)) {
hotelAnswer = prompt("How many nights would you like to stay?")
}

let carAnswer
   while (!isOnlyNumbers(carAnswer)) {
      carAnswer = prompt("How many days would you like to rent a car?")
      }
      let destination = ""

      while ( destination == ""  || includesNumber(destination)) {
              destination = prompt("Where would you like to go?")
      } 
 
 
    const hotelPrice = hotelCost(hotelAnswer)
   const carPrice = rentalCarCost(carAnswer)
      const planePrice = planeRideCost(destination)

      console.log('hotelPrice:', hotelPrice)
 console.log('carPrice:', carPrice)
  console.log('planePrice:', planePrice)

 const totalPrice = hotelPrice + carPrice +  planePrice
 console.log('totalPrice', totalPrice)

 }
 
 totalVacationCost()
// Call the function totalVacationCost()

// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.
