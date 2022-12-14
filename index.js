let redBusCount = 0;
let blueBusCount = 0;
let greenBusCount = 0;
let countElRed = document.getElementById("count-el-red");
let countElBlue = document.getElementById("count-el-blue");
let countElGreen = document.getElementById("count-el-green");

function incrementRed() {
  redBusCount += 1;
  console.log(redBusCount);
  countElRed.innerText = redBusCount;
}
function incrementBlue() {
  blueBusCount += 1;
  console.log(blueBusCount);
  countElBlue.innerText = blueBusCount;
}
function incrementGreen() {
  greenBusCount += 1;
  console.log(greenBusCount);
  countElGreen.innerText = greenBusCount;
}
