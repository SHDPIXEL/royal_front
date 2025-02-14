import { useState } from 'react';
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";

const StayCard = ({ images, name, city, price }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div 
      className="relative w-full max-w-[300px] rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl border border-gray-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Carousel */}
      <div className="relative w-full h-[200px] overflow-hidden group">
        <img
          src={images[currentImage]}
          alt={`${name} - Image ${currentImage + 1}`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        
        {/* Navigation Arrows - Only show when hovered */}
        {isHovered && images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-white/90 shadow-md hover:bg-white transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-4 h-4 text-gray-700" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-white/90 shadow-md hover:bg-white transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-4 h-4 text-gray-700" />
            </button>
          </>
        )}

        {/* Image Pagination Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  currentImage === index ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 bg-white">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
            <p className="text-gray-600 text-sm">{city}</p>
          </div>
          {/* Like Button */}
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <Heart 
              className={`w-5 h-5 transition-colors ${
                isLiked 
                  ? 'fill-orange-500 text-orange-500' 
                  : 'text-gray-600 hover:text-orange-500'
              }`} 
            />
          </button>
        </div>

        {/* Price */}
        <div className="mt-2">
          <p className="text-gray-900">
            <span className="font-semibold text-orange-600">₹{price}</span>
            <span className="text-sm text-gray-600"> / night</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StayCard;