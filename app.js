const divideButton = document.querySelector("[data-divide]");
const multiplyButton = document.querySelector("[data-multiply]");
const display = document.querySelector("[data-display]");

divideButton.addEventListener("click", divide);
multiplyButton.addEventListener("click", multiply);

function divide() {
  const operand1 = parseInt(
    document.querySelector("[data-first-operand]").value
  );
  const operand2 = parseInt(
    document.querySelector("[data-second-operand]").value
  );
  if (operand1 && operand2 && typeof (operand1 && operand2) === "number") {
    display.innerText = `The answer is ${operand1 / operand2}`;
    clearInputs();
  } else {
    display.innerText = "Enter Valid Operands.";
  }
}

function multiply() {
  const operand1 = parseInt(
    document.querySelector("[data-first-operand]").value
  );
  const operand2 = parseInt(
    document.querySelector("[data-second-operand]").value
  );
  if (operand1 && operand2 && typeof (operand1 && operand2) === "number") {
    display.innerText = `The answer is ${operand1 * operand2}`;
    clearInputs();
  } else {
    display.innerText = "Enter Valid Operands.";
  }
}

function clearInputs() {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => (input.value = ""));
}
