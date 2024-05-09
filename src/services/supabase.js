import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://chraqesgiirjzoyrlpcu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNocmFxZXNnaWlyanpveXJscGN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0NzQwMDYsImV4cCI6MjAyNTA1MDAwNn0.JK8V39hc0w5JL11Dx7fq74rHMP-vwoU0p5lo7FHSKSU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
