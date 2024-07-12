// SCOPE

// Basically whatever is inside curly brackets {} (most of the times)
// this variable is in the global scope
let i = 19;

for (let i = 0; i < 10; i++) {
  // but here we have the variable i declared again, it's inside the for loop scope, no accessible from the outside
  console.log(`Iteration number ${i}`);
}

console.log("The value of i is: ", i);

// this is outside of the scope of the for loop
const userName = "Charles";

function endGame() {
  const gameStats = {
    score: 0,
    isGameOver: false,
  };
  gameStats.isGameOver = true;
  console.log("The game is over, your score is: ", gameStats.score);
}

endGame();
// console.log(gameStats.isGameOver); // ERROR BECAUSE gameStats is defined inside endGame function
