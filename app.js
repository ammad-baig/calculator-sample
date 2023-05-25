var display = document.getElementById("display");

function getvalue(num) {
  //   console.log(num);
  display.value += num;
}
function calculate() {
  display.value = eval(display.value);
}
function clearAll() {
  display.value = "";
}
function backSpace() {
  display.value = display.value.slice(0, display.value.length - 1);
}
function square() {
  display.value = display.value * display.value;
}
function squareRoot() {
  display.value = display.value ** 0.5;
}
