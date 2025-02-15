import { useState, useEffect } from 'react';
import { CircleUserRound, BedDouble, Plane, CirclePlus, Menu } from "lucide-react";
import SearchBar from "./stays/SearchStay";
import logoBgRemoved from "../assets/images/logo-bg-removed.png";
import { useLocation, Link } from "react-router";

const Header = () => {
  const [showSearch, setShowSearch] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isSearchResultsPage = location.pathname === "/results";

  useEffect(() => {
    const controlSearch = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setShowSearch(false);
        setIsMobileMenuOpen(false);
      } else if (currentScrollY === 0) {
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
    <header id="site-header" className="fixed top-0 z-50 bg-white border-b border-gray-200 w-full md:px-20 overflow-visible">
      <div className="px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20 max-w-7xl mx-auto">
          {/* Logo Section */}
          <Link to={"/"}>
            <div className="cursor-pointer">
              <img src={logoBgRemoved} alt="Royal-travel-logo" className="w-20 md:w-30 h-auto" />
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-full hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex rounded-full px-4 py-2 space-x-6 text-sm tracking-wider text-gray-700">
            <button className="flex items-center gap-x-2 font-medium hover:bg-gray-100 px-5 py-3 rounded-full transition">
              <BedDouble className="w-5 h-5" />
              <span>Stays</span>
            </button>
            <button className="flex items-center gap-x-2 font-medium hover:bg-gray-100 px-4 py-2 rounded-full transition">
              <Plane className="w-5 h-5" />
              <span>Flights</span>
            </button>
            <button className="flex items-center gap-x-2 font-medium hover:bg-gray-100 px-4 py-2 rounded-full transition">
              <span>Flights</span>
              <CirclePlus className="w-4 h-4" />
              <span>Stays</span>
            </button>
          </nav>

          {/* Desktop Login Button */}
          <div className="hidden md:flex items-center">
            <button className="flex items-center justify-center px-4 py-2 rounded-full font-medium gap-x-2 hover:bg-gray-100 transition text-gray-700">
              <span>Login</span>
              <CircleUserRound className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64' : 'max-h-0'} overflow-hidden`}>
          <div className="px-4 py-2 space-y-2">
            <button className="w-full flex items-center gap-x-2 font-medium hover:bg-gray-100 px-4 py-3 rounded-lg transition">
              <BedDouble className="w-5 h-5" />
              <span>Stays</span>
            </button>
            <button className="w-full flex items-center gap-x-2 font-medium hover:bg-gray-100 px-4 py-3 rounded-lg transition">
              <Plane className="w-5 h-5" />
              <span>Flights</span>
            </button>
            <button className="w-full flex items-center gap-x-2 font-medium hover:bg-gray-100 px-4 py-3 rounded-lg transition">
              <CirclePlus className="w-4 h-4" />
              <span>Flights + Stays</span>
            </button>
            <button className="w-full flex items-center gap-x-2 font-medium hover:bg-gray-100 px-4 py-3 rounded-lg transition">
              <CircleUserRound className="w-5 h-5" />
              <span>Login</span>
            </button>
          </div>
        </div>

        {/* Search Bar Section */}
        {!isSearchResultsPage && (
          <section
            className={`${showSearch ? "max-h-[300px] opacity-100 py-3 md:py-5" : "max-h-0 opacity-0 py-0"}`}
          >
            <h1 className={`text-2xl md:text-5xl font-semibold text-gray-900
              ${showSearch ? "my-3 md:my-8" : ""}`}>
              Find your next stay...
            </h1>
            <SearchBar />
          </section>
        )}
      </div>
    </header>
  );
};

export default Header;