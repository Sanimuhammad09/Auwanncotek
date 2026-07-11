import { motion } from 'framer-motion';

export default function ProductCarousel() {
  const products = [
    "Wired-keyboard", "USB to HDMI", "Logitech Headset", "hp elite dragonfly g4", 
    "gaming wireless mouse", "Lenovo Keyboard", "SeaGate HDD", "MSATA SSD", 
    "SHPLUS C to C Charger", "Lenovo USB Charger", "Dell Inbuilt Batteries", 
    "HP Big Mouth Charger", "M/2 Solid State Drive", "POGA Car Charger", 
    "Laptop RAM", "Wireless Keyboard & Mouse", "Headphone", "Wired Game Pad", 
    "Flexible Keyboard", "22500mAh Power Bank", "Earbuds", "PS4 Game Pad"
  ];

  return (
    <section id="products" className="section" style={{ background: 'var(--color-surface)' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Products</h2>
        <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
          Discover a wide range of high-quality phone and computer accessories designed to enhance your tech experience.
        </p>
      </div>

      <div style={{ position: 'relative', overflow: 'hidden', padding: '1rem 0' }}>
        {/* Carousel Container */}
        <div style={{ display: 'flex', gap: '1.5rem', whiteSpace: 'nowrap' }} className="marquee">
          {/* Double array for infinite scroll effect */}
          {[...products, ...products].map((product, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              style={{
                background: 'var(--color-bg)',
                padding: '1.5rem 2rem',
                borderRadius: '1rem',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--color-border)',
                fontWeight: 500,
                color: 'var(--color-primary)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '200px'
              }}
            >
              {product}
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .marquee {
          animation: scroll 40s linear infinite;
        }
        .marquee:hover {
          animation-play-state: paused;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-250px * ${products.length})); }
        }
      `}</style>
    </section>
  );
}
