import React, { useState, useRef, useEffect } from 'react';
import { Calendar, Users, Search, BedDouble, ChevronDown } from 'lucide-react';
import { DateDropdown, LocationDropdown, GuestDropdown } from '../ui/SelectionDropdowns';
import { useNavigate } from "react-router";

const SearchBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [location, setLocation] = useState('');
  const [dates, setDates] = useState({ checkIn: null, checkOut: null });
  const [guests, setGuests] = useState({ adults: 1, children: 0, rooms: 1 });

  const searchRef = useRef(null);
  const navigate = useNavigate();

  const suggestions = ['Mumbai', 'Goa', 'Ahmedabad', 'Delhi', 'Gaziabad'];
  const GuestLables = [
    { label: 'Adults', subLabel: 'Ages 13 or above', key: 'adults', min: 1 },
    { label: 'Children', subLabel: 'Ages 0-12', key: 'children', min: 0 },
    { label: 'Rooms', subLabel: '', key: 'rooms', min: 1 },
  ]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  const handleSearch = () => {
    navigate("/results");
  };

  return (
    <div className="relative mx-auto" ref={searchRef}>
      {/* Main Search Bar */}
      <div className="flex items-center bg-white rounded-lg shadow-md border border-gray-200 h-16">

        {/* Location */}
        <div className="relative flex-1 min-w-[200px] h-full">
          <div
            className={`h-full px-6 flex items-center gap-x-4 cursor-pointer hover:bg-background-hover rounded-l-lg transition-colors ${activeDropdown === 'location' ? 'bg-gray-50' : ''
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
            className={`h-full px-6 flex items-center gap-x-4 cursor-pointer hover:bg-background-hover transition-colors ${activeDropdown === 'dates' ? 'bg-gray-50' : ''
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
            className={`h-full px-6 flex items-center gap-x-4 cursor-pointer hover:bg-background-hover transition-colors ${activeDropdown === 'guests' ? 'bg-gray-50' : ''
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
        className="h-full px-8 bg-orange-500 text-white font-medium rounded-r-lg hover:bg-orange-600 transition-colors cursor-pointer">
          <Search size={20} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;