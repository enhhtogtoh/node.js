const containerDiv = document.getElementById("container");
const newElement = document.createElement("p");

// newElement.style.color = "blue";

// containerDiv.appendChild(newElement);

const multiplyNumber = document.getElementById("input");
const clickButton = document.getElementById("button");

newElement.style.color = "green";

containerDiv.appendChild(newElement);

clickButton.addEventListener("click", function () {
  const result = multiply(multiplyNumber.value);
  newElement.innerText = result;
  multiplyNumber.value = "";
});

const multiply = (value) => {
  const result = value * value;
  return result;
};
