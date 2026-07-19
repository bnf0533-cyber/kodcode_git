import { createIncident, getOpenIncidents,updateIncidentStatus } from "../repositories/incidentsRepositories.js";
import { addLogs } from "../repositories/logsRepositories.js";
import { getOperatorById } from "../repositories/operatorsRepositories.js";

export async function fetchOpenIncidents() {
    return await getOpenIncidents()
}

export async function createIncidentAndAddToLogs(codeName , threatLevel , operatorId ) {
    const query = await createIncident(codeName , threatLevel , operatorId)
    const log = await addLogs("INCIDENT_CREATED" , query.id , operatorId , "New incident created")
    return query
}

export async function updateStatus(status , id , operatorId) {
    const correctStatus = ["OPEN", "TRACKING", "INTERCEPTED", "CLOSED"]
    if (!correctStatus.includes(status)) {
        return "wrong status"
    }
    const query = await updateIncidentStatus(status , id)
    const log = await addLogs("STATUS_UPDATED",id ,operatorId,"status change " + status)
    return query
}
