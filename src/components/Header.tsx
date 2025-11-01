import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/shop" },
    { label: "Custom Cake", path: "/custom-cake" },
    { label: "About Us", path: "/about" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Header */}
        <div className="flex items-center justify-between py-4 lg:hidden">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">✿</span>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                Fleur de Gâteau
              </h1>
            </div>
          </Link>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">✿</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                Fleur de Gâteau
              </h1>
              <p className="text-xs text-gray-500">Handcrafted Elegance</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors ${
                  isActive(link.path)
                    ? "text-rose-600 border-b-2 border-rose-600 pb-1"
                    : "text-gray-700 hover:text-rose-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Cart Link */}
          <Link
            to="/cart"
            className="relative p-3 rounded-lg bg-gradient-to-r from-rose-400 to-pink-500 text-white hover:from-rose-500 hover:to-pink-600 transition-all transform hover:scale-110 shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex gap-2 py-3 overflow-x-auto pb-4 border-t border-gray-100">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap transition-colors ${
                isActive(link.path)
                  ? "bg-rose-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};
