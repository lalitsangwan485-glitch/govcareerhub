import {
  Briefcase,
  FileCheck,
  BadgeCheck,
  Newspaper,
} from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    title: "Latest Jobs",
    value: "2,500+",
  },
  {
    icon: FileCheck,
    title: "Admit Cards",
    value: "450+",
  },
  {
    icon: BadgeCheck,
    title: "Results",
    value: "1,100+",
  },
  {
    icon: Newspaper,
    title: "Current Affairs",
    value: "365 Days",
  },
];

function StatsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <Icon
                size={42}
                className="text-blue-700 mb-4"
              />

              <h3 className="text-3xl font-bold">
                {item.value}
              </h3>

              <p className="text-gray-500 mt-2">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default StatsSection;