import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <p className="font-semibold text-xl mb-1">Marek Studnička</p>
            <p className="text-gray-400">Osobní trenér & Online kouč</p>
          </div>

          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-6">
              <li>
                <a href="#o-mne" className="text-gray-400 hover:text-white">
                  O mně
                </a>
              </li>
              <li>
                <a href="#sluzby" className="text-gray-400 hover:text-white">
                  Služby
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-gray-400 hover:text-white">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-400 text-sm mb-2 md:mb-0">
            © {currentYear} Marek Studnička. Všechna práva vyhrazena.
          </p>

          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center md:justify-start space-x-4 text-sm">
              <li>
                <Link
                  to="/ochrana-osobnich-udaju"
                  className="text-gray-400 hover:text-white"
                >
                  Ochrana osobních údajů
                </Link>
              </li>
              <li>
                <Link
                  to="/obchodni-podminky"
                  className="text-gray-400 hover:text-white"
                >
                  Obchodní podmínky
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
