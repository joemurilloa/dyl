import React from 'react';

const BeforeAfter = () => {
  // Función local para crear placeholders SVG
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

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Antes y Después</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105 animate-on-scroll" style={{animation: 'slideInLeft 0.6s ease forwards'}}>
              <div className="relative">
                <img 
                  src="/src/assets/images/antes-despues-1.jpg" 
                  alt="Antes y después blanqueamiento" 
                  className="w-full" 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = createPlaceholder('Blanqueamiento');
                  }}
                />
                <div className="absolute top-4 left-4 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded">
                  Blanqueamiento
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700">Tratamiento de blanqueamiento en solo 2 sesiones.</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105 animate-on-scroll" style={{animation: 'fadeInUp 0.8s ease forwards', animationDelay: '0.2s'}}>
              <div className="relative">
                <img 
                  src="/src/assets/images/antes-despues-2.jpg" 
                  alt="Antes y después ortodoncia" 
                  className="w-full" 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = createPlaceholder('Ortodoncia');
                  }}
                />
                <div className="absolute top-4 left-4 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded">
                  Ortodoncia
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700">Corrección dental completa en 18 meses.</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105 animate-on-scroll" style={{animation: 'slideInRight 0.6s ease forwards', animationDelay: '0.4s'}}>
              <div className="relative">
                <img 
                  src="/src/assets/images/antes-despues-3.jpg" 
                  alt="Antes y después implantes" 
                  className="w-full" 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = createPlaceholder('Implantes');
                  }}
                />
                <div className="absolute top-4 left-4 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded">
                  Implantes
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700">Restauración completa con implantes dentales.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;