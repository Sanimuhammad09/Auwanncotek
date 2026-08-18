import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { CheckCircle, Fingerprint, ScanFace, Database, Clock, FileText, Wifi } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export default function BiometricAttendancePage() {
  const services = [
    { title: 'Fingerprint & Facial Recognition', desc: 'Secure and accurate biometric scanning using advanced fingerprint and facial recognition technology.', icon: <Fingerprint size={24} /> },
    { title: 'Offline & Cloud-based Solutions', desc: 'Flexible deployment options to suit your business needs, whether locally hosted or managed via the cloud.', icon: <Database size={24} /> },
    { title: 'Time & Attendance Tracking', desc: 'Accurately monitor employee working hours, punctuality, and staff movement with precision.', icon: <Clock size={24} /> },
    { title: 'Complete System Setup', desc: 'We handle device installation, system configuration, user enrollment, and network connectivity.', icon: <Wifi size={24} /> },
    { title: 'Software & Reporting', desc: 'Comprehensive attendance software setup for easy management and detailed reporting.', icon: <FileText size={24} /> },
    { title: 'Access Control Integration', desc: 'Optional integration with access control systems to enhance overall workplace security.', icon: <ScanFace size={24} /> },
  ];

  const whyChooseUs = [
    'Expert Device Installation',
    'Fingerprint & Facial Recognition',
    'Offline & Cloud Support',
    'Comprehensive Software Setup',
    'Detailed Reporting & Analytics',
    'Ongoing Technical Support'
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <PageHeader
          title="Biometric Time & Attendance"
          subtitle="Accurate and Secure Employee Tracking Systems"
          backgroundImage="/biometric-attendance.jpg"
        />

        {/* Overview */}
        <section className="section" style={{ background: 'var(--color-surface)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '4rem', alignItems: 'center' }}>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '1px' }}>OVERVIEW</span>
                <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                  Biometric Time & Attendance Systems Installation & Deployment
                </h2>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                  We provide professional installation and deployment of biometric time and attendance systems designed to help organizations accurately monitor employee attendance, working hours, punctuality, and staff movement. Our solutions support fingerprint and facial recognition technologies, with both offline and cloud-based options to suit different business needs.
                </p>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                  We handle the complete setup, including device installation, system configuration, user enrollment, network connectivity, attendance software setup, and reporting, ensuring a reliable and easy-to-manage attendance management solution.
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
               <img src="/biometric-attendance.jpg" alt="Biometric Time and Attendance Systems" style={{ width: '100%', height: 'auto', display: 'block' }} />
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
                Professional installation and deployment of biometric time and attendance systems for accurate employee attendance, working-hour tracking, and reporting. We provide reliable offline and cloud-based solutions, including fingerprint and facial recognition systems.
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
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Upgrade Your Attendance Management</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
              Ensure accurate tracking and reporting with our professional biometric system deployments.
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
