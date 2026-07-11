import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck } from 'lucide-react';

export default function AboutUs() {
  const values = ['Customer-Centric', 'Curiosity', 'Innovation', 'Integrity', 'Inclusion'];

  return (
    <section id="about" className="section" style={{ background: 'var(--color-surface)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '1px' }}>ABOUT US</span>
          <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>What Defines Us</h2>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '700px', margin: '1rem auto 0' }}>
            At AUWANCOTEK, we promote the culture of Equity, Diversity and Inclusion. Our Values fosters trust, loyalty, and a sustainable competitive edge.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
          
          {/* Vision */}
          <motion.div
            whileHover={{ y: -5 }}
            style={{ padding: '2.5rem', background: 'var(--color-bg)', borderRadius: '1rem', border: '1px solid var(--color-border)' }}
          >
            <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(4, 107, 210, 0.1)', color: 'var(--color-primary)', borderRadius: '1rem', marginBottom: '1.5rem' }}>
              <Eye size={32} />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Our Vision</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>
              To become a trusted leader in ICT services, recognized for excellence, innovation, and customer satisfaction across Nigeria and beyond.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            whileHover={{ y: -5 }}
            style={{ padding: '2.5rem', background: 'var(--color-bg)', borderRadius: '1rem', border: '1px solid var(--color-border)' }}
          >
            <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(246, 74, 0, 0.1)', color: 'var(--color-accent)', borderRadius: '1rem', marginBottom: '1.5rem' }}>
              <Target size={32} />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Our Mission</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>
              To empower individuals and businesses through tech, offering accessible, efficient, and innovative solutions that enhance productivity and growth.
            </p>
          </motion.div>

          {/* Core Values */}
          <motion.div
            whileHover={{ y: -5 }}
            style={{ padding: '2.5rem', background: 'var(--color-bg)', borderRadius: '1rem', border: '1px solid var(--color-border)' }}
          >
            <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(4, 107, 210, 0.1)', color: 'var(--color-primary)', borderRadius: '1rem', marginBottom: '1.5rem' }}>
              <ShieldCheck size={32} />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Core Values</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {values.map((val, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>
                  <div style={{ width: '6px', height: '6px', background: 'var(--color-accent)', borderRadius: '50%' }}></div>
                  {val}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
