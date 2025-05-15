
import React, { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TransformationsSection from "@/components/TransformationsSection";
import BlogSection from "@/components/BlogSection";
import CalculatorsSection from "@/components/CalculatorsSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index: React.FC = () => {
  // Set document title
  useEffect(() => {
    document.title = "Marek Studnička - Osobní trenér & Online Coaching";
    
    // Add meta description for SEO
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = "Osobní trenér Praha - individuální tréninky, online coaching a výživové plány. Změňte své tělo i mysl s profesionálním vedením.";
    document.head.appendChild(metaDescription);
    
    // Add open graph tags
    const ogTitle = document.createElement("meta");
    ogTitle.setAttribute("property", "og:title");
    ogTitle.content = "Marek Studnička - Osobní trenér & Online Coaching";
    document.head.appendChild(ogTitle);
    
    const ogDescription = document.createElement("meta");
    ogDescription.setAttribute("property", "og:description");
    ogDescription.content = "Osobní trenér Praha - individuální tréninky, online coaching a výživové plány.";
    document.head.appendChild(ogDescription);
    
    const ogImage = document.createElement("meta");
    ogImage.setAttribute("property", "og:image");
    ogImage.content = "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=630&q=80";
    document.head.appendChild(ogImage);
    
    // Set up scroll animations
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, { 
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px" 
    });

    document.querySelectorAll(".reveal").forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      document.head.removeChild(metaDescription);
      document.head.removeChild(ogTitle);
      document.head.removeChild(ogDescription);
      document.head.removeChild(ogImage);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navigation */}
      <header className="fixed w-full top-0 z-40 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <a href="#" className="font-bold text-xl">Marek Studnička</a>
          
          <nav className="hidden md:flex space-x-6">
            <a href="#o-mne" className="hover:text-marek-cta transition-colors">O mně</a>
            <a href="#sluzby" className="hover:text-marek-cta transition-colors">Služby</a>
            <a href="#promeny" className="hover:text-marek-cta transition-colors">Proměny</a>
            <a href="#blog" className="hover:text-marek-cta transition-colors">Blog</a>
            <a href="#kontakt" className="hover:text-marek-cta transition-colors">Kontakt</a>
          </nav>
          
          <a href="#rezervace" className="hidden md:inline-block btn-primary text-sm">
            Rezervovat trénink
          </a>
        </div>
      </header>

      <main className="flex-grow pt-16">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TransformationsSection />
        <BlogSection />
        <CalculatorsSection />
        <ContactSection />
      </main>

      <footer className="bg-gray-900 text-white py-10">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <p className="font-semibold text-xl mb-1">Marek Studnička</p>
              <p className="text-gray-400">Osobní trenér & Online kouč</p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><a href="#o-mne" className="text-gray-400 hover:text-white">O mně</a></li>
                <li><a href="#sluzby" className="text-gray-400 hover:text-white">Služby</a></li>
                <li><a href="#blog" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#kontakt" className="text-gray-400 hover:text-white">Kontakt</a></li>
              </ul>
            </div>
          </div>
          
          <hr className="border-gray-700 my-6" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Marek Studnička. Všechna práva vyhrazena.
            </p>
            
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-4 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white">Ochrana osobních údajů</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Obchodní podmínky</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default Index;
