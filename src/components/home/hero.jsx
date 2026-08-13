import { ArrowRight, Briefcase, FileText, Award } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-700 via-indigo-700 to-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-24 lg:py-32">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>

            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>

              <span className="text-sm font-medium">
                5000+ Latest Government Opportunities
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Your Future in
              <span className="text-yellow-300">
                {" "}Government Service
              </span>
              Starts Here
            </h1>

            <p className="text-lg text-blue-100 mb-8 max-w-xl leading-relaxed">
              Get the latest government jobs, results, admit cards, answer
              keys, syllabus, and current affairs — all in one fast and
              reliable platform.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">

              <Link
                to="/jobs"
                className="bg-yellow-400 text-slate-900 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition flex items-center justify-center gap-2"
              >
                Explore Jobs
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/results"
                className="border border-white/30 px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition flex items-center justify-center"
              >
                View Results
              </Link>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 text-center">

              <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                <div className="text-2xl font-bold">
                  5000+
                </div>

                <div className="text-sm text-blue-100">
                  Jobs
                </div>
              </div>

              <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                <div className="text-2xl font-bold">
                  1200+
                </div>

                <div className="text-sm text-blue-100">
                  Results
                </div>
              </div>

              <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                <div className="text-2xl font-bold">
                  24/7
                </div>

                <div className="text-sm text-blue-100">
                  Updates
                </div>
              </div>

            </div>

          </div>

          {/* Right Side Card */}
          <div className="relative">

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">

              <div className="flex items-center gap-3 mb-6">

                <div className="w-12 h-12 rounded-xl bg-yellow-400 text-slate-900 flex items-center justify-center">
                  <Briefcase />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    SSC CGL 2026
                  </h3>

                  <p className="text-blue-100 text-sm">
                    Last date: 25 Aug 2026
                  </p>
                </div>

              </div>

              <div className="space-y-4">

                <div className="flex items-center justify-between bg-white/5 rounded-xl p-4">

                  <div className="flex items-center gap-3">
                    <FileText
                      size={20}
                      className="text-yellow-300"
                    />

                    <span>
                      Admit Card Released
                    </span>
                  </div>

                  <span className="text-green-400 text-sm">
                    Live
                  </span>

                </div>

                <div className="flex items-center justify-between bg-white/5 rounded-xl p-4">

                  <div className="flex items-center gap-3">
                    <Award
                      size={20}
                      className="text-yellow-300"
                    />

                    <span>
                      Result Published
                    </span>
                  </div>

                  <span className="text-green-400 text-sm">
                    New
                  </span>

                </div>

                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 rounded-2xl p-5 mt-6">

                  <div className="text-sm font-medium mb-1">
                    Today's Highlight
                  </div>

                  <div className="text-xl font-bold">
                    Railway NTPC 2026
                  </div>

                  <p className="text-sm mt-1">
                    Apply online for 11,558 vacancies.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;