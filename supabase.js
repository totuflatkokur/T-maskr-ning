// Tótu Stimpilklukka v2
// Settu publishable key-inn þinn hér fyrir neðan.

const SUPABASE_URL = "https://rzvcprkdriiywupaqupv.supabase.co";
const SUPABASE_ANON_KEY = "SETTU_PUBLISHABLE_KEY_HER";

const db = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Stjórnanda lykilorð
const ADMIN_PASSWORD = "1234";
