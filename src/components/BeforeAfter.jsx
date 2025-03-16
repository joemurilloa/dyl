import React from 'react';

const BeforeAfter = () => {
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
                    e.target.src = 'https://via.placeholder.com/400x300?text=Blanqueamiento';
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
                    e.target.src = 'https://via.placeholder.com/400x300?text=Ortodoncia';
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
                    e.target.src = 'https://via.placeholder.com/400x300?text=Implantes';
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