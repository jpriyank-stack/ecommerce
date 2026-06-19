import { createClient } from '@supabase/supabase-js';
import ws from 'ws';

const getSupabaseClient = () => {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_KEY;

    if (url && key) {
        // Provide ws transport for Node.js < 22
        const supabase = createClient(url, key, {
            realtime: {
                transport: ws
            }
        });
        return supabase;
    } else {
        console.warn('Supabase credentials not found - running in test mode');
        return null;
    }
};

export default getSupabaseClient;