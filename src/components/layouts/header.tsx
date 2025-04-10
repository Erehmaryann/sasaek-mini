import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

// Import language context
import { useLanguage, languages } from "@/contexts/language-context";

// Import assets using absolute paths
import Logo from "@/assets/svgs/sasaek-logo.svg";
import ChevronDown from "@/assets/svgs/chevron-down.svg";

// Import global CSS for the header
import "@/styles/header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility
  const [isScrolled, setIsScrolled] = useState(false); // State to manage scroll position
  const [isLanguageOpen, setIsLanguageOpen] = useState(false); // State to manage language dropdown visibility

  const { t } = useTranslation(); // Hook for translations
  const { currentLanguage, changeLanguage } = useLanguage(); // Get language context

  // Get current language display name
  const getCurrentLanguageDisplay = () => {
    const lang = languages.find((lang) => lang.code === currentLanguage);
    return lang ? lang.code.toUpperCase() : "KOR";
  };

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle language dropdown
  const toggleLanguage = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  // Handle language change
  const handleLanguageChange = (languageCode: string): void => {
    changeLanguage(languageCode);
    setIsLanguageOpen(false);
  };

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isLanguageOpen && !target.closest(".language-selector")) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isLanguageOpen]);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      {/* Logo section with link to homepage */}
      <div className="logo">
        <Link to="/" className="logo-link">
          <img src={Logo} alt="Sasaek Home" />
        </Link>
      </div>

      {/* Navigation menu (collapsible on mobile) */}
      <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              {t("nav.intro")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/activities" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              {t("nav.app")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              {t("nav.activities")}
            </NavLink>
          </li>
          <li className="language-selector">
            <button className="language-button" onClick={toggleLanguage} aria-expanded={isLanguageOpen}>
              {getCurrentLanguageDisplay()}
              <img
                src={ChevronDown}
                alt={t("language")}
                className={`chevron ${isLanguageOpen ? "open" : ""}`}
              />
            </button>

            {/* Language dropdown with animation */}
            <AnimatePresence>
              {isLanguageOpen && (
                <motion.div
                  className="language-dropdown"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {languages.map((language) => (
                    <motion.button
                      key={language.code}
                      className={`language-option ${currentLanguage === language.code ? "active" : ""}`}
                      onClick={() => handleLanguageChange(language.code)}
                      whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
                    >
                      {language.name}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        </ul>
      </nav>

      {/* Mobile menu toggle button */}
      <button className="menu-toggle" onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
        <span className={`menu-icon ${isMenuOpen ? "open" : ""}`}></span>
      </button>
    </header>
  );
}

export default Header;
