import { useState } from 'react';
import { Menu, X, ChevronDown, Wrench, MonitorDot, Briefcase, FileText, ShoppingCart, UserCheck, GraduationCap, Layout, PenTool, Laptop, Smartphone, Cpu, Mail, Phone, Clock } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@tanstack/react-router';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navLinks = [
    { name: 'ABOUT', href: '/about' },
    { 
      name: 'SERVICES', 
      href: '/services',
      dropdown: [
        { name: 'IT Technical Support', href: '/it-technical-support', icon: <Wrench size={18} />, desc: 'System troubleshooting & upgrades' },
        { name: 'PC Repair & Services', href: '/pc-repair-services', icon: <MonitorDot size={18} />, desc: 'Expert hardware repairs' },
        { name: 'Business Centre', href: '/business-centre', icon: <Briefcase size={18} />, desc: 'Professional office services' },
        { name: 'CAC Registrations', href: '/cac-registrations', icon: <FileText size={18} />, desc: 'Startup legal recognition' },
        { name: 'Point of Sale System', href: '/point-of-sale-system', icon: <ShoppingCart size={18} />, desc: 'Manage sales & inventory' },
        { name: 'Virtual Assistance', href: '/virtual-assistance', icon: <UserCheck size={18} />, desc: 'Delegate tasks remotely' },
        { name: 'Computer Training', href: '/computer-training', icon: <GraduationCap size={18} />, desc: 'Tech-driven practical skills' },
        { name: 'Website Design', href: '/website-design', icon: <Layout size={18} />, desc: 'Stunning user-friendly sites' },
        { name: 'Graphic Design', href: '/graphic-design', icon: <PenTool size={18} />, desc: 'Eye-catching visuals & branding' }
      ]
    },
    { 
      name: 'PRODUCTS', 
      href: '/products',
      dropdown: [
        { name: 'Laptop Sales', href: '/laptop-sales', icon: <Laptop size={18} />, desc: 'High-performance machines' },
        { name: 'Phone Accessories', href: '/phone-accessories', icon: <Smartphone size={18} />, desc: 'Fast chargers & premium earbuds' },
        { name: 'PC Accessories', href: '/pc-accessories', icon: <Cpu size={18} />, desc: 'Top-grade peripherals & drives' }
      ]
    },
    { name: 'GALLERY', href: '/gallery' },
    { name: 'CONTACTS', href: '/contacts' }
  ];

  return (
    <header 
      className="fixed top-0 w-full transition-all duration-300"
      style={{ zIndex: 99999, display: 'flex', flexDirection: 'column' }}
    >
      {/* Top Bar (like original website) */}
      <div style={{ 
        background: 'var(--color-primary)', 
        color: 'white', 
        padding: '0.5rem 2rem', 
        fontSize: '0.8rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Mail size={14} color="var(--color-accent)" /> hello@vinfotech.ng
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Phone size={14} color="var(--color-accent)" /> +234 703 2888 915
          </span>
          <span style={{ display: 'none', alignItems: 'center', gap: '0.5rem' }} className="desktop-nav">
            <Clock size={14} color="var(--color-accent)" /> Mon - Sat 8:00 - 18:00, Sunday - CLOSED
          </span>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }} className="desktop-nav">
          <a href="#" style={{ color: 'white' }} aria-label="Facebook"><FaFacebook size={16} /></a>
          <a href="#" style={{ color: 'white' }} aria-label="Twitter"><FaTwitter size={16} /></a>
          <a href="#" style={{ color: 'white' }} aria-label="Instagram"><FaInstagram size={16} /></a>
          <a href="#" style={{ color: 'white' }} aria-label="Tiktok"><FaTiktok size={16} /></a>
          <a href="#" style={{ color: 'white' }} aria-label="LinkedIn"><FaLinkedin size={16} /></a>
          <a href="#" style={{ color: 'white' }} aria-label="YouTube"><FaYoutube size={16} /></a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="glass" style={{ padding: '0.5rem 2rem' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 0 }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src="/auwan.jpeg" 
              alt="Auwancotek Logo" 
              style={{ height: '50px', objectFit: 'contain' }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<span style="font-size: 1.5rem; font-weight: 800; color: var(--color-primary)">Auwancotek</span>';
              }} 
            />
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'none' }} className="desktop-nav">
            <ul style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              {navLinks.map((link) => (
                <li 
                  key={link.name} 
                  style={{ position: 'relative' }} 
                  className="nav-item"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link to={link.href === '/services' || link.href === '/products' ? '#' : link.href} style={{ 
                    fontSize: '0.9rem', 
                    fontWeight: 600, 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.25rem',
                    color: 'var(--color-primary)',
                    padding: '1rem 0'
                  }}>
                    {link.name}
                    {link.dropdown && <ChevronDown size={14} />}
                  </Link>
                  
                  {/* Mega Menu Dropdown */}
                  {link.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div 
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 15 }}
                          transition={{ duration: 0.2 }}
                          style={{
                            position: 'absolute',
                            top: '100%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            background: 'white',
                            width: link.name === 'SERVICES' ? '650px' : '300px',
                            boxShadow: 'var(--shadow-lg)',
                            borderRadius: '1rem',
                            padding: '1.5rem',
                            zIndex: 99999, // Ensure Mega Menu is above EVERYTHING
                            border: '1px solid var(--color-border)',
                            cursor: 'default'
                          }}
                        >
                          <div style={{
                            display: 'grid',
                            gridTemplateColumns: link.name === 'SERVICES' ? 'repeat(2, 1fr)' : '1fr',
                            gap: '1rem'
                          }}>
                            {link.dropdown.map(item => (
                              <Link 
                                key={item.name} 
                                to={item.href} 
                                className="dropdown-item"
                                style={{
                                  display: 'flex',
                                  alignItems: 'flex-start',
                                  gap: '1rem',
                                  padding: '0.75rem',
                                  borderRadius: '0.5rem',
                                  color: 'var(--color-text)',
                                  textDecoration: 'none',
                                  transition: 'background 0.2s'
                                }}
                                onClick={() => setActiveDropdown(null)}
                              >
                                <div style={{
                                  background: 'rgba(246, 74, 0, 0.1)',
                                  color: 'var(--color-accent)',
                                  padding: '0.5rem',
                                  borderRadius: '0.5rem',
                                  flexShrink: 0
                                }}>
                                  {item.icon}
                                </div>
                                <div>
                                  <div style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.2rem', color: 'var(--color-primary)' }}>
                                    {item.name}
                                  </div>
                                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', lineHeight: 1.3 }}>
                                    {item.desc}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Button */}
          <div style={{ display: 'none' }} className="desktop-nav">
            <Link to="/contacts" className="btn btn-primary">WHATSAPP</Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-btn"
            style={{ display: 'block', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-primary)' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ 
              background: 'white', 
              padding: '1rem 2rem', 
              boxShadow: 'var(--shadow-md)',
              overflow: 'hidden',
              borderRadius: '0 0 1rem 1rem',
              borderTop: '1px solid var(--color-border)'
            }}
          >
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href === '/services' || link.href === '/products' ? '#' : link.href} style={{ fontWeight: 600, color: 'var(--color-primary)' }} onClick={() => setMobileMenuOpen(false)}>
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div style={{ paddingLeft: '1rem', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {link.dropdown.map(item => (
                        <Link key={item.name} to={item.href} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }} onClick={() => setMobileMenuOpen(false)}>
                          <div style={{ color: 'var(--color-accent)' }}>
                            {item.icon}
                          </div>
                          <div>
                            <div style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--color-primary)' }}>{item.name}</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{item.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
              <li>
                <Link to="/contacts" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', display: 'inline-block', textAlign: 'center' }} onClick={() => setMobileMenuOpen(false)}>WHATSAPP</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
        .dropdown-item:hover {
          background: var(--color-bg) !important;
        }
      `}</style>
    </header>
  );
}
