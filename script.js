const balance = document.getElementById("balance");
const moneyPlus = document.getElementById("income");
const moneyMinus = document.getElementById("expense");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

const dummyTransactions = [
  { id: 1, text: "Flower", amount: -20 },
  { id: 1, text: "Salary", amount: 300 },
  { id: 1, text: "Book", amount: -10 },
  { id: 1, text: "Camera", amount: -120 },
];

let transactions = dummyTransactions;

function addTransactionDOM(transaction) {
  const sign = transaction.amount > 0 ? "+" : "-";
  const icon = transaction.amount > 0 ? "up" : "down";

  const item = document.createElement("li");
  item.classList.add(transaction.amount > 0 ? "plus" : "minus");
  item.innerHTML = `<h4>${transaction.text}</h4> <span>${sign}$${Math.abs(
    transaction.amount
  )}<i class="fas fa-caret-${icon}"></i><i class="fas fa-trash-alt"></i></span>`;
  list.appendChild(item);
}

function updateValue() {
  const amount = transactions.map((item) => item.amount);
  const total = amount.reduce((a, b) => (a += b), 0).toFixed(2);
  const income = amount
    .filter((item) => item > 0)
    .reduce((a, b) => (a += b), 0)
    .toFixed(2);

  const expense = amount
    .filter((item) => item < 0)
    .reduce((a, b) => (a += b), 0)
    .toFixed(2);

  balance.innerHTML = `$${total}`;
  moneyPlus.innerHTML = `$${income} <i class="fas fa-caret-up"></i>`;

  moneyMinus.innerHTML = `$${Math.abs(expense).toFixed(
    2
  )} <i class="fas fa-caret-down"></i>`;
}

form.addEventListener('submit', (e)=> {
 e.preventDefault();

 if(text.value.trim() === "" || amount.value.trim() === "") {
     alert('Please fill your data first');
 }
})

//init

function init() {
  list.innerHTML = ``;

  dummyTransactions.forEach(addTransactionDOM);
  updateValue();
}

init();
