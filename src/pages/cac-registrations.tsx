import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicePageLayout from '../components/ServicePageLayout';

export default function CACRegistrationsPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <ServicePageLayout
          title="CAC Registrations"
          subtitle="Fast & Hassle-Free CAC Business Registrations. We handle the process so you can focus on growing your business."
          heroImage="/slide-4.png"
          introText="At AUWANCOTEK, we specialize in seamless CAC registration services for individuals, startups, and existing businesses. Whether you're starting as a sole proprietor, registering a full company or incorporated trustee, we handle the process so you can focus on growing your business."
          servicesTitle="Our CAC Services Include"
          services={[
            'Business Name Registration',
            'Limited Liability Company (LLC) Registration',
            'NGO / Incorporated Trustees Registration',
            'Post-Incorporation Filings (changes to directors, address, etc.)',
            'TIN (Tax Identification Number) Processing',
            'Certificate Reprints & Updates',
          ]}
          whyChooseUs={[
            'Fast Processing Time',
            'Affordable Pricing',
            'Expert Guidance Through the Entire Process',
            'Accurate Documentation',
            'Regular Updates & Follow-Ups',
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}
