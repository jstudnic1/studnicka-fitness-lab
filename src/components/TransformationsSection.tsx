
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
    id: 4,
    name: "Lukáš, 28 let",
    beforeImg: "/images/transformations/client1-before.png",
    afterImg: "/images/transformations/client1-after.png",
    quote: "Nikdy jsem nevěřil, že se dokážu takhle změnit. Díky Markovu vedení jsem získal nejen novou postavu, ale i sebevědomí."
  },
  {
    id: 5,
    name: "Martina, 34 let",
    beforeImg: "/images/transformations/client2-before.png",
    afterImg: "/images/transformations/client2-after.png",
    quote: "Cvičení mě začalo bavit a výsledky se dostavily rychleji, než jsem čekala. Cítím se silnější a plná energie."
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
