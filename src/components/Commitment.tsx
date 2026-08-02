import { motion } from 'framer-motion';
import { Link } from '@tanstack/react-router';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Commitment() {
  const reasons = [
    'Professional Team', 'Customer-Focused Service', 'Timely Delivery', 'Transparent Pricing',
    'Innovative Solutions', 'Reliable Technical Support', 'Industry Best Practices', 'Long-Term Partnerships'
  ];

  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(135deg, var(--color-primary), #0a192f)',
        zIndex: -1
      }} />
      <div className="container" style={{ color: 'white' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span style={{ display: 'inline-block', padding: '0.4rem 1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '2rem', marginBottom: '1rem', fontSize: '0.9rem', fontWeight: 600 }}>
              OUR COMMITMENT
            </span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>
              Delivering Excellence Every Step of the Way
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem' }}>
              At Auwancotek Limited, we believe technology should simplify business—not complicate it. Every solution we deliver is designed to improve efficiency, reduce operational challenges, enhance productivity, and create lasting value for our clients.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.8)', marginBottom: '2.5rem' }}>
              Whether you require a single service or a complete technology transformation, you can count on our expertise, professionalism, and commitment to excellence.
            </p>
            <Link to="/contacts" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Request a Free Consultation <ArrowRight size={20} />
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '2.5rem',
            borderRadius: '1rem'
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'white' }}>Why Our Clients Trust Us</h3>
            <div className="grid-responsive">
              {reasons.map((reason, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle size={20} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', lineHeight: 1.4 }}>{reason}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
