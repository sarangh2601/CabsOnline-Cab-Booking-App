import Hero from '../components/Hero.jsx';
import BookingWidget from '../components/BookingWidget.jsx';
import Features from '../components/Features.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import FleetShowcase from '../components/FleetShowcase.jsx';
import Testimonials from '../components/Testimonials.jsx';
import FAQ from '../components/FAQ.jsx';
import AboutHero from '../components/AboutHero.jsx';
import Stats from '../components/Stats.jsx';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <AboutHero/>
      <Features />
      <HowItWorks />
      {/* <FleetShowcase /> */}
      <Stats/>
      <Testimonials />
      <FAQ />
    </div>
  );
}
