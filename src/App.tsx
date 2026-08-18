
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustBar from './components/TrustBar';
import ServicesSection from './components/ServicesSection';
import Process from './components/Process';
import Industries from './components/Industries';
import WhyTrustUs from './components/WhyTrustUs';
import MeetCEO from './components/MeetCEO';
import Commitment from './components/Commitment';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <HeroSection />
        <TrustBar />
        <ServicesSection />
        <Process />
        <Industries />
        <WhyTrustUs />
        <MeetCEO />
        <Commitment />
        <AboutUs />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
