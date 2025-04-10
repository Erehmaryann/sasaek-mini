import { useState } from "react";

import Hero from "@/components/partials/hero";
import Introduction from "@/components/partials/introduction";
import PresidentMessage from "@/components/partials/president-message";
import ActivitiesSection from "@/components/partials/activities";
import Donation from "@/components/partials/donation";
import AppPreview from "@/components/partials/app-preview";
import Partners from "@/components/partials/partners";

import activitiesData from "@/data/activities.json";
import partnersData from "@/data/partners.json";

import "@/styles/home.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleSlideChange = (slideNumber: number) => {
    setCurrentSlide(slideNumber);
  };

  return (
    <div className="home-page">
      <Hero currentSlide={currentSlide} onSlideChange={handleSlideChange} />
      <Introduction />
      <PresidentMessage />
      <ActivitiesSection activities={activitiesData.activities} />
      <Donation />
      <AppPreview />
      <Partners partners={partnersData.partners} />
    </div>
  );
}

export default Home;
