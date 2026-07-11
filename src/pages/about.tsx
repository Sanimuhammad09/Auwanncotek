import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { Eye, Target, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
  const values = ['Customer-Centric', 'Curiosity', 'Innovation', 'Integrity', 'Inclusion'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <PageHeader
          title="About Us"
          subtitle="Your one-stop IT Hub for sales, services, and smart solutions — helping businesses and individuals stay connected, productive, and ahead."
          backgroundImage="/slide-4.png"
        />

        {/* Who We Are */}
        <section className="section" style={{ background: 'var(--color-surface)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '4rem', alignItems: 'center' }}>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '1px' }}>WHO WE ARE</span>
                <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem', marginBottom: '1.5rem' }}>What Defines Us</h2>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                  At AUWANCOTEK, we promote the culture of Equity, Diversity and Inclusion. Our Values foster trust, loyalty, and a sustainable competitive edge. Together, we create a culture where people want to work and customers want to stay.
                </p>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                  AUWANCOTEK is a multi-service IT hub that offers everything from laptop repairs and IT support, accessories to business registration, design, and digital training. We continue to evolve — staying ahead of industry trends while maintaining a strong focus on personalized service and customer satisfaction.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <img src="/slide-4.png" alt="About Auwancotek" style={{ width: '100%', borderRadius: '1rem', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision, Mission, Values */}
        <section className="section" style={{ background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
              <motion.div whileHover={{ y: -5 }} style={{ padding: '2.5rem', background: 'var(--color-surface)', borderRadius: '1rem', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(4,107,210,0.1)', color: 'var(--color-primary)', borderRadius: '1rem', marginBottom: '1.5rem' }}>
                  <Eye size={32} />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Our Vision</h3>
                <p style={{ color: 'var(--color-text-muted)' }}>To become a trusted leader in ICT services, recognized for excellence, innovation, and customer satisfaction across Nigeria and beyond.</p>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} style={{ padding: '2.5rem', background: 'var(--color-surface)', borderRadius: '1rem', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(246,74,0,0.1)', color: 'var(--color-accent)', borderRadius: '1rem', marginBottom: '1.5rem' }}>
                  <Target size={32} />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Our Mission</h3>
                <p style={{ color: 'var(--color-text-muted)' }}>To empower individuals and businesses through tech, offering accessible, efficient, and innovative solutions that enhance productivity and growth.</p>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} style={{ padding: '2.5rem', background: 'var(--color-surface)', borderRadius: '1rem', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(4,107,210,0.1)', color: 'var(--color-primary)', borderRadius: '1rem', marginBottom: '1.5rem' }}>
                  <ShieldCheck size={32} />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Core Values</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {values.map((val, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>
                      <div style={{ width: '6px', height: '6px', background: 'var(--color-accent)', borderRadius: '50%' }} />
                      {val}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
