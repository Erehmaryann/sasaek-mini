import type React from "react";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

// Import logo
import Logo from "@/assets/svgs/footer-logo.svg";

// Import CSS
import "@/styles/footer.css";

const Footer = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    // Here you would typically send the email to your newsletter service
    console.log("Subscribing email:", email);

    // Show success message
    setSubscribed(true);
    setEmail("");

    // Reset after 3 seconds
    setTimeout(() => {
      setSubscribed(false);
    }, 3000);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <motion.div
            className="footer-logo-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img src={Logo} alt={t("footer.logoAlt")} className="footer-logo" />
          </motion.div>

          <motion.div
            className="footer-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <a href="/privacy-policy" className="footer-link">
              {t("footer.termsOfService")} {""}
              {t("footer.privacyPolicy")}
            </a>

            <div className="footer-info-item">
              <span className="info-label">{t("footer.officeHours")}</span>
              <span className="info-value">{t("footer.officeHoursValue")}</span>
            </div>
          </motion.div>

          <motion.div
            className="footer-organization"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="org-name">
              <span className="contact-value">{t("footer.organisationName")}</span>
              <span className="contact-label">{t("footer.chairmanTitle")}</span> {""}
              <span className="contact-value">{t("footer.chairmanName")}</span> {""}
              <span className="contact-label">{t("footer.regNumberLabel")}</span> {""}
              <span className="contact-value">{t("footer.regNumber")}</span> {""}
            </div>
          </motion.div>

          <motion.div
            className="footer-contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="contact-item">
              <span className="contact-label">{t("footer.address")}</span>
              <span className="contact-value">{t("footer.addressValue")}</span>
              <span className="contact-label">{t("footer.telLabel")}</span>
              <span className="contact-value">{t("footer.tel")}</span>
              <span className="contact-label">{t("footer.faxLabel")}</span>
              <span className="contact-value">{t("footer.fax")}</span>
              <span className="contact-label">{t("footer.emailLabel")}</span>
              <span className="contact-value">{t("footer.email")}</span>
            </div>
          </motion.div>

          <motion.div
            className="footer-copyright"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Copyright © {new Date().getFullYear()} {t("footer.copyright")}
          </motion.div>
        </div>

        <div className="footer-right">
          <motion.div
            className="newsletter-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3
              className="newsletter-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t("footer.newsletter")}
            </motion.h3>

            <motion.p
              className="newsletter-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t("footer.newsletterDescription")}
            </motion.p>

            <motion.div
              className="newsletter-form-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="newsletter-form">
                  <div className="input-container">
                    <input
                      type="text"
                      className="newsletter-input"
                      placeholder={t("footer.emailPlaceholder")}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button type="submit" className="arrow-button">
                      <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.29289 0.292893C8.68342 -0.0976311 9.31658 -0.0976311 9.70711 0.292893L15.7071 6.29289C16.0976 6.68342 16.0976 7.31658 15.7071 7.70711L9.70711 13.7071C9.31658 14.0976 8.68342 14.0976 8.29289 13.7071C7.90237 13.3166 7.90237 12.6834 8.29289 12.2929L12.5858 8H1C0.447715 8 0 7.55228 0 7C0 6.44772 0.447715 6 1 6H12.5858L8.29289 1.70711C7.90237 1.31658 7.90237 0.683417 8.29289 0.292893Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="newsletter-success">{t("footer.subscribeSuccess")}</div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
