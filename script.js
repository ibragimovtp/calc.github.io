let result = document.getElementById("result");

function calculate() {
  result.textContent = eval(result.textContent);
}

function clearOutput() {
  result.textContent = "0";
}

function updateOutput(value) {
  if (result.textContent === "0") {
    result.textContent = value;
  } else {
    result.textContent += value;
  }
}

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.textContent) {
      case "AC":
        clearOutput();
        break;
      case "+/-":
        result.textContent = -1 * result.textContent;
        break;
      case "%":
        result.textContent = result.textContent / 100;
        break;
      case "÷":
        updateOutput("/");
        break;
      case "×":
        updateOutput("*");
        break;
      case "−":
        updateOutput("-");
        break;
      case "+":
        updateOutput("+");
        break;
      case "=":
        calculate();
        break;
      default:
        updateOutput(button.textContent);
    }
  });
});
