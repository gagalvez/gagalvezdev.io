import React, { useState } from "react";
import { Mail, Phone, MapPin, Copy, Check } from "lucide-react";

const Contact = () => {
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="section-container">
      <div className="mb-16">
        <h2 className="section-title">
          Información de <span className="text-accent">Contacto</span>
        </h2>
        <p className="text-secondary text-center max-w-2xl mx-auto">
          ¿Quieres contactarme? Aquí está mi información.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="card">
          <h3 className="text-2xl font-bold mb-8">Información</h3>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <p className="text-secondary text-sm">Email</p>
                <p className="text-primary font-medium">
                  ga.galvez.v@gmail.com
                </p>
              </div>
              <button
                onClick={() => copyToClipboard("ga.galvez.v@gmail.com", "email")}
                className="p-2.5 rounded-lg bg-accent/10 border border-accent/20 hover:bg-accent/20 hover:border-accent transition-all duration-300 group"
                aria-label="Copiar email"
              >
                {copiedField === "email" ? (
                  <Check className="w-4 h-4 text-accent" />
                ) : (
                  <Copy className="w-4 h-4 text-accent/70 group-hover:text-accent" />
                )}
              </button>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <p className="text-secondary text-sm">Teléfono</p>
                <p className="text-primary font-medium">+569 8391166</p>
              </div>
              <button
                onClick={() => copyToClipboard("+569 8391166", "phone")}
                className="p-2.5 rounded-lg bg-accent/10 border border-accent/20 hover:bg-accent/20 hover:border-accent transition-all duration-300 group"
                aria-label="Copiar teléfono"
              >
                {copiedField === "phone" ? (
                  <Check className="w-4 h-4 text-accent" />
                ) : (
                  <Copy className="w-4 h-4 text-accent/70 group-hover:text-accent" />
                )}
              </button>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <p className="text-secondary text-sm">Ubicación</p>
                <p className="text-primary font-medium">
                  Disponible para remoto, hibrido o presencial en Santiago, Chile
                </p>
              </div>
              <button
                onClick={() => copyToClipboard("Santiago, Chile", "location")}
                className="p-2.5 rounded-lg bg-accent/10 border border-accent/20 hover:bg-accent/20 hover:border-accent transition-all duration-300 group"
                aria-label="Copiar ubicación"
              >
                {copiedField === "location" ? (
                  <Check className="w-4 h-4 text-accent" />
                ) : (
                  <Copy className="w-4 h-4 text-accent/70 group-hover:text-accent" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
