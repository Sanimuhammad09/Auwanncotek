import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Link } from '@tanstack/react-router';

export default function Footer() {
  return (
    <footer id="contacts" style={{ background: 'var(--color-primary)', color: 'white', paddingTop: '5rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          
          {/* Brand & About */}
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'white' }}>Auwancotek Limited</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              Delivering innovative technology solutions, professional consultancy, procurement support, software systems, workplace technology, and business services that empower organizations to thrive in today's digital world.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" className="social-icon"><FaFacebook size={20} /></a>
              <a href="#" className="social-icon"><FaTwitter size={20} /></a>
              <a href="#" className="social-icon"><FaInstagram size={20} /></a>
              <a href="#" className="social-icon"><FaTiktok size={20} /></a>
              <a href="#" className="social-icon"><FaLinkedin size={20} /></a>
              <a href="https://wa.me/2349015001001" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="WhatsApp"><FaWhatsapp size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'white' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/gallery" className="footer-link">Gallery</Link></li>
              <li><Link to="/contacts" className="footer-link">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'white' }}>Top Services</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/it-technical-support" className="footer-link">IT Support</Link></li>
              <li><Link to="/pc-repair-services" className="footer-link">PC Repairs</Link></li>
              <li><Link to="/point-of-sale-system" className="footer-link">POS Systems</Link></li>
              <li><Link to="/website-design" className="footer-link">Web Design</Link></li>
              <li><Link to="/business-centre" className="footer-link">Business Centre</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'white' }}>Contact Us</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <MapPin size={20} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>No 1 Kudang Street, Off Monrovia Street, Wuse 2, Abuja FCT Nigeria</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <Phone size={20} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>+234 901 500 1001</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <Mail size={20} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>info@auwancotek.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
            &copy; {new Date().getFullYear()} Auwancotek Solutions. All Rights Reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }} className="footer-link">Privacy Policy</Link>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }} className="footer-link">Terms of Service</Link>
          </div>
        </div>
      </div>
      <style>{`
        .social-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          color: white;
          transition: all var(--transition-fast);
        }
        .social-icon:hover {
          background: var(--color-accent);
          transform: translateY(-3px);
          color: white;
        }
        .footer-link {
          color: rgba(255,255,255,0.7) !important;
          transition: color var(--transition-fast);
        }
        .footer-link:hover {
          color: var(--color-accent) !important;
        }
      `}</style>

      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/2349015001001"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#25D366',
          color: 'white',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
          zIndex: 1000,
          transition: 'transform 0.3s ease',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <FaWhatsapp size={35} />
      </a>
    </footer>
  );
}
