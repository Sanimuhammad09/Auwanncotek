import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicePageLayout from '../components/ServicePageLayout';

export default function BusinessCentrePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <ServicePageLayout
          title="Business Centre"
          subtitle="We provide fast, affordable, and professional business services — from printing and typing to internet access, lamination, and more."
          heroImage="/slide-4.png"
          introText="AUWANCOTEK Business Centre is your go-to destination for a wide range of professional office and business support services. Whether you need to print documents, access the internet, get passport-size photographs, or handle bulk photocopying — we deliver quality results at competitive prices, every single time."
          servicesTitle="Our Business Centre Services Include"
          services={[
            'Color & Black/White Printing',
            'Photocopying & Lamination',
            'Document Binding & Spiral Binding',
            'Digital Passport Photography',
            'Typing & Formatting of Documents',
            'Internet Browsing & Email Services',
            'Scanning & PDF Conversion',
            'Bulk Printing for Organizations & Events',
          ]}
          whyChooseUs={[
            'Fast, Professional Service',
            'Affordable, Transparent Pricing',
            'High-Quality Print & Finishing',
            'Conveniently Located in Jabi, Abuja',
            'Friendly & Helpful Staff',
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}
