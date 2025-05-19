import React, { useEffect } from "react";

const HeroSection: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      revealElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute min-w-full min-h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero content */}
      <div className="container relative z-10 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="reveal font-bold mb-6">
            Změň své tělo i mysl
          </h1>
          <p className="reveal text-xl mb-8 delay-200 max-w-xl mx-auto">
            Pomohu vám dosáhnout vašich fitness cílů – individuálně, efektivně a s osobním přístupem přímo v Mladé Boleslavi.
          </p>
          <a
            href="#rezervace"
            className="reveal btn-primary text-lg animate-scale-up delay-300"
          >
            Rezervovat trénink
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
