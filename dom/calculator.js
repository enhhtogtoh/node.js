// const total = document.getElementById("total");
// const tipsContainer = document.getElementById("tips");
// const billInput = document.getElementById("bill-input");
// const resetButton = document.getElementById("reset-button");

// const sanitizeBillInput = (input) => {
//   // Зөвхөн number авна.
//   input = input.replace(/[^\d.]/g, "");

//   // Зөвхөн 1 бутархайн (.) авна.
//   if ((input.match(/\./g) || []).length > 1) {
//     input = input.slice(0, -1);
//   }

//   return input;
// };

// billInput.addEventListener("input", () => {
//   billInput.value = sanitizeBillInput(billInput.value);
// });

// const calculateTotal = (bill, tipPercentage) => {
//   const billAmount = parseFloat(bill);
//   const tipAmount = (billAmount * tipPercentage) / 100;
//   return (billAmount + tipAmount).toFixed(2);
// };

// tipsContainer.addEventListener("click", (event) => {
//   if (event.target.tagName !== "BUTTON") return;

//   if (!billInput.value) {
//     alert("Please enter a bill amount.");
//     return;
//   }

//   const tipPercentage = parseFloat(event.target.textContent.replace("%", ""));

//   const totalAmount = calculateTotal(billInput.value, tipPercentage);

//   total.innerText = `Total ${totalAmount}`;
// });

// resetButton.addEventListener("click", () => {
//   billInput.value = "";
//   total.innerText = "0.00";
// });

const total = document.getElementById();
