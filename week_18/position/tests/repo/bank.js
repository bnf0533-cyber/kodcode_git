import { Collection, ObjectId } from "mongodb";

export function createBankRepo(/**@type {Collection}*/ collection) {
    async function getMoney(account_number, newAccount) {
        if (!collection) return newAccount.balance;
        const result = await collection.findOneAndUpdate
            ({ account_number }, {
                $set: newAccount
            })
        return newAccount.balance;
    }

    async function findAccount(account_number) {
        if (!collection) return { id: "1243", account_number, balance: 1000 };
        const result = await collection.findOne({ account_number })
        if (!result) return;
        result.id = result._id.toString();
        delete result._id;
        return result;
    }

    return { getMoney, findAccount }
}

const bankRepository = createBankRepo();
export default bankRepository;