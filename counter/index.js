//COUNTER PROGRAM

const decrementButton = document.getElementById("decrementButton");
const incrementButton = document.getElementById("incrementButton");
const resetButton = document.getElementById("resetButton");
const counterLabel = document.getElementById("countLabel");

let count = 0;

incrementButton.onclick = () => {
  count++;
  counterLabel.textContent = count;
}

decrementButton.onclick = () => {
  count--;
  counterLabel.textContent = count;
}

resetButton.onclick = () => {
  count = 0;
  counterLabel.textContent = count;
}
