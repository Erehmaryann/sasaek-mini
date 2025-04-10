import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import AppIcon from "@/assets/svgs/app-icon.svg";
import AppScreen from "@/assets/others/app-screen.webp";

import "@/styles/app-preview.css";

function AppPreview() {
  const { t } = useTranslation();

  return (
    <motion.section
      className="app-preview-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="app-preview-container">
        <motion.div
          className="app-preview-content"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="app-preview-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="app-icon"
              initial={{ rotate: -10, scale: 0.9 }}
              whileInView={{ rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                rotate: 10,
                transition: { duration: 0.3 },
              }}
            >
              <img src={AppIcon} alt="App Icon" />
            </motion.div>
            <motion.h2
              className="gowun-batang-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t("app.title")}
            </motion.h2>
          </motion.div>

          <motion.p
            className="app-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t("app.description1")}
            <br />
            {t("app.description2")}
          </motion.p>

          <motion.p
            className="app-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t("app.description3")}
          </motion.p>

          <motion.div
            className="app-release"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="gowun-batang-bold">{t("app.release")}</p>
          </motion.div>

          <motion.button
            className="app-download-button"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            {t("app.download")}
            <span style={{ marginLeft: "10px" }}>
              <motion.svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ y: 0 }}
                whileHover={{ y: 3 }}
                transition={{
                  duration: 0.3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  repeatDelay: 0.2,
                }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9 0.5C9.55229 0.5 10 0.947715 10 1.5V11.0858L13.2929 7.79289C13.6834 7.40237 14.3166 7.40237 14.7071 7.79289C15.0976 8.18342 15.0976 8.81658 14.7071 9.20711L9.70711 14.2071C9.31658 14.5976 8.68342 14.5976 8.29289 14.2071L3.29289 9.20711C2.90237 8.81658 2.90237 8.18342 3.29289 7.79289C3.68342 7.40237 4.31658 7.40237 4.70711 7.79289L8 11.0858V1.5C8 0.947715 8.44772 0.5 9 0.5ZM1 13.5C1.55228 13.5 2 13.9477 2 14.5V16.5C2 16.7652 2.10536 17.0196 2.29289 17.2071C2.48043 17.3946 2.73478 17.5 3 17.5H15C15.2652 17.5 15.5196 17.3946 15.7071 17.2071C15.8946 17.0196 16 16.7652 16 16.5V14.5C16 13.9477 16.4477 13.5 17 13.5C17.5523 13.5 18 13.9477 18 14.5V16.5C18 17.2957 17.6839 18.0587 17.1213 18.6213C16.5587 19.1839 15.7957 19.5 15 19.5H3C2.20435 19.5 1.44129 19.1839 0.87868 18.6213C0.31607 18.0587 0 17.2957 0 16.5V14.5C0 13.9477 0.447715 13.5 1 13.5Z"
                  fill="#111111"
                />
              </motion.svg>
            </span>
          </motion.button>
        </motion.div>

        <motion.div
          className="app-preview-image"
          initial={{ opacity: 0, x: 30, y: 20 }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            type: "spring",
            stiffness: 50,
          }}
        >
          <motion.img
            src={AppScreen}
            alt="App Screen"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default AppPreview;
