import rl from "readline-sync"
import { getNextId , createCustomer , customers } from "./customerManager.js"

function createCustomers() {
    const id = getNextId()
    let fullName = ""
    while (true) {
        fullName = rl.question("Please enter full name: ").trim()
        if (fullName !== "") {
            break
        }
        console.log("Name cannot be empty. Please try again.")
    }
        let accountType = ""
    while (true) {
        accountType = rl.question("please enter an account type (Regular, Premium, Student): ").trim()
        const checkType = accountType.toLowerCase()
if (checkType === "regular" || checkType === "premium" || checkType === "student") {
    accountType = checkType.charAt(0).toUpperCase() + checkType.slice(1)
    break
    }
    console.log("Invalid account type. Please enter Regular, Premium, or Student.")
}
    let balance = -1
    while (true) {
        balance = rl.questionInt("please enter your balance: ")
        if (balance >= 0) {
            break
        }
        console.log("Balance must be 0 or greater. Please try again.")
    }
    const customer = createCustomer(id, fullName, accountType, balance)
    customers.push(customer)
    console.log("Customer created successfully")
}

function showCustomers() {
    if (customers.length > 0) {
        console.log(customers)
    } else {
        console.log("This list is empty.")
    }
}

function deposit() {
    const id = rl.questionInt("Please enter your ID: ")
    const posit = rl.questionInt("Please enter the deposit amount you would like to deposit: ")
    const custom = customers.find(c => c.id === id && c.isActive === true)
    if (custom && posit > 0) {
        custom.balance += posit
    } else {
        console.log("Customer not found.");

    }
}

function withdraw() {
    const id = rl.questionInt("Please enter your ID: ")
    const draw = rl.questionInt("Please enter the withdrawal amount you would like to withdraw: ")
    const custom = customers.find(c => c.id === id && c.isActive === true)
    if (custom && draw > 0) {
        if (custom.balance < draw) {
            console.log("There is not enough money in the account.")
        } else {
            custom.balance -= draw
        }
    } else {
        console.log("Customer not found.");
    }
}

function closedAccount() {
    const id = rl.questionInt("please enter your ID: ")
    const custom = customers.find(c => c.id === id && c.isActive === true)
    if (custom) {
        custom.isActive = false
        console.log("Account closed successfully.")
    } else {
        console.log("Customer not found.");

    }
}


function searchCustomer() {
    const id = rl.questionInt("Please enter your ID: ")
    const custom = customers.find(c => c.id === id && c.isActive === true)
    if (custom) {
        console.log(custom)
    } else {
        console.log("Customer not found.");
    }
}

function showStatistics() {
    const totalCount = customers.length
    const activeCount = customers.filter(c => c.isActive).length
    const totalMoney = customers.reduce((acc, curr) => acc + curr.balance, 0)
    const averageBalance = totalCount > 0 ? totalMoney / totalCount : 0
    const highestBalance = totalCount > 0 ? Math.max(...customers.map(c => c.balance)) : 0 
    console.log(`
        ==== Statistics ====
        Total Customer: ${totalCount}
        Active Accounts: ${activeCount}
        Total Money: ${totalMoney}
        Average Balance: ${averageBalance}
        Highest Balance: ${highestBalance}`);

}



while (true) {
    const choice = rl.question(`
    ==== BANK MANAGER===
    1. Create Customer
    2. Show Customers
    3. Deposit
    4. Withdraw
    5. Close Account
    6. Search customer by ID
    7. Show Statistics
    8. Exit
    ====================
    Please enter your choice :`);

    if (choice === "1") {
        createCustomers()
    } else if (choice === "2") {
        showCustomers()
    } else if (choice === "3") {
        deposit()
    } else if (choice === "4") {
        withdraw()
    } else if (choice === "5") {
        closedAccount()
    } else if (choice === "6") {
        searchCustomer()
    } else if (choice === "7") {
        showStatistics()
    } else if (choice === "8") {
        console.log("Good bye")
        break
    }
}
