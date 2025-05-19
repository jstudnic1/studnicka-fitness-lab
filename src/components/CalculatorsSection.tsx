import React from "react";
import BMICalculator from "./BMICalculator";
import MacroCalculator from "./MacroCalculator";

const CalculatorsSection: React.FC = () => {
  return (
    <section id="kalkulacky" className="bg-gray-50 py-12 md:py-16 lg:py-20">
      <div className="container">
        <h2 className="section-title reveal text-center mb-10 md:mb-12">Interaktivní kalkulačky</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 max-w-5xl mx-auto">
          <div className="reveal w-full max-w-sm mx-auto" id="bmi">
            <BMICalculator />
          </div>
          <div className="reveal w-full max-w-sm mx-auto" id="makra">
            <MacroCalculator />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorsSection;
