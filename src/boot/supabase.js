import { createClient } from "@supabase/supabase-js";
import useAuthUser from "src/composables/UseAuthUser";
const supabaseUrl = "https://jbpqxlvjcroinfuzwbgk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpicHF4bHZqY3JvaW5mdXp3YmdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE2OTg0NDksImV4cCI6MjAxNzI3NDQ0OX0.X9nrz1ZRdNTdJEvL_iOPOdcPZO9FiAqGRowjpOWUC3U";
const supabase = createClient(supabaseUrl, supabaseKey);

supabase.auth.onAuthStateChange((event, session) => {
  const { user } = useAuthUser();
  user.value = session?.user || null;
});

export default function useSupabase() {
  return { supabase };
}
