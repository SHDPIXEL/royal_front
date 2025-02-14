import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

//Slider Component

const Slider = ({ min, max, value, onValueChange, step = 1 }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [activeThumb, setActiveThumb] = useState(null);
    const sliderRef = React.useRef(null);
  
    const getPercentage = (value) => ((value - min) / (max - min)) * 100;
  
    const handleMouseDown = (e, index) => {
      setIsDragging(true);
      setActiveThumb(index);
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };
  
    const handleMouseMove = (e) => {
      if (!isDragging || !sliderRef.current) return;
  
      const rect = sliderRef.current.getBoundingClientRect();
      const percent = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
      const newValue = Math.round((percent * (max - min) + min) / step) * step;
  
      const newValues = [...value];
      if (activeThumb === 0) {
        newValues[0] = Math.min(newValue, value[1] - step);
      } else {
        newValues[1] = Math.max(newValue, value[0] + step);
      }
      onValueChange(newValues);
    };
  
    const handleMouseUp = () => {
      setIsDragging(false);
      setActiveThumb(null);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  
    return (
      <div
        ref={sliderRef}
        className="relative h-6 w-full"
      >
        <div className="absolute top-1/2 -translate-y-1/2 h-2 w-full bg-gray-200 rounded-full">
          <div
            className="absolute h-full bg-primary rounded-full"
            style={{
              left: `${getPercentage(value[0])}%`,
              right: `${100 - getPercentage(value[1])}%`
            }}
          />
        </div>
        {[0, 1].map((index) => (
          <div
            key={index}
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-primary rounded-full cursor-pointer hover:bg-blue-50"
            style={{
              left: `calc(${getPercentage(value[index])}% - 0.5rem)`
            }}
            onMouseDown={(e) => handleMouseDown(e, index)}
          />
        ))}
      </div>
    );
  };

  
  // Switch Component
  const Switch = ({ checked, onCheckedChange, id }) => (
    <button
      id={id}
      role="switch"
      aria-checked={checked}
      onClick={() => onCheckedChange(!checked)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-background-dark focus:ring-offset-2 ${
        checked ? 'bg-primary' : 'bg-gray-200'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          checked ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );
  

  // Checkbox Component
  const Checkbox = ({ id, checked, onCheckedChange }) => (
    <button
      id={id}
      role="checkbox"
      aria-checked={checked}
      onClick={() => onCheckedChange(!checked)}
      className={`h-4 w-4 rounded border transition-colors focus:outline-none focus:ring-2 focus:ring-background-dark focus:ring-offset-2 ${
        checked ? 'bg-primary border-background-dark' : 'bg-white border-gray-300'
      }`}
    >
      {checked && (
        <svg
          className="h-4 w-4 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      )}
    </button>
  );
  
  
  // Card Components
  const Card = ({ children, className = '' }) => (
    <div className={`bg-white rounded-lg border border-gray-200 shadow-lg ${className}`}>
      {children}
    </div>
  );
  
  const CardHeader = ({ children, className = '' }) => (
    <div className={`px-6 py-4 border-b border-gray-200 ${className}`}>
      {children}
    </div>
  );
  
  const CardContent = ({ children, className = '' }) => (
    <div className={`px-6 py-4 ${className}`}>
      {children}
    </div>
  );

    const FilterSection = ({ title, children, expanded, onToggle }) => (
      <div className="space-y-2">
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between text-sm font-medium hover:text-primary transition-colors"
        >
          {title}
          {expanded ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
        {expanded && (
          <div className="pt-2">
            {children}
          </div>
        )}
      </div>
    );

  export { Slider, Switch, Checkbox, Card, CardHeader, CardContent, FilterSection };