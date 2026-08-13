import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, Award, ExternalLink } from "lucide-react";
import { supabase } from "../services/supabase";

function Results() {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadResults() {
      console.log("Loading results from Supabase...");

      const { data, error } = await supabase
        .from("results")
        .select("*")
        .order("id", { ascending: false });

      console.log("Results data:", data);
      console.log("Results error:", error);

      if (error) {
        setError(error.message);
      } else {
        setResults(data || []);
      }

      setLoading(false);
    }

    loadResults();
  }, []);

  const filteredResults = results.filter((result) => {
    const searchText = search.toLowerCase();

    return (
      result.title?.toLowerCase().includes(searchText) ||
      result.department?.toLowerCase().includes(searchText) ||
      result.category?.toLowerCase().includes(searchText)
    );
  });

  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-700 font-semibold mb-8 hover:text-blue-900"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Government Results
          </h1>

          <p className="mt-3 text-gray-500">
            Check the latest government examination results.
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-2xl mb-10">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search results..."
            className="w-full bg-white border border-gray-200 rounded-xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Loading */}
        {loading && (
          <div className="bg-white rounded-2xl p-12 text-center">
            <p className="text-gray-500 text-lg">
              Loading results...
            </p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-red-700">
              Unable to load results
            </h2>

            <p className="mt-2 text-red-600">
              {error}
            </p>
          </div>
        )}

        {/* No results */}
        {!loading && !error && filteredResults.length === 0 && (
          <div className="bg-white rounded-2xl p-12 text-center">

            <Award
              size={50}
              className="mx-auto text-gray-400"
            />

            <h2 className="mt-4 text-xl font-bold text-gray-800">
              No results found
            </h2>

            <p className="mt-2 text-gray-500">
              Try searching with a different keyword.
            </p>

          </div>
        )}

        {/* Results */}
        {!loading && !error && filteredResults.length > 0 && (
          <>
            <div className="mb-6">
              <p className="text-gray-600 font-medium">
                {filteredResults.length} result
                {filteredResults.length !== 1 ? "s" : ""} found
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {filteredResults.map((result) => (
                <article
                  key={result.id}
                  className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 hover:shadow-xl transition"
                >

                  {/* Icon + Department */}
                  <div className="flex items-center gap-3">

                    <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                      <Award size={24} />
                    </div>

                    <span className="text-sm font-semibold text-blue-700">
                      {result.department || "Government"}
                    </span>

                  </div>

                  {/* Title */}
                  <h2 className="mt-5 text-xl font-bold text-gray-900">
                    {result.title || "Government Result"}
                  </h2>

                  {/* Category */}
                  <p className="mt-2 text-gray-500">
                    {result.category || "Examination Result"}
                  </p>

                  {/* Date */}
                  {result.result_date && (
                    <p className="mt-4 text-sm text-gray-600">
                      Result Date:{" "}
                      {new Date(result.result_date).toLocaleDateString(
                        "en-IN"
                      )}
                    </p>
                  )}

                  {/* Button */}
                  <button
                    type="button"
                    onClick={() => {
                      if (result.result_link) {
                        window.open(
                          result.result_link,
                          "_blank",
                          "noopener,noreferrer"
                        );
                      } else {
                        alert(
                          "Official result link is not available yet."
                        );
                      }
                    }}
                    className="mt-6 w-full bg-blue-700 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition flex items-center justify-center gap-2"
                  >
                    Check Result
                    <ExternalLink size={18} />
                  </button>

                </article>
              ))}

            </div>
          </>
        )}

      </div>
    </main>
  );
}

export default Results;