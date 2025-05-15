
import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="o-mne" className="container">
      <h2 className="section-title reveal">O mně</h2>
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        <div className="w-full md:w-2/5 reveal">
          <div className="rounded-16 overflow-hidden aspect-[3/4] bg-gray-200">
            <img
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Marek Studnička - osobní trenér"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-3/5 reveal">
          <h3 className="mb-4 text-2xl font-semibold">Marek Studnička</h3>
          <p className="mb-4">
            Již 8 let pomáhám klientům dosahovat jejich fitness cílů a měnit jejich životy k lepšímu. Moje cesta začala vlastní transformací, kdy jsem sám zhubnul 15 kg a objevil sílu správného tréninku a výživy.
          </p>
          <p className="mb-4">
            Věřím, že každý člověk má potenciál dosáhnout své nejlepší fyzické i mentální kondice - a mým posláním je ti s tím pomoci.
          </p>
          <div className="mt-6">
            <h4 className="text-lg font-medium mb-2">Certifikace:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Certifikovaný osobní trenér (FISAF)</li>
              <li>Specialista na výživu a suplementaci</li>
              <li>TRX Master Trainer</li>
              <li>Functional Training Expert</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
