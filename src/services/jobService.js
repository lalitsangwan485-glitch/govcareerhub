import { supabase } from "./supabase";

export async function getJobs() {
  const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .order("created_at", { ascending: false });

  console.log("Supabase data:", data);
  console.log("Supabase error:", error);

  if (error) throw error;

  return data;
}