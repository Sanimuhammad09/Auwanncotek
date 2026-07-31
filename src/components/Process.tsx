import { motion } from 'framer-motion';

export default function Process() {
  const steps = [
    { num: '1', title: 'Consultation', desc: 'We begin by understanding your needs, objectives, and current challenges.' },
    { num: '2', title: 'Assessment', desc: 'Our specialists analyze your requirements and recommend the most suitable solutions.' },
    { num: '3', title: 'Implementation', desc: 'We deploy the agreed solution efficiently while minimizing disruption to your operations.' },
    { num: '4', title: 'Training', desc: 'Where required, we provide user training to ensure successful adoption.' },
    { num: '5', title: 'Ongoing Support', desc: 'Our relationship doesn\'t end after delivery. We provide technical support whenever you need us.' },
  ];

  return (
    <section className="section" style={{ background: 'var(--color-surface)', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '1px' }}>OUR PROCESS</span>
          <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>How We Work</h2>
        </div>

        <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
          {/* Connector Line (hidden on very small screens, handled in CSS typically, but we use flex layout) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2rem',
                  background: 'var(--color-bg)',
                  padding: '2rem',
                  borderRadius: '1rem',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  flexShrink: 0
                }}>
                  {step.num}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>{step.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
