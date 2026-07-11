import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicePageLayout from '../components/ServicePageLayout';

export default function VirtualAssistancePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <ServicePageLayout
          title="Virtual Assistance"
          subtitle="Efficient, Reliable Virtual Assistance Tailored to You — keep your workflow smooth and productive."
          heroImage="/slide-4.png"
          introText="At AUWANCOTEK, we provide skilled virtual assistants ready to support your daily business operations. From managing emails and scheduling appointments to handling customer service and social media, our VAs are here to keep your workflow smooth and productive. Delegate your tasks to our expert virtual assistants and focus on what matters most — growing your business."
          servicesTitle="Our Virtual Assistance Services Include"
          services={[
            'Email & Calendar Management',
            'Customer Support & Follow-Ups',
            'Data Entry & Reporting',
            'Social Media Management',
            'Content Writing & Editing',
            'Appointment Scheduling',
            'Administrative Support',
          ]}
          whyChooseUs={[
            'Experienced, Professional VAs',
            'Flexible, Scalable Support Plans',
            'Confidential & Secure Handling of Tasks',
            'Affordable Rates with No Long-Term Commitment',
            'Dedicated VA Assigned to Your Account',
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}
