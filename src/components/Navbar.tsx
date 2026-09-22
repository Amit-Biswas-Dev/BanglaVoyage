import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-slate-900"
        >
          Bangla
          <span className="text-orange-500">
            Voyage
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">

          <Link
            to="/"
            className="font-medium text-slate-700 hover:text-orange-500"
          >
            Home
          </Link>

          <Link
            to="/tours"
            className="font-medium text-slate-700 hover:text-orange-500"
          >
            Tours
          </Link>

          <Link
            to="/destinations"
            className="font-medium text-slate-700 hover:text-orange-500"
          >
            Destinations
          </Link>

          <Link
            to="/about"
            className="font-medium text-slate-700 hover:text-orange-500"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="font-medium text-slate-700 hover:text-orange-500"
          >
            Contact
          </Link>

        </div>

        {/* Auth */}
        <div className="hidden items-center gap-3 md:flex">

          <Link
            to="/login"
            className="rounded-lg px-4 py-2 font-semibold text-slate-700 hover:text-orange-500"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-lg bg-orange-500 px-5 py-2.5 font-semibold text-white hover:bg-orange-600"
          >
            Sign Up
          </Link>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-xl md:hidden"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-slate-100 bg-white px-6 py-5 md:hidden">

          <div className="flex flex-col gap-4">

            <Link
              onClick={() => setOpen(false)}
              to="/"
            >
              Home
            </Link>

            <Link
              onClick={() => setOpen(false)}
              to="/tours"
            >
              Tours
            </Link>

            <Link
              onClick={() => setOpen(false)}
              to="/destinations"
            >
              Destinations
            </Link>

            <Link
              onClick={() => setOpen(false)}
              to="/about"
            >
              About
            </Link>

            <Link
              onClick={() => setOpen(false)}
              to="/contact"
            >
              Contact
            </Link>

            <hr />

            <Link
              onClick={() => setOpen(false)}
              to="/login"
            >
              Login
            </Link>

            <Link
              onClick={() => setOpen(false)}
              to="/register"
              className="rounded-lg bg-orange-500 px-4 py-3 text-center font-semibold text-white"
            >
              Sign Up
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
};

export default Navbar;