let screen = document.getElementById(
 "screen");

function inputValue(value) {
 if (value === "%") {
  screen.innerHTML = parseFloat(screen
   .innerHTML) / 100;
 } else {
  if (screen.innerHTML === "0") {
   screen.innerHTML = value;
  } else {
   screen.innerHTML += value;
  }
 }
}

function clearScreen() {
 screen.innerHTML = "0";
}

function backspace() {
 screen.innerHTML = screen.innerHTML
  .slice(0, -1);
 if (screen.innerHTML === "") {
  screen.innerHTML = "0";
 }
}

function calculate() {
 try {
  screen.innerHTML = eval(screen
   .innerHTML);
 } catch {
  screen.innerHTML = "Erro";
 }
}
