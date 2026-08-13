import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, ExternalLink, CalendarDays } from "lucide-react";
import { supabase } from "../services/supabase";

function AdmitCards() {
  const [admitCards, setAdmitCards] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadAdmitCards() {
      console.log("Loading admit cards...");

      const { data, error } = await supabase
        .from("admit_cards")
        .select("*")
        .order("id", { ascending: false });

      console.log("Admit cards data:", data);
      console.log("Admit cards error:", error);

      if (error) {
        setError(error.message);
      } else {
        setAdmitCards(data || []);
      }

      setLoading(false);
    }

    loadAdmitCards();
  }, []);

  const filteredCards = admitCards.filter((card) => {
    const text = search.toLowerCase().trim();

    if (!text) return true;

    return (
      card.title?.toLowerCase().includes(text) ||
      card.department?.toLowerCase().includes(text) ||
      card.exam_name?.toLowerCase().includes(text)
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
          <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
            Government Exams
          </span>

          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            Admit Cards
          </h1>

          <p className="mt-3 text-gray-500">
            Download the latest government examination admit cards.
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
            placeholder="Search admit cards..."
            className="w-full bg-white border border-gray-200 rounded-xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Loading */}
        {loading && (
          <div className="bg-white rounded-2xl p-12 text-center">
            <p className="text-gray-500 text-lg">
              Loading admit cards...
            </p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-red-700">
              Unable to load admit cards
            </h2>

            <p className="mt-2 text-red-600">
              {error}
            </p>
          </div>
        )}

        {/* No cards */}
        {!loading && !error && filteredCards.length === 0 && (
          <div className="bg-white rounded-2xl p-12 text-center">
            <h2 className="text-xl font-bold text-gray-800">
              No admit cards found
            </h2>

            <p className="mt-2 text-gray-500">
              Try searching with another keyword.
            </p>
          </div>
        )}

        {/* Cards */}
        {!loading && !error && filteredCards.length > 0 && (
          <>
            <p className="mb-6 text-gray-600 font-medium">
              {filteredCards.length} admit card
              {filteredCards.length !== 1 ? "s" : ""} found
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {filteredCards.map((card) => (
                <article
                  key={card.id}
                  className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 hover:shadow-xl transition"
                >
                  {/* Department */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                      {card.department || "Government"}
                    </span>

                    <CalendarDays
                      size={22}
                      className="text-blue-600"
                    />
                  </div>

                  {/* Title */}
                  <h2 className="mt-5 text-xl font-bold text-gray-900">
                    {card.title}
                  </h2>

                  {/* Exam */}
                  {card.exam_name && (
                    <p className="mt-2 text-gray-500">
                      {card.exam_name}
                    </p>
                  )}

                  {/* Release date */}
                  {card.release_date && (
                    <div className="mt-5">
                      <p className="text-xs uppercase tracking-wide text-gray-400">
                        Admit Card Released
                      </p>

                      <p className="mt-1 font-semibold text-gray-700">
                        {new Date(
                          card.release_date
                        ).toLocaleDateString("en-IN")}
                      </p>
                    </div>
                  )}

                  {/* Exam date */}
                  {card.exam_date && (
                    <div className="mt-3">
                      <p className="text-xs uppercase tracking-wide text-gray-400">
                        Exam Date
                      </p>

                      <p className="mt-1 font-semibold text-gray-700">
                        {new Date(
                          card.exam_date
                        ).toLocaleDateString("en-IN")}
                      </p>
                    </div>
                  )}

                  {/* Download */}
                  <button
                    type="button"
                    onClick={() => {
                      if (card.download_link) {
                        window.open(
                          card.download_link,
                          "_blank",
                          "noopener,noreferrer"
                        );
                      } else {
                        alert(
                          "Official admit card link is not available yet."
                        );
                      }
                    }}
                    className="mt-6 w-full bg-blue-700 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition flex items-center justify-center gap-2"
                  >
                    Download Admit Card
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

export default AdmitCards;