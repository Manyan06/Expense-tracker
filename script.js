let expenses = [];
let totalAmount = 0;

const categorySelect = document.getElementById('category-select');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const expensesTableBody = document.getElementById('expenses-table-body');
const totalAmountDisplay = document.getElementById('total-amount');

addBtn.addEventListener('click', function() {
    const category = categorySelect.value;
    const amount = parseFloat(amountInput.value);
    const date = dateInput.value;

    if (!category || isNaN(amount) || !date) {
        alert('Please fill all fields');
        return;
    }

    const expense = {
        category,
        amount,
        date
    };

    expenses.push(expense);
    totalAmount += amount;
    totalAmountDisplay.textContent = totalAmount;

    const newRow = expensesTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        const index = expenses.indexOf(expense);
        if (index !== -1) {
        expenses.splice(index, 1);
        totalAmount -= expense.amount;
        totalAmountDisplay.textContent = totalAmount;
        }
        newRow.remove();
    });

    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);

});