import { MapPin } from 'lucide-react';
import { format } from 'date-fns';

//Guest Dropdown
const GuestDropdown = ({ guestLabels, guests, setGuests }) => (
  <div className="absolute top-[calc(100%+8px)] left-0 w-80 bg-white rounded-lg shadow-xl border border-gray-100 p-3 z-[9999]">
    {guestLabels.map(({ label, subLabel, key, min }) => (
      <div key={key} className="flex justify-between items-center py-2">
        <div>
          <p className="font-medium text-gray-900">{label}</p>
          {subLabel && <p className="text-sm text-gray-500">{subLabel}</p>}
        </div>
        <div className="flex items-center space-x-3">
          <button
            className="w-8 h-8 rounded-full border border-gray-200 hover:bg-gray-50 flex items-center justify-center transition-colors"
            onClick={() => setGuests(prev => ({ ...prev, [key]: Math.max(min, prev[key] - 1) }))}
            disabled={guests[key] === min}
          >
            -
          </button>
          <span className="w-6 text-center">{guests[key]}</span>
          <button
            className="w-8 h-8 rounded-full border border-gray-200 hover:bg-gray-50 flex items-center justify-center transition-colors"
            onClick={() => setGuests(prev => ({ ...prev, [key]: prev[key] + 1 }))}
          >
            +
          </button>
        </div>
      </div>
    ))}
  </div>
);


  // Location Dropdown

  const LocationDropdown = ({ location, setLocation, suggestions, setActiveDropdown }) => {
    return (
      <div className="absolute top-[calc(100%+8px)] left-0 w-80 bg-white rounded-lg shadow-xl border border-gray-100 p-3 z-[9999]">
        <div className="space-y-2">
          {suggestions
            .filter(place => place.toLowerCase().includes(location.toLowerCase()))
            .map((place, index) => (
              <div
                key={index}
                className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                onClick={() => {
                  setLocation(place);
                  setActiveDropdown(null);
                }}
              >
                <MapPin className="text-gray-400 mr-3" size={20} />
                <span className="text-gray-700">{place}</span>
              </div>
            ))}
        </div>
      </div>
    );
  };


const DateDropdown = ({ dates, setDates }) => {
  return (
    <div className="absolute top-[calc(100%+8px)] left-0 w-[420px] bg-white rounded-lg shadow-xl border border-gray-100 p-4 z-50">
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Select dates</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Check-in</label>
            <div className="relative">
              <input
                type="date"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow"
                onChange={(e) => setDates(prev => ({ ...prev, checkIn: e.target.value }))}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Check-out</label>
            <div className="relative">
              <input
                type="date"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow"
                onChange={(e) => setDates(prev => ({ ...prev, checkOut: e.target.value }))}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export {DateDropdown, LocationDropdown, GuestDropdown};

  

