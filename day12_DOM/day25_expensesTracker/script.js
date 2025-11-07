const desc = document.getElementById("desc");
const amount = document.getElementById("amount");
const expenseList = document.getElementById("expenseList");
const totalDisplay = document.getElementById("total");

let total = 0;
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

window.onload = () => {
  expenses.forEach(exp => addExpenseToDOM(exp));
  updateTotal();
};

function addExpense() {
  const descValue = desc.value.trim();
  const amountValue = parseFloat(amount.value);

  if (!descValue || isNaN(amountValue) || amountValue <= 0) return;

  const expense = { desc: descValue, amount: amountValue };

  expenses.push(expense);
  localStorage.setItem("expenses", JSON.stringify(expenses));

  addExpenseToDOM(expense);
  updateTotal();

  desc.value = "";
  amount.value = "";
}

function addExpenseToDOM(expense) {
  const li = document.createElement("li");
  li.innerHTML = `${expense.desc} - ₹${expense.amount.toFixed(2)}
    <button onclick="deleteExpense('${expense.desc}')">X</button>`;
  expenseList.appendChild(li);
}

function deleteExpense(descText) {
  expenses = expenses.filter(e => e.desc !== descText);
  localStorage.setItem("expenses", JSON.stringify(expenses));
  expenseList.innerHTML = "";
  expenses.forEach(exp => addExpenseToDOM(exp));
  updateTotal();
}

function updateTotal() {
  total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  totalDisplay.textContent = total.toFixed(2);
}