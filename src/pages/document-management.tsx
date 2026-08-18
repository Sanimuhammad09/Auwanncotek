import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { CheckCircle, FileArchive, Search, ShieldCheck, FolderOpen, FileText, Lock } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export default function DocumentManagementPage() {
  const services = [
    { title: 'Document Scanning & Digitization', desc: 'High-speed scanning and conversion of physical paper files into searchable, high-quality digital formats.', icon: <FileArchive size={24} /> },
    { title: 'Electronic Document Management', desc: 'Implementation of robust software platforms to centralize, organize, and manage your digitized files securely.', icon: <FolderOpen size={24} /> },
    { title: 'Indexing & Classification', desc: 'Systematic labeling and metadata tagging to ensure every document is correctly categorized for easy retrieval.', icon: <FileText size={24} /> },
    { title: 'Search & Quick Retrieval', desc: 'Advanced search functionality allowing you to find specific files instantly, eliminating time wasted searching through paper records.', icon: <Search size={24} /> },
    { title: 'Access Control & Permissions', desc: 'Strict security protocols ensuring only authorized personnel have access to sensitive information.', icon: <Lock size={24} /> },
    { title: 'E-Archiving & Records Retention', desc: 'Long-term digital archiving solutions to protect valuable records and maintain compliance with legal requirements.', icon: <ShieldCheck size={24} /> },
  ];

  const whyChooseUs = [
    'Secure Document Digitization',
    'Advanced Indexing & Search',
    'Access Control & Tracking',
    'Seamless Workflow Integration',
    'Reduced Paper & Storage Costs',
    'Long-Term Record Preservation'
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <PageHeader
          title="Document Management & Digitization"
          subtitle="Transform, Organize, and Securely Manage Your Business Records"
          backgroundImage="/document-management.jpg"
        />

        {/* Overview */}
        <section className="section" style={{ background: 'var(--color-surface)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '4rem', alignItems: 'center' }}>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '1px' }}>OVERVIEW</span>
                <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                  Document Management & Digitization/E-Archiving Solutions
                </h2>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                  We help organizations transform paper-based records into secure, organized, and easily accessible digital information. Our solutions cover document scanning and digitization, electronic document management, indexing and classification, secure digital storage, search and retrieval, access control, document workflows, and long-term e-archiving.
                </p>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                  We help businesses reduce paperwork, improve operational efficiency, protect valuable records, and access critical documents quickly whenever they are needed.
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
               <img src="/document-management.jpg" alt="Document Management and Digitization" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section" style={{ background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '1px' }}>WHAT WE OFFER</span>
              <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>Efficient Management Solutions</h2>
              <p style={{ color: 'var(--color-text-muted)', maxWidth: '700px', margin: '1rem auto 0', fontSize: '1.1rem' }}>
                Transform, organize, and securely manage your business records. We digitize paper documents and deploy efficient document management and e-archiving solutions for secure storage, easy retrieval, controlled access, and improved productivity.
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
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Go Paperless with Confidence</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
              Let us help you eliminate clutter, reduce storage costs, and protect your critical records.
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
