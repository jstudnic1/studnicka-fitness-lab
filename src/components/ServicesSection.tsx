
import React from "react";
import { Dumbbell, Laptop, Apple } from "lucide-react";

const ServiceCard: React.FC<{
  title: string;
  price: string;
  description: string;
  icon: React.ReactNode;
}> = ({ title, price, description, icon }) => {
  return (
    <div className="card reveal">
      <div className="flex justify-center mb-5">
        <div className="w-16 h-16 bg-marek-blue/10 rounded-full flex items-center justify-center text-marek-blue">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      <p className="text-2xl font-bold text-marek-cta text-center mb-4">{price}</p>
      <p className="text-center text-gray-600">{description}</p>
      <div className="mt-6 text-center">
        <a href="#rezervace" className="btn-primary">
          Rezervovat
        </a>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <section id="sluzby" className="container bg-gray-50 -mx-4 px-4 md:-mx-6 md:px-6">
      <h2 className="section-title reveal">Moje služby</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard
          title="Individuální trénink"
          price="700 Kč / 60 min"
          description="Osobní trénink přizpůsobený tvým potřebám a cílům. Zaměřený na výsledky a efektivní pokrok."
          icon={<Dumbbell size={32} />}
        />
        <ServiceCard
          title="Online coaching"
          price="2 900 Kč / měsíc"
          description="Kompletní plán tréninků, stravování a podpora na denní bázi, ať jsi kdekoliv."
          icon={<Laptop size={32} />}
        />
        <ServiceCard
          title="Výživový plán"
          price="1 500 Kč"
          description="Personalizovaný jídelníček sestavený na míru tvým cílům, preferencím a životnímu stylu."
          icon={<Apple size={32} />}
        />
      </div>
    </section>
  );
};

export default ServicesSection;
