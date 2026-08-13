import { supabase } from "./supabase";

export async function getStats() {
  const [jobsResult, resultsResult, admitCardsResult] =
    await Promise.all([
      supabase
        .from("jobs")
        .select("*", { count: "exact", head: true }),

      supabase
        .from("results")
        .select("*", { count: "exact", head: true }),

      supabase
        .from("admit_cards")
        .select("*", { count: "exact", head: true }),
    ]);

  console.log("Jobs count:", jobsResult.count);
  console.log("Results count:", resultsResult.count);
  console.log("Admit Cards count:", admitCardsResult.count);

  return {
    jobs: jobsResult.count || 0,
    results: resultsResult.count || 0,
    admitCards: admitCardsResult.count || 0,
  };
}