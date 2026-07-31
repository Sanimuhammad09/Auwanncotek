import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { ShieldCheck, MonitorDot, Server, Lock, Cloud, Wrench, CheckCircle } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export default function ITTechnicalSupportPage() {
  const services = [
    { title: 'Remote Technical Support', desc: 'Our remote support team can quickly diagnose and resolve software, network, and system issues without waiting for an on-site visit, reducing downtime and restoring productivity faster.', icon: <MonitorDot size={24} /> },
    { title: 'On-Site IT Support', desc: 'When hands-on assistance is required, our engineers provide prompt on-site support for hardware installations, repairs, network troubleshooting, office relocations, and infrastructure maintenance.', icon: <Wrench size={24} /> },
    { title: 'Network Installation & Management', desc: 'We design, install, configure, and maintain secure wired and wireless networks that provide reliable connectivity for your business.', icon: <Server size={24} /> },
    { title: 'Computer Maintenance', desc: 'Preventive maintenance extends the lifespan of your IT equipment while improving performance.', icon: <ShieldCheck size={24} /> },
    { title: 'Server & Infrastructure Support', desc: 'We help organizations deploy and maintain secure server environments that ensure business continuity.', icon: <Server size={24} /> },
    { title: 'Cybersecurity Solutions', desc: 'Protect your organization against cyber threats through proactive security measures, including antivirus deployment and firewall configuration.', icon: <Lock size={24} /> },
    { title: 'Cloud Solutions', desc: 'Modern organizations benefit from cloud technology that supports flexibility and collaboration.', icon: <Cloud size={24} /> },
  ];

  const whyChooseUs = [
    'Experienced IT Professionals',
    'Fast Response Times',
    'Tailored Support Plans',
    'Proactive Maintenance',
    'Transparent Pricing',
    'Long-Term Partnership'
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <PageHeader
          title="IT Technical Support"
          subtitle="Reliable IT Support That Keeps Your Business Running"
          backgroundImage="/slide-1.png"
        />

        {/* Overview */}
        <section className="section" style={{ background: 'var(--color-surface)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '4rem', alignItems: 'center' }}>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '1px' }}>OVERVIEW</span>
                <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                  Professional IT Support Tailored to Your Business
                </h2>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                  In today's fast-paced digital environment, even a minor technical issue can disrupt productivity and impact business performance. That's why we provide proactive IT support designed to minimize downtime, enhance security, and optimize the performance of your technology infrastructure.
                </p>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                  Rather than waiting for problems to occur, we monitor, maintain, and improve your IT environment to ensure your business operates efficiently every day. Whether your organization has five employees or five hundred, we tailor our services to meet your operational needs and future growth.
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
          </div>
        </section>

        {/* Services Grid */}
        <section className="section" style={{ background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '1px' }}>WHAT WE OFFER</span>
              <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>Comprehensive IT Support Services</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
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

        {/* FAQs */}
        <section className="section" style={{ background: 'var(--color-surface)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>Frequently Asked Questions</h2>
            </div>
            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { q: 'Do you provide emergency IT support?', a: 'Yes. We offer both scheduled and emergency technical support to resolve urgent IT issues as quickly as possible.' },
                { q: 'Can you support businesses without an internal IT department?', a: 'Absolutely. Many of our clients rely on us as their outsourced IT department.' },
                { q: 'Do you offer remote support?', a: 'Yes. Many software and network issues can be resolved securely through remote support, allowing us to assist you without delay.' }
              ].map((faq, i) => (
                <div key={i} style={{ background: 'var(--color-bg)', padding: '1.5rem 2rem', borderRadius: '1rem', border: '1px solid var(--color-border)' }}>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>{faq.q}</h4>
                  <p style={{ color: 'var(--color-text-muted)' }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'linear-gradient(135deg, var(--color-primary), #0a192f)', padding: '5rem 0', textAlign: 'center', color: 'white' }}>
          <div className="container">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Let Technology Work for You</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
              Your business deserves reliable IT support that keeps operations running smoothly and securely.
            </p>
            <Link to="/contacts" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              Get Started Today
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
