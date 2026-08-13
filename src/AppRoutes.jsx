import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import Results from "./pages/Results";
import AdmitCards from "./pages/AdmitCards";
import About from "./pages/About";
import Contact from "./pages/Contact";
function AppRoutes() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Jobs */}
      <Route path="/jobs" element={<Jobs />} />

      {/* Job Details */}
      <Route path="/jobs/:id" element={<JobDetails />} />

      {/* Results */}
      <Route path="/results" element={<Results />} />

      {/* Admit Cards */}
      <Route path="/admit-card" element={<AdmitCards />} />
      
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      {/* 404 */}
      <Route
        path="*"
        element={
          <div className="min-h-screen flex items-center justify-center bg-slate-50">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-blue-700">
                404
              </h1>

              <p className="mt-4 text-xl text-gray-600">
                Page not found
              </p>
            </div>
          </div>
        }
      />
    </Routes>
  );
}

export default AppRoutes;