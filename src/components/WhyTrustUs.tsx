import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function WhyTrustUs() {
  const points = [
    "Professional Team",
    "Customer-Focused Service",
    "Timely Delivery",
    "Transparent Pricing",
    "Innovative Solutions",
    "Reliable Technical Support",
    "Industry Best Practices",
    "Long-Term Partnerships"
  ];

  return (
    <section className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '1px' }}>WHY CHOOSE US</span>
          <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>Why Our Clients Trust Us</h2>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {points.map((point, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--color-surface)', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--color-border)' }}
            >
              <CheckCircle color="var(--color-primary)" size={24} />
              <span style={{ fontWeight: 600 }}>{point}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
