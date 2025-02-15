import React, { useState, useRef, useEffect } from 'react';
import { Calendar, Users, Search, BedDouble, ChevronDown, X } from 'lucide-react';
import { DateDropdown, LocationDropdown, GuestDropdown } from '../ui/SelectionDropdowns';
import { useNavigate } from "react-router";

const SearchBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [location, setLocation] = useState('');
  const [dates, setDates] = useState({ checkIn: null, checkOut: null });
  const [guests, setGuests] = useState({ adults: 1, children: 0, rooms: 1 });
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const searchRef = useRef(null);
  const navigate = useNavigate();

  const suggestions = ['Mumbai', 'Goa', 'Ahmedabad', 'Delhi', 'Gaziabad'];
  const GuestLables = [
    { label: 'Adults', subLabel: 'Ages 13 or above', key: 'adults', min: 1 },
    { label: 'Children', subLabel: 'Ages 0-12', key: 'children', min: 0 },
    { label: 'Rooms', subLabel: '', key: 'rooms', min: 1 },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileOpen]);

  const handleSearch = () => {
    setIsMobileOpen(false);
    navigate("/results");
  };

  // Mobile trigger button
  const MobileTrigger = () => (
    <div className="lg:hidden z-20">
      <button
        onClick={() => setIsMobileOpen(true)}
        className="w-full flex items-center justify-between px-4 py-3.5 bg-white rounded-full shadow-xs border border-gray-200"
      >
        <div className="flex items-center gap-3">
          <Search size={20} className="text-gray-400" />
          <span className="text-gray-600 text-sm font-medium">
            {location || "Where are you going?"}
          </span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          {(dates.checkIn || guests.adults > 1) && (
            <div className="h-6 w-px bg-gray-200" />
          )}
          {dates.checkIn && (
            <span className="text-gray-600">{dates.checkIn}</span>
          )}
          {guests.adults > 1 && (
            <span className="text-gray-600">{guests.adults + guests.children} guests</span>
          )}
        </div>
      </button>
    </div>
  );

  // Mobile overlay content
  const MobileOverlay = () => (
    <div className="lg:hidden fixed inset-0 bg-white z-30">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <button
            onClick={() => setIsMobileOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X size={20} className="text-gray-600" />
          </button>
          <span className="text-base font-medium">Search</span>
          <div className="w-10" /> {/* Spacer for alignment */}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-4 space-y-4">
            {/* Location */}
            <div className="relative">
              <div
                className={`p-4 rounded-2xl border ${activeDropdown === 'location' ? 'border-gray-400' : 'border-gray-200'
                  }`}
                onClick={() => setActiveDropdown('location')}
              >
                <span className="text-xs font-medium text-gray-600">Location</span>
                <div className="flex items-center gap-3 mt-1">
                  <BedDouble className="text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    className="w-full outline-none text-base bg-transparent"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>
              {activeDropdown === 'location' && (
                <LocationDropdown
                  location={location}
                  setLocation={setLocation}
                  suggestions={suggestions}
                  setActiveDropdown={setActiveDropdown}
                />
              )}
            </div>

            {/* Dates */}
            <div className="relative">
              <div
                className={`p-4 rounded-2xl border ${activeDropdown === 'dates' ? 'border-gray-400' : 'border-gray-200'
                  }`}
                onClick={() => setActiveDropdown('dates')}
              >
                <span className="text-xs font-medium text-gray-600">Dates</span>
                <div className="flex items-center gap-3 mt-1">
                  <Calendar className="text-gray-400" size={20} />
                  <span className="text-base text-gray-700">
                    {dates.checkIn && dates.checkOut
                      ? `${dates.checkIn} - ${dates.checkOut}`
                      : 'Add dates'}
                  </span>
                </div>
              </div>
              {activeDropdown === 'dates' && (
                <DateDropdown dates={dates} setDates={setDates} />
              )}
            </div>

            {/* Guests */}
            <div className="relative">
              <div
                className={`p-4 rounded-2xl border ${activeDropdown === 'guests' ? 'border-gray-400' : 'border-gray-200'
                  }`}
                onClick={() => setActiveDropdown('guests')}
              >
                <span className="text-xs font-medium text-gray-600">Guests & Rooms</span>
                <div className="flex items-center gap-3 mt-1">
                  <Users className="text-gray-400" size={20} />
                  <span className="text-base text-gray-700">
                    {`${guests.adults + guests.children} guests, ${guests.rooms} room${guests.rooms > 1 ? 's' : ''}`}
                  </span>
                </div>
              </div>
              {activeDropdown === 'guests' && (
                <GuestDropdown guestLabels={GuestLables} guests={guests} setGuests={setGuests} />
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-300">
          <button
            onClick={handleSearch}
            className="w-full py-3.5 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
          >
            <Search size={20} />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative mx-auto" ref={searchRef}>
      {/* Desktop Search Bar */}
      <div className="hidden lg:flex items-center bg-white rounded-lg shadow-md border border-gray-200 h-16">
        {/* Location */}
        <div className="relative flex-1 min-w-[200px] h-full">
          <div
            className={`h-full px-6 flex items-center gap-x-4 cursor-pointer hover:bg-gray-50 rounded-l-lg transition-colors ${activeDropdown === 'location' ? 'bg-gray-50' : ''
              }`}
            onClick={() => setActiveDropdown('location')}
          >
            <BedDouble className="text-gray-400" size={20} />
            <div className="flex flex-col flex-1">
              <span className="text-xs font-medium text-gray-600">Location</span>
              <input
                type="text"
                placeholder="Where are you going?"
                className="w-full outline-none text-sm bg-transparent"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onClick={() => setActiveDropdown('location')}
              />
            </div>
            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${activeDropdown === 'location' ? 'rotate-180' : ''}`} />
          </div>

          {activeDropdown === 'location' && (
            <LocationDropdown
              location={location}
              setLocation={setLocation}
              suggestions={suggestions}
              setActiveDropdown={setActiveDropdown}
            />
          )}
        </div>

        <div className="h-8 w-px bg-gray-200" />

        {/* Dates */}
        <div className="relative flex-1 h-full">
          <div
            className={`h-full px-6 flex items-center gap-x-4 cursor-pointer hover:bg-gray-50 transition-colors ${activeDropdown === 'dates' ? 'bg-gray-50' : ''
              }`}
            onClick={() => setActiveDropdown('dates')}
          >
            <Calendar className="text-gray-400" size={20} />
            <div className="flex flex-col flex-1">
              <span className="text-xs font-medium text-gray-600">Dates</span>
              <span className="text-sm text-gray-700">
                {dates.checkIn && dates.checkOut
                  ? `${dates.checkIn} - ${dates.checkOut}`
                  : 'Add dates'}
              </span>
            </div>
            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${activeDropdown === 'dates' ? 'rotate-180' : ''}`} />
          </div>

          {activeDropdown === 'dates' && (
            <DateDropdown dates={dates} setDates={setDates} />
          )}
        </div>

        <div className="h-8 w-px bg-gray-200" />

        {/* Guests */}
        <div className="relative flex-1 h-full">
          <div
            className={`h-full px-6 flex items-center gap-x-4 cursor-pointer hover:bg-gray-50 transition-colors ${activeDropdown === 'guests' ? 'bg-gray-50' : ''
              }`}
            onClick={() => setActiveDropdown('guests')}
          >
            <Users className="text-gray-400" size={20} />
            <div className="flex flex-col flex-1">
              <span className="text-xs font-medium text-gray-600">Guests & Rooms</span>
              <span className="text-sm text-gray-700">
                {`${guests.adults + guests.children} guests, ${guests.rooms} room${guests.rooms > 1 ? 's' : ''}`}
              </span>
            </div>
            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${activeDropdown === 'guests' ? 'rotate-180' : ''}`} />
          </div>

          {activeDropdown === 'guests' && (
            <GuestDropdown guestLabels={GuestLables} guests={guests} setGuests={setGuests} />
          )}
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="h-full px-8 bg-orange-500 text-white font-medium rounded-r-lg hover:bg-orange-600 transition-colors cursor-pointer"
        >
          <Search size={20} />
        </button>
      </div>

      {/* Mobile Elements */}
      <MobileTrigger />
      {isMobileOpen && <MobileOverlay />}
    </div>
  );
};

export default SearchBar;