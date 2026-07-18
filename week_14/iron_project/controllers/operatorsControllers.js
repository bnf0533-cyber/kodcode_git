import { getParametersOperators } from "../services/operatorsService.js";
import { operatorSchema } from "../validation/validation.js";

export async function insertNewOperator(req, res) {
    try {
        const result = operatorSchema.safeParse(req.body)
        if (!result.success) {
            return res.status(400).json({
                error: "validation failed",
                details: result.error.errors
            })
        }
        const validationData = result.data
        const operator = await getParametersOperators(validationData.name ,validationData.rank)
        return res.status(201).json({"success create" : operator})
    } catch (err) {
        console.error(err);
        res.status(500).json("server error")
    }
}
