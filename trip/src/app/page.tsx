import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import FeaturesSection from './components/FeaturesSection';
import TelegramSection from './components/TelegramSection';
import CarouselSection from './components/CarouselSection';
import PartnershipSection from './components/PartnershipSection';
import TeamSection from './components/TeamSection';

export default function Home() {
  return (
    <main>
      <div className="container">
        <Header />
        <HeroBanner />
      </div>
      
      <FeaturesSection />
      <TelegramSection />
      <CarouselSection />
      <PartnershipSection />
      <TeamSection />
    </main>
  );
}
