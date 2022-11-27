 const gameInfo = [
     {
       username: "john",
       team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
 ];

// 1.Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
// The new array should look like this :
// const usernames = ["john!", "becky!", "susy!", "tyson!"]
//  const usernames = getUsernamesFromArray(gameInfo);


//  function getUsernamesFromArray(users) {
//      const usernames = [];
//     for (const user of users) {
//         usernames.push(user.username + '!');
        
//          }
//      return usernames;
//  }
// console.log(usernames);
// 2. Create an array using forEach that contains the usernames of all players with a score bigger than 5.
// The new array should look like this :
// const winners = ["becky", "susy"]
// const winners = getWinnersFromArray(gameInfo);
// console.log("winners:",  winners);

// function getWinnersFromArray(users) {
//   const winners = [];
//   for(const user of users) {
//     if (user.score > 5) {
//       winners.push(user.username);

//     }
//   }
// return winners;
// }

// 3. Find and display the total score of the users. (Hint: The total score is 71)
const totalScore = getTotalScoreFromArray(gameInfo);
console.log("totalScore:", totalScore);

function getTotalScoreFromArray(users){
  let total = 0;
  for (const user of users) {
    total += user.score;
  }
  return total;
}






    

