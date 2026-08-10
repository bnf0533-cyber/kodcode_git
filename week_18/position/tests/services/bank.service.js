import bankRepository from "../repo/bank.js";

export function createBankService(bankRepo = bankRepository) {
    async function getMoney(amount, accountNumber) {
        const account = await bankRepo.findAccount(accountNumber);
        if (!account) {
            const err = new Error('Account not found');
            err.status = 404;
            throw err;
        }
        if (amount <= 0) {
            const err = new Error('Unprocessable');
            err.status = 422;
            throw err;
        }
        if (account.balance < amount) {
            const err = new Error('You dont have enough');
            err.status = 422;
            throw err;
        }
        const result = await bankRepo.getMoney(accountNumber, {
            balance: account.balance - amount
        })
        return result;
    }
    return { getMoney };
}

const bankService = createBankService();
export default bankService;