import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { Wrench, HardDrive, ShieldAlert, Zap, ArrowUpCircle, Database, Settings, CheckCircle } from 'lucide-react';

export default function PCRepairServicesPage() {
  const services = [
    { title: 'Hardware Diagnostics & Repairs', desc: 'Our technicians perform detailed diagnostics to accurately identify hardware faults before carrying out professional repairs or replacements.', icon: <Wrench size={24} /> },
    { title: 'Software Troubleshooting', desc: 'We resolve Windows boot failures, blue screen errors, driver conflicts, application crashes, and operating system corruption.', icon: <Settings size={24} /> },
    { title: 'Virus & Malware Removal', desc: 'We provide virus removal, malware cleanup, ransomware assessment, and security software installation while preserving your data.', icon: <ShieldAlert size={24} /> },
    { title: 'System Performance Optimisation', desc: 'We improve speed with startup optimisation, temporary file cleanup, registry tuning, and disk health checks.', icon: <Zap size={24} /> },
    { title: 'Hardware Upgrades', desc: 'Upgrade your existing computer with SSD installation, RAM upgrades, graphics cards, and cooling improvements instead of buying new.', icon: <ArrowUpCircle size={24} /> },
    { title: 'Data Backup & Recovery', desc: 'We recover data from damaged drives and deleted files, and configure backup solutions to protect your critical information.', icon: <Database size={24} /> },
  ];

  const devices = ['Desktop Computers', 'Laptop Computers', 'All-in-One PCs', 'Business Workstations', 'Gaming PCs', 'Mini PCs'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <PageHeader
          title="PC Repairs & Maintenance"
          subtitle="Expert Diagnostic and Repair Services for Your Hardware"
          backgroundImage="/pc_repairs_ng_1785470447305.png"
        />

        {/* Overview */}
        <section className="section" style={{ background: 'var(--color-surface)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '4rem', alignItems: 'center' }}>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '1px' }}>OVERVIEW</span>
                <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                  Keeping Your Computers Performing at Their Best
                </h2>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                  A slow, faulty, or damaged computer can disrupt your work, studies, or business operations. At Auwancotek Limited, we provide professional PC repair and maintenance services designed to restore your devices quickly and efficiently.
                </p>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                  Whether you have a desktop, laptop, workstation, or all-in-one computer, our certified technicians diagnose issues accurately, repair faults using industry best practices, and help extend the life of your equipment.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <img src="/slide-2.png" alt="PC Repairs" style={{ width: '100%', borderRadius: '1rem', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section" style={{ background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '1px' }}>WHAT WE OFFER</span>
              <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>Comprehensive PC Repair & Maintenance</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {services.map((svc, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5, boxShadow: 'var(--shadow-lg)' }}
                  style={{ background: 'var(--color-surface)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--color-border)', transition: 'all 0.3s' }}>
                  <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(4,107,210,0.1)', color: 'var(--color-primary)', borderRadius: '1rem', marginBottom: '1.5rem' }}>
                    {svc.icon}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{svc.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{svc.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Devices We Service */}
        <section className="section" style={{ background: 'linear-gradient(135deg, var(--color-primary), #0a192f)', color: 'white' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '4rem', alignItems: 'center' }}>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>Devices We Service</h2>
                <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>
                  Our technicians repair and maintain a wide range of computer systems. We support most leading brands, including Dell, HP, Lenovo, Acer, ASUS, Apple, MSI, Toshiba, Samsung, and many others.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  {devices.map((device, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle size={20} color="var(--color-accent)" />
                      <span>{device}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ background: 'rgba(255,255,255,0.05)', padding: '2.5rem', borderRadius: '1rem', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'white' }}>Why Choose Auwancotek?</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {['Certified & Experienced Technicians', 'Accurate Diagnostics', 'Genuine Quality Components', 'Transparent Pricing', 'Fast Turnaround'].map((r, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.9)' }}>
                      <HardDrive size={18} color="var(--color-accent)" /> {r}
                    </li>
                  ))}
                </ul>
              </motion.div>
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
                { q: 'How long do most repairs take?', a: 'Many software repairs and upgrades can be completed the same day, while more complex hardware repairs may take one to three business days, depending on the issue and parts availability.' },
                { q: 'Can you recover files from a damaged computer?', a: 'In many cases, yes. Our technicians assess the storage device and use professional recovery methods to retrieve your important files whenever possible.' },
                { q: 'Should I upgrade my computer or replace it?', a: 'We\'ll evaluate your device and provide honest advice. In many cases, upgrades such as installing an SSD or adding RAM can deliver significant performance improvements at a fraction of the cost of a new computer.' }
              ].map((faq, i) => (
                <div key={i} style={{ background: 'var(--color-bg)', padding: '1.5rem 2rem', borderRadius: '1rem', border: '1px solid var(--color-border)' }}>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>{faq.q}</h4>
                  <p style={{ color: 'var(--color-text-muted)' }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
