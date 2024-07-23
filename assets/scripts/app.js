const defaultResult = 0;
let currentResult = defaultResult;
let currentStr = "";

// check user input and process arithmetic
function operation(op, btnName) {
  const enteredNum = parseInt(userInput.value);
  if (isNaN(enteredNum)) {
    outputResult(currentResult, "Invalid user input");
    return;
  }

  currentStr = `${currentResult} ${op} ${enteredNum}`;
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
  operationLog(btnName, op, currentResult);
}

const operationLog = (clickedBtn, op, result) => {
  console.log(
    `Clicked button: ${clickedBtn} \nOperation: ${op}\nResult: ${result}`
  );
};

// Create object that integrating all objects
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
