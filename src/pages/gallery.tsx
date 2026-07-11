import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';

export default function GalleryPage() {
  const images = [
    { src: '/slide-1.png', alt: 'IT Support Team at work' },
    { src: '/slide-2.png', alt: 'POS System in action' },
    { src: '/slide-3.png', alt: 'PC Repair Workshop' },
    { src: '/slide-4.png', alt: 'Creative Design Hub' },
    { src: '/ceo.png', alt: 'CEO Portrait' },
    { src: '/img-web-design.png', alt: 'Web Design Workspace' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <PageHeader
          title="Our Gallery"
          subtitle="A snapshot of our work, team, and workspace. See what makes Auwancotek special."
          backgroundImage="/slide-1.png"
        />

        <section className="section" style={{ background: 'var(--color-surface)' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '1.5rem'
            }}>
              {images.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                  style={{
                    borderRadius: '1rem',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-md)',
                    cursor: 'pointer'
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block', transition: 'transform 0.3s' }}
                  />
                  <div style={{ padding: '1rem 1.5rem', background: 'white' }}>
                    <p style={{ fontWeight: 600, color: 'var(--color-primary)' }}>{img.alt}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
