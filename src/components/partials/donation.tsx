import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "@/styles/donation.css";

function Donation() {
  const { t } = useTranslation();

  return (
    <motion.section
      className="donation-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="donation-container">
        <motion.h2
          className="gowun-batang-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {t("donation.title")}
        </motion.h2>

        <motion.div
          className="account-info"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="account-label gowun-batang-bold">{t("donation.account")}</p>
          <motion.p
            className="account-number gowun-batang-bold"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {t("donation.accountNumber")}
          </motion.p>
        </motion.div>

        <motion.div
          className="donation-buttons"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            className="donation-button"
            whileHover={{
              scale: 1.03,
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ x: -20 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span style={{ marginRight: "10px" }}>
              <motion.svg
                width="21"
                height="19"
                viewBox="0 0 21 19"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ scale: 1 }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                }}
                transition={{ duration: 0.3 }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.41135 3.01134C6.86226 2.95276 6.30699 3.00851 5.78051 3.17508C5.25402 3.34165 4.76773 3.61542 4.35225 3.97916C3.93677 4.3429 3.6011 4.78873 3.36638 5.28856C3.13167 5.7884 3.00299 6.33143 2.98845 6.88344C2.97391 7.43546 3.07382 7.9845 3.2819 8.496C3.48997 9.00751 3.8017 9.47039 4.19746 9.85549L4.20377 9.86164L11.0001 16.5927L12.0944 15.5088L10.7929 14.2073C10.4024 13.8168 10.4024 13.1836 10.7929 12.7931C11.1834 12.4026 11.8166 12.4026 12.2071 12.7931L13.5155 14.1015L14.6065 13.0209L13.2929 11.7073C12.9024 11.3168 12.9024 10.6836 13.2929 10.2931C13.6834 9.90255 14.3166 9.90255 14.7071 10.2931L16.0275 11.6135L17.1186 10.533L15.5429 8.95729C15.1337 8.5481 14.5787 8.31821 14 8.31821C13.4213 8.31821 12.8663 8.5481 12.4571 8.95729L11.4571 9.95729C10.3766 11.0378 8.62339 11.0378 7.54286 9.95729L6.99986 9.41429C6.62492 9.03923 6.41418 8.53051 6.41418 8.00018C6.41418 7.46985 6.62482 6.96124 6.99976 6.58618L9.61382 3.97212C9.41562 3.79954 9.20037 3.64646 8.97096 3.51542C8.49146 3.24154 7.96044 3.06991 7.41135 3.01134ZM11.6386 4.77582L8.41418 8.00018L8.95708 8.54308C9.25655 8.84255 9.74339 8.84255 10.0429 8.54308L11.0429 7.54308C11.8271 6.75881 12.8908 6.31821 14 6.31821C15.1091 6.31821 16.1728 6.75881 16.9571 7.54307L18.4475 9.03346C18.5464 8.86456 18.6331 8.68822 18.7066 8.50575C18.9123 7.99515 19.0104 7.44758 18.9948 6.89732C18.9791 6.34706 18.8501 5.80595 18.6157 5.30787C18.3813 4.80978 18.0466 4.36544 17.6326 4.00264C17.2185 3.63985 16.7341 3.36642 16.2095 3.19947C15.685 3.03251 15.1316 2.97563 14.5841 3.03237C14.0365 3.08911 13.5066 3.25827 13.0274 3.52924C12.5482 3.80021 12.1301 4.16717 11.7993 4.60715C11.752 4.6701 11.6979 4.72656 11.6386 4.77582ZM19.1347 11.351C19.1574 11.3324 19.1794 11.3126 19.2008 11.2916C19.7899 10.713 20.2532 10.019 20.5618 9.2531C20.8703 8.48719 21.0174 7.66584 20.994 6.84045C20.9705 6.01506 20.7769 5.2034 20.4253 4.45627C20.0737 3.70914 19.5717 3.04262 18.9507 2.49844C18.3296 1.95425 17.6029 1.5441 16.8161 1.29367C16.0293 1.04324 15.1992 0.957908 14.3779 1.04302C13.5566 1.12814 12.7617 1.38187 12.0429 1.78833C11.6702 1.9991 11.3221 2.24859 11.0042 2.53199C10.6859 2.24511 10.337 1.99239 9.96291 1.77875C9.24365 1.36793 8.44713 1.11048 7.6235 1.02262C6.79986 0.934759 5.96696 1.01839 5.17723 1.26824C4.3875 1.51809 3.65806 1.92874 3.03484 2.47435C2.41162 3.01996 1.90812 3.6887 1.55605 4.43846C1.20397 5.18822 1.01095 6.00276 0.989141 6.83078C0.96733 7.6588 1.1172 8.48237 1.42931 9.24962C1.74085 10.0155 2.20729 10.7086 2.79935 11.2856L10.2964 18.7107C10.6861 19.0967 11.314 19.0967 11.7037 18.7107L19.1347 11.351Z"
                  fill="currentColor"
                />
              </motion.svg>
            </span>
            {t("donation.regular")}
          </motion.button>

          <motion.button
            className="donation-button"
            whileHover={{
              scale: 1.03,
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ x: 20 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {t("donation.oneTime")}
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Donation;
