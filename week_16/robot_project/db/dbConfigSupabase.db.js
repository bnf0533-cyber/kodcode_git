import { createClient } from "@supabase/supabase-js/dist/index.cjs";

export const client = createClient(process.env.SUPABASE_URL , process.env.SUPABASE_API_KEY)

try {
    await client
    console.log("connect to supabase successfully");
} catch (error) {
    console.log("failed to connect", error);
    
}