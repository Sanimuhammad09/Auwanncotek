import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicePageLayout from '../components/ServicePageLayout';

export default function PCRepairServicesPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <ServicePageLayout
          title="PC Repair & Services"
          subtitle="Whether it's a cracked screen, slow PC, or startup issues — we fix it fast with expert repairs, upgrades, and support."
          heroImage="/slide-3.png"
          introText="At AUWANCOTEK, we offer professional PC repair and maintenance services that keep your devices performing at their best. Our skilled technicians handle everything from screen replacements and motherboard repairs to full system overhauls. Whether it's a laptop or desktop, we diagnose the issue fast and fix it right — the first time."
          servicesTitle="Our Repair Services Include"
          services={[
            'Laptop & Desktop Screen Replacement',
            'Motherboard Repair & Component-Level Fixes',
            'Hard Drive & SSD Replacement/Upgrade',
            'RAM Upgrades & System Optimization',
            'Operating System Installation & Recovery',
            'Keyboard & Touchpad Replacement',
            'Battery Replacement & Power Issues',
            'Overheating Fixes & Cooling System Cleaning',
            'Data Recovery from Damaged Drives',
          ]}
          whyChooseUs={[
            'Expert Diagnosis — Fast Turnaround',
            'Genuine Parts & Quality Workmanship',
            'Affordable, Transparent Pricing',
            'Free Post-Repair Support',
            'Warranty on All Repair Services',
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}
