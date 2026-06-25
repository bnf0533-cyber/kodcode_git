import rl from "readline-sync"

const createIdCustomer = (startId = 0) => {
    let id = startId
    return () => {
        id++
        return id
    }
}
const getNextId = createIdCustomer()

const customers = []
function createCustomers() {
    const id = getNextId()
    const name = rl.question("please enter full name: ")
    const accountType = rl.question("please enter an account type: ")
    const balance = rl.questionInt("please enter your balance: ")
    customers.push({
        id: id,
        fullName: name,
        accountType: accountType,
        balance: balance,
        isActive: true
    })
    return "Customer created successfully"
}

function showCustomers() {
    if (customers.length > 0) {
        console.log(customers)
    } else (console.log("This list is empty."))
}

function deposit() {
    const id = rl.questionInt("Please enter your ID: ")
    const posit = rl.questionInt("Please enter the deposit amount you would like to deposit: ")
    const custom = customers.find(c => c.id === id && c.isActive === true)
    if (custom) {
        custom.balance += posit
    } else {
        console.log("Customer not found.");

    }
}

function withdraw() {
    const id = rl.questionInt("Please enter your ID: ")
    const draw = rl.questionInt("Please enter the withdrawal amount you would like to withdraw: ")
    const custom = customers.find(c => c.id === id && c.isActive === true)
    if (custom) {
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
        console.log("The customer not active now.")
    } else {
        console.log("Customer not found.");

    }
}


function searchCustomer() {
    const id = rl.questionInt("Please enter your ID: ")
    const custom = customers.find(c => c.id === id && c.isActive === true)
    if (custom) {
        console.log(customers.filter(c => c.id === id))
    } else {
        console.log("Customer not found.");
    }
}

function showStatistics() {
    totalCount = customers.length
    activeCount = customers.filter(c => c.isActive).length
    totalMoney = customers.reduce((acc, curr) => acc + curr.balance, 0)
    averageBalance = totalCount > 0 ? totalMoney / totalCount : 0
    highestBalance = Math.max(...customers.map(c => c.balance))
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
    1. Create Count
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
        console.log("Good by")
        break
    }
}
