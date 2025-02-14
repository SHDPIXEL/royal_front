import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import bed_june_web from "../assets/images/bed_june_web.webp"
import Price_drop from "../assets/images/Price_drop_HP_Web_july.webp"
import sofa_june_web from "../assets/images/sofa_june_web.webp"

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const banners = [
    {
      id: 1,
      image: bed_june_web,
      title: "Summer Collection",
      description: "Up to 50% off on all summer items",
      buttonText: "Shop Now"
    },
    {
      id: 2,
      image: Price_drop,
      title: "New Arrivals",
      description: "Check out our latest furniture collection",
      buttonText: "Discover More"
    },
    {
      id: 3,
      image: sofa_june_web,
      title: "Special Offer",
      description: "Free delivery on orders above $500",
      buttonText: "Learn More"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Navigation functions
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-h-[21rem] overflow-hidden rounded-xl">
      <div
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="w-full h-full flex-shrink-0 relative group" // Added `group` here
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-contain"
            />
            {/* Content Overlay (Initially Hidden) */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-8 
      opacity-0 group-hover:opacity-100 transition-opacity duration-300">

              <h2 className="text-4xl font-bold mb-4">{banner.title}</h2>
              <p className="text-xl mb-6">{banner.description}</p>

              <button className="bg-white text-black px-6 py-2 rounded-full 
        hover:bg-black hover:text-white transition-colors duration-300">
                {banner.buttonText}
              </button>

            </div>
          </div>
        ))}

      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 md:p-2 rounded-full bg-white/80 
          hover:bg-white transition-colors duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 md:p-2 rounded-full bg-white/80 
          hover:bg-white transition-colors duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 
              ${currentIndex === index ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;