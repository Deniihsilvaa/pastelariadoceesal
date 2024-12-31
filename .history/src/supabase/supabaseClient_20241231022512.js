import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://YOUR-SUPABASE-URL.supabase.co';
const supabaseKey = 'YOUR-SUPABASE-KEY';
export const supabase = createClient(supabaseUrl, supabaseKey);
