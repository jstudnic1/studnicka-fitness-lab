
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Transformation = {
  id: number;
  name: string;
  beforeImg: string;
  afterImg: string;
  quote: string;
};

const transformations: Transformation[] = [
  {
    id: 1,
    name: "Jan, 32 let",
    beforeImg: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    quote: "S Markem jsem za 4 měsíce shodil 14 kg a konečně se cítím skvěle. Jeho přístup mě motivoval vydržet i v těžkých chvílích."
  },
  {
    id: 2,
    name: "Karolína, 29 let",
    beforeImg: "https://images.unsplash.com/photo-1541577141970-eebc83ebe30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    quote: "Online coaching s Markem změnil můj pohled na fitness. Naučil mě, že zdravý životní styl může být zároveň příjemný."
  },
  {
    id: 3,
    name: "Petr, 45 let",
    beforeImg: "https://images.unsplash.com/photo-1563685753179-f1318b5484a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    quote: "Výživový plán byl přesně to, co jsem potřeboval. Nyní mám mnohem více energie a lepší výsledky v tréninku."
  }
];

const TransformationsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === transformations.length - 1 ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? transformations.length - 1 : prev - 1));
  };

  return (
    <section id="promeny" className="container">
      <h2 className="section-title reveal">Úspěšné proměny</h2>
      <div className="relative max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8 reveal">
          <div className="w-full md:w-1/2 space-y-2">
            <p className="text-sm text-gray-500 font-medium">PŘED</p>
            <div className="aspect-[4/5] rounded-16 overflow-hidden bg-gray-100">
              <img
                src={transformations[currentSlide].beforeImg}
                alt={`${transformations[currentSlide].name} před`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-2">
            <p className="text-sm text-gray-500 font-medium">PO</p>
            <div className="aspect-[4/5] rounded-16 overflow-hidden bg-gray-100">
              <img
                src={transformations[currentSlide].afterImg}
                alt={`${transformations[currentSlide].name} po`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto reveal">
          <blockquote className="text-xl italic mb-4">
            "{transformations[currentSlide].quote}"
          </blockquote>
          <p className="font-semibold">{transformations[currentSlide].name}</p>
        </div>

        <div className="flex justify-center mt-8 gap-4 reveal">
          <button
            onClick={goToPrevSlide}
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Předchozí"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goToNextSlide}
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Další"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TransformationsSection;
