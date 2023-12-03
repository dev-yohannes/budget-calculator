const budgetTotal = document.querySelector("#total-budget");
const incomeNumber = document.querySelector("#income-number");
const expenseNumber = document.querySelector("#expense-number");
const select = document.querySelector("#select");
const descriptionInput = document.querySelector("#description");
const valueInput = document.querySelector("#number-input");
const checkIcon = document.querySelector(".add-icon");
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

// adding description and and value to budget list
const addingToBudgetList = () => {
  if (descriptionInput.value === "" || valueInput.value === "") {
    alert("Fill the inputs");
  } else {
    if (select.value == 1) {
      const incomeDescriptionLi = document.createElement("li");
      incomeDescriptionLi.innerHTML = `
        <span id="income-description-span">${descriptionInput.value}</span>
        <span id="income-value-span" class="income-value-span">${Number(
          valueInput.value
        ).toLocaleString("en-US")}</span>
    `;
      incomeSectionUl.appendChild(incomeDescriptionLi);
      incomeArray.push(Number(valueInput.value));
    } else if (select.value == 2) {
      const expenseDescriptionLi = document.createElement("li");
      expenseDescriptionLi.innerHTML = `
        <span id="income-description-span">${descriptionInput.value}</span>
        <span id="expense-value-span" class="expense-value-span">${Number(
          valueInput.value
        ).toLocaleString("en-US")}</span>
    `;
      expenseSectionUl.appendChild(expenseDescriptionLi);
      expenseArray.push(Number(valueInput.value));
    }
  }
};

// looping through the array and adding them
const incomeArray = [];
const expenseArray = [];

const addingArrayValuesAddingToBars = () => {
  incomeSum = 0;
  expenseSum = 0;

  // income loop
  for (let i = 0; i < incomeArray.length; i++) {
    incomeSum = incomeSum + incomeArray[i];
  }

  // expense loop
  for (let i = 0; i < expenseArray.length; i++) {
    expenseSum = expenseSum + expenseArray[i];
  }

  // adding values to bar
  if (select.value == 1) {
    incomeNumber.innerHTML = incomeSum.toLocaleString("en-US");
  } else {
    expenseNumber.innerHTML = expenseSum.toLocaleString("en-US");
  }
};

// updating budget total
const updateBudgetTotal = () => {
  budgetTotal.innerHTML = Number(incomeSum - expenseSum).toLocaleString(
    "en-US"
  );
};

const finalCalledFunctions = () => {
  addingToBudgetList();
  addingArrayValuesAddingToBars();
  updateBudgetTotal();
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
