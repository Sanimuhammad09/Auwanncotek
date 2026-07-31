import { motion } from 'framer-motion';

export default function TrustBar() {
  return (
    <div style={{
      background: 'linear-gradient(90deg, var(--color-primary), #0d3056)',
      padding: '2rem 0',
      borderBottom: '1px solid rgba(255,255,255,0.1)'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '1rem'
        }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.1rem', fontWeight: 500 }}
          >
            Trusted by Businesses, Educational Institutions, Government Organisations, NGOs, and Individuals Across Nigeria.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              display: 'flex',
              gap: '1.5rem',
              color: 'var(--color-accent)',
              fontSize: '1rem',
              fontWeight: 600,
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            <span>Reliable Solutions</span>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>•</span>
            <span>Professional Service</span>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>•</span>
            <span>Exceptional Support</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
