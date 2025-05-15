
import React from "react";
import { Mail, Phone, Instagram, Facebook } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section id="kontakt" className="container">
      <h2 className="section-title reveal">Kontakt</h2>
      
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2 reveal">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">Marek Studnička</h3>
            <p className="text-gray-600 mb-6">Osobní trenér & Online kouč</p>
            
            <div className="space-y-3">
              <a href="tel:+420777888999" className="flex items-center text-lg hover:text-marek-cta">
                <Phone className="mr-3" size={20} />
                +420 777 888 999
              </a>
              <a href="mailto:info@marekstudnicka.cz" className="flex items-center text-lg hover:text-marek-cta">
                <Mail className="mr-3" size={20} />
                info@marekstudnicka.cz
              </a>
            </div>
            
            <div className="mt-6 flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-marek-cta text-white flex items-center justify-center hover:bg-primary-hover transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-marek-cta text-white flex items-center justify-center hover:bg-primary-hover transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
          
          <div id="rezervace" className="pt-4">
            <h3 className="text-xl font-semibold mb-4">Rezervační kalendář</h3>
            <div className="aspect-video w-full bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Calendly Embed (iframe)</p>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 reveal">
          <form className="card">
            <h3 className="text-xl font-semibold mb-4">Napiš mi</h3>
            
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Jméno
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-marek-cta/30"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-marek-cta/30"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="tel" className="block text-sm font-medium mb-1">
                Telefon
              </label>
              <input
                type="tel"
                id="tel"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-marek-cta/30"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Zpráva
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-marek-cta/30 min-h-[120px]"
                required
              ></textarea>
            </div>
            
            <div className="mb-4">
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" required />
                <span className="text-sm text-gray-600">
                  Odesláním souhlasím se zpracováním osobních údajů dle GDPR pro účely odpovědi na můj dotaz.
                </span>
              </label>
            </div>
            
            <button
              type="submit"
              className="btn-primary w-full"
            >
              Odeslat zprávu
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
