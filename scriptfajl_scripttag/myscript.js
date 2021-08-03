let myName = "Nagy Róbert";
let myAge = 17;
console.log(`a csávó neve ${myName} és a kora ${myAge}`);

// ez egysoros komment

/* több
soros
komment
*/

if (myAge > 49) {
  console.log("igen, öreg ");
} else {
  console.log("hamis, fiatal");
}

if (myAge >= 21) {
  console.log("you can drink in USA");
} else if (myAge >= 18) {
  console.log("you can drink in EU");
} else {
  console.log("get out here, you r too young there is a bomb in there");
}
