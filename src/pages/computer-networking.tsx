import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { ShieldCheck, Server, Lock, Wrench, CheckCircle, Wifi, Activity } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export default function ComputerNetworkingPage() {
  const services = [
    { title: 'Network Design & Planning', desc: 'Customized network architecture tailored to your business needs, ensuring high performance, scalability, and security.', icon: <Server size={24} /> },
    { title: 'Structured Cabling', desc: 'Professional installation of CAT6, fiber optics, and other structured cabling systems for reliable data transmission.', icon: <Activity size={24} /> },
    { title: 'LAN & Wi-Fi Deployment', desc: 'Seamless integration of Local Area Networks and high-speed wireless networks for comprehensive coverage and fast connectivity.', icon: <Wifi size={24} /> },
    { title: 'Router & Switch Configuration', desc: 'Expert setup and configuration of routers, switches, and core networking equipment to optimize traffic flow.', icon: <Wrench size={24} /> },
    { title: 'Network Security', desc: 'Implementation of firewalls, VPNs, and advanced security protocols to protect your infrastructure from external threats.', icon: <Lock size={24} /> },
    { title: 'Ongoing Support & Troubleshooting', desc: 'Continuous monitoring, maintenance, and rapid troubleshooting to ensure your network remains stable and performant.', icon: <ShieldCheck size={24} /> },
  ];

  const whyChooseUs = [
    'Experienced Network Engineers',
    'Scalable Infrastructure Designs',
    'High-Speed & Reliable Connectivity',
    'Comprehensive Security Implementation',
    'Ongoing Maintenance & Support',
    'Cost-Effective Solutions'
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <PageHeader
          title="Computer Networking & Infrastructure"
          subtitle="Reliable, Scalable, and Secure Network Solutions"
          backgroundImage="/network-installation.jpg"
        />

        {/* Overview */}
        <section className="section" style={{ background: 'var(--color-surface)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '4rem', alignItems: 'center' }}>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '1px' }}>OVERVIEW</span>
                <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                  Computer Networking and Infrastructure Installation & Configuration
                </h2>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                  We provide professional network design, installation, configuration, and support for businesses and organizations. From structured cabling and LAN/Wi-Fi deployment to routers, switches, access points, and network security, we build reliable and scalable infrastructure that keeps your teams, devices, and business systems securely connected.
                </p>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                  Our solutions are tailored to your organization's needs, with ongoing troubleshooting and technical support to ensure stable network performance.
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
               <img src="/network-installation.jpg" alt="Computer Networking and Infrastructure" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section" style={{ background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '1px' }}>WHAT WE OFFER</span>
              <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>Comprehensive Networking Services</h2>
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
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Ready to Upgrade Your Infrastructure?</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
              Connect your teams and systems with our robust networking solutions tailored to your specific needs.
            </p>
            <Link to="/contacts" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              Get in Touch Today
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
