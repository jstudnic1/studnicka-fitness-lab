import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

const PromoModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if modal was already closed in this session
    const hasSeenModal = sessionStorage.getItem("christmas_popup_shown");

    if (!hasSeenModal) {
      // Show modal after 2 seconds delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    sessionStorage.setItem("christmas_popup_shown", "true");
  };

  const handleCtaClick = () => {
    closeModal();
    const contactSection = document.getElementById("kontakt");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden animate-scale-up">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Zavřít"
        >
          <X size={20} className="text-gray-600" />
        </button>

        {/* Content */}
        <div className="flex flex-col">
          {/* Image */}
          <div className="relative h-56 sm:h-64 w-full">
            <img
              src="/images/blog/christmas-voucher.jpg"
              alt="Vánoční dárkový certifikát"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <h3 className="text-white text-2xl font-bold">
                Darujte zdraví k Vánocům! 🎄
              </h3>
            </div>
          </div>

          {/* Text & CTA */}
          <div className="p-6 text-center">
            <p className="text-gray-600 mb-6">
              Nevíte, co pod stromeček? Darujte svým blízkým <strong>dárkový poukaz na osobní trénink</strong>. Cesta ke zdraví je ten nejlepší dárek.
            </p>

            <button
              onClick={handleCtaClick}
              className="btn-primary w-full py-3 text-lg"
            >
              Chci dárkový poukaz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoModal;
