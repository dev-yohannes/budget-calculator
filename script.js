const budgetTotal = document.querySelector("#total-budget");
const incomeNumber = document.querySelector("#income-number");
const expenseNumber = document.querySelector("#expense-number");
const select = document.querySelector("#select");
const descriptionInput = document.querySelector("#description");
const valueInput = document.querySelector("#number-input");
const checkIcon = document.querySelector(".check-icon");
const incomeDescriptionSpan = document.querySelector(
  "#income-description-span"
);
const incomeValueSpan = document.querySelector("#income-value-span");
const expenseDescriptionSpan = document.querySelector(
  "#expense-description-span"
);
const expenseValueSpan = document.querySelector("#expense-value-span");
const incomeSectionUl = document.querySelector("#income-section-ul");
const expenseSectionUl = document.querySelector("#expense-section-ul");

// arrays
const incomeArray = [];
let incomeSum = 0;

const expenseArray = [];
let expenseSum = 0;

// function
const addingValueToBars = () => {
  if (select.value == 1) {
    incomeNumber.innerHTML = valueInput.value;
  } else {
    expenseNumber.innerHTML = valueInput.value;
  }
};

const addingToBudgetList = () => {
  if (descriptionInput.value === "" || valueInput.value === "") {
    alert("Fill the inputs");
  } else {
    if (select.value == 1) {
      const incomeDescriptionLi = document.createElement("li");
      incomeDescriptionLi.innerHTML = `
        <span id="income-description-span">${descriptionInput.value}</span>
        <span id="income-value-span" class="income-value-span">${valueInput.value}</span>
    `;
      incomeSectionUl.appendChild(incomeDescriptionLi);
      incomeArray.push(Number(valueInput.value));
      console.log(incomeArray, "income array");
    } else if (select.value == 2) {
      const expenseDescriptionLi = document.createElement("li");
      expenseDescriptionLi.innerHTML = `
        <span id="income-description-span">${descriptionInput.value}</span>
        <span id="expense-value-span" class="expense-value-span">${valueInput.value}</span>
    `;
      expenseSectionUl.appendChild(expenseDescriptionLi);
      expenseArray.push(Number(valueInput.value));
      console.log(expenseArray, "expense array");
    }
  }
};

const addingArrayValues = () => {
  for (let i = 0; i < incomeArray.length; i++) {
    incomeSum += incomeArray[i];
    // if (incomeArray.length === 0) {
    //   console.log("empty array");
    // } else {
    // }
  }
};

const finalCalledFunctions = () => {
  addingValueToBars();
  addingToBudgetList();
  console.log(incomeSum);
  descriptionInput.value = "";
  valueInput.value = "";
};

// events

checkIcon.addEventListener("click", () => {
  finalCalledFunctions();
});

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    finalCalledFunctions();
  }
});

// select.addEventListener("change", () => {
//   if (select.value == 1) {
//     console.log("changed to income");
//   } else {
//     console.log("changed to expense");
//   }
// });
