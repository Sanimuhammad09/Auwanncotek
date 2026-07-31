import { Link } from '@tanstack/react-router';

export default function CallToAction() {
  return (
    <section className="section" style={{ background: 'linear-gradient(135deg, var(--color-primary), #0d3056)', color: 'white', textAlign: 'center', padding: '6rem 2rem' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'white' }}>Ready to Transform Your Business?</h2>
        <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', marginBottom: '3rem', lineHeight: 1.6 }}>
          Partner with Auwancotek Limited and discover how innovative technology, reliable support, and professional consultancy can help your organisation achieve greater success.
        </p>
        <Link to="/contacts" className="btn" style={{ 
          background: 'var(--color-accent)', 
          color: 'white', 
          fontSize: '1.1rem', 
          padding: '1rem 2.5rem', 
          borderRadius: '2rem', 
          display: 'inline-block',
          fontWeight: 600,
          textDecoration: 'none'
        }}>
          Request a Free Consultation Today
        </Link>
      </div>
    </section>
  );
}
