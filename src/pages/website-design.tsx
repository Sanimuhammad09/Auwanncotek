import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicePageLayout from '../components/ServicePageLayout';

export default function WebsiteDesignPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <ServicePageLayout
          title="Website Design"
          subtitle="Beautiful, Functional Websites That Deliver Results — we design and build websites that work for your business."
          heroImage="/img-web-design.png"
          introText="At AUWANCOTEK, we design and build websites that do more than just look good — they work for your business. Whether you need a personal portfolio, business website, or eCommerce store, we craft customized digital solutions tailored to your goals. We create stunning, user-friendly websites that help you attract customers, build trust, and grow your business online."
          servicesTitle="Our Website Design Services Include"
          services={[
            'Business & Personal Website Design',
            'eCommerce Websites (Online Stores)',
            'Mobile-Responsive Design',
            'Content Management Systems (WordPress, Shopify, etc.)',
            'Content Creation & Copywriting',
            'Basic SEO Setup for Visibility',
            'Maintenance & Ongoing Support',
          ]}
          whyChooseUs={[
            'Custom Designs Built Around Your Brand',
            'Fast Load Times & Easy Navigation',
            'SEO-Friendly Structure for Better Rankings',
            'Affordable Packages for Every Budget',
            'Ongoing Support & Maintenance',
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}
