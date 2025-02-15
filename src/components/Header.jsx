import { useState, useEffect } from 'react';
import { CircleUserRound, BedDouble, Plane, CirclePlus } from "lucide-react";
import SearchBar from "./stays/SearchStay";
import logoBgRemoved from "../assets/images/logo-bg-removed.png";
import { useLocation, Link } from "react-router";

const Header = () => {
  const [showSearch, setShowSearch] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const location = useLocation();
  const isSearchResultsPage = location.pathname === "/results";

  useEffect(() => {
    const controlSearch = () => {
      const currentScrollY = window.scrollY;

      // Hide search bar when scrolling down
      if (currentScrollY > 100) {
        setShowSearch(false);
      } 
      // Show search bar only when back at the top
      else if (currentScrollY === 0) {
        setShowSearch(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlSearch);

    return () => {
      window.removeEventListener('scroll', controlSearch);
    };
  }, []);

  return (
    <header id="site-header" className="fixed top-0 z-50 bg-white border-b border-gray-200 md:px-25 px-5 w-full overflow-visible">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo Section */}
        <Link to={"/"}>
          <div className="md:w-24 h-auto w-16  cursor-pointer">
            <img src={logoBgRemoved} alt="Royal-travel-logo" />
          </div>
        </Link>
        {/* Navigation Links (Selection Bar) */}
        <nav className="hidden md:flex rounded-full px-4 py-2 space-x-6 text-sm tracking-wider text-gray-700">
          <button className="flex items-center gap-x-2 font-medium hover:bg-background-hover px-5 py-3 cursor-pointer rounded-full transition">
            <BedDouble className="w-5 h-5" />
            <span>Stays</span>
          </button>
          <button className="flex items-center gap-x-2 font-medium hover:bg-background-hover px-4 py-2 cursor-pointer rounded-full transition">
            <Plane className="w-5 h-5" />
            <span>Flights</span>
          </button>
          <button className="flex items-center gap-x-2 font-medium hover:bg-background-hover px-4 py-2 cursor-pointer rounded-full transition">
            <span>Flights</span>
            <CirclePlus className="w-4 h-4" />
            <span>Stays</span>
          </button>
        </nav>
        {/* Login Section */}
        <div className="flex items-center space-x-4">
          <button className="flex items-center justify-center px-4 py-2 rounded-full font-medium gap-x-2 hover:bg-background-hover transition cursor-pointer text-gray-700">
            <span>Login</span>
            <CircleUserRound className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Search Bar Section */}
      {!isSearchResultsPage && (
        <section
          className={`transition-all duration-100 ease-in-out 
      ${showSearch ? "max-h-[300px] opacity-100 py-5" : "max-h-0 opacity-0 py-0"}`}
        >
          <h1 className={`text-3xl md:text-5xl font-semibold text-text-heading 
                  ${showSearch ? "my-4 md:my-8" : ""}`}>
            Find your next stay...
          </h1>
          <SearchBar />
        </section>
      )}
    </header>
  );
};

export default Header;
