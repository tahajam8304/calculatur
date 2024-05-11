/// caluclate app**///

const display = document.getElementById("display");

function attendtodisplay(input) {
  display.value += input;
}

function cleardisplay() {
  display.value = "";
}

function calculate() {
  display.value = eval(display.value);
}
