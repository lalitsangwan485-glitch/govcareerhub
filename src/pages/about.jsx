import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BriefcaseBusiness,
  ShieldCheck,
  Search,
  Users,
} from "lucide-react";

function About() {
  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-900 mb-8"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-700 to-indigo-900 rounded-3xl p-8 md:p-14 text-white">
          <span className="text-yellow-300 font-semibold uppercase tracking-wider text-sm">
            About GovCareerHub
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold">
            Your trusted place for government job updates
          </h1>

          <p className="mt-6 max-w-3xl text-blue-100 text-lg leading-relaxed">
            GovCareerHub is designed to make government job information
            easier to discover, search and understand. We bring jobs,
            results and admit-card updates together in one simple platform.
          </p>
        </section>

        {/* Mission */}
        <section className="mt-12 grid lg:grid-cols-2 gap-8">

          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
              <BriefcaseBusiness size={28} />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-gray-900">
              Our Mission
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Our goal is to provide a clean and convenient platform where
              candidates can find important government recruitment
              information without having to search through many different
              pages.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <div className="w-14 h-14 rounded-xl bg-green-100 text-green-700 flex items-center justify-center">
              <ShieldCheck size={28} />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-gray-900">
              Simple & Reliable
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We focus on presenting information clearly so users can
              quickly find the details they need and follow official
              application or examination links.
            </p>
          </div>

        </section>

        {/* Features */}
        <section className="mt-12">

          <div className="text-center">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
              What We Provide
            </span>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Everything in one place
            </h2>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <Search className="text-blue-700" size={28} />

              <h3 className="mt-4 font-bold text-gray-900">
                Easy Search
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Quickly search government jobs by keyword or category.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <BriefcaseBusiness className="text-blue-700" size={28} />

              <h3 className="mt-4 font-bold text-gray-900">
                Latest Jobs
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Browse available government job opportunities.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <ShieldCheck className="text-blue-700" size={28} />

              <h3 className="mt-4 font-bold text-gray-900">
                Important Updates
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Find results and admit-card information in one place.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <Users className="text-blue-700" size={28} />

              <h3 className="mt-4 font-bold text-gray-900">
                Candidate Focused
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Built with simplicity and ease of use in mind.
              </p>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="mt-12 bg-white rounded-2xl border border-gray-200 p-8 md:p-10 text-center">

          <h2 className="text-3xl font-bold text-gray-900">
            Start exploring government opportunities
          </h2>

          <p className="mt-3 text-gray-500">
            Browse the latest jobs and find opportunities that match your goals.
          </p>

          <Link
            to="/jobs"
            className="inline-flex items-center justify-center mt-6 bg-blue-700 text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-800 transition"
          >
            Explore Jobs
          </Link>

        </section>

      </div>
    </main>
  );
}

export default About;