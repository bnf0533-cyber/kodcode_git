import { createIncidentAndAddToLogs, fetchOpenIncidents } from "../services/incidentsService.js";

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