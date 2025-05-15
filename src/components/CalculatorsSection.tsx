
import React from "react";

const CalculatorsSection: React.FC = () => {
  return (
    <section id="kalkulacky" className="container bg-gray-50 -mx-4 px-4 md:-mx-6 md:px-6">
      <h2 className="section-title reveal">Interaktivní kalkulačky</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card h-full reveal" id="bmi">
          <h3 className="text-xl font-semibold mb-4 text-center">BMI kalkulačka</h3>
          <div className="aspect-video w-full bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">CDC BMI Widget (iframe)</p>
          </div>
          <div className="mt-4 text-center">
            <a href="#" className="btn-primary">
              Spočítej si BMI
            </a>
          </div>
        </div>
        
        <div className="card h-full reveal" id="makra">
          <h3 className="text-xl font-semibold mb-4 text-center">Makro kalkulačka</h3>
          <div className="aspect-video w-full bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">InchCalculator Widget (iframe)</p>
          </div>
          <div className="mt-4 text-center">
            <a href="#" className="btn-primary">
              Zjistit makra
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorsSection;
