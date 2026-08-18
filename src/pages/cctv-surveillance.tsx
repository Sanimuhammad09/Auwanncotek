import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { CheckCircle, Video, ShieldCheck, Network, MonitorPlay, Wrench, Eye } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export default function CCTVSurveillancePage() {
  const services = [
    { title: 'CCTV System Design', desc: 'Custom surveillance layouts strategically designed to eliminate blind spots and ensure complete coverage of your property.', icon: <Eye size={24} /> },
    { title: 'Camera Installation', desc: 'Professional mounting and positioning of high-definition cameras for optimal viewing angles, both indoors and outdoors.', icon: <Video size={24} /> },
    { title: 'System Configuration & Recording', desc: 'Setup of DVR/NVR recording devices and storage optimization so you never miss a moment.', icon: <MonitorPlay size={24} /> },
    { title: 'Network Integration', desc: 'Seamless integration with your existing IP network for reliable data transmission and scalability.', icon: <Network size={24} /> },
    { title: 'Remote Monitoring', desc: 'Configure remote access so you can view live feeds and recordings from your smartphone, tablet, or remote computer anywhere in the world.', icon: <ShieldCheck size={24} /> },
    { title: 'Ongoing Maintenance', desc: 'Routine check-ups, troubleshooting, and repairs to ensure your surveillance system remains operational 24/7.', icon: <Wrench size={24} /> },
  ];

  const whyChooseUs = [
    'Expert Camera Placement',
    'High-Definition Clarity',
    'IP & Network-Based Support',
    'Remote Monitoring Setup',
    'Reliable Storage & Playback',
    'Professional Support & Maintenance'
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <PageHeader
          title="CCTV Surveillance Systems"
          subtitle="Advanced Security & Monitoring Solutions"
          backgroundImage="/cctv-surveillance.jpg"
        />

        {/* Overview */}
        <section className="section" style={{ background: 'var(--color-surface)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '4rem', alignItems: 'center' }}>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '1px' }}>OVERVIEW</span>
                <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                  CCTV Surveillance Systems – Installation & Configuration
                </h2>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                  We provide professional CCTV surveillance solutions that help businesses, organizations, and property owners improve security, monitor activities, and protect their premises. Our services include CCTV system design, camera installation, configuration, recording setup, network integration, remote monitoring, and system maintenance.
                </p>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                  We deploy reliable surveillance solutions tailored to each client's security requirements, with support for both IP and network-based CCTV systems.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div style={{
                  background: 'var(--color-bg)',
                  padding: '2.5rem',
                  borderRadius: '1rem',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-md)'
                }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Why Choose Auwancotek</h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {whyChooseUs.map((reason, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <CheckCircle size={20} color="var(--color-accent)" />
                        <span style={{ fontSize: '1.05rem', color: 'var(--color-text)' }}>{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
            
            {/* Embedded Image Section */}
            <div style={{ marginTop: '4rem', borderRadius: '1rem', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
               <img src="/cctv-surveillance.jpg" alt="CCTV Surveillance Systems" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section" style={{ background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '1px' }}>WHAT WE OFFER</span>
              <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>Comprehensive Installation & Setup</h2>
              <p style={{ color: 'var(--color-text-muted)', maxWidth: '700px', margin: '1rem auto 0', fontSize: '1.1rem' }}>
                Professional CCTV surveillance solutions for homes, offices, businesses, and organizations, including camera installation, system configuration, recording, networking, remote monitoring, and ongoing maintenance.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
              {services.map((svc, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5, boxShadow: 'var(--shadow-lg)' }}
                  style={{ background: 'var(--color-surface)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--color-border)', transition: 'all 0.3s' }}>
                  <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(246,74,0,0.1)', color: 'var(--color-accent)', borderRadius: '1rem', marginBottom: '1.5rem' }}>
                    {svc.icon}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{svc.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{svc.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'linear-gradient(135deg, var(--color-primary), #0a192f)', padding: '5rem 0', textAlign: 'center', color: 'white' }}>
          <div className="container">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Secure Your Premises Today</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
              Don't leave your security to chance. Get in touch with us to design and deploy a reliable CCTV solution.
            </p>
            <Link to="/contacts" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              Request a Consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
