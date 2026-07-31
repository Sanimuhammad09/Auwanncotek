
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustBar from './components/TrustBar';
import ProductCarousel from './components/ProductCarousel';
import ServicesSection from './components/ServicesSection';
import Process from './components/Process';
import Industries from './components/Industries';
import VinfostockPricing from './components/VinfostockPricing';
import MeetCEO from './components/MeetCEO';
import Commitment from './components/Commitment';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <HeroSection />
        <TrustBar />
        <ProductCarousel />
        <ServicesSection />
        <Process />
        <Industries />
        <VinfostockPricing />
        <MeetCEO />
        <Commitment />
        <AboutUs />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
