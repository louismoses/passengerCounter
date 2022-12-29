let redBusCount = 0;
let blueBusCount = 0;
let greenBusCount = 0;
let countElRed = document.getElementById("count-el-red");
let countElBlue = document.getElementById("count-el-blue");
let countElGreen = document.getElementById("count-el-green");
let saveEl = document.getElementById("save-el");
let saveRedEl = document.getElementById("saveRed-el");
let saveGreenEl = document.getElementById("saveGreen-el");
let saveBlueEl = document.getElementById("saveBlue-el");

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
  saveEl.textContent += " " + totalCount + " - ";
  saveRedEl.textContent += " " + redBusCount + " - ";
  saveGreenEl.textContent += " " + greenBusCount + " - ";
  saveBlueEl.textContent += " " + blueBusCount + " - ";
  countElRed.innerText = 0;
  redBusCount = 0;
  countElGreen.innerText = 0;
  greenBusCount = 0;
  countElBlue.innerText = 0;
  blueBusCount = 0;
}
