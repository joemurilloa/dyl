import React from 'react';

const ImagePlaceholder = ({ alt, className }) => {
  return (
    <div className={`${className || ''} bg-gray-200 flex items-center justify-center`}>
      <div className="p-4 text-gray-500 text-center">{alt}</div>
    </div>
  );
};

export default ImagePlaceholder;