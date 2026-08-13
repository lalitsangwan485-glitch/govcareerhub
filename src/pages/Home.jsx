import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  BriefcaseBusiness,
  ClipboardCheck,
  FileCheck2,
  ArrowRight,
} from "lucide-react";

import QuickCategories from "../components/home/QuickCategories";
import LatestJobs from "../components/home/LatestJobs";
import { getJobs } from "../services/jobService";
import { getStats } from "../services/statsService";

function Home() {
  const [jobs, setJobs] = useState([]);
  const [stats, setStats] = useState({
    jobs: 0,
    results: 0,
    admitCards: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadHomeData() {
      try {
        const [jobsData, statsData] = await Promise.all([
          getJobs(),
          getStats(),
        ]);

        setJobs(jobsData || []);
        setStats(statsData);
      } catch (error) {
        console.error("Home data error:", error);
      } finally {
        setLoading(false);
      }
    }

    loadHomeData();
  }, []);

  return (
    <main className="bg-slate-50">

      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">

          <div className="max-w-4xl">

            <span className="inline-block bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-semibold">
              India's Government Job Platform
            </span>

            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
              Your Future in
              <span className="text-yellow-300">
                {" "}Government Service
              </span>
              <br />
              Starts Here
            </h1>

            <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-3xl leading-relaxed">
              Get the latest government jobs, results, admit cards,
              syllabus and important exam updates — all in one fast
              and reliable platform.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/jobs"
                className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-6 py-3 rounded-xl font-bold hover:bg-yellow-300 transition"
              >
                Explore Jobs
                <ArrowRight size={20} />
              </Link>

              <Link
                to="/results"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/30 px-6 py-3 rounded-xl font-bold hover:bg-white/20 transition"
              >
                View Results
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* LIVE STATISTICS */}
      <section className="relative -mt-10">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* Jobs */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex items-center gap-5">

              <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <BriefcaseBusiness size={28} />
              </div>

              <div>
                <p className="text-3xl font-extrabold text-gray-900">
                  {loading ? "..." : stats.jobs}
                </p>

                <p className="text-gray-500 font-medium">
                  Government Jobs
                </p>
              </div>

            </div>

            {/* Results */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex items-center gap-5">

              <div className="w-14 h-14 rounded-xl bg-green-100 text-green-700 flex items-center justify-center">
                <ClipboardCheck size={28} />
              </div>

              <div>
                <p className="text-3xl font-extrabold text-gray-900">
                  {loading ? "..." : stats.results}
                </p>

                <p className="text-gray-500 font-medium">
                  Results
                </p>
              </div>

            </div>

            {/* Admit Cards */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex items-center gap-5">

              <div className="w-14 h-14 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                <FileCheck2 size={28} />
              </div>

              <div>
                <p className="text-3xl font-extrabold text-gray-900">
                  {loading ? "..." : stats.admitCards}
                </p>

                <p className="text-gray-500 font-medium">
                  Admit Cards
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CATEGORIES */}
      <QuickCategories />

      {/* LATEST JOBS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">

            <div>
              <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
                Latest Opportunities
              </span>

              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
                Latest Government Jobs
              </h2>

              <p className="mt-2 text-gray-500">
                Explore the newest government job opportunities.
              </p>
            </div>

            <Link
              to="/jobs"
              className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-900"
            >
              View All Jobs
              <ArrowRight size={18} />
            </Link>

          </div>

          <LatestJobs jobs={jobs} />

        </div>
      </section>

      {/* ADMIT CARD CTA */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-blue-700 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-8">

            <div>
              <h2 className="text-3xl font-bold">
                Looking for Admit Cards?
              </h2>

              <p className="mt-3 text-blue-100 max-w-xl">
                Find the latest government examination admit cards
                and important exam dates in one place.
              </p>
            </div>

            <Link
              to="/admit-card"
              className="shrink-0 inline-flex items-center justify-center gap-2 bg-yellow-400 text-blue-900 px-6 py-3 rounded-xl font-bold hover:bg-yellow-300 transition"
            >
              View Admit Cards
              <ArrowRight size={20} />
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Home;