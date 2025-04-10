import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

// Import necessary assets
import Signature from "@/assets/others/chairman-signature.webp";
import SkyBluePresidentImg from "@/assets/others/skyblue-chairman.webp";
import Chairman from "@/assets/others/chairman.webp";
import Partner1 from "@/assets/others/partner-1.webp";
import Partner2 from "@/assets/others/partner-2.webp";
import ChevronRight from "@/assets/svgs/chevron-right.svg";

import "@/styles/president-message.css";

// Team member images with their corresponding index in the translation file
const teamMemberImages = [Chairman, Partner1, Partner2];

function PresidentMessage() {
  const { t } = useTranslation();

  // Get team members from translation file
  const teamMembers = teamMemberImages.map((image, index) => {
    return {
      image,
      name: t(`team.members.${index}.name`),
      title: t(`team.members.${index}.title`),
      altText: t(`team.members.${index}.altText`),
    };
  });

  return (
    <motion.section
      className="president-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="president-container">
        {/* President's message and image section */}
        <div className="president-message">
          <motion.div
            className="message-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h2
              className="president-title gowun-batang-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {t(`president.title`)}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {t(`president.greeting`)}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {t(`president.message1`)} <br />
              {t(`president.message2`)}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {t(`president.closing`)}
            </motion.p>

            {/* Signature area */}
            <motion.div
              className="signature-container"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h6 className="signature-title gowun-batang-bold">{t(`president.signature`)}</h6>
              <motion.img
                src={Signature}
                alt={t("president.signatureAlt")}
                className="signature-image"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 1 }}
              />
            </motion.div>

            {/* Call-to-action button */}
            <motion.button
              className="more-info-button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 1.1 }}
              whileHover={{
                scale: 1.05,
                x: 5,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              {t(`president.button`)}
              <motion.img
                src={ChevronRight}
                alt="arrow"
                className="arrow-icon"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>
          </motion.div>

          <motion.div
            className="president-image-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.img
              src={SkyBluePresidentImg}
              alt={t("president.altText")}
              className="president-image"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>

        {/* Team members section */}
        <motion.div
          className="team-members"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              className="member-card"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="member-image-container"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={member.image} alt={member.altText} className="member-image" />
              </motion.div>
              <p className="member-name gowun-batang-bold">{member.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default PresidentMessage;
