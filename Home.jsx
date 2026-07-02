import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesOverview from '../components/home/ServicesOverview';
import FundingBanner from '../components/home/FundingBanner';
import WhySection from '../components/home/WhySection';
import CTASection from '../components/home/CTASection';

const HERO_IMAGE = 'https://media.base44.com/images/public/6a152e99ab3135537a729eee/df2219b79_generated_666e60ec.png';
const LEARNING_SPACE_IMAGE = 'https://media.base44.com/images/public/6a152e99ab3135537a729eee/563709537_generated_212a489b.png';

export default function Home() {
  return (
    <div>
      <HeroSection heroImage={HERO_IMAGE} />
      <ServicesOverview />
      <FundingBanner />
      <WhySection image={LEARNING_SPACE_IMAGE} />
      <CTASection />
    </div>
  );
}
