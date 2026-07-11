import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Wrench, MonitorDot, Briefcase, FileText, ShoppingCart, UserCheck, GraduationCap, Layout, PenTool, Laptop, Smartphone, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { 
      name: 'SERVICES', 
      href: '#services',
      dropdown: [
        { name: 'IT Technical Support', icon: <Wrench size={18} />, desc: 'System troubleshooting & upgrades' },
        { name: 'PC Repair & Services', icon: <MonitorDot size={18} />, desc: 'Expert hardware repairs' },
        { name: 'Business Centre', icon: <Briefcase size={18} />, desc: 'Professional office services' },
        { name: 'CAC Registrations', icon: <FileText size={18} />, desc: 'Startup legal recognition' },
        { name: 'Point of Sale System', icon: <ShoppingCart size={18} />, desc: 'Manage sales & inventory' },
        { name: 'Virtual Assistance', icon: <UserCheck size={18} />, desc: 'Delegate tasks remotely' },
        { name: 'Computer Training', icon: <GraduationCap size={18} />, desc: 'Tech-driven practical skills' },
        { name: 'Website Design', icon: <Layout size={18} />, desc: 'Stunning user-friendly sites' },
        { name: 'Graphic Design', icon: <PenTool size={18} />, desc: 'Eye-catching visuals & branding' }
      ]
    },
    { 
      name: 'PRODUCTS', 
      href: '#products',
      dropdown: [
        { name: 'Laptop Sales', icon: <Laptop size={18} />, desc: 'High-performance machines' },
        { name: 'Phone Accessories', icon: <Smartphone size={18} />, desc: 'Fast chargers & premium earbuds' },
        { name: 'PC Accessories', icon: <Cpu size={18} />, desc: 'Top-grade peripherals & drives' }
      ]
    },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'CONTACTS', href: '#contacts' }
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
      style={{ paddingLeft: '2rem', paddingRight: '2rem' }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 0 }}>
        {/* Logo */}
        <a href="#" style={{ fontSize: '1.5rem', fontWeight: 800, color: isScrolled ? 'var(--color-primary)' : 'white' }}>
          Auwancotek
        </a>

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
                <a href={link.href} style={{ 
                  fontSize: '0.9rem', 
                  fontWeight: 600, 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.25rem',
                  color: isScrolled ? 'var(--color-primary)' : 'white',
                  padding: '1rem 0'
                }}>
                  {link.name}
                  {link.dropdown && <ChevronDown size={14} />}
                </a>
                
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
                          zIndex: 10,
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
                            <a 
                              key={item.name} 
                              href={`#${item.name.replace(/\s+/g, '-').toLowerCase()}`} 
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
                            </a>
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
          <a href="#contacts" className="btn btn-primary">WHATSAPP</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-btn"
          style={{ display: 'block', background: 'none', border: 'none', cursor: 'pointer', color: isScrolled ? 'var(--color-primary)' : 'white' }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
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
              marginTop: '1rem',
              borderRadius: '1rem'
            }}
          >
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} style={{ fontWeight: 600, color: 'var(--color-primary)' }} onClick={() => setMobileMenuOpen(false)}>
                    {link.name}
                  </a>
                  {link.dropdown && (
                    <div style={{ paddingLeft: '1rem', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {link.dropdown.map(item => (
                        <a key={item.name} href={`#${item.name.replace(/\s+/g, '-').toLowerCase()}`} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }} onClick={() => setMobileMenuOpen(false)}>
                          <div style={{ color: 'var(--color-accent)' }}>
                            {item.icon}
                          </div>
                          <div>
                            <div style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--color-primary)' }}>{item.name}</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{item.desc}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
              <li>
                <a href="#contacts" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>WHATSAPP</a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: block !important; }
          .mobile-menu-btn { display: none !important; }
        }
        .dropdown-item:hover {
          background: var(--color-bg) !important;
        }
      `}</style>
    </header>
  );
}
