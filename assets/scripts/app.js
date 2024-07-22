const defaultResult = 0;
let currentResult = defaultResult;
let currentStr = "";

function operation(op) {
  const enteredNum = parseInt(userInput.value);
  console.log(userInput.value, typeof userInput.value);
  console.log(enteredNum, typeof enteredNum);
  if (isNaN(enteredNum)) {
    outputResult(currentResult, "Invalid user input");
    return;
  }

  currentStr = `${currentResult} ${op} ${enteredNum}`;
  console.log(currentStr);
  switch (op) {
    case "+": {
      currentResult += enteredNum;
      break;
    }
    case "-": {
      currentResult -= enteredNum;
      break;
    }
    case "*": {
      currentResult *= enteredNum;
      break;
    }
    case "/": {
      currentResult /= enteredNum;
      break;
    }
    default:
      console.log("System not working");
  }

  outputResult(currentResult, currentStr);
}

const addEventListeners = () => {
  const allBtn = [
    {
      btnName: addBtn,
      operator: "+",
    },
    {
      btnName: subtractBtn,
      operator: "-",
    },
    {
      btnName: multiplyBtn,
      operator: "*",
    },
    {
      btnName: divideBtn,
      operator: "/",
    },
  ];

  allBtn.forEach(({ btnName, operator }) => {
    btnName.addEventListener("click", () => {
      operation(operator);
    });
  });
};

addEventListeners();

// addBtn.addEventListener("click", () => {
//   operation("+");
// });
// subtractBtn.addEventListener("click", () => {
//   operation("-");
// });
// multiplyBtn.addEventListener("click", () => {
//   operation("*");
// });
// divideBtn.addEventListener("click", () => {
//   operation("/");
// });
