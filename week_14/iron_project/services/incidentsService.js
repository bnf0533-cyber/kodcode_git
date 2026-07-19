import { createIncident, getOpenIncidents } from "../repositories/incidentsRepositories.js";
import { addLogs } from "../repositories/logsRepositories.js";

export async function fetchOpenIncidents() {
    return await getOpenIncidents()
}

export async function createIncidentAndAddToLogs(codeName , threatLevel , operatorId ) {
    const query = await createIncident(codeName , threatLevel , operatorId)
    const log = await addLogs("INCIDENT_CREATED" , query.id , operatorId , "New incident created")
    return query
}