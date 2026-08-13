import { Link } from "react-router-dom";
import {
  MapPin,
  CalendarDays,
  Users,
  Building2,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

function JobCard({ job }) {
  const title = job.title || "Government Job";
  const department = job.department || job.organization || "Government Department";
  const location = job.location || "India";
  const vacancy = job.vacancy || job.vacancies || "Not specified";
  const lastDate = job.last_date || job.lastDate || null;
  const category = job.category || "Government Jobs";

  return (
    <article className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

      {/* Top */}
      <div className="p-6">

        <div className="flex items-start justify-between gap-4">

          <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
            <Building2 size={24} />
          </div>

          <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold">
            {category}
          </span>

        </div>

        {/* Title */}
        <h2 className="mt-5 text-xl font-bold text-gray-900 line-clamp-2">
          {title}
        </h2>

        {/* Department */}
        <p className="mt-2 text-sm font-medium text-gray-500">
          {department}
        </p>

        {/* Information */}
        <div className="mt-5 space-y-3">

          <div className="flex items-center gap-3 text-sm text-gray-600">
            <MapPin size={18} className="text-blue-600 shrink-0" />
            <span>{location}</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Users size={18} className="text-blue-600 shrink-0" />
            <span>
              Vacancies: <strong>{vacancy}</strong>
            </span>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-600">
            <CalendarDays size={18} className="text-blue-600 shrink-0" />

            <span>
              Last Date:{" "}
              <strong>
                {lastDate
                  ? new Date(lastDate).toLocaleDateString("en-IN")
                  : "Not specified"}
              </strong>
            </span>
          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-100 p-4 flex gap-3">

        <Link
          to={`/jobs/${job.id}`}
          className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-700 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition"
        >
          View Details
          <ArrowRight size={17} />
        </Link>

        {job.apply_link && (
          <a
            href={job.apply_link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl border border-gray-200 text-blue-700 hover:bg-blue-50 transition"
            title="Apply Online"
          >
            <ExternalLink size={18} />
          </a>
        )}

      </div>

    </article>
  );
}

export default JobCard;