import React, { useState } from "react";
import { Send, Mail, Phone, MapPin, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-container">
      <div className="mb-16">
        <h2 className="section-title">
          Contacto <span className="text-accent">Directo</span>
        </h2>
        <p className="text-secondary text-center max-w-2xl mx-auto">
          ¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Formulario */}
        <div className="card">
          <h3 className="text-2xl font-bold mb-8">Enviar Mensaje</h3>

          {isSubmitted ? (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h4 className="text-2xl font-bold mb-2">¡Mensaje Enviado!</h4>
              <p className="text-secondary">Te responderé en breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  className="block text-secondary mb-2 text-sm font-medium"
                  htmlFor="name"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface border border-gray-800 rounded-lg text-primary placeholder-gray-600 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div>
                <label
                  className="block text-secondary mb-2 text-sm font-medium"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface border border-gray-800 rounded-lg text-primary placeholder-gray-600 focus:outline-none focus:border-accent transition-colors"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div>
                <label
                  className="block text-secondary mb-2 text-sm font-medium"
                  htmlFor="message"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-surface border border-gray-800 rounded-lg text-primary placeholder-gray-600 focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-white py-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-accent-dark transition-colors"
              >
                <Send className="w-5 h-5" /> Enviar Mensaje
              </button>
            </form>
          )}
        </div>

        {/* Información de contacto */}
        <div>
          <div className="card mb-8">
            <h3 className="text-2xl font-bold mb-8">Información</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-secondary text-sm">Email</p>
                  <p className="text-primary font-medium">
                    contacto@portfolio.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-secondary text-sm">Teléfono</p>
                  <p className="text-primary font-medium">+34 123 456 789</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-secondary text-sm">Ubicación</p>
                  <p className="text-primary font-medium">
                    Disponible para remoto
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Disponibilidad */}
          <div className="p-6 bg-accent/5 border border-accent/20 rounded-xl">
            <h4 className="text-lg font-bold mb-4">Disponibilidad</h4>
            <p className="text-secondary mb-4">
              Actualmente disponible para proyectos freelance y oportunidades a
              tiempo completo.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-secondary">
                Disponible para nuevos proyectos
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
