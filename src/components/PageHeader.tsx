import { motion } from 'framer-motion';
import { Link } from '@tanstack/react-router';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  backgroundImage?: string;
}

export default function PageHeader({ title, subtitle, breadcrumb, backgroundImage }: PageHeaderProps) {
  return (
    <section style={{
      position: 'relative',
      minHeight: '340px',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: backgroundImage
        ? `linear-gradient(135deg, rgba(10,37,64,0.88), rgba(10,37,64,0.7)), url(${backgroundImage}) center/cover no-repeat`
        : 'linear-gradient(135deg, var(--color-primary), #16406e)',
    }}>
      {/* Decorative shapes */}
      <div style={{
        position: 'absolute', top: '-50px', right: '-50px',
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'rgba(246,74,0,0.08)', pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '-80px', left: '-80px',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'rgba(255,255,255,0.03)', pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '100px', paddingBottom: '40px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontSize: '0.9rem' }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.7)' }}>Home</Link>
            <ChevronRight size={14} color="rgba(255,255,255,0.5)" />
            <span style={{ color: 'var(--color-accent)' }}>{breadcrumb || title}</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            color: 'white',
            marginBottom: '1rem',
            fontWeight: 800
          }}>
            {title}
          </h1>

          {subtitle && (
            <p style={{
              fontSize: '1.15rem',
              color: 'rgba(255,255,255,0.75)',
              maxWidth: '600px',
              lineHeight: 1.7
            }}>
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
