const createIdCustomer = (startId = 0) => {
    let id = startId
    return () => {
        id++
        return id
    }
}
export const getNextId = createIdCustomer()


export function createCustomer(id, fullName, accountType, balance) {
    return {
        id,
        fullName,
        accountType,
        balance,
        isActive: true
    };
}

export const customers = []
