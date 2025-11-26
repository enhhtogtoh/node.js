const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");

let firstNum = "";
let secondNum = "";
let operator = null;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (!isNaN(value)) {
      firstNum += value;
      result.textContent = firstNum;
    } else if (value === "C") {
      firstNum = "";
      secondNum = "";
      operator = null;
      result.textContent = "";
    } else if (["+", "-", "x", "÷"].includes(value)) {
      operator = value;
      secondNum = firstNum;
      firstNum = "";
    } else if (value === "=") {
      if (secondNum && firstNum && operator) {
        let previousNum = Number(secondNum);
        let currentNum = Number(firstNum);
        let resultNum = 0;

        if (operator === "+") resultNum = previousNum + currentNum;
        if (operator === "-") resultNum = previousNum - currentNum;
        if (operator === "x") resultNum = previousNum * currentNum;
        if (operator === "÷") resultNum = previousNum / currentNum;

        result.textContent = resultNum;
        firstNum = resultNum;
      }
    }
  });
});
