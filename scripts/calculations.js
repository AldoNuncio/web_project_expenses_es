let budgetValue = 0;
let totalExpensesValue = 0;
let expenseEntries = [
    ["groceries", 33],
    ["restaurants", 50],
    ["transport", 12],
    ["home", 70],
    ["subscriptions", 14],
    ["groceries", 28],
    ["subscriptions", 12]
];

for (let i = 0; i < expenseEntries.length; i++) {
    totalExpensesValue += expenseEntries [i] [1];
    console.log("Valor total de los gastos:" + totalExpensesValue);
}

function calculateAverageExpense() {
    if (expenseEntries.length === 0) {
        return 0;
    }
    return totalExpensesValue / expenseEntries.length;
}
console.log("Gasto promedio actual: " + calculateAverageExpense());

function calculateBalance() {
    return budgetValue - totalExpensesValue;
}
console.log("Saldo actual: " + calculateBalance());

let balanceColor = "green";

function updateBalanceColor(){
    let currentBalance = calculateBalance();
    if (currentBalance < 0) {
        balanceColor = "red";
    } else if (currentBalance < (budgetValue * 0.25)){
        balanceColor = "orange";
    } else {
        balanceColor = "green";
    }
}

function calculateCategoryExpenses(categoryName) {
    let categoryTotal = 0;
    for (let i = 0; i < expenseEntries.length; i++) {
        if (expenseEntries[i][0] === categoryName) {
            categoryTotal += expenseEntries[i][1];
        }
    }
    return categoryTotal;
}
console.log("Total en groceries: " + calculateCategoryExpenses("groceries"));

function calculateLargestCategory() {
    let uniqueCategories = ["groceries", "restaurants", "transport", "home", "subscriptions"];
    let categoriesData = [];
    for (let i = 0; i < uniqueCategories.length; i++) {
        let catName = uniqueCategories[i];
        let catTotal = calculateCategoryExpenses(catName);
        categoriesData.push([catName, catTotal]);
    }
    let largestCategoryName = "";
    let maxExpense = -1;
    for (let i = 0; i < categoriesData.length; i++) {
        if (categoriesData[i][1] > maxExpense) {
            maxExpense = categoriesData[i][1];
            largestCategoryName = categoriesData[i] [0];
        }
    }
    return largestCategoryName;
}
console.log("La categoria mas grande es: " + calculateLargestCategory());

function addExpenseEntry(newEntry) {
    expenseEntries.push(newEntry);
    let newAmount = newEntry[1];
    totalExpensesValue += newAmount;
    updateBalanceColor();
}
