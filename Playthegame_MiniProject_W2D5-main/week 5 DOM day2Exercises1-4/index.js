// Exercise 1 : Users
// Instructions

// Using Javascript:
// Retrieve the div and console.log it
// const container = document.getElementById("container")

// // Change the name “Pete” to “Richard”.
// document.querySelector(".list").children[1].textContent = "Richard"

// // Change each first name of the two <ul>'s to your name.
// const lists = document.querySelectorAll(".list")
// lists.forEach(list =>list.firstElementChild.textContent = "Sara")

// Delete the <li> that contains the text node “Sarah”.
// lists[1].children[1].remove()

// // Bonus - Using Javascript:
// // Add a class called student_list to both of the <ul>'s.
// lists.forEach(list => list.classList.add("student_list"))

// // Add the classes university and attendance to the first <ul>.
// document.querySelector('ul')
// const firstUl = document.querySelector('ul')
// firstUl.classList.add("university", "attendance")

// Exercise 2 : Users And Style
// Add the code above, to your HTML file

// Add a “light blue” background color and some padding to the <div>.


// Do not display the <li> that contains the text node “John”.

// Add a border to the <li> that contains the text node “Pete”.

// Change the font size of the whole body.

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
 const div = document.querySelector("div")
console.log(div)

const divbackground = getComputedStyle(div).backgroundColor
if divbackground = light sky
// Exercise 3 : Change The Navbar
// Add the code above, to your HTML file

// // In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
// document.getElementById("navBar")
// const navBar = document.getElementById("navBar")
// navBar.setAttribute("id", "socialNetworkNavigation")

// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// const li = document.createElement("li")
// Create a new text node with “Logout” as its specified text.
// const logout = document.createTextNode ("Logout")
// Append the text node to the newly created list node (<li>).
// li.appendChild(logout)
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
// const ul = navBar.firstElementChild
// ul.appendChild(li)
// Bonus
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).
// const firstli = ul.firstElementChild
// const lastli = ul.lastChild
// console.log(firstli.textContent)
// console.log(lastli.textContent)

// Exercise 4 : My Book List
// Instructions
// Take a look at this link for help.

// The point of this challenge is to display a list of two books on your browser.

// In the body of the HTML page, create an empty div:
// <div class="listBooks"></div>
// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// const allBooks = []

// const book1 = {
//     title: "Marjorie Morningstar", 
//     author: "Herman Wouk",
//     image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuWVdued3UU7JvEeKoaq9ft60OQgJeXBp8M2OUIgOfAlRVREh4",
//     alreadyRead: true
//     }
// const book2 = {
//     title:"If LIfe IS a Bowl of CHerries What Am I Doing in the Pits?",
//     author:"Erma Bombeck",
//     image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSk7JNSlBL7F36b2jDUCQ9Uu4ZEoO4yEEKvftpaym2y6m2QApTG",
//     alreadyRead: false
// }

// allBooks.push(book1,book2)
// console.log('allBooks:', allBooks)

// const table = document.createElement("table")
// table.innerHTML = `
// <thead>
// <tr>
// <th colspan = "3">My Book List</th>
// </tr>
// </thead>
// <tbody>
// <tr class="${book1.alreadyRead ? 'is-read' : ''}>
// <td>${book1.title} written by ${book1.author}</td>
// <td>
// <img.src=${book1.image}"/>
// </td>
// <td>Already read: ${book1.alreadyRead}</td>
// </tr>
// <tr class="${book2.alreadyRead ? 'is-read' : ''}>
// <td>${book2.title} written by ${book2.author}</td>
// <td>
// <img.src=${book2.image}"/>
// </td>
// <td>Already read: ${book2.alreadyRead}</td>
// </tr>

// </tbody>
// `

// const bookListDiv = document.querySelector('.list-books')
// console.log('bookListDiv:', bookListDiv)



// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).

// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.

