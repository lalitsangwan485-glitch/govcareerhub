import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();

    const value = search.trim();

    if (value) {
      navigate(`/jobs?search=${encodeURIComponent(value)}`);
    } else {
      navigate("/jobs");
    }

    setMobileOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  const navClass = ({ isActive }) =>
    isActive
      ? "text-yellow-300 font-semibold"
      : "text-white hover:text-yellow-300 transition";

  return (
    <header className="bg-blue-700 shadow-lg sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-4">

        <div className="min-h-16 flex items-center justify-between gap-3">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="text-xl sm:text-2xl font-extrabold text-white whitespace-nowrap"
          >
            GovCareerHub
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5">

            <NavLink to="/" className={navClass}>
              Home
            </NavLink>

            <NavLink to="/jobs" className={navClass}>
              Latest Jobs
            </NavLink>

            <NavLink to="/results" className={navClass}>
              Results
            </NavLink>

            <NavLink to="/admit-card" className={navClass}>
              Admit Card
            </NavLink>

            <NavLink to="/about" className={navClass}>
              About
            </NavLink>

            <NavLink to="/contact" className={navClass}>
              Contact
            </NavLink>

          </nav>

          {/* Desktop Search */}
          <form
            onSubmit={handleSearch}
            className="hidden sm:flex items-center bg-white rounded-xl overflow-hidden shadow-sm"
          >
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search jobs..."
              className="w-32 lg:w-52 px-3 py-2.5 text-gray-800 text-sm outline-none"
            />

            <button
              type="submit"
              className="w-11 h-11 flex items-center justify-center bg-yellow-400 text-blue-900 hover:bg-yellow-300 transition"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
          </form>

          {/* Mobile Button */}
          <button
            type="button"
            onClick={() => setMobileOpen((previous) => !previous)}
            className="lg:hidden w-11 h-11 bg-white text-blue-700 rounded-lg flex items-center justify-center cursor-pointer"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-blue-800 border-t border-blue-600">

          <div className="px-4 py-5">

            {/* Mobile Search */}
            <form
              onSubmit={handleSearch}
              className="flex mb-6"
            >
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search government jobs..."
                className="flex-1 min-w-0 px-4 py-3 rounded-l-xl text-gray-800 outline-none"
              />

              <button
                type="submit"
                className="px-5 bg-yellow-400 text-blue-900 rounded-r-xl hover:bg-yellow-300 transition"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
            </form>

            {/* Mobile Links */}
            <nav className="flex flex-col gap-5">

              <NavLink
                to="/"
                onClick={closeMobileMenu}
                className={navClass}
              >
                Home
              </NavLink>

              <NavLink
                to="/jobs"
                onClick={closeMobileMenu}
                className={navClass}
              >
                Latest Jobs
              </NavLink>

              <NavLink
                to="/results"
                onClick={closeMobileMenu}
                className={navClass}
              >
                Results
              </NavLink>

              <NavLink
                to="/admit-card"
                onClick={closeMobileMenu}
                className={navClass}
              >
                Admit Card
              </NavLink>

              <NavLink
                to="/about"
                onClick={closeMobileMenu}
                className={navClass}
              >
                About
              </NavLink>

              <NavLink
                to="/contact"
                onClick={closeMobileMenu}
                className={navClass}
              >
                Contact
              </NavLink>

            </nav>

          </div>
        </div>
      )}

    </header>
  );
}

export default Navbar;