import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function VinfostockPricing() {
  const plans = [
    {
      name: 'Free Trial',
      price: '₦ 0',
      period: '/Month',
      desc: 'Start for free, upgrade anytime. No bank details required',
      features: ['2 Business Locations', '2 Users', '500 Products', '500 Invoices', 'Accounting Module', 'Essential Module', 'HRM Module', '30 Days Free Trial', 'Reports'],
      isPopular: false,
    },
    {
      name: 'Growth',
      price: '₦ 50,000',
      period: '/Year',
      desc: 'Grow smarter, sell faster, manage better.',
      features: ['5 Business Locations', '5 Users', '1000 Products', 'Unlimited Invoices', 'Accounting Module', 'CRM & HRM Modules', 'Product Catalogue Module', 'Repair Module', 'Asset Management Module', 'Spreadsheet Module'],
      isPopular: true,
    },
    {
      name: 'Enterprise',
      price: '₦ 100,000',
      period: '/Year',
      desc: 'Unlock ultimate efficiency, unlimited features',
      features: ['Unlimited Business Location', 'Unlimited Users', 'Unlimited Products', 'Unlimited Invoices', 'Connector Module', 'WooCommerce Module', 'Manufacturing Module', 'Project Management', 'CRM & HRM modules', '+Growth Package Features'],
      isPopular: false,
    }
  ];

  return (
    <section className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '1px' }}>VINFOSTOCK</span>
          <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>All-in-One Business Manager</h2>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '800px', margin: '1rem auto 0' }}>
            Stop managing your business manually, Manage everything with Vinfostock. Vinfostock is a complete Business Management, POS & ERP platform that helps you streamline operations, boost productivity, and grow profitably.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', 
          gap: '2rem',
          alignItems: 'center'
        }}>
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              style={{
                background: 'var(--color-surface)',
                borderRadius: '1rem',
                padding: '3rem 2rem',
                position: 'relative',
                boxShadow: plan.isPopular ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
                border: plan.isPopular ? '2px solid var(--color-accent)' : '1px solid var(--color-border)',
                transform: plan.isPopular ? 'scale(1.05)' : 'scale(1)',
                zIndex: plan.isPopular ? 10 : 1
              }}
            >
              {plan.isPopular && (
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--color-accent)',
                  color: 'white',
                  padding: '0.25rem 1rem',
                  borderRadius: '1rem',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  boxShadow: 'var(--shadow-md)'
                }}>
                  Popular
                </div>
              )}
              
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{plan.name}</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '2rem', minHeight: '40px' }}>{plan.desc}</p>
              
              <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '2rem' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-primary)' }}>{plan.price}</span>
                <span style={{ color: 'var(--color-text-muted)', marginLeft: '0.5rem' }}>{plan.period}</span>
              </div>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                {plan.features.map((feature, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem' }}>
                    <div style={{ 
                      background: 'rgba(246, 74, 0, 0.1)', 
                      borderRadius: '50%', 
                      padding: '2px',
                      color: 'var(--color-accent)',
                      marginTop: '2px'
                    }}>
                      <Check size={14} strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`btn ${plan.isPopular ? 'btn-primary' : 'btn-outline'}`} style={{ width: '100%' }}>
                {plan.name === 'Free Trial' ? 'Register Free' : 'Register & Subscribe'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
