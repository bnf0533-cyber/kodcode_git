import { createIncidentAndAddToLogs, fetchOpenIncidents,updateStatus } from "../services/incidentsService.js";

export async function getOpenIncidents(req, res) {
    try {
        const result = await fetchOpenIncidents()
        return res.status(200).json(result)
    } catch (err) {
        console.error(err);
    }
}

export async function createNewIncident(req, res) {
    try {
        const {codeName , threatLevel , operatorId } = req.body
        const result = await createIncidentAndAddToLogs(codeName , threatLevel , operatorId)
        res.status(201).json(result)
    } catch (err) {
        console.error(err);
    }
}

export async function updateStatusIncident(req , res) {
    try{
        const {status , operatorId } = req.body
        const {id } = req.params
        const update =  await updateStatus(status , id , operatorId)
        res.status(200).json({"update" : true , data : update})

    }catch(err) {
        console.error(err);
    }
    
}