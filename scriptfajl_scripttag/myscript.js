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

// jQuery rész
console.log("**** Itt elindult a jquery lekérdezés ****");

console.log(`ide kiírom a <h1> tag tartalmát: ${$("h1").text()}`);

$("h1").text("Lecseréltem JS-ből az eredetit erre.");

$(".yellowBg").css("background-color", "red");

$("p").html("Lecseréltem <strong>JS-ből</strong> bold elemre.");

$("h2").replaceWith("<h3>na megy-e?</h3>");

$("h1").replaceWith("<h2>és most a h1-t, h2-re</h2>");

$("ul").append("<li>új elem</li>");

$(".yellowBg").remove();

$("h2").toggleClass("yellowBg");

function liAdder() {
  $("ul").append("<li>új elem</li>");
}

function liRemover() {
  $("li:last-of-type").remove();
}

function liAdder10() {
  for (i = 0; i < 10; i++) {
    $("ul").append(`<li>${i + 1}. új elem</li>`);
  }
}

function liRemoveTen() {
  for (i = 0; i < 10; i++) {
    liRemover();
  }
}

$("#add").click(liAdder);
$("#remove").click(liRemover);
$("#add10").click(liAdder10);
$("#removeTen").click(liRemoveTen);

let colors = [
  "red",
  "blue",
  "magenta",
  "black",
  "orange",
  "yellow",
  "green",
  "teal",
];
colors.forEach((color) => {
  console.log(color);
  $("#contForColorBoxes").append('<div class="box"></div>');
  $(".box:last-of-type").css("background-color", color);
});
