import React from "react";
import { Link } from "react-router-dom";
import { Umbrella } from "lucide-react";

const Header = () => {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <Link to="/" className="flex items-center space-x-2">
            <Umbrella className="h-8 w-8 text-yellow-500" />
            <div>
              <div className="text-lg font-bold text-gray-800">
                노란우산 투자조합
              </div>
              <div className="text-xs text-gray-500">
                Yellow Parasol Investment Partnership
              </div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <a
              href="#hero"
              onClick={(e) => scrollToSection(e, "hero")}
              className="text-gray-600 hover:text-yellow-500"
            >
              소개
            </a>
            <a
              href="#investment"
              onClick={(e) => scrollToSection(e, "investment")}
              className="text-gray-600 hover:text-yellow-500"
            >
              투자구조
            </a>
            <a
              href="#benefits"
              onClick={(e) => scrollToSection(e, "benefits")}
              className="text-gray-600 hover:text-yellow-500"
            >
              혜택
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="text-gray-600 hover:text-yellow-500 ml-4 px-3 py-1.5 border rounded-md"
            >
              문의하기
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
