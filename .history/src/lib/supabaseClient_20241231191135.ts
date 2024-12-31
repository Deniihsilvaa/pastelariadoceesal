import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storage: localStorage, // Garante que o armazenamento correto seja utilizado
    autoRefreshToken: true, // Atualiza automaticamente o token
    persistSession: true, // Mantém a sessão salva no armazenamento
    detectSessionInUrl: true, // Gerencia autenticação baseada em URL (ex.: para links mágicos)
  },
  db: {
    schema: "public", // Define o schema como "public"
  },
  realtime: {
    params: {
      eventsPerSecond: 10, // Define o número de eventos por segundo
    },
  },
 
});
