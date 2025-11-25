// const totalText = document.getElementById("result");
// const tipButtons = document.getElementById("tips");
// const billInput = document.getElementById("input");
// const resetButton = document.getElementById("reset");

// const newElement = document.createElement("percent");

// const calculateTip = (newElement) => console.log(newElement);
// totalText.appendChild(newElement);

// tipButtons.addEventListener("click", function () {
//   const result = Number(billInput.value);
//   newElement.innerText = result;
//   billInput.value = "";
// });

// const multiply = (value) => {
//   const result = value * 100;
//   return result;
//   totalText.innerText = result;
// };

// resetButton.addEventListener("click", () => {
//   if (!billInput) console.log("");
// });
// Tip calculation function
const calculateTip = (percent) => {
  const billInput = document.getElementById("input");
  const result = document.getElementById("result");

  const bill = parseInt(billInput.value);

  if (!bill || bill <= 0) {
    result.innerText = "0.00";
    return;
  }

  const tipAmount = (bill * percent) / 100 + bill;
  result.innerText = ["Total " + tipAmount.toFixed(2)];
};

// Reset button functionality
document.getElementById("reset").addEventListener("click", () => {
  document.getElementById("input").value = "";
  document.getElementById("result").innerText = "0.00";
});
