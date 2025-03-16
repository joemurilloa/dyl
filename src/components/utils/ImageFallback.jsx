// src/components/utils/ImageFallback.jsx
import React from 'react';

const ImageFallback = ({ src, alt, className }) => {
  // Función que crea un SVG placeholder en caso de error
  const createPlaceholder = (text) => {
    // Configuración del SVG
    const width = 600;
    const height = 400;
    const bgColor = '#e2e8f0';
    const textColor = '#718096';
    
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

  return (
    <div className={`${className} overflow-hidden`}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.onerror = null;
          // Usar el placeholder local en vez de servicio externo
          e.target.src = createPlaceholder(alt);
        }} 
      />
    </div>
  );
};

export default ImageFallback;