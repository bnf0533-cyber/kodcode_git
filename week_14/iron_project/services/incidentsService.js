import { getOpenIncidents } from "../repositories/incidentsRepositories.js";

export async function fetchOpenIncidents() {
    return await getOpenIncidents()
}