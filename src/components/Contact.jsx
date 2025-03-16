import React, { useState, useRef } from 'react';

const Contact = () => {
  // Estados para manejar el formulario
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    servicio: '',
    mensaje: ''
  });
  
  // Estado para manejar las imágenes
  const [imagenes, setImagenes] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  
  // Referencia para el input de archivos
  const fileInputRef = useRef(null);
  
  // Manejar cambios en los inputs
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };
  
  // Manejar selección de archivos
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setImagenes([...imagenes, ...selectedFiles]);
    
    // Crear URLs para previsualizaciones
    const newPreviewUrls = selectedFiles.map(file => URL.createObjectURL(file));
    setPreviewUrls([...previewUrls, ...newPreviewUrls]);
  };
  
  // Eliminar una imagen
  const removeImage = (index) => {
    const newImagenes = [...imagenes];
    const newPreviewUrls = [...previewUrls];
    
    // Revocar URL para liberar memoria
    URL.revokeObjectURL(previewUrls[index]);
    
    newImagenes.splice(index, 1);
    newPreviewUrls.splice(index, 1);
    
    setImagenes(newImagenes);
    setPreviewUrls(newPreviewUrls);
  };
  
  // Abrir diálogo de selección de archivos
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };
  
  // Enviar formulario a WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validar campos obligatorios
    if (!formData.nombre || !formData.telefono || !formData.servicio) {
      alert('Por favor completa los campos obligatorios: Nombre, Teléfono y Servicio');
      return;
    }
    
    // Preparar mensaje para WhatsApp
    let message = `*NUEVA SOLICITUD DE CITA*\n\n`;
    message += `*Nombre:* ${formData.nombre}\n`;
    message += `*Teléfono:* ${formData.telefono}\n`;
    message += `*Email:* ${formData.email || 'No proporcionado'}\n`;
    message += `*Servicio:* ${formData.servicio}\n`;
    message += `*Mensaje:* ${formData.mensaje || 'No proporcionado'}\n`;
    
    if (imagenes.length > 0) {
      message += `\n*El paciente ha adjuntado ${imagenes.length} imagen(es) que se enviarán por separado.*`;
    }
    
    // Número de WhatsApp (con formato internacional)
    const phoneNumber = "50488789886";
    
    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Crear enlace de WhatsApp
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Abrir WhatsApp en una nueva ventana
    window.open(whatsappLink, '_blank');
    
    // Limpiar el formulario después de enviar
    setFormData({
      nombre: '',
      telefono: '',
      email: '',
      servicio: '',
      mensaje: ''
    });
    
    // Limpiar las imágenes
    previewUrls.forEach(url => URL.revokeObjectURL(url));
    setImagenes([]);
    setPreviewUrls([]);
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Contáctanos</h2>
            <p className="text-lg text-gray-600 mb-8">
              Estamos aquí para responder tus preguntas y ayudarte a programar tu cita. ¡Ponte en contacto con nosotros!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Dirección</h3>
                  <p className="text-gray-700">Universidad Unicah<br/>San Pedro Sula, Honduras</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Teléfono</h3>
                  <p className="text-gray-700">+504 8878-9886</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-700">dylcitas@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Horario</h3>
                  <p className="text-gray-700">
                    Lunes a Viernes: 8:00 AM - 6:00 PM<br/>
                    Sábado: 8:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div id="cita" className="bg-pink-50 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Agenda tu Cita</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre completo *</label>
                <input 
                  type="text" 
                  id="nombre" 
                  required
                  value={formData.nombre}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Tu nombre y apellido"
                />
              </div>
              
              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">Teléfono *</label>
                <input 
                  type="tel" 
                  id="telefono" 
                  required
                  value={formData.telefono}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Tu número de teléfono"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Tu correo electrónico"
                />
              </div>
              
              <div>
                <label htmlFor="servicio" className="block text-sm font-medium text-gray-700 mb-1">Servicio de interés *</label>
                <select 
                  id="servicio" 
                  required
                  value={formData.servicio}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="Limpieza dental">Limpieza dental</option>
                  <option value="Blanqueamiento">Blanqueamiento</option>
                  <option value="Endodoncia">Endodoncia</option>
                  <option value="Extracciones">Extracciones</option>
                  <option value="Odontopediatría">Odontopediatría</option>
                  <option value="Implantes dentales">Implantes dentales</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">Mensaje (opcional)</label>
                <textarea 
                  id="mensaje" 
                  rows="4"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Cuéntanos más sobre lo que necesitas"
                ></textarea>
              </div>
              
             
              
              {/* Botón mejorado con mayor visibilidad */}
              <div className="relative">
                <button 
                  type="submit" 
                  className="w-full bg-pink-600 text-white py-4 px-6 rounded-lg text-xl font-bold hover:bg-pink-700 transition-all shadow-xl border-2 border-pink-400"
                >
                  Solicitar Cita por WhatsApp
                </button>
                <div className="absolute top-0 -right-2 -mt-2 bg-yellow-400 text-xs text-black font-bold px-2 py-1 rounded-full animate-bounce">
                  ¡Nuevo!
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;