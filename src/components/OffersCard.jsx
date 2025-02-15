import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import hotel3 from "../assets/images/hotel3.jpg";

const Offers = () => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-sm">
      <div className="max-w-7xl mx-auto">
        {/* Main container - stack on mobile, row on tablet+ */}
        <div className="flex flex-col sm:flex-row items-center">
          {/* Content Section - full width on mobile */}
          <div className="w-full sm:flex-1 p-4 sm:p-6 md:p-8">
            <div className="flex flex-col items-start gap-4 sm:gap-6">
              {/* Badge and Text */}
              <div className="w-full">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-black text-white rounded-full text-xs font-medium">
                    Early Access
                  </span>
                  <div className="flex items-center text-gray-500 text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    14 days left
                  </div>
                </div>
                <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-1">
                  Save big on your next stay
                </h1>
                <p className="text-sm text-gray-600 mb-4 sm:mb-0">
                  Early 2025 Deals - Up to 30% off on luxury stays
                </p>
              </div>
              {/* CTA Button - full width on mobile */}
              <button className="w-full sm:w-auto group inline-flex justify-center items-center px-5 py-2.5 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors text-sm whitespace-nowrap">
                Save Now
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
          {/* Image Section - full width on mobile, fixed width on tablet+ */}
          <div className="w-full sm:w-48 h-40 sm:h-48 md:h-56">
            <img
              src={hotel3}
              alt="Luxury hotel room"
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay - adjusted for better visibility on mobile */}
            <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-l from-transparent via-transparent to-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;