import React from "react";
import { Menu, X } from "lucide-react";
import { Helmet } from 'react-helmet-async';
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TransformationsSection from "@/components/TransformationsSection";
import BlogSection from "@/components/BlogSection";
import CalculatorsSection from "@/components/CalculatorsSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";

import { Link } from "react-router-dom";

const Index: React.FC = () => {
  // The useEffect for scroll animations is kept, only meta tag logic is removed.
  React.useEffect(() => {
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
    };
  }, []);

  const siteUrl = "https://www.trenermb.cz/";
  const ogImageUrl = `${siteUrl}/images/blog/BRP_img.jpeg`; // Example, ensure this path is correct

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <Helmet>
        <title>Marek Studnička – Osobní trenér Mladá Boleslav | Fitness & Online Coaching</title>
        <meta name="description" content="Osobní trenér v Mladé Boleslavi. Individuální tréninky, fitness plány a online coaching. Pomohu vám dosáhnout vašich cílů přímo v Mladé Boleslavi." />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Marek Studnička – Osobní trenér Mladá Boleslav | Fitness & Online Coaching" />
        <meta property="og:description" content="Osobní trenér v Mladé Boleslavi. Individuální tréninky, fitness plány a online coaching. Pomohu vám dosáhnout vašich cílů přímo v Mladé Boleslavi." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:alt" content="Marek Studnička - Fitness Coach" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Marek Studnička – Osobní trenér Mladá Boleslav | Fitness & Online Coaching" />
        <meta name="twitter:description" content="Osobní trenér v Mladé Boleslavi. Individuální tréninky, fitness plány a online coaching. Pomohu vám dosáhnout vašich cílů přímo v Mladé Boleslavi." />
        <meta name="twitter:image" content={ogImageUrl} />

        {/* Strukturovaná data LocalBusiness */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Marek Studnička",
              "description": "Osobní trenér v Mladé Boleslavi. Individuální tréninky, fitness plány a online coaching.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mladá Boleslav",
                "addressCountry": "CZ"
              },
              "url": "https://www.trenermb.cz/",
              "areaServed": "Mladá Boleslav"
            }
          `}
        </script>
      </Helmet>
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

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-gray-700"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b shadow-lg py-4 flex flex-col items-center space-y-4 animate-fade-in-down">
              <a href="#o-mne" className="text-lg font-medium hover:text-marek-cta" onClick={() => setIsMobileMenuOpen(false)}>O mně</a>
              <a href="#sluzby" className="text-lg font-medium hover:text-marek-cta" onClick={() => setIsMobileMenuOpen(false)}>Služby</a>
              <a href="#promeny" className="text-lg font-medium hover:text-marek-cta" onClick={() => setIsMobileMenuOpen(false)}>Proměny</a>
              <a href="#blog" className="text-lg font-medium hover:text-marek-cta" onClick={() => setIsMobileMenuOpen(false)}>Blog</a>
              <a href="#kontakt" className="text-lg font-medium hover:text-marek-cta" onClick={() => setIsMobileMenuOpen(false)}>Kontakt</a>
            </div>
          )}
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
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              <div className="mb-4 md:mb-0">
                <p className="font-semibold text-xl mb-1">Marek Studnička</p>
                <p className="text-gray-400">Osobní trenér & Online kouč</p>
              </div>

              <div className="mt-4 md:mt-0">
                <ul className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-6">
                  <li><a href="#o-mne" className="text-gray-400 hover:text-white">O mně</a></li>
                  <li><a href="#sluzby" className="text-gray-400 hover:text-white">Služby</a></li>
                  <li><a href="#blog" className="text-gray-400 hover:text-white">Blog</a></li>
                  <li><a href="#kontakt" className="text-gray-400 hover:text-white">Kontakt</a></li>
                </ul>
              </div>
            </div>

            <hr className="border-gray-700 my-6" />

            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              <p className="text-gray-400 text-sm mb-2 md:mb-0">
                © {new Date().getFullYear()} Marek Studnička. Všechna práva vyhrazena.
              </p>

              <div className="mt-4 md:mt-0">
                <ul className="flex flex-wrap justify-center md:justify-start space-x-4 text-sm">
                  <li><Link to="/ochrana-osobnich-udaju" className="text-gray-400 hover:text-white">Ochrana osobních údajů</Link></li>
                  <li><Link to="/obchodni-podminky" className="text-gray-400 hover:text-white">Obchodní podmínky</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
