let redBusCount = 0;
let blueBusCount = 0;
let greenBusCount = 0;
let countElRed = document.getElementById("count-el-red");
let countElBlue = document.getElementById("count-el-blue");
let countElGreen = document.getElementById("count-el-green");
let saveEl = document.getElementById("save-el");

function incrementRed() {
  redBusCount += 1;
  countElRed.innerText = redBusCount;
}
function incrementBlue() {
  blueBusCount += 1;
  countElBlue.innerText = blueBusCount;
}
function incrementGreen() {
  greenBusCount += 1;
  countElGreen.innerText = greenBusCount;
}
function save() {
  let totalCount = redBusCount + greenBusCount + blueBusCount;
  saveEl.innerText += " " + totalCount + " - ";
}
//  scratch section

let welcomeEl = document.getElementById("welcome-el");
let myname = "Moses";
let greeting = "Hi, welcome back to the page ";

welcomeEl.innerText = greeting + myname;
welcomeEl.innerHTML += "👍";

//  scratch section end
