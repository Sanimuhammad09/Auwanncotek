import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    '/slide-1.png',
    '/slide-2.png',
    '/slide-3.png',
    '/slide-4.png'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" style={{ 
      minHeight: '100vh', 
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Background Image Slider */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundImage: `url(${slides[currentSlide]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1
          }}
        />
      </AnimatePresence>

      {/* Dark Overlay for Text Readability */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(10, 37, 64, 0.75)',
        zIndex: 2
      }} />

      {/* Hero Content */}
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', color: 'white' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span style={{ 
              display: 'inline-block', 
              padding: '0.5rem 1rem', 
              background: 'rgba(255, 255, 255, 0.1)', 
              color: 'var(--color-accent)', 
              borderRadius: '2rem',
              fontWeight: 600,
              fontSize: '0.9rem',
              marginBottom: '1.5rem',
              border: '1px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)'
            }}>
              Your Trusted Partner for IT Solutions & Consultancy
            </span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1.5rem', color: 'white', lineHeight: 1.1 }}>
              Technology That Drives Your <br/>
              <span className="text-gradient" style={{ 
                background: 'linear-gradient(135deg, #fff, var(--color-accent))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Business Forward</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.85)', marginBottom: '2.5rem', maxWidth: '800px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}
          >
            Whether you're a startup, established business, educational institution, government agency, or non-profit organisation, Auwancotek Limited provides innovative technology solutions and professional support services that improve productivity, streamline operations, and accelerate growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <a href="#contacts" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              Request a Free Consultation <ArrowRight size={20} />
            </a>
            <a href="#services" className="btn" style={{ 
              padding: '1rem 2rem', 
              fontSize: '1.1rem',
              background: 'rgba(255,255,255,0.1)',
              color: 'white',
              border: '1px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(5px)'
            }}>
              Explore Our Services
            </a>
          </motion.div>
        </div>
      </div>

      {/* Slider Indicators */}
      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '0.5rem',
        zIndex: 10
      }}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              width: index === currentSlide ? '30px' : '10px',
              height: '10px',
              borderRadius: '5px',
              backgroundColor: index === currentSlide ? 'var(--color-accent)' : 'rgba(255,255,255,0.5)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
