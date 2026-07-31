import { motion } from 'framer-motion';
import { Link } from '@tanstack/react-router';
import { Wrench, MonitorDot, Briefcase, FileText, ShoppingCart, UserCheck, GraduationCap, Layout, PenTool, Database, Users, Laptop, Search, Server } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    { title: 'IT Technical Support', icon: <Wrench size={32} />, desc: 'Keep your systems running efficiently with proactive IT support, troubleshooting, maintenance, cybersecurity, and network management.', link: '/it-technical-support' },
    { title: 'PC Repairs & Maintenance', icon: <MonitorDot size={32} />, desc: 'Fast and reliable repair services for desktops and laptops, including hardware upgrades, virus removal, diagnostics, and data recovery.', link: '/pc-repair-services' },
    { title: 'Business Software Solutions', icon: <Layout size={32} />, desc: 'Powerful software systems designed to automate operations, improve productivity, and simplify business management.', link: '/business-software-solutions' },
    { title: 'HRMS, POS & ERP Solutions', icon: <Database size={32} />, desc: 'Smart Point of Sale and Enterprise Resource Planning systems that help businesses manage inventory, sales, finances, and reporting.', link: '/point-of-sale-system' },
    { title: 'Procurement Support', icon: <ShoppingCart size={32} />, desc: 'Professional procurement planning, supplier sourcing, contract management, compliance support, and strategic purchasing solutions.', link: '/business-centre' },
    { title: 'CAC Registration Services', icon: <FileText size={32} />, desc: 'Business name registration, company incorporation, NGO registration, TIN processing, and post-incorporation services handled professionally.', link: '/cac-registrations' },
    { title: 'Virtual Assistance', icon: <UserCheck size={32} />, desc: 'Dedicated virtual professionals who help manage administrative tasks, customer support, scheduling, email management, and business operations.', link: '/virtual-assistance' },
    { title: 'Computer Training', icon: <GraduationCap size={32} />, desc: 'Practical ICT training programs designed to equip individuals and organizations with essential digital skills.', link: '/computer-training' },
    { title: 'NERD Onboarding & Project Support', icon: <Users size={32} />, desc: 'Helping students complete NERD registration, project uploads, document preparation, and submission without stress.', link: '/business-centre' },
    { title: 'Research & Project Support', icon: <Search size={32} />, desc: 'Professional assistance with academic research, project documentation, feasibility studies, technical reports, and consultancy.', link: '/business-centre' },
    { title: 'Office Equipment & Workplace Solutions', icon: <Laptop size={32} />, desc: 'Supply, installation, and maintenance of computers, networking equipment, printers, office furniture, communication systems, and workplace technology.', link: '/laptop-sales' },
    { title: 'General Consultancy', icon: <Briefcase size={32} />, desc: 'Strategic business advice, operational improvement, organizational development, compliance support, and capacity building.', link: '/contacts' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '1px' }}>OUR SERVICES</span>
          <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>Comprehensive Solutions for Modern Organizations</h2>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '700px', margin: '1rem auto 0', fontSize: '1.1rem' }}>
            We provide comprehensive IT services, business solutions, consultancy, procurement support, and digital transformation services that enable organizations to operate more efficiently and compete with confidence.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: 'var(--shadow-lg)' }}
              style={{
                background: 'var(--color-surface)',
                padding: '2.5rem 2rem',
                borderRadius: '1rem',
                boxShadow: 'var(--shadow-md)',
                transition: 'all var(--transition-normal)',
                border: '1px solid var(--color-border)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
              }}
            >
              <div style={{ 
                background: 'rgba(246, 74, 0, 0.1)', 
                color: 'var(--color-accent)', 
                padding: '1rem', 
                borderRadius: '1rem',
                marginBottom: '1.5rem'
              }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{service.title}</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', flexGrow: 1 }}>
                {service.desc}
              </p>
              <Link to={service.link} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, marginTop: 'auto', textDecoration: 'none' }}>
                Find Out More <span style={{ transition: 'transform 0.2s' }} className="arrow">⟶</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <style>{`
        a:hover .arrow {
          transform: translateX(5px);
        }
      `}</style>
    </section>
  );
}
