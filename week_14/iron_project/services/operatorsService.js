import { createOperator } from "../repositories/operatorsRepositories.js";

export async function getParametersOperators(name , rank) {
    try {        
        const parameter = await createOperator(name,rank)
        return parameter
    }catch (err) {
        console.error(err);
    }
}
