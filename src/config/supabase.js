import { createClient } from '@supabase/supabase-js';

let supabase = null;

export const getSupabaseClient = () => {
    if (!supabase) {
        const url = process.env.SUPABASE_URL;
        const key = process.env.SUPABASE_KEY;
        
        // Only create client if env vars exist
        if (url && key) {
            supabase = createClient(url, key);
        } else {
            console.warn('Supabase credentials not found - running in test mode');
            return null;
        }
    }
    return supabase;
};

export default getSupabaseClient;