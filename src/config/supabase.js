// src/config/supabase.js

import { createClient } from '@supabase/supabase-js';
import ws from 'ws';

let supabase = null;

export const getSupabaseClient = () => {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_KEY;

    // Only create client if env vars exist
    if (url && key) {
        try {
            supabase = createClient(url, key, {
                realtime: {
                    transport: ws
                }
            });
            return supabase;
        } catch (error) {
            console.warn('Supabase initialization error:', error.message);
            return null;
        }
    } else {
        console.warn('Supabase credentials not found - running in test mode');
        return null;
    }
};

export default getSupabaseClient;