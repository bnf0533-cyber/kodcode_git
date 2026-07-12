import fs from 'fs/promises'

const path = './data/order.json'

export const readFile = async () => {
    try {
        const read = await fs.readFile(path, 'utf-8')
        return JSON.parse(read)
    } catch (err) {
        return []
    }
}

export const writeFile = async (data) => {
    const stringData = JSON.stringify(data, null, 2)
    await fs.writeFile(path, stringData, 'utf-8')
}