import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Lightbulb, Users, Clock, Handshake, TrendingUp } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export default function AboutPage() {
  const values = [
    { title: 'Integrity', desc: 'We conduct every engagement with honesty, transparency, and accountability.', icon: <ShieldCheck size={24} /> },
    { title: 'Excellence', desc: 'We strive for excellence in every project, ensuring the highest standards of quality.', icon: <Target size={24} /> },
    { title: 'Innovation', desc: 'We embrace innovation and continuously seek smarter ways to solve complex business challenges.', icon: <Lightbulb size={24} /> },
    { title: 'Customer Commitment', desc: 'Our clients are at the centre of everything we do. We listen and deliver solutions that create genuine value.', icon: <Users size={24} /> },
    { title: 'Reliability', desc: 'Our clients can count on us for timely delivery, responsive support, and consistent performance.', icon: <Clock size={24} /> },
    { title: 'Collaboration', desc: 'We work closely with our clients to understand their needs and achieve shared success.', icon: <Handshake size={24} /> },
    { title: 'Continuous Improvement', desc: 'We continuously improve our skills, processes, and services to remain ahead of industry trends.', icon: <TrendingUp size={24} /> },
  ];

  const whatMakesUsDifferent = [
    'Comprehensive Solutions Under One Roof',
    'Tailored Solutions',
    'Industry Experience',
    'Customer-First Approach',
    'Professional Excellence',
    'Ongoing Support'
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <PageHeader
          title="About Auwancotek Limited"
          subtitle="Empowering Businesses Through Technology, Innovation & Professional Excellence"
          backgroundImage="/slide-4.png"
        />

        {/* Hero / Intro */}
        <section className="section" style={{ background: 'var(--color-surface)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '4rem', alignItems: 'center' }}>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '1px' }}>WHO WE ARE</span>
                <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                  Building Smarter Businesses Through Technology
                </h2>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                  Auwancotek Limited is a Nigerian technology and business solutions company dedicated to delivering innovative services that help organizations operate more efficiently, securely, and competitively.
                </p>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                  We understand that every organization has different goals, challenges, and operational requirements. That's why we take a consultative approach—listening first, understanding your needs, and then designing solutions that align with your objectives and budget.
                </p>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                  Rather than offering isolated services, we provide integrated solutions that enable our clients to streamline operations, improve productivity, reduce costs, and focus on what matters most—growing their business.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <img src="/slide-4.png" alt="About Auwancotek" style={{ width: '100%', borderRadius: '1rem', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section" style={{ background: 'var(--color-bg)' }}>
          <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '1px' }}>OUR STORY</span>
              <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                A Vision Built on Solving Real Business Challenges
              </h2>
              <p style={{ color: 'var(--color-text)', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                Auwancotek Limited was founded with a simple but powerful vision: to make professional technology and business support services accessible, reliable, and results-driven.
              </p>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                We recognized that many organizations face recurring challenges—from unreliable IT systems and inefficient processes to difficulties sourcing technology, implementing software, managing projects, or navigating business registration and procurement requirements. Instead of offering one-dimensional services, we created a company capable of delivering comprehensive solutions under one roof.
              </p>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                Over time, we have expanded our expertise to serve clients across multiple industries, providing innovative technology, strategic guidance, and professional support that enables organizations to thrive in an increasingly digital world.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="section" style={{ background: 'var(--color-surface)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2.5rem' }}>
              <motion.div whileHover={{ y: -5 }} style={{ padding: '2.5rem', background: 'var(--color-bg)', borderRadius: '1rem', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(246,74,0,0.1)', color: 'var(--color-accent)', borderRadius: '1rem', marginBottom: '1.5rem' }}>
                  <Target size={32} />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Our Mission</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                  Our mission is to empower businesses, institutions, and individuals by delivering innovative technology solutions, professional consultancy, and reliable support services that improve operational efficiency, enhance productivity, and drive sustainable growth.
                </p>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} style={{ padding: '2.5rem', background: 'var(--color-bg)', borderRadius: '1rem', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(4,107,210,0.1)', color: 'var(--color-primary)', borderRadius: '1rem', marginBottom: '1.5rem' }}>
                  <ShieldCheck size={32} />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Our Vision</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                  To become one of Africa's most trusted providers of integrated technology and business solutions, recognized for innovation, service excellence, and our ability to help organizations achieve lasting success through digital transformation.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section" style={{ background: 'linear-gradient(135deg, var(--color-primary), #0a192f)', color: 'white' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600, letterSpacing: '1px' }}>OUR CORE VALUES</span>
              <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem', color: 'white' }}>The Principles That Guide Everything We Do</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '2rem' }}>
              {values.map((val, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                  style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', padding: '2rem', borderRadius: '1rem' }}>
                  <div style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>{val.icon}</div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'white' }}>{val.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="section" style={{ background: 'var(--color-surface)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '4rem', alignItems: 'center' }}>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <img src="/slide-1.png" alt="Technology Partner" style={{ width: '100%', borderRadius: '1rem', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }} />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '1px' }}>DIFFERENTIATORS</span>
                <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                  More Than a Service Provider—A Long-Term Technology Partner
                </h2>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {whatMakesUsDifferent.map((diff, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                      <div style={{ background: 'rgba(4,107,210,0.1)', color: 'var(--color-primary)', padding: '0.5rem', borderRadius: '50%' }}>
                        <ShieldCheck size={20} />
                      </div>
                      <span style={{ fontSize: '1.1rem', color: 'var(--color-text)', marginTop: '0.25rem' }}>{diff}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: '2.5rem' }}>
                  <Link to="/contacts" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                    Contact Us Today
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
