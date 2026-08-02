import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Oluwatoyin A.',
      role: 'Content Manager',
      text: 'Very friendly and professional and good quality service. The goods are of top quality',
      rating: 5
    },
    {
      name: 'Chinedu E.',
      role: 'Business Owner',
      text: 'Auwancotek transformed how we handle our sales with their POS system. Highly recommended!',
      rating: 5
    },
    {
      name: 'Sarah M.',
      role: 'Freelancer',
      text: 'Fast PC repairs and excellent customer service. They are my go-to for anything IT related.',
      rating: 5
    }
  ];

  return (
    <section className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '1px' }}>TESTIMONIALS</span>
          <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>Trusted by Clients, Backed by Results</h2>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '1rem auto 0' }}>
            We power businesses with reliable IT solutions, top-tier accessories, and unmatched customer service. See what our customers are saying.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10, boxShadow: 'var(--shadow-md)' }}
              style={{
                background: 'var(--color-surface)',
                padding: '2.5rem 2rem',
                borderRadius: '1rem',
                border: '1px solid var(--color-border)',
                position: 'relative'
              }}
            >
              <Quote size={40} color="var(--color-primary)" style={{ opacity: 0.1, position: 'absolute', top: '2rem', right: '2rem' }} />
              
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.5rem' }}>
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#FBBF24" color="#FBBF24" />
                ))}
              </div>
              
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text)', marginBottom: '2rem', fontStyle: 'italic' }}>
                "{review.text}"
              </p>
              
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{review.name}</h4>
                <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{review.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
