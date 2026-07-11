import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicePageLayout from '../components/ServicePageLayout';

export default function LaptopSalesPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <ServicePageLayout
          title="Laptop Sales"
          subtitle="Your Trusted Laptop Destination — high-performance laptops tailored to your lifestyle and budget."
          heroImage="/slide-1.png"
          introText="At AUWANCOTEK, we specialize in delivering high-performance laptops tailored to your lifestyle and budget. Our curated selection features the latest models from trusted brands like Dell, HP, Lenovo, Apple, ASUS, Acer, and more. Whether you need something powerful for design work or a reliable machine for everyday use, we've got you covered."
          servicesTitle="Our Product Range Includes"
          services={[
            'Business Laptops — Lightweight, secure, and built for productivity on the go',
            'Gaming Laptops — High refresh rates, top-tier GPUs, and thermal efficiency',
            'Student Laptops — Affordable, durable, and compatible with academic tools',
            'Refurbished Laptops — Professionally restored and tested for quality at a lower cost',
            'Custom Configurations — Build your ideal spec with our expert guidance',
          ]}
          whyChooseUs={[
            'Expert Product Recommendations',
            'Competitive Pricing with Warranty',
            'Genuine Products from Trusted Brands',
            'Free Initial Setup & Configuration',
            'After-Sales Support & Repair Services',
          ]}
          ctaText="Find Your Perfect Laptop Today"
        />
      </main>
      <Footer />
    </div>
  );
}
