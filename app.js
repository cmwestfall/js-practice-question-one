const userInput = document.getElementById("input-text");
const submitBtn = document.getElementById("submit-btn");
const result = document.getElementById("result-text");

let convertedToNum;

const convertOrAlert = () => {
  convertedToNum = parseInt(userInput.value);

  if (isNaN(convertedToNum)) {
    alert("Please enter a valid number.");
    userInput.value = "";
    return null;
  } else {
    return convertedToNum;
  }
};

const oddOrEven = (num) => {
  if (num % 2 === 0 && num !== 0) {
    result.innerHTML = `${num} is even!`;
  } else if (num === 0) {
    result.innerHTML = `${num} is zero`;
  } else {
    result.innerHTML = `${num} is odd!`;
  }

  userInput.value = "";
};

submitBtn.addEventListener("click", () => {
  const num = convertOrAlert();

  if (num !== null) {
    oddOrEven(num);
  }
});
