import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicePageLayout from '../components/ServicePageLayout';

export default function ITTechnicalSupportPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <ServicePageLayout
          title="IT Technical Support"
          subtitle="Our IT team provides fast and effective solutions. From troubleshooting, maintenance, to system upgrade, we're available 24/7."
          heroImage="/slide-1.png"
          introText="At AUWANCOTEK, we specialize in delivering reliable and efficient IT support to individuals, startups, and enterprises. Whether you're dealing with network failures, software issues, virus attacks, or system slowdowns — our trained professionals are equipped to resolve your problems quickly and keep your operations running smoothly."
          servicesTitle="Our IT Support Services Include"
          services={[
            'Hardware & Software Troubleshooting',
            'Network Setup, Configuration & Maintenance',
            'Virus & Malware Removal',
            'System Upgrades & Optimization',
            'Data Backup & Recovery',
            'Remote & On-Site IT Support',
            'Email & Cloud Setup (Google Workspace, Microsoft 365)',
            'CCTV Installation & Configuration',
            'IT Consultation & Infrastructure Planning',
          ]}
          whyChooseUs={[
            'Fast Response Time — Available 24/7',
            'Experienced, Certified Technicians',
            'Affordable & Transparent Pricing',
            'Both Remote and On-Site Support Available',
            'Trusted by Businesses Across Abuja',
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}
