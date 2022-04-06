const firstValue = Number(prompt("Please enter the first number"));
const secondValue = prompt("Please enter * / + -");
const thirdValue = Number(prompt("Please enter the second number"));

if (isNaN(firstValue) || isNaN(thirdValue)) {
  alert("Such operation does not exist");
} else if (secondValue === "*") {
  alert("Your result is " + firstValue * thirdValue);
} else if (secondValue === "/") {
  alert("Your result is " + firstValue / thirdValue);
} else if (secondValue === "+") {
  alert("Your result is " + (firstValue + thirdValue));
} else if (secondValue === "-") {
  alert("Your result is " + (firstValue - thirdValue));
} else {
  alert("Such operation does not exist");
}
