import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicePageLayout from '../components/ServicePageLayout';

export default function PCAccessoriesPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <ServicePageLayout
          title="PC Accessories"
          subtitle="Essential Computer Accessories to Power Productivity — make work, gaming, and everyday tasks more efficient."
          heroImage="/slide-3.png"
          introText="At AUWANCOTEK, we specialize in high-quality computer accessories that make work, gaming, and everyday tasks more efficient and enjoyable. Whether you're building a home office or upgrading your rig, we have the gear to get you there. From keyboards, mice to drives and more, we sell top-grade computer accessories built for performance, connectivity and comfort."
          servicesTitle="Our Product Categories Include"
          services={[
            'Mice & Keyboards — Wired or wireless, mechanical or ergonomic',
            'Monitors & Stands — Boost productivity with crisp displays and adjustable mounts',
            'Cables & Adapters — Fast, reliable connections for USB, HDMI, DisplayPort, and more',
            'Headsets & Speakers — Crystal-clear audio for calls, music, and gaming',
            'Storage Solutions — SSDs, HDDs, and Flash Drives',
            'Cooling Pads, Webcams, Power Strips & Other Essentials',
          ]}
          whyChooseUs={[
            'Top-Grade Products from Trusted Brands',
            'Competitive Pricing',
            'Expert Recommendations for Your Setup',
            'Fast & Reliable Delivery',
            'After-Sales Support Available',
          ]}
          ctaText="Browse PC Accessories"
        />
      </main>
      <Footer />
    </div>
  );
}
