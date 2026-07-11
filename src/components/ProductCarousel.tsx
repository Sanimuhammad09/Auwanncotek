import { motion } from 'framer-motion';

export default function ProductCarousel() {
  const products = [
    { name: "Wired Keyboard", img: "/slide-3.png" },
    { name: "USB to HDMI", img: "/slide-3.png" },
    { name: "Logitech Headset", img: "/slide-1.png" },
    { name: "HP Elite Dragonfly G4", img: "/slide-1.png" },
    { name: "Gaming Wireless Mouse", img: "/slide-3.png" },
    { name: "Lenovo Keyboard", img: "/slide-3.png" },
    { name: "SeaGate HDD", img: "/slide-3.png" },
    { name: "MSATA SSD", img: "/slide-3.png" },
    { name: "USB-C Charger", img: "/slide-2.png" },
    { name: "Lenovo USB Charger", img: "/slide-2.png" },
    { name: "Dell Batteries", img: "/slide-3.png" },
    { name: "HP Charger", img: "/slide-2.png" },
    { name: "M.2 Solid State Drive", img: "/slide-3.png" },
    { name: "Car Charger", img: "/slide-2.png" },
    { name: "Laptop RAM", img: "/slide-3.png" },
    { name: "Wireless KB & Mouse", img: "/slide-3.png" },
    { name: "Headphone", img: "/slide-1.png" },
    { name: "Wired Game Pad", img: "/slide-3.png" },
    { name: "Flexible Keyboard", img: "/slide-3.png" },
    { name: "22500mAh Power Bank", img: "/slide-2.png" },
    { name: "Earbuds", img: "/slide-2.png" },
    { name: "PS4 Game Pad", img: "/slide-3.png" },
  ];

  return (
    <section id="products" className="section" style={{ background: 'var(--color-surface)', overflow: 'hidden' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <span style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '1px' }}>WHAT WE SELL</span>
        <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>Our Products</h2>
        <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '1rem auto 0' }}>
          Discover a wide range of high-quality phone and computer accessories designed to enhance your tech experience.
        </p>
      </div>

      {/* Row 1 — scrolls left */}
      <div style={{ position: 'relative', overflow: 'hidden', padding: '0.5rem 0', marginBottom: '1rem' }}>
        <div className="marquee-left" style={{ display: 'flex', gap: '1.5rem', whiteSpace: 'nowrap' }}>
          {[...products.slice(0, 11), ...products.slice(0, 11)].map((product, index) => (
            <motion.div
              key={`r1-${index}`}
              whileHover={{ scale: 1.05, y: -5 }}
              style={{
                background: 'var(--color-bg)',
                borderRadius: '1rem',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--color-border)',
                minWidth: '220px',
                overflow: 'hidden',
                flexShrink: 0
              }}
            >
              <div style={{ width: '220px', height: '140px', overflow: 'hidden' }}>
                <img src={product.img} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '0.75rem 1rem', textAlign: 'center' }}>
                <span style={{ fontWeight: 600, color: 'var(--color-primary)', fontSize: '0.9rem' }}>{product.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div style={{ position: 'relative', overflow: 'hidden', padding: '0.5rem 0' }}>
        <div className="marquee-right" style={{ display: 'flex', gap: '1.5rem', whiteSpace: 'nowrap' }}>
          {[...products.slice(11), ...products.slice(11)].map((product, index) => (
            <motion.div
              key={`r2-${index}`}
              whileHover={{ scale: 1.05, y: -5 }}
              style={{
                background: 'var(--color-bg)',
                borderRadius: '1rem',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--color-border)',
                minWidth: '220px',
                overflow: 'hidden',
                flexShrink: 0
              }}
            >
              <div style={{ width: '220px', height: '140px', overflow: 'hidden' }}>
                <img src={product.img} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '0.75rem 1rem', textAlign: 'center' }}>
                <span style={{ fontWeight: 600, color: 'var(--color-primary)', fontSize: '0.9rem' }}>{product.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .marquee-left {
          animation: scrollLeft 35s linear infinite;
        }
        .marquee-left:hover {
          animation-play-state: paused;
        }
        .marquee-right {
          animation: scrollRight 30s linear infinite;
        }
        .marquee-right:hover {
          animation-play-state: paused;
        }
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-236px * 11)); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(calc(-236px * 11)); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
