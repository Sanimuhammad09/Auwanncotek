import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicePageLayout from '../components/ServicePageLayout';

export default function PhoneAccessoriesPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <ServicePageLayout
          title="Phone Accessories"
          subtitle="Small Add-ons, Big Impact — elevate your phone experience with faster charging, tougher protection, and better sound."
          heroImage="/slide-2.png"
          introText="Don't settle for basic. Our accessories are designed to elevate your phone experience — faster charging, tougher protection, better sound, and more style. From fast chargers to premium earbuds, our accessories are made to match your lifestyle. Charge, protect, and style your phone with confidence."
          servicesTitle="What's in Store"
          services={[
            'Cases that Click — Sleek, rugged, or glam, protect your phone in style',
            'Chargers That Keep Up — Fast, safe, and built to last',
            'Wireless Wonders — Bluetooth earbuds, speakers, and chargers for life on the move',
            'Screen Protectors — Crystal-clear, smudge-proof, and scratch-resistant',
            'Car Mounts & More — Stay hands-free and fully charged wherever you go',
            'Power Banks — Keep your devices powered all day long',
            'Cables & Adapters — USB-C, Lightning, and more',
          ]}
          whyChooseUs={[
            'Trendy & Tough Designs',
            'Universal Compatibility',
            'Fast Delivery & Easy Returns',
            'Affordable Prices with Premium Quality',
            'Wide Range of Top Brands',
          ]}
          ctaText="Shop Phone Accessories Now"
        />
      </main>
      <Footer />
    </div>
  );
}
