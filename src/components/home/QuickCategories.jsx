import { Link } from "react-router-dom";
import {
  FileText,
  Landmark,
  Train,
  Wallet,
  Shield,
  ShieldCheck,
  GraduationCap,
  Building2,
} from "lucide-react";

const categories = [
  {
    name: "SSC",
    icon: FileText,
  },
  {
    name: "UPSC",
    icon: Landmark,
  },
  {
    name: "Railway",
    icon: Train,
  },
  {
    name: "Bank",
    icon: Wallet,
  },
  {
    name: "Police",
    icon: Shield,
  },
  {
    name: "Defence",
    icon: ShieldCheck,
  },
  {
    name: "Teaching",
    icon: GraduationCap,
  },
  {
    name: "State Jobs",
    icon: Building2,
  },
];

function QuickCategories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">
          <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
            Explore Opportunities
          </span>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Browse Categories
          </h2>

          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            Find government jobs quickly by choosing your preferred
            department or career category.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.name}
                to={`/jobs?category=${encodeURIComponent(category.name)}`}
                className="group bg-slate-50 border border-gray-200 rounded-2xl p-5 text-center hover:bg-blue-700 hover:border-blue-700 hover:shadow-xl transition-all duration-300"
              >

                <div className="mx-auto w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center group-hover:bg-white/20 group-hover:text-white transition">
                  <Icon size={24} />
                </div>

                <h3 className="mt-4 font-semibold text-gray-800 group-hover:text-white transition">
                  {category.name}
                </h3>

                <p className="mt-1 text-xs text-gray-400 group-hover:text-blue-100 transition">
                  View Jobs
                </p>

              </Link>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default QuickCategories;