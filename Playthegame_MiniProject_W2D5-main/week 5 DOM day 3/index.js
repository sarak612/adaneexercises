// // Exercise 1 : Change The Article
// // Using a DOM property, retrieve the h1 and console.log it.
// const h1 = getFirstElement("h1")
// console.log(getFirstElement("h1"))

// function getFirstElement(selector) {
//     return document.querySelector(selector)
// }
// // Using DOM methods, remove the last paragraph in the <article> tag.
// removeLastLine()

// function removeLastLine() {
//     const article = document.querySelector("article")
//     article.lastElementChild.remove()
// }


// // Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
// const h2 = getFirstElement("h2")
// console.log(getFirstH2)
// h2.addEventListener("click", changeBackground)

// function getFirstH2(){
//     return document.querySelector("article > h2")
// }
// function changeBackground() {
// console.log(h2.style)
// h2.classList.add("red")  
// }

// // Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
// const h3 = getFirstElement("h3")
// h3.addEventListener("click", hideH3)

// function hideH3() {
//     h3.classList.add("hide")
// }
// // Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
// addButton()

// function makeParagraphsBold() {
// const paragraphs = document.querySelectorAll("p")
// for (const paragraph of paragraphs){
//     paragraph.classList.add("bold")
// }

// }

// function addButton() {
//     const button = document.createElement("button")
//     button.textContent = "Make everything bold"
//     const article = getFirstElement("article")
//     article.appendChild(button)
//     button.addEventListener("click", makeParagraphsBold)
// }
// // BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
// h1.addEventListener("mouseover", randomFontSizeH1)

// function getRandomNumber() {
//     return Math.floor(Math.random() * 100 + 1)
// }

// function randomFontSizeH1() {
//     const randomNumber = getRandomNumber()
//     h1.style.fontSize = randomNumber + "px"
// }
// // BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
//  const secondParagraph = getSecondParagraph()
//  secondParagraph.addEventListener("mouseover", makeSecondParagraphFadeout)

//  function makeSecondParagraphFadeout() {
// secondParagraph.classList.add("fadeout")
//  }

//  function getSecondParagraph(){
//     return document.querySelectorAll("p")[1]
//  }
// Exercise 2 : Work With Forms
// Retrieve the form and console.log it.
const form = document.querySelector("form")
console.log("form", form)

// Retrieve the inputs by their id and console.log them.
// const firstName = document.getElementById("fname")
// const lastName = document.getElementById("lname")
// console.log(form, firstName, lastName)

// Retrieve the inputs by their name attribute and console.log them.

const firstName = document.querySelector("[name=fname]");
const lastName = document.querySelector("[name=lname]");
// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ? //prevents the page from reloading
function logFormInputs(event) {
    event.preventDefault();

console.log(firstName.value);
console.log(lastName.value);
}
// get the values of the input tags,

// make sure that they are not empty,
if (firstName.value === "" || lastName.value === "") {
    alert("Please enter all fields");
} else{

}

form.addEventListener("submit", logFormInputs);
// // create an li per input value,

// then append them to a the <ul class="usersAnswer"></ul>, below the form.