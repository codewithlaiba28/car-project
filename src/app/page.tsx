import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ModelsGrid from '@/components/ModelsGrid';
import MoreThanCar from '@/components/MoreThanCar';
import Features from '@/components/Features';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import VideoSection from '@/components/VideoSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex-1 w-full bg-black">
      <Navbar />
      <Hero />
      <ModelsGrid />
      <MoreThanCar />
      <Features />
      <FAQ />
      <Testimonials />
      <VideoSection />
      <Footer />
    </main>
  );
}
