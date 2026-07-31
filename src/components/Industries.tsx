import { motion } from 'framer-motion';

export default function Industries() {
  const industries = [
    { icon: '🏛', name: 'Government Agencies' },
    { icon: '🏫', name: 'Educational Institutions' },
    { icon: '🏥', name: 'Healthcare Organizations' },
    { icon: '🏦', name: 'Financial Institutions' },
    { icon: '🏢', name: 'Corporate Organizations' },
    { icon: '🏪', name: 'Retail Businesses' },
    { icon: '🏭', name: 'Manufacturing Companies' },
    { icon: '🤝', name: 'NGOs & Partners' },
    { icon: '⛪', name: 'Religious Organizations' },
    { icon: '👨‍💼', name: 'Entrepreneurs & Startups' },
  ];

  return (
    <section className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '1px' }}>INDUSTRIES WE SERVE</span>
          <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>Supporting Organizations Across Multiple Industries</h2>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '700px', margin: '1rem auto 0', fontSize: '1.1rem' }}>
            We proudly deliver solutions to clients in diverse sectors. No matter your industry, our solutions are tailored to your operational needs and long-term objectives.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem'
        }}>
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5, boxShadow: 'var(--shadow-md)' }}
              style={{
                background: 'var(--color-surface)',
                padding: '1.5rem',
                borderRadius: '1rem',
                border: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'all 0.3s ease'
              }}
            >
              <span style={{ fontSize: '2rem' }}>{ind.icon}</span>
              <span style={{ fontWeight: 600, color: 'var(--color-text)' }}>{ind.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
