import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://tquznsuznsfavspbhwzq.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxdXpuc3V6bnNmYXZzcGJod3pxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzMDM4MjQsImV4cCI6MjA3NDg3OTgyNH0.altzDjqTO9-77_SzeAhVYOOoQEpctuwdWw6bnppMEBE";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;
