function playTheGame() {
        const isUserReady = confirm("Do you want to play?")

    if(!isUserReady) {
        alert("No problem. Goodbye")
        return
    }
    let answer = prompt("Enter a number")
    let numberOfTries = 0
const userNumber = Number(answer)
const computerNumber = generateRandomNumber()
while (Number(answer) != computerNumber) 
{
numberOfTries = numberOfTries + 1
if(numberOfTries === 3) return alert("out of chances")
    if(!isOnlyNumbers(answer)) {
        alert("Sorry Not a number, Goodbye")
        return
    }
if(!isBetweenZeroAndTen(Number(answer))) {
    alert("Sorry it's not a good number, Goodbye")
    return
}


if(Number(answer) > computerNumber) {
    alert("Your number is bigger then the computer’s, guess again")
    
}
if(Number(answer) < computerNumber) {
    alert("Your number is smaller then the computer’s, guess again")
   
}

answer = prompt("Enter a number")
}

if(Number(answer) === computerNumber) {
    alert("WINNER")
    return
}


}

function isOnlyNumbers(str) {
    const regex = new RegExp(/^[0-9]*$/)
    return regex.test(str)
}

function isBetweenZeroAndTen(number) {
    return number >= 0 && number <= 10
}

function generateRandomNumber() {
    return Math.floor(Math.random()*11)
}
function compareNumbers(userNumber,computerNumber) {


}