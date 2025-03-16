// src/components/utils/ImageFallback.jsx
import React from 'react';

const ImageFallback = ({ src, alt, className }) => {
  return (
    <div className={`${className} overflow-hidden`}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://placehold.co/600x400/e2e8f0/718096?text=${encodeURIComponent(alt)}`;
        }} 
      />
    </div>
  );
};

export default ImageFallback;