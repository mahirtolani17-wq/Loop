import { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Preloader } from './components/Preloader';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Experience } from './components/Experience';
import { Testimonials } from './components/Testimonials';
import { Booking } from './components/Booking';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { AnimatedBackground } from './components/AnimatedBackground';
import { SmoothScroll } from './components/SmoothScroll';
import { ScrollProgress } from './components/ScrollProgress';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <SmoothScroll>
      <CustomCursor />
      <AnimatedBackground />
      <ScrollProgress />
      
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        <Navigation />
        <main className="pb-16 md:pb-0">
          <Hero />
          <About />
          <Services />
          <Gallery />
          <Experience />
          <Testimonials />
          <Booking />
          <Location />
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </SmoothScroll>
  );
}
