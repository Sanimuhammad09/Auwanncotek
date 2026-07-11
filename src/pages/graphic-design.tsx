import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicePageLayout from '../components/ServicePageLayout';

export default function GraphicDesignPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <ServicePageLayout
          title="Graphic Design"
          subtitle="Visual Designs That Speak for Your Brand — we turn ideas into stunning visuals that help businesses stand out."
          heroImage="/img-web-design.png"
          introText="At AUWANCOTEK, we turn ideas into stunning visuals that help businesses stand out. Whether you need branding, marketing materials, or social media content, our graphic design services are tailored to elevate your image and communicate your message clearly. We design eye-catching visuals that tell your story, capture attention, and leave a lasting impression online and offline."
          servicesTitle="Our Graphic Design Services Include"
          services={[
            'Logos & Brand Identity Design',
            'Business Cards, Flyers & Brochures',
            'Social Media Graphics & Ads',
            'Posters, Banners & Roll-Up Designs',
            'Website & UI/UX Graphics',
            'Product Packaging & Label Design',
            'Presentation & Proposal Templates',
          ]}
          whyChooseUs={[
            'Unique, Custom Designs Every Time',
            'Fast Turnaround & Revisions',
            'Creative and Professional Team',
            'Affordable Packages for All Needs',
            'Designs Delivered in Ready-to-Print Formats',
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}
