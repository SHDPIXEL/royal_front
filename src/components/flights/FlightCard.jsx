import React, { useState } from 'react';
import { Heart, Plane, Clock, Calendar } from "lucide-react";

const FlightCard = ({ 
  airline,
  airlineLogo,
  departureCity,
  departureCode,
  departureTime,
  departureDate,
  arrivalCity,
  arrivalCode,
  arrivalTime,
  duration,
  price,
  stops = 0
}) => {
  const [isLiked, setIsLiked] = useState(false);
  
  return (
    <div className="relative w-full max-w-[300px] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-300">
      {/* Airline Header */}
      <div className="p-4 bg-gray-50 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src={airlineLogo}
              alt={airline}
              className="w-6 h-6 object-contain"
            />
            <span className="font-medium text-gray-700">{airline}</span>
          </div>
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <Heart
              className={`w-5 h-5 transition-colors cursor-pointer ${
                isLiked
                  ? 'fill-orange-500 text-orange-500'
                  : 'text-gray-600 hover:text-orange-500'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Flight Content */}
      <div className="p-4 bg-white">
        {/* Cities and Times */}
        <div className="flex items-center justify-between mb-4">
          {/* Departure */}
          <div className="text-center">
            <p className="text-2xl font-semibold text-gray-900">{departureTime}</p>
            <p className="text-sm font-medium text-gray-700">{departureCode}</p>
            <p className="text-xs text-gray-500">{departureCity}</p>
          </div>

          {/* Flight Path */}
          <div className="flex-1 flex flex-col items-center px-4">
            <div className="w-full flex items-center gap-2">
              <div className="h-[1px] flex-1 border-t-2 border-dashed border-gray-300"></div>
              <Plane className="w-4 h-4 text-orange-500 rotate-90" />
              <div className="h-[1px] flex-1 border-t-2 border-dashed border-gray-300"></div>
            </div>
            <span className="text-xs text-gray-500 mt-1">
              {stops === 0 ? 'Direct' : `${stops} ${stops === 1 ? 'stop' : 'stops'}`}
            </span>
          </div>

          {/* Arrival */}
          <div className="text-center">
            <p className="text-2xl font-semibold text-gray-900">{arrivalTime}</p>
            <p className="text-sm font-medium text-gray-700">{arrivalCode}</p>
            <p className="text-xs text-gray-500">{arrivalCity}</p>
          </div>
        </div>

        {/* Flight Details */}
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{departureDate}</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex justify-between items-center">
          <p className="text-gray-900">
            <span className="font-semibold text-orange-600">₹{price}</span>
            <span className="text-sm text-gray-600"> /person</span>
          </p>
          <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm cursor-pointer">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;