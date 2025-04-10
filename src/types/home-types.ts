// Handle language selection
export interface ILanguage {
  code: string;
  name: string;
}

// Handle Hero component
export interface HeroProps {
  currentSlide: number;
  onSlideChange: (slideNumber: number) => void;
}

// Handle Activity component
export interface Activity {
  id: number;
  title?: string;
  description?: string;
  image: string;
  altText?: string;
}

// Handle ActivitiesSection component
export interface ActivitiesSectionProps {
  activities: Activity[];
}

// Partners
export interface Partner {
  id: number;
  name?: string;
  description?: string;
  logo: string;
  altText?: string;
}

export interface PartnersProps {
  partners: Partner[];
}
