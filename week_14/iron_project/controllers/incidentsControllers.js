import { fetchOpenIncidents } from "../services/incidentsService.js";

export async function getOpenIncidents(req,res) {
    try {
        const result = await fetchOpenIncidents()
        return res.status(200).json(result)
    }catch (err) {
        console.error(err);
    }
}