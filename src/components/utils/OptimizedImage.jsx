// src/components/utils/OptimizedImage.jsx
import React from 'react';

const OptimizedImage = ({ src, alt, className, fallbackText }) => {
  // Función para manejar errores y usar placeholder
  const handleImageError = (e) => {
    e.target.onerror = null;
    
    // Crear un placeholder SVG en caso de error
    const createPlaceholder = (text, width = 400, height = 300) => {
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
    
    e.target.src = createPlaceholder(fallbackText || alt);
  };

  // Determinar la ruta correcta
  let imagePath = src;
  if (!src.startsWith('http') && !src.startsWith('data:') && !src.startsWith('/')) {
    // Para rutas relativas en src/assets, conviértelas a public
    if (src.startsWith('src/assets/')) {
      imagePath = `/${src.replace('src/assets/', '')}`;
    } else {
      imagePath = `/${src}`;
    }
  }

  return (
    <img 
      src={imagePath}
      alt={alt}
      className={className}
      onError={handleImageError}
    />
  );
};

export default OptimizedImage;