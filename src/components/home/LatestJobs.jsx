import { Link } from "react-router-dom";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import JobCard from "../jobs/JobCard";

function LatestJobs({ jobs = [], loading }) {
  console.log("LatestJobs Props:", jobs);

  if (loading) {
    return (
      <section className="py-20 bg-slate-50">
        <Container>
          <h2 className="text-3xl font-bold text-center">
            Loading Jobs...
          </h2>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-20 bg-slate-50">
      <Container>

        <div className="flex items-center justify-between mb-10">
          <SectionTitle
            title="Latest Government Jobs"
            subtitle="Explore the newest government job opportunities from SSC, UPSC, Railway, Banking, Defence, Police and more."
          />

          <Link
  to="/jobs"
  className="inline-flex items-center justify-center bg-blue-700 text-white px-5 py-3 rounded-xl font-semibold hover:bg-blue-800 transition"
>
  View All Jobs →
</Link>
        </div>

        <div className="mb-6 text-lg font-semibold text-blue-700">
          Jobs Found : {jobs.length}
        </div>

        {jobs.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-red-600 text-xl font-semibold py-10">
            No jobs found.
          </div>
        )}

      </Container>
    </section>
  );
}

export default LatestJobs;