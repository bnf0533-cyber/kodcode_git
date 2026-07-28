import { client } from "../db/dbConfigSupabase.db.js";

export async function registerStudentToSession(sessionId) {
    try {
        const { data: session, error: fetchError } = await client
            .from("lab_sessions")
            .select("*")
            .eq("id", sessionId)
            .single();
        if (!session || fetchError) {
            throw new Error("session noy found");
        }
        if (session.remainingSpots <= 0) {
            throw new Error("session full");
        }
        const newRegisterCount = session.registeredCount + 1;
        const newRemainingSpots = session.remainingSpots - 1;
        const { data: updateSession, error: updateError } = await client
            .from("lab_sessions")
            .update({
                registeredCount: newRegisterCount,
                remainingSpots: newRemainingSpots,
            })
            .eq("id", sessionId)
            .select()
            .single();
        if (updateError) {
            throw updateError;
        }
        return { remainingSpots: updateSession.remainingSpots };
    } catch (error) {
        throw error;
    }
}
