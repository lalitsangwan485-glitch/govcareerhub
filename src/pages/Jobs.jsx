import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, ArrowLeft, X } from "lucide-react";
import { supabase } from "../services/supabase";
import JobCard from "../components/jobs/JobCard";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category") || "";
  const urlSearch = searchParams.get("search") || "";

  const [search, setSearch] = useState(urlSearch);

  useEffect(() => {
    setSearch(urlSearch);
  }, [urlSearch]);

  useEffect(() => {
    async function loadJobs() {
      setLoading(true);

      const { data, error } = await supabase
        .from("jobs")
        .select("*")
        .order("id", { ascending: false });

      console.log("Jobs page data:", data);
      console.log("Jobs page error:", error);

      if (error) {
        console.error("Failed to load jobs:", error);
        setJobs([]);
      } else {
        setJobs(data || []);
      }

      setLoading(false);
    }

    loadJobs();
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const searchText = search.trim().toLowerCase();

    const matchesSearch =
      searchText === "" ||
      (job.title || "").toLowerCase().includes(searchText) ||
      (job.department || "").toLowerCase().includes(searchText) ||
      (job.category || "").toLowerCase().includes(searchText) ||
      (job.location || "").toLowerCase().includes(searchText);

    const selectedCategory = category.trim().toLowerCase();

    const matchesCategory =
      selectedCategory === "" ||
      (job.department || "").toLowerCase().includes(selectedCategory) ||
      (job.category || "").toLowerCase().includes(selectedCategory);

    return matchesSearch && matchesCategory;
  });

  function handleSearch(event) {
    event.preventDefault();

    const value = search.trim();

    const params = {};

    if (value) {
      params.search = value;
    }

    if (category) {
      params.category = category;
    }

    setSearchParams(params);
  }

  function clearFilters() {
    setSearch("");
    setSearchParams({});
  }

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
            Government Jobs
          </h1>

          <p className="mt-3 text-gray-500">
            Find the latest government job opportunities in India.
          </p>

        </div>

        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="max-w-3xl mb-8"
        >
          <div className="flex bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search jobs, departments, categories..."
              className="flex-1 px-5 py-4 outline-none text-gray-800"
            />

            <button
              type="submit"
              className="px-6 bg-blue-700 text-white font-semibold hover:bg-blue-800 transition flex items-center gap-2"
            >
              <Search size={20} />
              Search
            </button>

          </div>
        </form>

        {/* Active Filters */}
        {(search || category) && (
          <div className="flex flex-wrap items-center gap-3 mb-8">

            {search && (
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
                Search: {search}
              </span>
            )}

            {category && (
              <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-medium">
                Category: {category}
              </span>
            )}

            <button
              type="button"
              onClick={clearFilters}
              className="flex items-center gap-1 text-gray-500 hover:text-red-600 font-medium"
            >
              <X size={18} />
              Clear
            </button>

          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="bg-white rounded-2xl p-12 text-center">

            <div className="animate-pulse">
              <p className="text-gray-500 text-lg">
                Loading jobs...
              </p>
            </div>

          </div>
        )}

        {/* Results */}
        {!loading && filteredJobs.length > 0 && (
          <>

            <div className="mb-6">
              <p className="text-gray-600 font-medium">
                {filteredJobs.length} job
                {filteredJobs.length !== 1 ? "s" : ""} found
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {filteredJobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                />
              ))}

            </div>

          </>
        )}

        {/* No Results */}
        {!loading && filteredJobs.length === 0 && (
          <div className="bg-white rounded-2xl p-12 text-center">

            <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center">
              <Search
                size={28}
                className="text-gray-400"
              />
            </div>

            <h2 className="mt-5 text-2xl font-bold text-gray-800">
              No jobs found
            </h2>

            <p className="mt-2 text-gray-500">
              Try another keyword or clear the filters.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-800 transition"
            >
              View All Jobs
            </button>

          </div>
        )}

      </div>

    </main>
  );
}

export default Jobs;