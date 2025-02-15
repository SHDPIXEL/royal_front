import React, { useState } from 'react';
import StayCard from "../components/stays/StayCard";
import HotelDumy from "../assets/images/hotel_dumy.jpg";
import hotel1 from "../assets/images/hotel1.jpg";
import hotel2 from "../assets/images/hotel2.jpg"
import hotel3 from "../assets/images/hotel3.jpg"
import Banner from "../components/Banner";
import DestinationGrid from '../components/DestinatinonGrid';
import FlightCard from '../components/flights/FlightCard';
import Offers from "../components/OffersCard";

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const stays = [
        {
            id: 1,
            images: [HotelDumy, hotel1, HotelDumy],
            name: "Luxury Villa",
            city: "Mumbai",
            price: "5,999",
            category: "luxury"
        },
        {
            id: 2,
            images: [hotel2, HotelDumy, HotelDumy],
            name: "Beach Resort",
            city: "Goa",
            price: "7,499",
            category: "beach"
        },
        {
            id: 3,
            images: [hotel1, hotel2, HotelDumy],
            name: "Mountain Retreat",
            city: "Manali",
            price: "6,299",
            category: "mountain"
        },
        {
            id: 4,
            images: [hotel3, hotel1, HotelDumy],
            name: "City Hotel",
            city: "Delhi",
            price: "4,999",
            category: "city"
        }
    ];

    const flights = [
        {
            airline: "IndiGo",
            airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png",
            departureCity: "Mumbai",
            departureCode: "BOM",
            departureTime: "06:00",
            departureDate: "15 Mar 2024",
            arrivalCity: "Delhi",
            arrivalCode: "DEL",
            arrivalTime: "08:15",
            duration: "2h 15m",
            price: "2,499",
            stops: 0,
        },
        {
            airline: "Air India",
            airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/AI.png",
            departureCity: "Vadodara",
            departureCode: "BDQ",
            departureTime: "09:30",
            departureDate: "18 Mar 2024",
            arrivalCity: "Kolkata",
            arrivalCode: "CCU",
            arrivalTime: "12:45",
            duration: "3h 15m",
            price: "3,799",
            stops: 1,
        },
        {
            airline: "SpiceJet",
            airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/SG.png",
            departureCity: "Chennai",
            departureCode: "MAA",
            departureTime: "14:20",
            departureDate: "20 Mar 2024",
            arrivalCity: "Goa",
            arrivalCode: "GOI",
            arrivalTime: "16:00",
            duration: "1h 40m",
            price: "2,199",
            stops: 0,
        },
        {
            airline: "Vistara",
            airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/UK.png",
            departureCity: "Hyderabad",
            departureCode: "HYD",
            departureTime: "17:00",
            departureDate: "22 Mar 2024",
            arrivalCity: "Pune",
            arrivalCode: "PNQ",
            arrivalTime: "18:30",
            duration: "1h 30m",
            price: "2,899",
            stops: 0,
        },
    ];

    const categories = [
        { id: 'all', name: 'All' },
        { id: 'luxury', name: 'Luxury' },
        { id: 'beach', name: 'Beach' },
        { id: 'mountain', name: 'Mountain' },
        { id: 'city', name: 'City' }
    ];

    const filteredStays = selectedCategory === 'all'
        ? stays
        : stays.filter(stay => stay.category === selectedCategory);

    return (
        <main className="mt-5">
            {/* Banner Section */}
            <div className="mb-10">
                <Banner />
            </div>

            {/* Popular Destinations */}
            <div className="mb-8">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="lg:text-3xl mg:text-xl text-lg font-semibold text-text-heading">
                        Mountains, Beaches or a city ?
                    </h2>
                </div>
                <div className="relative flex gap-4 overflow-x-auto scroll-smooth snap-x scrollbar-hide">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => {
                                setSelectedCategory(category.id);
                                console.log("Selected Category:", category.id); // Debugging
                            }}
                            className={`px-4 py-2 md:px-6 md:py-2 rounded-full whitespace-nowrap text-sm md:text-base z-10 ${selectedCategory === category.id
                                ? 'bg-black text-white'
                                : 'bg-white border border-gray-200 hover:bg-gray-200'
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

            </div>

            {/* Stays Grid */}

            <div className="relative">
                <div className="flex md:grid gap-6 mb-16 pb-4 md:pb-0 md:grid-cols-3 lg:grid-cols-4 
        whitespace-nowrap min-w-full w-max overflow-x-auto scroll-smooth snap-x scrollbar-hide">
                    {filteredStays.map((stay) => (
                        <div className="w-80 flex-shrink-0 md:w-auto md:flex-auto">
                            <StayCard
                                key={stay.id}
                                images={stay.images}
                                name={stay.name}
                                city={stay.city}
                                price={stay.price}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <section>
                <DestinationGrid />
            </section>

            <section className="mx-auto">
                <h2 className="lg:text-3xl mg:text-xl text-lg font-semibold mb-6 text-text-heading">
                    Fly to these destinations
                </h2>

                <div className="flex sm:hidden gap-4 overflow-x-auto scroll-smooth snap-x scrollbar-hide">
                    {flights.map((flight, index) => (
                        <div key={index} className="snap-center flex-shrink-0 w-80">
                            <FlightCard {...flight} />
                        </div>
                    ))}
                </div>

                <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {flights.map((flight, index) => (
                        <FlightCard key={index} {...flight} />
                    ))}
                </div>
            </section>

            <section className='my-8'>
                <Offers />
            </section>

        </main>
    );
};

export default Home;