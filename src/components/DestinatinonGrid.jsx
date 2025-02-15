import React from 'react';
import { MapPin } from 'lucide-react';
import city from "../assets/images/city.jpg";
import mussoorie from "../assets/images/mussoorie.jpg";
import city2 from '../assets/images/city2.jpg';
import city3 from '../assets/images/city3.jpg';

const DestinationGrid = () => {
    const destinations = [
        {
            city: "Mussoorie",
            state: "Uttarakhand",
            imageUrl: mussoorie,
            className: "md:col-span-2 md:row-span-2"
        },
        {
            city: "Udaipur",
            state: "Rajasthan",
            imageUrl: city,
            className: "md:col-span-1 md:row-span-1"
        },
        {
            city: "Agra",
            state: "Uttar Pradesh",
            imageUrl: city3,
            className: "md:col-span-1 md:row-span-1"
        },
        {
            city: "Mumbai",
            state: "Maharashtra",
            imageUrl: city2,
            className: "md:col-span-2 md:row-span-1"
        }
    ];

    return (
        <section className="my-12">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <h2 className="lg:text-3xl mg:text-xl text-lg font-semibold mb-6 text-text-heading">
                    Popular Destinations
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:h-[500px]">
                    {destinations.map((destination, index) => (
                        <div
                            key={index}
                            className={`relative group overflow-hidden rounded-2xl min-h-[200px] md:min-h-0 ${destination.className}`}
                        >
                            <img
                                src={destination.imageUrl}
                                alt={destination.city}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 group-hover:to-black/70 transition-all duration-300" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full">
                                <div className="transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                                    <div className="flex items-center space-x-2 text-white mb-2">
                                        <MapPin className="w-5 h-5" />
                                        <span className="text-sm">{destination.state}</span>
                                    </div>
                                    <h3 className="text-lg md:text-2xl font-semibold text-white mb-3 md:mb-4">
                                        {destination.city}
                                    </h3>
                                    <button className="inline-flex items-center text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:underline">
                                        Explore more
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DestinationGrid;
