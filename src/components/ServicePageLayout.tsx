
import { motion } from 'framer-motion';
import { Link } from '@tanstack/react-router';
import { Check } from 'lucide-react';

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  heroImage: string;
  introText: string;
  services: string[];
  servicesTitle?: string;
  whyChooseUs: string[];
  ctaText?: string;
}

export default function ServicePageLayout({
  title, subtitle, heroImage, introText, services, servicesTitle, whyChooseUs, ctaText
}: ServicePageLayoutProps) {
  return (
    <>
      {/* Hero Banner */}
      <section style={{
        position: 'relative',
        minHeight: '380px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: `linear-gradient(135deg, rgba(10,37,64,0.88), rgba(10,37,64,0.7)), url(${heroImage}) center/cover no-repeat`,
      }}>
        <div style={{
          position: 'absolute', top: '-50px', right: '-50px',
          width: '300px', height: '300px', borderRadius: '50%',
          background: 'rgba(246,74,0,0.08)', pointerEvents: 'none'
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '110px', paddingBottom: '50px' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontSize: '0.9rem' }}>
              <Link to="/" style={{ color: 'rgba(255,255,255,0.7)' }}>Home</Link>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>›</span>
              <span style={{ color: 'var(--color-accent)' }}>{title}</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'white', fontWeight: 800, marginBottom: '1rem' }}>
              {title}
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.75)', maxWidth: '650px', lineHeight: 1.7 }}>
              {subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            {/* Text Content */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                {introText}
              </p>

              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                {servicesTitle || 'What We Offer'}
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
                {services.map((s, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}
                  >
                    <div style={{
                      background: 'rgba(246,74,0,0.1)', color: 'var(--color-accent)',
                      borderRadius: '50%', padding: '4px', marginTop: '3px', flexShrink: 0
                    }}>
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span style={{ color: 'var(--color-text)', lineHeight: 1.5 }}>{s}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Image */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div style={{
                borderRadius: '1rem', overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                marginBottom: '2.5rem'
              }}>
                <img src={heroImage} alt={title} style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>

              {/* Why Choose Us Card */}
              <div style={{
                background: 'var(--color-bg)',
                borderRadius: '1rem',
                padding: '2rem',
                border: '1px solid var(--color-border)'
              }}>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                  Why Choose Us?
                </h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {whyChooseUs.map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--color-accent)', fontWeight: 700, fontSize: '1.1rem' }}>✓</span>
                      <span style={{ color: 'var(--color-text)', lineHeight: 1.5 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, var(--color-primary), #16406e)',
        padding: '5rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '1rem' }}>
              {ctaText || `Ready to get started with ${title}?`}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', marginBottom: '2rem' }}>
              Contact us today and let us help you achieve your goals.
            </p>
            <Link to="/contacts" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
