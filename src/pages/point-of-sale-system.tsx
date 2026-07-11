import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicePageLayout from '../components/ServicePageLayout';

export default function PointOfSaleSystemPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <ServicePageLayout
          title="Point of Sale System"
          subtitle="POS & ERP Solutions for Smooth Business Operations — manage transactions, monitor stock, and gain valuable insights."
          heroImage="/slide-2.png"
          introText="At AUWANCOTEK, we provide powerful Point of Sale (POS) systems designed to help businesses manage transactions, monitor stock, and gain valuable insights — all from one easy-to-use platform. Whether you run a supermarket, pharmacy, boutique, restaurant, or service center, our POS solutions are customized to fit your business type and scale."
          servicesTitle="Our POS Features Include"
          services={[
            'Sales & Inventory Management',
            'Real-Time Stock Tracking',
            'Receipt Printing & Barcode Scanning',
            'Staff Access Control & Sales Reports',
            'Daily, Weekly & Monthly Business Analytics',
            'Cloud Backup & Remote Access (Optional)',
            'POS Hardware Setup (Printers, Scanners, Cash Drawers)',
            'Scalable and Customizable as Business Grows',
          ]}
          whyChooseUs={[
            'All-in-One Business Management Solution',
            'Easy to Use — No Technical Skills Needed',
            'Affordable Plans for Every Business Size',
            'Dedicated Support & Training',
            'Cloud-Based — Access from Anywhere',
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}
