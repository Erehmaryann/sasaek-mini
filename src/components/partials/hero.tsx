import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

import type { HeroProps } from "@/types/home-types";

import hero1 from "@/assets/others/hero-1.webp";
import hero2 from "@/assets/others/hero-2.webp";

import "@/styles/hero.css";

function Hero({ currentSlide, onSlideChange }: HeroProps) {
  const { t } = useTranslation();
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef<Slider | null>(null);

  const slides = [
    {
      id: 1,
      title: t("hero.slide1.title"),
      subtitle: t("hero.slide1.subtitle"),
      image: hero1,
      label: t("hero.slide1.label"),
    },
    {
      id: 2,
      title: t("hero.slide2.title"),
      subtitle: t("hero.slide2.subtitle"),
      image: hero2,
      label: t("hero.slide2.label"),
    },
  ];

  const handlePrevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    sliderRef.current?.slickPrev();
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    sliderRef.current?.slickNext();
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Calculate the progress percentage for the range input
  useEffect(() => {
    // For slide 1, progress should be 50%, for slide 2, progress should be 100%
    const rangeProgress = (currentSlide / slides.length) * 100;
    document.documentElement.style.setProperty("--range-progress", `${rangeProgress}%`);
  }, [currentSlide, slides.length]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    beforeChange: (_: number, newIndex: number) => {
      onSlideChange(newIndex + 1);
    },
    initialSlide: currentSlide - 1,
  };

  return (
    <motion.section
      className="hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <div
              className="hero-background"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            ></div>
            <div className="hero-content">
              <motion.div
                className="hero-label"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                <span className="gowun-batang-bold">{slide.label}</span>
                <motion.div className="hero-label-line" transition={{ duration: 0.5, delay: 0.3 }}></motion.div>
              </motion.div>

              <motion.h1
                className="gowun-batang-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {slide.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {slide.subtitle}
              </motion.p>
            </div>
          </div>
        ))}
      </Slider>

      <motion.div
        className="hero-controls"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="hero-pagination">
          <span className="current">{currentSlide}</span>
          <div className="pagination-range-container">
            <input
              type="range"
              min="1"
              max={slides.length}
              value={currentSlide}
              onChange={(e) => {
                const newSlide = Number.parseInt(e.target.value);
                onSlideChange(newSlide);
                sliderRef.current?.slickGoTo(newSlide - 1);
              }}
              className="pagination-range"
            />
          </div>
          <span className="total">{slides.length}</span>
        </div>

        <div className="hero-buttons">
          <motion.button
            className="hero-button prev"
            onClick={handlePrevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.70711 0.292893C8.09763 0.683417 8.09763 1.31658 7.70711 1.70711L3.41421 6H15C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8H3.41421L7.70711 12.2929C8.09763 12.6834 8.09763 13.3166 7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289L6.29289 0.292893C6.68342 -0.0976311 7.31658 -0.0976311 7.70711 0.292893Z"
                fill="white"
              />
            </svg>
          </motion.button>

          <motion.button
            className="hero-button next"
            onClick={handleNextSlide}
            whileHover={{ scale: 1.0 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.29289 0.292893C8.68342 -0.0976311 9.31658 -0.0976311 9.70711 0.292893L15.7071 6.29289C16.0976 6.68342 16.0976 7.31658 15.7071 7.70711L9.70711 13.7071C9.31658 14.0976 8.68342 14.0976 8.29289 13.7071C7.90237 13.3166 7.90237 12.6834 8.29289 12.2929L12.5858 8H1C0.447715 8 0 7.55228 0 7C0 6.44772 0.447715 6 1 6H12.5858L8.29289 1.70711C7.90237 1.31658 7.90237 0.683417 8.29289 0.292893Z"
                fill="white"
              />
            </svg>
          </motion.button>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
