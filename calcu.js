/// caluclate app**///

const display = document.getElementById("display");

function attendtodisplay(input) {
  display.value += input;
}
///equal
function cleardisplay() {
  display.value = "";
}
///eval method///

function calculate() {
  display.value = eval(display.value);
}
