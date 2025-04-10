import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import type { ActivitiesSectionProps } from "@/types/home-types";

import "@/styles/activities.css";

function ActivitiesSection({ activities }: ActivitiesSectionProps) {
  const { t } = useTranslation();

  // Create a new array with translated content
  const translatedActivities = activities.map((activity) => ({
    ...activity,
    title: t(`activities.items.${activity.id}.title`),
    description: t(`activities.items.${activity.id}.description`),
    altText: t(`activities.items.${activity.id}.altText`),
  }));

  return (
    <motion.section
      className="activities-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="activities-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="gowun-batang-bold">
          <span className="title">{t("activities.title")}</span> <span className="dot">·</span>{" "}
          <span className="subtitle">{t("activities.subtitle")}</span>
        </h2>
      </motion.div>

      <div className="activities-grid">
        {translatedActivities.map((activity, index) => (
          <motion.div
            key={activity.id}
            className={`activity-item ${index % 2 === 0 ? "even" : "odd"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
          >
            {index % 2 === 0 ? (
              <>
                <motion.div className="activity-image" whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                  <img src={activity.image} alt={activity.altText || activity.title} />
                </motion.div>
                <motion.div
                  className="activity-content"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                >
                  <p className="activity-description">{activity.description}</p>
                  <h3 className="activity-title">{activity.title}</h3>
                </motion.div>
              </>
            ) : (
              <>
                <motion.div
                  className="activity-content"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                >
                  <p className="activity-description">{activity.description}</p>
                  <h3 className="activity-title">{activity.title}</h3>
                </motion.div>
                <motion.div className="activity-image" whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                  <img src={activity.image} alt={activity.altText || activity.title} />
                </motion.div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default ActivitiesSection;