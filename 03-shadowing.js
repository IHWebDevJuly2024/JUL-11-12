// SHADOWING
/*
A variable shadowing occurs when a variable declared within a certain scope has the same name as a variable declared in an outer scope.
*/

const campus = "Barcelona Ironhack";

function goToTheCampus() {
  const campus = "Berlin Ironhack"; // we are shadowing the global variable

  console.log(campus);
}

goToTheCampus();

console.log("The value of the global variable is: ", campus);
