import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import OpenBook from "@/assets/others/open-book.webp";
import "@/styles/introduction.css";

function Introduction() {
  const { t } = useTranslation();
  return (
    <motion.section
      className="introduction-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="introduction-container">
        <motion.h2
          className="introduction-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t(`introduction.title`)}
        </motion.h2>

        <div className="introduction-content">
          <motion.h3
            className="introduction-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t(`introduction.subtitle`)}
            {""}
            <motion.span
              className="book-image-container"
              initial={{ rotate: -10, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
            >
              <motion.img
                src={OpenBook}
                alt="Open book"
                className="book-image"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
            </motion.span>
          </motion.h3>

          <motion.h2
            className="introduction-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {t(`introduction.name`)}
          </motion.h2>

          <motion.p
            className="introduction-description"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {t(`introduction.description`)}
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}

export default Introduction;
