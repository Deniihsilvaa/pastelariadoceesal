import { createClient } from '@supabase/supabase-js';

// Insira sua URL e chave de API do Supabase aqui
const supabaseUrl = 'https://YOUR-SUPABASE-URL.supabase.co';
const supabaseKey = 'YOUR-SUPABASE-KEY';
export const supabase = createClient(supabaseUrl, supabaseKey);
