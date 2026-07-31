import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id="contacts" style={{ background: 'var(--color-primary)', color: 'white', paddingTop: '5rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          
          {/* Brand & About */}
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'white' }}>Auwancotek</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              Your Trusted One-Stop IT Hub. We specialize in Gadget Sales, PC Repairs, POS Systems, Web Design, and reliable IT Support.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" className="social-icon"><FaFacebook size={20} /></a>
              <a href="#" className="social-icon"><FaTwitter size={20} /></a>
              <a href="#" className="social-icon"><FaInstagram size={20} /></a>
              <a href="#" className="social-icon"><FaTiktok size={20} /></a>
              <a href="#" className="social-icon"><FaLinkedin size={20} /></a>
              <a href="#" className="social-icon"><FaYoutube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'white' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#services" className="footer-link">Services</a></li>
              <li><a href="#products" className="footer-link">Products</a></li>
              <li><a href="#gallery" className="footer-link">Gallery</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'white' }}>Top Services</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="#it-technical-support" className="footer-link">IT Support</a></li>
              <li><a href="#pc-repair-&-services" className="footer-link">PC Repairs</a></li>
              <li><a href="#point-of-sale-system" className="footer-link">POS Systems</a></li>
              <li><a href="#website-design" className="footer-link">Web Design</a></li>
              <li><a href="#business-centre" className="footer-link">Business Centre</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'white' }}>Contact Us</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <MapPin size={20} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>762 Emmanuel Adiele, Jabi, Abuja</span>
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
            <a href="#" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }} className="footer-link">Privacy Policy</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }} className="footer-link">Terms of Service</a>
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
    </footer>
  );
}
