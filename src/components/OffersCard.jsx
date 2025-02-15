import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import hotel3 from "../assets/images/hotel3.jpg";

const Offers = () => {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-xl overflow-hidden  hover:shadow-sm">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Content Section */}
                    <div className="flex-1 p-6 md:p-8">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                            {/* Badge and Text */}
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="px-3 py-1 bg-black text-white rounded-full text-xs font-medium">
                                        Early Access
                                    </span>
                                    <div className="flex items-center text-gray-500 text-xs">
                                        <Clock className="w-3 h-3 mr-1" />
                                        14 days left
                                    </div>
                                </div>
                                <h1 className="text-xl md:text-2xl font-semibold text-gray-900 mb-1">
                                    Save big on your next stay
                                </h1>
                                <p className="text-sm text-gray-600 mb-4 md:mb-0">
                                    Early 2025 Deals - Up to 30% off on luxury stays
                                </p>
                            </div>

                            {/* CTA Button */}
                            <button className="group inline-flex cursor-pointer items-center px-5 py-2.5 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors text-sm whitespace-nowrap">
                                Save Now
                                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="relative w-48 h-32 md:h-40">
                        <img
                            src={hotel3}
                            alt="Luxury hotel room"
                            className="w-full h-full object-cover"
                        />
                        {/* Subtle Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/10" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;