import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  GraduationCap,
  Users,
  IndianRupee,
  CalendarDays,
  FileText,
  Building2,
  Clock,
  ExternalLink,
  Share2,
  Copy,
  Check,
} from "lucide-react";

import { supabase } from "../services/supabase";

function JobDetails() {
  const { id } = useParams();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    async function loadJob() {
      setLoading(true);
      setError("");

      const { data, error } = await supabase
        .from("jobs")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Job loading error:", error);
        setError("Unable to load this job.");
        setJob(null);
      } else {
        setJob(data);
      }

      setLoading(false);
    }

    loadJob();
  }, [id]);

  /* Loading */
  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-700 rounded-full animate-spin mx-auto" />

          <p className="mt-5 text-lg font-semibold text-gray-600">
            Loading job details...
          </p>
        </div>
      </main>
    );
  }

  /* Error / Job not found */
  if (error || !job) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center max-w-md w-full">

          <div className="w-16 h-16 mx-auto rounded-full bg-red-100 text-red-600 flex items-center justify-center">
            <FileText size={30} />
          </div>

          <h1 className="mt-5 text-2xl font-bold text-gray-900">
            Job Not Found
          </h1>

          <p className="mt-3 text-gray-500">
            We couldn't find this government job.
          </p>

          <Link
            to="/jobs"
            className="inline-flex items-center justify-center gap-2 mt-6 bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-800 transition"
          >
            <ArrowLeft size={18} />
            Back to Jobs
          </Link>

        </div>
      </main>
    );
  }

  /* Apply */
  const handleApply = () => {
    if (job.apply_link) {
      window.open(job.apply_link, "_blank", "noopener,noreferrer");
    } else {
      alert("Official application link is not available yet.");
    }
  };

  /* Copy */
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Copy failed:", error);

      alert("Unable to copy the link. Please copy it from your browser.");
    }
  };

  /* Share */
  const handleShare = async () => {
    const shareData = {
      title: job.title,
      text: `Check out this government job on GovCareerHub: ${job.title}`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await handleCopyLink();
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error("Share failed:", error);
      }
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 py-8 md:py-12">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Back */}
        <Link
          to="/jobs"
          className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-900 mb-6 md:mb-8"
        >
          <ArrowLeft size={20} />
          Back to Jobs
        </Link>

        {/* Main Card */}
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg border border-gray-100 overflow-hidden">

          {/* Header */}
          <div className="bg-gradient-to-br from-blue-700 to-indigo-900 text-white p-6 sm:p-8 md:p-10">

            <div className="flex flex-wrap items-center gap-3">

              {job.department && (
                <span className="inline-flex items-center gap-2 bg-white/15 border border-white/20 px-4 py-2 rounded-full text-sm font-semibold">
                  <Building2 size={16} />
                  {job.department}
                </span>
              )}

              {job.category && (
                <span className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold">
                  {job.category}
                </span>
              )}

            </div>

            <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight break-words">
              {job.title}
            </h1>

            <div className="mt-5 flex flex-wrap gap-4 text-blue-100">

              {job.location && (
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span>{job.location}</span>
                </div>
              )}

              {job.last_date && (
                <div className="flex items-center gap-2">
                  <CalendarDays size={18} />
                  <span>Last Date: {job.last_date}</span>
                </div>
              )}

            </div>

          </div>

          {/* Content */}
          <div className="p-5 sm:p-7 md:p-10">

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Job Information
            </h2>

            <p className="mt-2 text-gray-500">
              Important details about this government recruitment.
            </p>

            {/* Information Grid */}
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

              <Info
                icon={<MapPin size={20} />}
                title="Location"
                value={job.location}
              />

              <Info
                icon={<GraduationCap size={20} />}
                title="Qualification"
                value={job.qualification}
              />

              <Info
                icon={<Users size={20} />}
                title="Vacancies"
                value={job.vacancies}
              />

              <Info
                icon={<IndianRupee size={20} />}
                title="Salary"
                value={job.salary}
              />

              <Info
                icon={<FileText size={20} />}
                title="Application Fee"
                value={job.application_fee}
              />

              <Info
                icon={<CalendarDays size={20} />}
                title="Last Date"
                value={job.last_date || "Check official notification"}
              />

            </div>

            {/* Age Limit */}
            <section className="mt-8 bg-slate-50 border border-gray-200 rounded-2xl p-5 sm:p-6">

              <div className="flex items-center gap-3">
                <Clock className="text-blue-700" size={22} />

                <h3 className="font-bold text-gray-900">
                  Age Limit
                </h3>
              </div>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {job.age_limit || "As per official notification"}
              </p>

            </section>

            {/* Description */}
            {job.description && (
              <section className="mt-8">

                <h2 className="text-2xl font-bold text-gray-900">
                  Job Description
                </h2>

                <div className="mt-4 bg-white border border-gray-200 rounded-2xl p-5 sm:p-6">
                  <p className="text-gray-600 leading-7 whitespace-pre-line">
                    {job.description}
                  </p>
                </div>

              </section>
            )}

            {/* Action Section */}
            <section className="mt-10 bg-blue-50 border border-blue-100 rounded-2xl p-5 sm:p-6">

              <div className="flex flex-col gap-5">

                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Ready to Apply?
                  </h2>

                  <p className="mt-1 text-gray-600">
                    Check the official notification before applying.
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">

                  {/* Share */}
                  <button
                    type="button"
                    onClick={handleShare}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-blue-200 bg-white text-blue-700 px-6 py-3.5 rounded-xl font-semibold hover:bg-blue-50 transition"
                  >
                    <Share2 size={18} />
                    Share Job
                  </button>

                  {/* Copy */}
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-gray-200 bg-white text-gray-700 px-6 py-3.5 rounded-xl font-semibold hover:bg-gray-50 transition"
                  >
                    {copied ? (
                      <Check size={18} />
                    ) : (
                      <Copy size={18} />
                    )}

                    {copied ? "Copied!" : "Copy Link"}
                  </button>

                  {/* Apply */}
                  <button
                    type="button"
                    onClick={handleApply}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-blue-800 transition shadow-sm"
                  >
                    Apply Online
                    <ExternalLink size={18} />
                  </button>

                </div>

              </div>

            </section>

            {/* Important Notice */}
            <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-xl p-4">

              <p className="text-sm text-yellow-900 leading-relaxed">
                <strong>Important:</strong>{" "}
                Candidates should always verify eligibility, dates, fees,
                vacancies and other details from the official recruitment
                notification before applying.
              </p>

            </div>

          </div>
        </div>

      </div>
    </main>
  );
}

/* Information Card */
function Info({ icon, title, value }) {
  return (
    <div className="border border-gray-200 rounded-2xl p-5 hover:shadow-sm transition">

      <div className="flex items-center gap-3 text-blue-700">
        {icon}

        <span className="font-semibold">
          {title}
        </span>
      </div>

      <p className="mt-3 text-gray-700 font-medium break-words">
        {value || "Not specified"}
      </p>

    </div>
  );
}

export default JobDetails;