import React from 'react';

const ImagePlaceholder = ({ alt, className, width = 600, height = 400 }) => {
  // Función que crea un SVG placeholder 
  const createPlaceholder = (text) => {
    // Configuración del SVG
    const bgColor = '#f0f0f0';
    const textColor = '#666666';
    
    // Escape el texto para uso seguro en SVG
    const safeText = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    
    // Genera un SVG como data URL
    const svgContent = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
        <rect width="100%" height="100%" fill="${bgColor}" />
        <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24px" fill="${textColor}" 
              text-anchor="middle" dominant-baseline="middle">
          ${safeText}
        </text>
      </svg>
    `;
    
    // Convertir a base64
    const encodedSVG = encodeURIComponent(svgContent.trim());
    return `data:image/svg+xml;charset=UTF-8,${encodedSVG}`;
  };

  // Crear una imagen con el SVG como fuente
  return (
    <div className={`${className || ''} rounded-lg overflow-hidden`}>
      <img 
        src={createPlaceholder(alt)} 
        alt={alt} 
        width={width}
        height={height}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ImagePlaceholder;