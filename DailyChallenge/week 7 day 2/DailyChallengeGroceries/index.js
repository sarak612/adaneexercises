// /* <title>DailyChallenge:Groceries</title>
// Instructions
// Using this object :

let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
// Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference

// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.
 const displayGroceries = (obj) => {
    const fruits = obj.fruits;
    fruits.forEach(fruit => console.log(fruit));
 };
// Create another arrow function named cloneGroceries.

 const cloneGroceries = () => {
    let user = client;
     user = "Betty"; // user and client are the same and both names will appear//
     console.log(user, client);
     const shopping = groceries;
     shopping.totalPrice = "$35"; // since it's an object, we'll see the change//
     console.log("totalPrice", shopping.totalPrice);
     shopping.other.paid = false; //since it's an object, we'll see the change //
     console.log("shopping.other.paid", shopping.other.paid);
     console.log("groceries.other.paid", groceries.other.paid);
    console.log("shopping", shopping)
     console.log("groceries", groceries);

 };
displayGroceries(groceries);
 cloneGroceries();
// // In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
// In the function, create a variable named shopping that is equal to the groceries variable.
// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
// Change the value of the payed key to false. Will we also see this modification in the shopping object ? Why ?

// Invoke the cloneGroceries function. 