import React, { useState } from 'react';
import { Slider, Switch, Checkbox, Card, CardHeader, CardContent, FilterSection } from "../ui/FilterComponents"


const StayFilter = () => {
  const [priceRange, setPriceRange] = useState([50, 500]);
  const [expandedSections, setExpandedSections] = useState({
    stars: true,
    amenities: true,
    bedType: true
  });
  const [filters, setFilters] = useState({
    freeCancellation: false,
    stars: [],
    amenities: [],
    bedType: [],
    parking: false,
    restaurant: false,
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleFilter = (category, value) => {
    setFilters(prev => {
      if (category === 'stars' || category === 'amenities' || category === 'bedType') {
        return {
          ...prev,
          [category]: prev[category].includes(value)
            ? prev[category].filter(item => item !== value)
            : [...prev[category], value]
        };
      }
      return { ...prev, [category]: !prev[category] };
    });
  };

  const clearFilters = () => {
    setFilters({
      freeCancellation: false,
      stars: [],
      amenities: [],
      bedType: [],
      parking: false,
      restaurant: false,
    });
    setPriceRange([50, 500]);
  };

  return (
    <Card className="w-72">
      <CardHeader>
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Filters</h2>
          <button
            onClick={clearFilters}
            className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
          >
            Clear all
          </button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Price Range */}
        <div>
          <h3 className="text-sm font-medium mb-3">Price Range</h3>
          <Slider
            min={10}
            max={1000}
            value={priceRange}
            onValueChange={setPriceRange}
            step={10}
          />
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>

        {/* Quick Toggles */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label htmlFor="free-cancellation" className="text-sm font-medium">
              Free Cancellation
            </label>
            <Switch
              id="free-cancellation"
              checked={filters.freeCancellation}
              onCheckedChange={() => toggleFilter('freeCancellation')}
            />
          </div>
        </div>

        {/* Star Rating */}
        <FilterSection
          title="Star Rating"
          expanded={expandedSections.stars}
          onToggle={() => toggleSection('stars')}
        >
          <div className="grid grid-cols-5 gap-2">
            {[5, 4, 3, 2, 1].map(star => (
              <button
                key={star}
                onClick={() => toggleFilter('stars', star)}
                className={`p-2 rounded text-center ${
                  filters.stars.includes(star)
                    ? 'bg-blue-100 text-primary'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                {star}★
              </button>
            ))}
          </div>
        </FilterSection>

        {/* Amenities */}
        <FilterSection
          title="Amenities"
          expanded={expandedSections.amenities}
          onToggle={() => toggleSection('amenities')}
        >
          <div className="grid grid-cols-2 gap-2">
            {["WiFi", "Pool", "Gym", "Spa", "Parking", "Restaurant"].map(amenity => (
              <div key={amenity} className="flex items-center space-x-2">
                <Checkbox
                  id={`amenity-${amenity}`}
                  checked={filters.amenities.includes(amenity)}
                  onCheckedChange={() => toggleFilter('amenities', amenity)}
                />
                <label
                  htmlFor={`amenity-${amenity}`}
                  className="text-sm text-gray-700"
                >
                  {amenity}
                </label>
              </div>
            ))}
          </div>
        </FilterSection>

        {/* Bed Type */}
        <FilterSection
          title="Bed Type"
          expanded={expandedSections.bedType}
          onToggle={() => toggleSection('bedType')}
        >
          <div className="space-y-2">
            {["Single", "Double", "Queen", "King"].map(bed => (
              <div key={bed} className="flex items-center space-x-2">
                <Checkbox
                  id={`bed-${bed}`}
                  checked={filters.bedType.includes(bed)}
                  onCheckedChange={() => toggleFilter('bedType', bed)}
                />
                <label
                  htmlFor={`bed-${bed}`}
                  className="text-sm text-gray-700"
                >
                  {bed}
                </label>
              </div>
            ))}
          </div>
        </FilterSection>
      </CardContent>
    </Card>
  );
};

export default StayFilter;