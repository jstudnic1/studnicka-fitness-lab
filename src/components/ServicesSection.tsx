import React from "react";
import { Dumbbell, Laptop, Apple } from "lucide-react";

const ServiceCard: React.FC<{
  title: string;
  price: string;
  description: string;
  icon: React.ReactNode;
}> = ({ title, price, description, icon }) => {
  return (
    <div className="card reveal flex flex-col h-full">
      <div className="flex justify-center mb-5">
        <div className="w-16 h-16 bg-marek-blue/10 rounded-full flex items-center justify-center text-marek-blue shrink-0">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      <p className="text-2xl font-bold text-marek-cta text-center mb-4">{price}</p>
      <p className="text-center text-gray-600 mb-6 flex-grow">{description}</p>
      <div className="mt-auto text-center">
        <a href="#rezervace" className="btn-primary">
          Rezervovat
        </a>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <section id="sluzby" className="bg-gray-50 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title reveal text-center mb-10 md:mb-12">Moje služby</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <ServiceCard
            title="Individuální trénink"
            price="700 Kč / 60 min"
            description="Osobní trénink přizpůsobený tvým potřebám a cílům. Zaměřený na výsledky a efektivní pokrok. Trénuji v Mladé Boleslavi."
            icon={<Dumbbell size={32} />}
          />
          <ServiceCard
            title="Online coaching"
            price="2 900 Kč / měsíc"
            description="Kompletní plán tréninků, stravování a podpora na denní bázi, ať jsi kdekoliv. Osobní konzultace možné v Mladé Boleslavi."
            icon={<Laptop size={32} />}
          />
          <ServiceCard
            title="Výživový plán"
            price="1 500 Kč"
            description="Personalizovaný jídelníček sestavený na míru tvým cílům, preferencím a životnímu stylu. Konzultace v Mladé Boleslavi nebo online."
            icon={<Apple size={32} />}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
