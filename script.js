
// =====================================
// SpendWise - JavaScript Foundation
// Student Name: Eric
// =====================================

// 1. Store application data
let monthlyBudget = 0;

let expenses = [];

// 2. Collect user input
monthlyBudget = Number(prompt("Enter your monthly budget:"));

// 3. Collect expense information
let expenseCount = Number(prompt("How many expenses do you want to enter?"));

// 4. Function to calculate total expenses
function calculateTotalExpenses() {
    let total = 0;

    for (let expense of expenses) {
        total += expense.amount;
    }

    return total;
}

// 5. Function to calculate remaining balance
function calculateRemainingBalance(budget, totalExpenses) {
    return budget - totalExpenses;
}

// 6. Function to display budget results
function displaySummary() {
    let totalExpenses = calculateTotalExpenses();

    let remainingBalance = calculateRemainingBalance(
        monthlyBudget,
        totalExpenses
    );

    console.log("======= SPENDWISE SUMMARY =======");
    console.log("Monthly Budget: KES " + monthlyBudget);
    console.log("Total Expenses: KES " + totalExpenses);
    console.log("Remaining Balance: KES " + remainingBalance);

    if (remainingBalance >= 0) {
        console.log("Status: You are within your budget.");
    } else {
        console.log("Status: You have exceeded your budget.");
    }

    console.log("=================================");
}

// 7. Add expenses
if (
    Number.isFinite(monthlyBudget) &&
    monthlyBudget > 0 &&
    Number.isInteger(expenseCount) &&
    expenseCount >= 0
) {
    for (let i = 0; i < expenseCount; i++) {
        let name = prompt("Enter expense name:");

        let amount = Number(prompt("Enter expense amount:"));

        if (name && name.trim() !== "" &&
            Number.isFinite(amount) && amount > 0) {

            expenses.push({
                name: name,
                amount: amount
            });

        } else {
            console.log("Invalid expense. Please enter valid details.");
        }
    }

    // 8. Display results
    displaySummary();

} else {
    console.log("Invalid budget or expense count. Please try again.");
}
